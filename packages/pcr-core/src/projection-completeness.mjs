const FUNCTIONAL_UNIT_FIELDS = [
  "what",
  "how_much",
  "how_well",
  "how_long_or_cycle",
  "reference_flow_link",
];

const BOUNDARY_ABSTRACTION_FIELDS = [
  "declared_starting_condition",
  "starting_condition_role",
  "product_classification_scope",
  "recursive_input_rule",
  "upstream_dataset_requirement",
  "disclosure",
];

const PUBLISHED_DATASET_PROFILE_FIELDS = [
  "dataset_role",
  "downstream_use",
  "allowed_use",
  "excluded_use",
  "required_metadata",
  "required_quality_disclosure",
  "update_trigger",
];

const REFERENCE_FLOW_FIELDS = [
  ["reference_amount"],
  ["product_flow_ref", "name"],
  ["product_flow_ref", "uuid"],
  ["flow_property_ref", "uuid"],
  ["unit_group_ref", "uuid"],
  ["reference_unit"],
];

function meaningfulScalar(value) {
  return value !== undefined && value !== null && String(value).trim() !== "";
}

function valueAtPath(value, segments) {
  return segments.reduce((current, segment) => current?.[segment], value);
}

function missingFieldIssue(codePath, displayPath, message) {
  return {
    code: `material_projection.${codePath}`,
    message: message ?? `Material PCR projection requires non-empty ${displayPath}.`,
  };
}

function inventoryFlowRowCount(processInventory) {
  let count = 0;
  for (const processEntry of Array.isArray(processInventory) ? processInventory : []) {
    for (const direction of ["inputs", "outputs"]) {
      for (const flowType of ["product", "waste", "elementary"]) {
        count += Array.isArray(processEntry?.[direction]?.[flowType])
          ? processEntry[direction][flowType].length
          : 0;
      }
    }
  }
  return count;
}

/**
 * Checks content that must be present before a material projection can guide data production.
 * JSON Schema owns stable shape; this function owns state-sensitive methodology completeness.
 */
export function materialProjectionCompletenessIssues(projection, { expectedPcrId } = {}) {
  const issues = [];
  const canonicalPcrId = projection?.product_category_identity?.canonical_pcr_id;
  if (!meaningfulScalar(canonicalPcrId)) {
    issues.push(
      missingFieldIssue(
        "product_category_identity.canonical_pcr_id",
        "product_category_identity.canonical_pcr_id",
        "Product Category Identity requires canonical_pcr_id.",
      ),
    );
  } else if (meaningfulScalar(expectedPcrId) && canonicalPcrId !== expectedPcrId) {
    issues.push({
      code: "material_projection.product_category_identity.id_mismatch",
      message: `canonical_pcr_id "${canonicalPcrId}" does not match manifest id "${expectedPcrId}".`,
    });
  }

  for (const field of FUNCTIONAL_UNIT_FIELDS) {
    if (!meaningfulScalar(projection?.functional_unit?.[field])) {
      issues.push(
        missingFieldIssue(
          `functional_unit.${field}`,
          `functional_unit.${field}`,
          `Functional Unit is missing ${field}.`,
        ),
      );
    }
  }

  for (const segments of REFERENCE_FLOW_FIELDS) {
    if (!meaningfulScalar(valueAtPath(projection?.reference_flow_definition, segments))) {
      const field = segments.join(".");
      issues.push(
        missingFieldIssue(
          `reference_flow_definition.${field}`,
          `reference_flow_definition.${field}`,
          `Reference Flow Definition is missing ${field}.`,
        ),
      );
    }
  }

  if (!Array.isArray(projection?.measurement_rules) || projection.measurement_rules.length === 0) {
    issues.push(
      missingFieldIssue(
        "measurement_rules",
        "measurement_rules",
        "material PCR requires at least one Measurement and Unit rule.",
      ),
    );
  }

  for (const [label, rules, code] of [
    ["System Boundary", projection?.system_boundary?.rules, "system_boundary.rules"],
    ["Allocation", projection?.allocation_rules, "allocation_rules"],
    ["Validation", projection?.validation_rules, "validation_rules"],
  ]) {
    if (!Array.isArray(rules) || rules.length === 0) {
      issues.push(
        missingFieldIssue(
          code,
          code,
          `material PCR requires at least one ${label} rule.`,
        ),
      );
    }
  }

  for (const field of BOUNDARY_ABSTRACTION_FIELDS) {
    if (!meaningfulScalar(projection?.boundary_abstraction?.[field])) {
      issues.push(
        missingFieldIssue(
          `boundary_abstraction.${field}`,
          `boundary_abstraction.${field}`,
          `Boundary Abstraction is missing ${field}.`,
        ),
      );
    }
  }

  if (!Array.isArray(projection?.process_map) || projection.process_map.length === 0) {
    issues.push(
      missingFieldIssue(
        "process_map",
        "process_map",
        "material PCR is missing a Process Map.",
      ),
    );
  }
  if (inventoryFlowRowCount(projection?.process_inventory) === 0) {
    issues.push(
      missingFieldIssue(
        "process_inventory.flow_rows",
        "process_inventory",
        "material PCR has no process inventory flow rows.",
      ),
    );
  }

  for (const field of PUBLISHED_DATASET_PROFILE_FIELDS) {
    if (!meaningfulScalar(projection?.published_dataset_profile?.[field])) {
      issues.push(
        missingFieldIssue(
          `published_dataset_profile.${field}`,
          `published_dataset_profile.${field}`,
          `Published Dataset Profile is missing ${field}.`,
        ),
      );
    }
  }

  return issues;
}
