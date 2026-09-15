import {
  assertPcrLanguageCode,
  REQUIRED_PCR_LANGUAGES,
} from "../../pcr-core/src/languages.mjs";
/** Source identities and URL aliases are separate, including optional bare en/zh. */
export function routeFor(code) {
  assertPcrLanguageCode(code);
  if (code === "zh-CN") return "zh";
  if (code === "en-US") return "en";
  if (code === "zh" || code === "en") return `${code}-alt`;
  return code.toLowerCase();
}
export function publicLanguage(manifest, code) {
  return (
    REQUIRED_PCR_LANGUAGES.includes(code) ||
    ["aligned", "reviewed"].includes(manifest.translation_status?.[code])
  );
}
