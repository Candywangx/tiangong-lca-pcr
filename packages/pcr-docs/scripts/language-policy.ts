import {unknownField} from "../../pcr-core/src/types.ts";
import {
  assertPcrLanguageCode,
  REQUIRED_PCR_LANGUAGES,
} from "../../pcr-core/src/languages.ts";
/** Source identities and URL aliases are separate, including optional bare en/zh. */
export function routeFor(value: unknown) {
  const code=assertPcrLanguageCode(value);
  if (code === "zh-CN") return "zh";
  if (code === "en-US") return "en";
  if (code === "zh" || code === "en") return `${code}-alt`;
  return code.toLowerCase();
}
export function publicLanguage(manifest: unknown, code: string) {
  return (
    REQUIRED_PCR_LANGUAGES.includes(code) ||
    ["aligned", "reviewed"].some(status=>status === unknownField(unknownField(manifest,"translation_status"),code))
  );
}
