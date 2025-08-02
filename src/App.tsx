import { parseURL } from "./logic";

export default function App() {
  return (
    <main className="h-svh w-svw flex flex-col items-center justify-center bg-[#1A1A1A] text-gray-400">
      <h1 className="font-bold text-4xl text-white">Search GPT</h1>
      <p className="mt-2">A "search engine" but for Chat GPT.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const searchTerm = formData.get("search") as string;
          if (!searchTerm) return;
          const url = parseURL(searchTerm);
          window.open(url, "_blank");
        }}
        className="bg-[#323232] rounded-full mt-12 relative flex items-center text-gray-600 w-[calc(100svw-2rem)] max-w-120 px-1.5 py-1"
      >
        <input
          type="search"
          name="search"
          placeholder="Search ChatGPT"
          className="h-10 px-5 pr-10 text-sm focus:outline-none flex-grow flex-shrink basis-0 text-white"
        />
        <button type="submit" className="mr-4">
          <svg
            className="h-4 w-4 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56.966 56.966"
            width="16"
            height="16"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </form>
    </main>
  );
}
