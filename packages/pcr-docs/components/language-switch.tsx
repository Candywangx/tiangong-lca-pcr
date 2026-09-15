'use client';

import * as languageSelect from 'fumadocs-ui/layouts/shared/slots/language-select';
import type { ComponentProps } from 'react';

type LanguageSelectModule = {
  LanguageSelect?: (props: ComponentProps<'button'>) => React.JSX.Element;
  LanguageSelectText?: (props: ComponentProps<'span'>) => React.JSX.Element;
};

/**
 * Fumadocs' language select navigates to `/{locale}` on its own, which cannot preserve the current
 * document. The native control is kept as the persistent trigger; the actual target URL is owned
 * by `onLocaleChange` on the provider, which the manifest can point at a real counterpart.
 */
export function LanguageSwitchTrigger(props: ComponentProps<'button'>) {
  const { LanguageSelect } = languageSelect as unknown as LanguageSelectModule;
  if (!LanguageSelect) return <button type="button" {...props} />;
  return <LanguageSelect data-pcr-language-trigger="" {...props} />;
}

export function LanguageSwitchText(props: ComponentProps<'span'>) {
  const { LanguageSelectText } = languageSelect as unknown as LanguageSelectModule;
  if (!LanguageSelectText) return <span {...props} />;
  return <LanguageSelectText {...props} />;
}
