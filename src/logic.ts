export function parseURL(query: string): string {
  const search = `${query} site:chatgpt.com/share`;
  const encoded = encodeURIComponent(search);
  return `https://duckduckgo.com/?q=${encoded}`;
}
