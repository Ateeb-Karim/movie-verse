"use client";

import { JSX, useState } from "react";

export default function Form(): JSX.Element {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (query.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(query)}`;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 max-w-xs">
      <input
        type="text"
        value={query}
        onChange={(e): void => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="w-full bg-background text-white text-sm px-4 py-2 rounded-full border border-white/10 focus:outline-none focus:border-primary transition-colors placeholder:text-muted"
      />
    </form>
  );
}
