/** Server-rendered page body. The HTML is sanitized and pre-rendered by the generator. */
export function DocumentBody({

  html,
}: {
  html: string;
}) {
  return (
    <div
      className="pcr-document"
      // Sanitized semantic HTML produced by the generator from canonical Markdown. This is the
      // normative document text and must be rendered byte-for-byte, never re-summarized.
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
