export {
  CONTENT_MATURITY_VALUES,
  PCR_STATUS_VALUES,
  TRANSLATION_STATUS_VALUES,
} from "../../packages/pcr-core/src/generated/controlled-vocabulary.mjs";

export function formatOneOf(values) {
  if (values.length === 0) {
    return "";
  }
  if (values.length === 1) {
    return values[0];
  }
  return `${values.slice(0, -1).join(", ")}, or ${values.at(-1)}`;
}
