import { parseURL } from "./logic";

export default function App() {
  return (
    <form
      action={(e) => {
        const searchTerm = e.get("search") as string;
        const url = parseURL(searchTerm);
        window.open(url, "_blank");
      }}
    >
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </form>
  );
}
