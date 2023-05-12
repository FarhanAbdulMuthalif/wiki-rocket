"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const HandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };
  return (
    <form
      className="w-50 flex justify-center md:justify-between"
      onSubmit={HandleSubmit}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="bg-white p-2 w-80 text-xl rounded-xl"
        placeholder="Search"
      />
      <button className="p-2 ml-2 text-xl rounded-xl bg-slate-300 font-bold">
        🚀
      </button>
    </form>
  );
}
