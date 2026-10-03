import { deflateSync } from 'node:zlib';

export const sourceParagraphs = [
  'Scope',
  'This document defines the system boundary for production of the reference product. Include raw material extraction, transport, energy supply, processing and treatment of production wastes. Report the geography, reference year and technology represented by the inventory. Exclude capital goods only when their exclusion is justified by the study goal.',
  'Measurement methods',
  'Measure each input and output over the same production period. Divide measured quantities by the mass of saleable product leaving the factory. Record the moisture basis and use consistent units. Reconcile the material balance and explain losses. Allocate shared energy by measured consumption where available and document any alternative allocation procedure.',
];
export function originalHtml(title = 'Standard A') {
  return `<html><body><article><h1>${title}</h1><h2>${sourceParagraphs[0]}</h2><p>${sourceParagraphs[1]}</p><h2>${sourceParagraphs[2]}</h2><p>${sourceParagraphs[3]}</p></article></body></html>`;
}
// A complete PDF with a compressed content stream, font, page tree and xref.
// The title does not occur in its raw bytes.
export function originalPdf(title = 'Standard A') {
  const lines = [title, ...sourceParagraphs.flatMap(p => p.match(/.{1,85}(?:\s|$)/g) ?? [p])];
  const stream = deflateSync(Buffer.from(`BT /F1 10 Tf 40 790 Td 14 TL ${lines.map(line => `(${line.replace(/[()\\]/g, '\\$&')}) Tj T*`).join('\n')} ET`));
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    Buffer.concat([Buffer.from(`<< /Length ${stream.length} /Filter /FlateDecode >>\nstream\n`), stream, Buffer.from('\nendstream')]),
  ];
  const parts = [Buffer.from('%PDF-1.7\n')], offsets = [0];
  for (const [i, obj] of objects.entries()) {
    offsets.push(Buffer.concat(parts).length);
    parts.push(Buffer.from(`${i + 1} 0 obj\n`), Buffer.from(obj), Buffer.from('\nendobj\n'));
  }
  const start = Buffer.concat(parts).length;
  parts.push(Buffer.from(`xref\n0 6\n0000000000 65535 f \n${offsets.slice(1).map(n => `${String(n).padStart(10, '0')} 00000 n \n`).join('')}trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${start}\n%%EOF\n`));
  return Buffer.concat(parts);
}
