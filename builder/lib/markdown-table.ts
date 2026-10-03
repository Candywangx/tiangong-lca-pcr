export interface MarkdownTable { headers: string[]; rows: string[][]; }
export interface ParsedMarkdownTable { table: MarkdownTable | null; nextIndex: number; }

export function stripInlineCode(value: unknown): string {
  return String(value ?? "").replace(/`([^`]+)`/gu, "$1").trim();
}

export function normalizeHeader(value: unknown): string {
  return stripInlineCode(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/gu, "_")
    .replace(/^_+|_+$/gu, "");
}

export function tableCell(row: readonly string[], headerIndex: ReadonlyMap<string, number>, names: readonly string[]): string {
  for (const name of names) {
    const index = headerIndex.get(name);
    if (index !== undefined) {
      return row[index] ?? "";
    }
  }
  return "";
}

export function isTableLine(line: string): boolean {
  const trimmed = line.trim();
  return trimmed.startsWith("|") && trimmed.endsWith("|");
}

function parseTableLine(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/u, "")
    .replace(/\|$/u, "")
    .split("|")
    .map((cell) => cell.trim());
}

function isSeparatorRow(cells: readonly string[]): boolean {
  return cells.every((cell) => /^:?-{3,}:?$/u.test(cell.trim()));
}

export function parseTable(lines: readonly string[], startIndex: number): ParsedMarkdownTable {
  const rows: string[][] = [];
  let index = startIndex;
  while (index < lines.length && isTableLine(lines[index] ?? "")) {
    rows.push(parseTableLine(lines[index] ?? ""));
    index += 1;
  }
  if (rows.length < 2) {
    return { table: null, nextIndex: index };
  }
  const headers = rows[0] ?? [];
  const dataRows = isSeparatorRow(rows[1] ?? []) ? rows.slice(2) : rows.slice(1);
  return {
    table: {
      headers,
      rows: dataRows.filter((row) => row.some((cell) => cell.trim() !== "")),
    },
    nextIndex: index,
  };
}
