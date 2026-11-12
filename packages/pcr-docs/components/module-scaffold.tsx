import { pageStrings } from '@/lib/metadata';

/**
 * Legacy single-file modules under `library/modules/core/*.md` are scaffold placeholders. They
 * are labelled as such and kept out of search indexes rather than dressed as finished
 * methodology. Their language is whatever the source file is; it is not relabelled.
 */
export function ModuleScaffold({ locale, advisory = false }: { locale: string; advisory?: boolean }) {
  const text = pageStrings(locale);
  return (
    <div className="pcr-module-note" role="note">
      <strong>{advisory ? text.advisoryModuleTitle : text.moduleTitle}</strong>
      <p>{advisory ? text.advisoryModuleNote : text.moduleNote}</p>
    </div>
  );
}
