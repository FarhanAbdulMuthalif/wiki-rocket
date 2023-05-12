type Props = {
  params: {
    searchTearm: string;
  };
};
import getWikiResults from "@/lib/getWikiResults";
import { Metadata } from "next";
import React from "react";
import Item from "../components/Item";
export async function generateMetadata({
  params: { searchTearm },
}: Props): Promise<Metadata> {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTearm);
  const data = await wikiData;
  const displayTerm = searchTearm.replaceAll("%20", " ");
  // console.log(displayTerm);
  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} not found`,
    };
  }
  return {
    title: displayTerm,
    description: `Search result for ${displayTerm}`,
  };
}

export default async function SearchResults({
  params: { searchTearm },
}: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTearm);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;
  const displayTerm = searchTearm.replaceAll("%20", " ");
  const content = (
    <main className="bg-slate-200 mx-auto max-w-5xl py-1 min-h-screen flex flex-wrap justify-center">
      {results ? (
        Object.values(results).map((result) => {
          return <Item key={result.pageid} result={result} />;
        })
      ) : (
        <h2 className="p-2 text-xl">{`${displayTerm} not found`}</h2>
      )}
    </main>
  );
  return content;
}
