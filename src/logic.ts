export function parseURL(query: string): string {
  const search = `${query} site:chatgpt.com`;
  const encoded = encodeURIComponent(search);
  return `https://duckduckgo.com/?q=${encoded}`;
}
