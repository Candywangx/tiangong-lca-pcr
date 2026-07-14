function semanticIssue(code, instancePath, message, params = {}) {
  return {
    code: `semantic.${code}`,
    instance_path: instancePath,
    schema_path: `#/x-semantic/${code.replaceAll(".", "/")}`,
    keyword: "semantic",
    message,
    params,
  };
}

export function readinessSemanticIssues(readiness) {
  const issues = [];
  const blockers = readiness.blockers;
  const fingerprint = readiness.projection_fingerprint;
  const usable = readiness.usable_for_guidance && readiness.usable_for_validation;

  if (readiness.usable_for_guidance !== readiness.usable_for_validation) {
    issues.push(semanticIssue(
      "readiness.usability_alignment",
      "/usable_for_validation",
      "guidance and validation usability must have the same value.",
    ));
  }

  if (blockers.length > 0) {
    if (readiness.status !== "unavailable") {
      issues.push(semanticIssue(
        "readiness.blocked_status",
        "/status",
        "readiness with blockers must be unavailable.",
        { blocker_count: blockers.length },
      ));
    }
    if (usable || readiness.usable_for_guidance || readiness.usable_for_validation) {
      issues.push(semanticIssue(
        "readiness.blocked_usability",
        "/usable_for_guidance",
        "readiness with blockers must not be usable for guidance or validation.",
        { blocker_count: blockers.length },
      ));
    }
  } else {
    if (readiness.status === "unavailable") {
      issues.push(semanticIssue(
        "readiness.unavailable_without_blocker",
        "/status",
        "unavailable readiness must include at least one blocker.",
      ));
    }
    if (!usable) {
      issues.push(semanticIssue(
        "readiness.unblocked_usability",
        "/usable_for_guidance",
        "readiness without blockers must be usable for guidance and validation.",
      ));
    }
  }

  if (!fingerprint.required) {
    if (
      fingerprint.status !== "not_required" ||
      fingerprint.schema_valid !== null ||
      fingerprint.issues.length > 0
    ) {
      issues.push(semanticIssue(
        "readiness.fingerprint_not_required",
        "/projection_fingerprint/status",
        "a non-required projection fingerprint must be not_required with no schema result or issues.",
      ));
    }
  }

  if (fingerprint.status === "current") {
    if (
      fingerprint.schema_valid !== true ||
      fingerprint.source_hash_valid !== true ||
      fingerprint.content_hash_valid !== true ||
      fingerprint.issues.length > 0
    ) {
      issues.push(semanticIssue(
        "readiness.current_fingerprint",
        "/projection_fingerprint/status",
        "a current projection fingerprint requires valid schema, source hash, content hash, and no issues.",
      ));
    }
  }

  if (fingerprint.required && usable && fingerprint.status !== "current") {
    issues.push(semanticIssue(
      "readiness.usable_fingerprint",
      "/projection_fingerprint/status",
      "usable material PCR readiness requires a current projection fingerprint.",
    ));
  }

  return issues.sort(compareIssues);
}

export function validationReportSemanticIssues(report) {
  const issues = [];
  const summary = countFindings(report.findings);
  const performed = report.check_coverage.checks_performed;
  const skipped = report.check_coverage.checks_skipped;
  const checkedRequirementCount = performed.reduce(
    (total, check) => total + check.requirement_count,
    0,
  );
  const skippedRequirementCount = skipped.reduce(
    (total, check) => total + check.requirement_count,
    0,
  );

  if (report.finding_count !== report.findings.length) {
    issues.push(semanticIssue(
      "validation.finding_count",
      "/finding_count",
      "finding_count must equal findings.length.",
      { expected: report.findings.length, actual: report.finding_count },
    ));
  }

  for (const severity of ["error", "warning", "info"]) {
    if (report.finding_summary[severity] !== summary[severity]) {
      issues.push(semanticIssue(
        `validation.finding_summary.${severity}`,
        `/finding_summary/${severity}`,
        `${severity} finding summary must equal the findings array count.`,
        { expected: summary[severity], actual: report.finding_summary[severity] },
      ));
    }
  }

  for (const [index, check] of performed.entries()) {
    if (check.evaluated_requirement_count !== check.requirement_count) {
      issues.push(semanticIssue(
        "validation.performed_check_coverage",
        `/check_coverage/checks_performed/${index}/evaluated_requirement_count`,
        "a performed check must evaluate every requirement it declares.",
        {
          requirement_count: check.requirement_count,
          evaluated_requirement_count: check.evaluated_requirement_count,
        },
      ));
    }
  }

  const coverage = report.check_coverage;
  if (coverage.checked_requirement_count !== checkedRequirementCount) {
    issues.push(semanticIssue(
      "validation.checked_requirement_count",
      "/check_coverage/checked_requirement_count",
      "checked_requirement_count must equal the sum of performed requirement counts.",
      { expected: checkedRequirementCount, actual: coverage.checked_requirement_count },
    ));
  }
  if (coverage.skipped_requirement_count !== skippedRequirementCount) {
    issues.push(semanticIssue(
      "validation.skipped_requirement_count",
      "/check_coverage/skipped_requirement_count",
      "skipped_requirement_count must equal the sum of skipped requirement counts.",
      { expected: skippedRequirementCount, actual: coverage.skipped_requirement_count },
    ));
  }
  const totalRequirementCount = checkedRequirementCount + skippedRequirementCount;
  if (coverage.total_requirement_count !== totalRequirementCount) {
    issues.push(semanticIssue(
      "validation.total_requirement_count",
      "/check_coverage/total_requirement_count",
      "total_requirement_count must equal checked plus skipped requirements.",
      { expected: totalRequirementCount, actual: coverage.total_requirement_count },
    ));
  }

  const expectedCompleteness = performed.length === 0
    ? "none"
    : skipped.length > 0
      ? "partial"
      : "complete";
  if (report.completeness !== expectedCompleteness) {
    issues.push(semanticIssue(
      "validation.completeness",
      "/completeness",
      "completeness must reflect performed and skipped checks.",
      { expected: expectedCompleteness, actual: report.completeness },
    ));
  }

  const expectedStatus = summary.error > 0
    ? "failed"
    : performed.length === 0
      ? "inconclusive"
      : "passed";
  if (report.validation_status !== expectedStatus) {
    issues.push(semanticIssue(
      "validation.status",
      "/validation_status",
      "validation_status must reflect error findings and performed coverage.",
      { expected: expectedStatus, actual: report.validation_status },
    ));
  }

  if (!report.input.accepted && performed.length > 0) {
    issues.push(semanticIssue(
      "validation.rejected_input_coverage",
      "/check_coverage/checks_performed",
      "rejected input must not report performed checks.",
    ));
  }

  return issues.sort(compareIssues);
}

function countFindings(findings) {
  const summary = { error: 0, warning: 0, info: 0 };
  for (const finding of findings) {
    summary[finding.severity] += 1;
  }
  return summary;
}

function compareIssues(left, right) {
  return (
    left.instance_path.localeCompare(right.instance_path) ||
    left.code.localeCompare(right.code) ||
    left.message.localeCompare(right.message)
  );
}
