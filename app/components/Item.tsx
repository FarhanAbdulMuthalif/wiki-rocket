import Image from "next/image";
import Link from "next/link";

type Props = {
  result: Result;
};

export default function Item({ result }: Props) {
  const itemTextCol = (
    <div className="flex flex-col justify-center">
      <h2>
        <Link
          href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          target="_blank"
          className="text-xl font-bold "
        >
          {result.title}
        </Link>
      </h2>
      <p className="font-semibold">{result.extract}</p>
    </div>
  );

  const content = (
    <article className="m-4 max-w-sm cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group ">
      <div className="flex flex-row gap-4 ">
        <div className="flex flex-col justify-center">
          {result?.thumbnail?.source ? (
            <Image
              src={result.thumbnail.source}
              alt={result.title}
              width={result.thumbnail.width}
              height={result.thumbnail.height}
              loading="lazy"
            />
          ) : (
            <Image
              src="https://developers.google.com/static/maps/documentation/maps-static/images/error-image-generic.png"
              alt={result.title}
              width={60}
              height={30}
              loading="lazy"
            />
          )}
        </div>
        {itemTextCol}
      </div>
    </article>
  );
  /* const content = result?.thumbnail?.source ? (
    <article className="m-4 max-w-lgcursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-center">
          <Image
            src={result.thumbnail.source}
            alt={result.title}
            width={result.thumbnail.width}
            height={result.thumbnail.height}
            loading="lazy"
          />
        </div>
        {itemTextCol}
      </div>
    </article>
  ) : (
    <article className="m-4 max-w-lg">{itemTextCol}</article>
  ); */

  return content;
}
