"use client";

import { useRef } from "react";
import parseURL from "./logic";
import posthog from "posthog-js";
import Link from "next/link";

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="min-h-svh w-full relative">
      {/* Dark Sphere Grid Background */}
      <div
        className="absolute inset-0 -z-1"
        style={{
          background: "#090909",
          backgroundImage: `
        linear-gradient(to right, #FFFFFF03 1px, transparent 1px),
        linear-gradient(to bottom, #FFFFFF03 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, #FFF1 0%, transparent 100%)
      `,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}
      />
      <main className="h-svh w-svw flex flex-col items-center justify-center text-white/40">
        <Link href="/">
          <h1 className="font-bold text-4xl md:text-5xl text-white">
            Search GPT
          </h1>
        </Link>
        <p className="mt-2 md:text-xl">
          A &quot;search engine&quot; but for Chat GPT.
        </p>
        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const searchTerm = formData.get("search") as string;
            if (!searchTerm) return;
            posthog.capture("search", {
              search_term: searchTerm,
            });
            const url = parseURL(searchTerm);
            window.open(url, "_blank");
            formRef.current?.reset();
          }}
          className="bg-[#323232] rounded-lg mt-12 md:mt-16 relative flex items-center text-gray-600 w-[calc(100svw-2rem)] max-w-160 py-1 shadow-[0_4px_8px_0px_rgba(0,0,0,0.20)]"
        >
          <input
            type="search"
            name="search"
            placeholder="Search ChatGPT"
            className="h-10 px-5 pr-10 text-sm focus:outline-none flex-grow flex-shrink basis-0 text-white"
          />
          <button
            type="submit"
            className="h-full aspect-square mr-1.5 flex items-center justify-center cursor-pointer"
          >
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
    </div>
  );
}
