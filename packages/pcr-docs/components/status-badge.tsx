import type { ReactNode } from 'react';

export type StatusTone = 'neutral' | 'info' | 'warning' | 'error' | 'success';

type StatusText = { label: string; hint: string };

const lifecycle: Record<string, Record<string, StatusText>> = {
  scaffold: {
    zh: {
      label: '脚手架',
      hint: '仅有生成的结构占位，尚不构成方法学内容。',
    },
    en: {
      label: 'Scaffold',
      hint: 'Generated structure only; not methodology content.',
    },
  },
  candidate: {
    zh: {
      label: '候选',
      hint: '已有编写完成的方法学内容，尚未完成方法学评审。',
    },
    en: {
      label: 'Candidate',
      hint: 'Methodology content is authored and still awaiting methodology review.',
    },
  },
  active: {
    zh: {
      label: '已评审',
      hint: '方法学内容已完成评审，可用于常规指导。',
    },
    en: {
      label: 'Reviewed',
      hint: 'Methodology content has completed review for normal guidance use.',
    },
  },
  published: {
    zh: {
      label: '已发布',
      hint: '该版本已显式发布并带有版本号与发布时间。',
    },
    en: {
      label: 'Published',
      hint: 'This record has been explicitly published with a version and timestamp.',
    },
  },
  deprecated: {
    zh: {
      label: '已弃用',
      hint: '该记录仅为留存历史，不应再指导新的数据工作。',
    },
    en: {
      label: 'Deprecated',
      hint: 'Retained for history only; should not guide new work.',
    },
  },
};

const maturity: Record<string, Record<string, string>> = {
  empty_scaffold: { zh: '空脚手架', en: 'Empty scaffold' },
  draft_methodology: { zh: '方法学草稿', en: 'Draft methodology' },
  authored_methodology: { zh: '已编写方法学', en: 'Authored methodology' },
  reviewed_methodology: { zh: '已评审方法学', en: 'Reviewed methodology' },
  published_methodology: { zh: '已发布方法学', en: 'Published methodology' },
  deprecated_methodology: { zh: '已弃用方法学', en: 'Deprecated methodology' },
};

const translation: Record<string, Record<string, StatusText>> = {
  not_available: {
    zh: { label: '无此语言', hint: '该语言被显式声明为不提供。' },
    en: { label: 'Not available', hint: 'Explicitly declared as not provided.' },
  },
  scaffold: {
    zh: { label: '翻译脚手架', hint: '翻译文件仅含空脚手架。' },
    en: { label: 'Translation scaffold', hint: 'The translation file is an empty scaffold.' },
  },
  scaffold_pending_translation: {
    zh: { label: '待翻译', hint: '翻译文件由分类脚手架生成，仍需编写。' },
    en: {
      label: 'Pending translation',
      hint: 'Generated from classification scaffold; authoring still pending.',
    },
  },
  draft_translation: {
    zh: { label: '翻译草稿', hint: '翻译仍在起草，可能与英文源内容不一致。' },
    en: {
      label: 'Draft translation',
      hint: 'Translation is being drafted and may not yet align with the canonical text.',
    },
  },
  aligned: {
    zh: { label: '已对齐', hint: '翻译与英文源内容对齐。' },
    en: { label: 'Aligned', hint: 'Aligned with the canonical source content.' },
  },
  reviewed: {
    zh: { label: '翻译已评审', hint: '翻译对齐已经过评审。' },
    en: { label: 'Translation reviewed', hint: 'Translation alignment has been reviewed.' },
  },
  out_of_sync: {
    zh: { label: '翻译待同步', hint: '源内容已更新，翻译尚未同步。' },
    en: { label: 'Translation out of sync', hint: 'The source changed after this translation.' },
  },
};

const readiness: Record<string, Record<string, StatusText>> = {
  ready: {
    zh: { label: '可指导使用', hint: '结构投影可用，可通过运行时校验。' },
    en: { label: 'Ready', hint: 'Structured projection is available and passes runtime checks.' },
  },
  review_required: {
    zh: { label: '尚待评审', hint: '方法学或相关检查仍需评审；详情保留源记录中的具体提示。' },
    en: { label: 'Review required', hint: 'Methodology or related checks still require review; source findings remain in the details.' },
  },
  unavailable: {
    zh: { label: '暂不可用', hint: '缺少可用结构投影，不能用于指导或校验。' },
    en: { label: 'Unavailable', hint: 'No usable structured projection for guidance or validation.' },
  },
};

const lifecycleTone: Record<string, StatusTone> = {
  scaffold: 'neutral',
  candidate: 'warning',
  active: 'info',
  published: 'success',
  deprecated: 'neutral',
};

const translationTone: Record<string, StatusTone> = {
  not_available: 'neutral',
  scaffold: 'neutral',
  scaffold_pending_translation: 'warning',
  draft_translation: 'warning',
  aligned: 'info',
  reviewed: 'success',
  out_of_sync: 'error',
};

const readinessTone: Record<string, StatusTone> = {
  ready: 'success',
  review_required: 'warning',
  unavailable: 'error',
};

function isChinese(locale: string) {
  return locale === 'zh' || locale.startsWith('zh-');
}

function pick(
  table: Record<string, Record<string, StatusText>>,
  value: string | undefined,
  locale: string,
  fallback: StatusText,
): StatusText {
  const entry = value ? table[value] : undefined;
  if (!entry) return { label: value ?? fallback.label, hint: fallback.hint };
  return isChinese(locale) ? entry.zh : entry.en;
}

export function lifecycleStatus(value: string, locale: string): StatusText {
  return pick(lifecycle, value, locale, {
    label: value,
    hint: isChinese(locale)
      ? '状态来自 PCR manifest，是生命周期状态而非科学评审结论。'
      : 'Status comes from the PCR manifest; it is a lifecycle state, not a scientific verdict.',
  });
}

export function readinessStatus(value: string, locale: string): StatusText {
  return pick(readiness, value, locale, { label: value, hint: '' });
}

export function translationStatus(value: string, locale: string): StatusText {
  return pick(translation, value, locale, { label: value, hint: '' });
}

export function maturityLabel(value: string, locale: string): string {
  const entry = maturity[value];
  if (!entry) return value;
  return isChinese(locale) ? entry.zh : entry.en;
}

export function toneFor(kind: 'lifecycle' | 'readiness' | 'translation', value: string): StatusTone {
  const table = kind === 'lifecycle' ? lifecycleTone : kind === 'readiness' ? readinessTone : translationTone;
  return table[value] ?? 'neutral';
}

export function StatusBadge({
  children,
  tone = 'neutral',
  title,
}: {
  children: ReactNode;
  tone?: StatusTone;
  title?: string;
}) {
  return (
    <span className={`pcr-status pcr-status--${tone}`} title={title || undefined}>
      <span className="pcr-status-dot" aria-hidden="true" />
      <span>{children}</span>
    </span>
  );
}
