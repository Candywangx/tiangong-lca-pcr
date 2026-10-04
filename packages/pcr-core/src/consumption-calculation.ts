import { ConsumptionError, object, strictNumber } from "./consumption-data.ts";

function text(value: unknown, name: string): string {
  if (typeof value !== "string" || !value.trim()) throw new ConsumptionError("PCR_CALCULATION_INPUT", `${name} must state the unit, basis or evidence explicitly.`, { field: name });
  return value;
}

// Arithmetic only: the Agent owns physical equivalence, applicability and evidence.
export function calculate(request: unknown) {
  if (!object(request)) throw new ConsumptionError("PCR_CALCULATION_INPUT", "Use a JSON object with operation normalize, convert or balance. See calculate --help.");
  const evidence = text(request.evidence, "evidence");
  const basis = text(request.basis, "basis");
  let result: { amount: number; unit: string; factor: number } | { input_total: number; output_total: number; accumulation: number; residual: number; unit: string };
  let formula;
  if (request.operation === "normalize") {
    const amount = strictNumber(request.amount, "amount");
    const sourceReference = strictNumber(request.source_reference, "source_reference", { positive: true });
    const targetReference = strictNumber(request.target_reference, "target_reference", { positive: true });
    const unit = text(request.unit, "unit");
    text(request.reference_unit, "reference_unit");
    result = { amount: amount * targetReference / sourceReference, unit, factor: targetReference / sourceReference };
    formula = "amount * target_reference / source_reference; both reference quantities share reference_unit and the stated physical basis";
  } else if (request.operation === "convert") {
    const amount = strictNumber(request.amount, "amount");
    const factor = strictNumber(request.factor, "factor", { positive: true });
    text(request.from_unit, "from_unit");
    const unit = text(request.to_unit, "to_unit");
    result = { amount: amount * factor, unit, factor };
    formula = "amount * factor; factor is explicitly supplied in to_unit / from_unit";
  } else if (request.operation === "balance") {
    const unit = text(request.unit, "unit");
    const sums = { inputs: 0, outputs: 0 };
    for (const name of ["inputs", "outputs"] as const) {
      const items = request[name];
      if (!Array.isArray(items) || !items.length) throw new ConsumptionError("PCR_CALCULATION_INPUT", `${name} must be a non-empty array of {amount, label} in the declared common unit and basis.`);
      sums[name] = items.reduce((sum: number, item: unknown, index: number) => {
        if (!object(item)) throw new ConsumptionError("PCR_CALCULATION_INPUT", `${name}[${index}] must be an amount/label object.`);
        text(item.label, `${name}[${index}].label`);
        return sum + strictNumber(item.amount, `${name}[${index}].amount`);
      }, 0);
    }
    const accumulation = strictNumber(request.accumulation, "accumulation");
    result = { input_total: sums.inputs, output_total: sums.outputs, accumulation, residual: sums.inputs - sums.outputs - accumulation, unit };
    formula = "sum(inputs) - sum(outputs) - accumulation; positive residual is unaccounted net input";
  } else {
    throw new ConsumptionError("PCR_CALCULATION_OPERATION", "Use operation normalize, convert or balance. No formulas, factors or units are inferred.");
  }
  if (Object.values(result).some((value) => typeof value === "number" && !Number.isFinite(value))) throw new ConsumptionError("PCR_CALCULATION_OVERFLOW", "Calculation produced a non-finite number; rescale or correct the input quantities.");
  return {
    schema_version: 1, calculation_kind: "tiangong-pcr-arithmetic", operation: request.operation,
    request, formula, result, basis, evidence,
    interpretation: "Arithmetic only, using supplied values and JavaScript floating-point precision. Physical applicability, evidence quality, tolerance and anomaly judgment are not evaluated.",
  };
}
