import type { UnknownRecord } from '../../packages/pcr-core/src/types.ts';

/** CLI/library options are external values; each operation validates and narrows
 * its own options rather than coercing unrelated flags into a promised DTO. */
export type BuilderOptions = UnknownRecord;
export interface LintDiagnostics { problems: string[]; warnings: string[]; complete?: boolean }
export interface LintReport {
  schema: 'tiangong-pcr.lint-report.v1'; complete: boolean; status: 'pass' | 'warnings' | 'fail';
  counts: { problems: number; warnings: number }; problems: string[]; warnings: string[];
}
export interface BuilderManifest extends UnknownRecord {
  schema_version: number;
  id: string;
  title: Record<string, string | null>;
  status: string;
  pcr_kind: string;
  content_maturity: string;
  languages: { canonical: string; available: string[] };
  translation_status: Record<string, string>;
  target_entities: string[];
  version?: string;
  updated_at_utc?: string;
  published_at_utc?: string;
  review_metadata?: UnknownRecord;
}
