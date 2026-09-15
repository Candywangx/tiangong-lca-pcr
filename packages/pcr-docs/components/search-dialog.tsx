'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createContentHighlighter } from 'fumadocs-core/search';
import {
  SearchDialog as SearchDialogPrimitive,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogFooter,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  type SearchItemType,
  type SharedProps,
} from 'fumadocs-ui/components/dialog/search';
import { useI18n } from 'fumadocs-ui/contexts/i18n';
import { searchDocuments } from '@/lib/search-client';
import type { SearchResult } from '@/lib/types';

const DEBOUNCE_MS = 160;
const MAX_RESULTS = 24;

type State =
  | { kind: 'idle' }
  | { kind: 'loading' }
  | { kind: 'ready'; items: SearchItemType[] }
  | { kind: 'error' };

type SearchOptions = {
  libraryUrl?: string;
  coverageUrl?: string;
  locale?: string;
  /** URL alias (`en`) to source language code (`en-US`): search indexes are keyed by the code. */
  languageCodes?: Record<string, string>;
};

const messages = {
  zh: {
    placeholder: '搜索 PCR、领域或关键词…',
    hint: '输入关键词开始搜索。索引在浏览器中加载，不经过服务器。',
    loading: '正在加载搜索索引…',
    error: '搜索索引加载失败。请刷新页面重试。',
    empty: '没有匹配的 PCR。可尝试产品名称、领域或分类编码。',
    count: (n: number) => `共 ${n} 条结果`,
    truncated: '仅显示前 24 条',
    suggest: '试试这些入口',
    library: '浏览 PCR 库',
    coverage: '查看分类覆盖',
    home: '这是什么，如何使用',
  },
  en: {
    placeholder: 'Search PCRs, domains, or keywords…',
    hint: 'Type a keyword to search. The index loads in your browser and never leaves it.',
    loading: 'Loading the search index…',
    error: 'The search index could not be loaded. Reload the page to retry.',
    empty: 'No PCR matches. Try a product name, a domain, or a classification code.',
    count: (n: number) => `${n} results`,
    truncated: 'Showing the first 24',
    suggest: 'Try one of these',
    library: 'Browse the PCR library',
    coverage: 'Classification coverage',
    home: 'What this library is for',
  },
};

function toItems(results: SearchResult[], query: string): SearchItemType[] {
  const highlighter = createContentHighlighter(query);
  return results.map((result) => ({
    type: 'page' as const,
    id: result.id,
    url: result.url,
    content: highlighter.highlightMarkdown(result.content),
    description: result.description,
    breadcrumbs: result.breadcrumbs,
  })) satisfies SearchItemType[];
}

export default function SearchDialog({
  open,
  onOpenChange,
  libraryUrl,
  coverageUrl,
  locale: initialLocale,
  languageCodes,
}: SharedProps & SearchOptions) {
  const context = useI18n();
  const locale = initialLocale ?? context.locale ?? 'en';
  const language = languageCodes?.[locale] ?? locale;
  const router = useRouter();
  const text = messages[locale === 'zh' ? 'zh' : 'en'];
  const [query, setQuery] = useState('');
  const [state, setState] = useState<State>({ kind: 'idle' });
  const controller = useRef<AbortController | null>(null);

  useEffect(
    () => () => {
      controller.current?.abort();
    },
    [],
  );

  useEffect(() => {
    const value = query.trim();
    if (!value) {
      controller.current?.abort();
      setState({ kind: 'idle' });
      return;
    }
    const timer = setTimeout(() => {
      controller.current?.abort();
      const current = new AbortController();
      controller.current = current;
      setState({ kind: 'loading' });
      searchDocuments(value, language, current.signal)
        .then((results) => {
          if (current.signal.aborted) return;
          setState({ kind: 'ready', items: toItems(results.slice(0, MAX_RESULTS), value) });
        })
        .catch((error: unknown) => {
          if ((error as Error)?.name === 'AbortError' || current.signal.aborted) return;
          setState({ kind: 'error' });
        });
    }, DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [query, language]);

  // Entry points are the routes the manifest actually emits for this locale.
  const suggestionsList = useMemo(() => {
    const entries: Array<{ id: string; url: string; text: string }> = [];
    if (libraryUrl) entries.push({ id: 'library', url: libraryUrl, text: text.library });
    if (coverageUrl) entries.push({ id: 'coverage', url: coverageUrl, text: text.coverage });
    entries.push({ id: 'home', url: `/${locale}/`, text: text.home });
    return entries;
  }, [libraryUrl, coverageUrl, locale, text]);

  const items = state.kind === 'ready' ? state.items : null;

  return (
    <SearchDialogPrimitive
      open={open}
      onOpenChange={onOpenChange}
      search={query}
      onSearchChange={setQuery}
      isLoading={state.kind === 'loading'}
    >
      <SearchDialogOverlay />
      <SearchDialogContent data-pcr-search="">
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput
            placeholder={text.placeholder}
            aria-label={text.placeholder}
            autoComplete="off"
          />
          <SearchDialogClose />
        </SearchDialogHeader>
        {state.kind === 'idle' ? (
          <div className="pcr-search-empty">
            <p className="pcr-search-hint">{text.hint}</p>
            <p className="pcr-search-suggest-label">{text.suggest}</p>
            <div className="pcr-search-suggest">
              {suggestionsList.map((entry) => (
                <button
                  key={entry.id}
                  type="button"
                  className="pcr-search-suggestion"
                  onClick={() => {
                    onOpenChange(false);
                    router.push(entry.url);
                  }}
                >
                  {entry.text}
                </button>
              ))}
            </div>
          </div>
        ) : state.kind === 'error' ? (
          <p className="pcr-search-empty pcr-search-error" role="alert">
            {text.error}
          </p>
        ) : (
          <SearchDialogList
            items={items}
            Empty={() => (
              <div className="pcr-search-empty" role="status">
                {state.kind === 'loading' ? text.loading : text.empty}
              </div>
            )}
          />
        )}
        {state.kind === 'ready' && state.items.length > 0 ? (
          <SearchDialogFooter className="pcr-search-footer">
            <span>{text.count(state.items.length)}</span>
            {state.items.length >= MAX_RESULTS ? <span>{text.truncated}</span> : null}
          </SearchDialogFooter>
        ) : null}
      </SearchDialogContent>
    </SearchDialogPrimitive>
  );
}
