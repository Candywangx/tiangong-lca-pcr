import { getSiteManifest, readRecordData } from "@/lib/generated";
import type { DocPage, PcrRecord } from "@/lib/types";
type Rule = {
  rule_id: string;
  applies_to: string;
  rule: string;
  source_ids: string[];
};
type Process = {
  id: string;
  label: string;
  inputs: Record<string, unknown[]>;
  outputs: Record<string, unknown[]>;
};
const count = (groups: Record<string, unknown[]> = {}) =>
  Object.values(groups).reduce((total, rows) => total + rows.length, 0);
/** Semantic rule/process views are present in initial HTML; the complete field tree is an enhancement. */
export function StructuredSummary({
  record,
  page,
}: {
  record: PcrRecord;
  page: DocPage;
}) {
  if (page.part && page.part.index !== 0) return null;
  const data = readRecordData(record).structured as {
    system_boundary: { rules: Rule[] };
    allocation_rules: Rule[];
    validation_rules: Rule[];
    process_inventory: Process[];
  };
  const zh = page.locale === "zh";
  const families = [
    {
      key: "system_boundary",
      title: zh ? "系统边界规则" : "System boundary rules",
      rows: data.system_boundary.rules,
    },
    {
      key: "allocation_rules",
      title: zh ? "分配规则" : "Allocation rules",
      rows: data.allocation_rules,
    },
    {
      key: "validation_rules",
      title: zh ? "校验规则" : "Validation rules",
      rows: data.validation_rules,
    },
  ];
  const pages = getSiteManifest().pages.filter(
    (candidate) =>
      candidate.pcrId === record.id &&
      candidate.recordVersion === page.recordVersion &&
      candidate.language === page.language,
  );
  const processTarget = (id: string) => {
    for (const candidate of pages) {
      const heading = candidate.toc.find(
        (item) =>
          item.title.includes("(" + id + ")") ||
          item.title.includes("（" + id + "）"),
      );
      if (heading) return candidate.url + heading.url;
    }
    return undefined;
  };
  return (
    <section
      className="pcr-structured pcr-document"
      aria-labelledby="pcr-structured-heading"
      data-structured-summary={record.id}
    >
      <h2 id="pcr-structured-heading" className="pcr-section-title">
        {zh ? "结构化规则索引" : "Structured rule index"}
      </h2>
      <p>
        {zh
          ? "以下索引来自经过校验的 structured.yaml。规则文本保留英文规范源的语言；中文方法学正文见上方。"
          : "This index comes from verified structured.yaml and retains the canonical English rule text."}
      </p>
      {families.map((family) => (
        <details
          key={family.key}
          className="pcr-record-details"
          data-rule-family={family.key}
        >
          <summary>
            {family.title} · {family.rows.length}
          </summary>
          <table>
            <thead>
              <tr>
                <th>{zh ? "规则 ID" : "Rule ID"}</th>
                <th>{zh ? "适用对象" : "Applies to"}</th>
                <th>{zh ? "规则" : "Rule"}</th>
                <th>{zh ? "来源 ID" : "Source IDs"}</th>
              </tr>
            </thead>
            <tbody>
              {family.rows.map((rule) => (
                <tr key={rule.rule_id} data-rule-id={rule.rule_id}>
                  <td>
                    <code>{rule.rule_id}</code>
                  </td>
                  <td>{rule.applies_to}</td>
                  <td>{rule.rule}</td>
                  <td>{rule.source_ids.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </details>
      ))}
      <details className="pcr-record-details">
        <summary>
          {zh ? "过程与输入输出" : "Processes and inputs/outputs"} ·{" "}
          {data.process_inventory.length}
        </summary>
        <table>
          <thead>
            <tr>
              <th>{zh ? "过程 ID" : "Process ID"}</th>
              <th>{zh ? "过程名称" : "Process name"}</th>
              <th>{zh ? "输入流数量" : "Input flows"}</th>
              <th>{zh ? "输出流数量" : "Output flows"}</th>
            </tr>
          </thead>
          <tbody>
            {data.process_inventory.map((process) => {
              const target = processTarget(process.id);
              return (
                <tr key={process.id}>
                  <td>
                    <code>{process.id}</code>
                  </td>
                  <td>
                    {target ? (
                      <a href={target}>{process.label}</a>
                    ) : (
                      process.label
                    )}
                  </td>
                  <td>{count(process.inputs)}</td>
                  <td>{count(process.outputs)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </details>
    </section>
  );
}
