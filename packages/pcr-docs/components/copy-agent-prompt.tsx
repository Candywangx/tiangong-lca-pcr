'use client';

import { useState } from 'react';

/** Copy the prompt displayed in the server-rendered guide; no separate prompt text is maintained. */
export function CopyAgentPrompt() {
  const [status, setStatus] = useState('');
  const [pending, setPending] = useState(false);

  async function copy() {
    const prompt = document.getElementById('getting-started-content')?.querySelector('pre code')?.textContent;
    if (!prompt) {
      setStatus('The prompt is unavailable. Select and copy the text below.');
      return;
    }
    setPending(true);
    try {
      await navigator.clipboard.writeText(prompt);
      setStatus('Agent prompt copied. Replace [product] before using it.');
    } catch {
      setStatus('Copy was unavailable. Select and copy the prompt below.');
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="pcr-front not-prose">
      <div className="pcr-hero-actions">
        <button type="button" className="pcr-action pcr-action--primary" onClick={copy} disabled={pending} aria-controls="getting-started-content">
          Copy Agent prompt
        </button>
        <a className="pcr-action" href="/getting-started.md">Read Markdown</a>
      </div>
      <p role="status" aria-live="polite">{status}</p>
    </div>
  );
}
