import Link from "next/link";
import HomeIndex from ".";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black/10">
      <HomeIndex />
      <div className="flex gap-3 items-center">
        <Link
          href={"/json-placeholder"}
          className="px-4 py-3 mt-4 rounded-lg bg-green-900 text-white"
        >
          To Http Request
        </Link>
        <Link
          href={"/change-value"}
          className="px-4 py-3 mt-4 rounded-lg bg-green-900 text-white"
        >
          To structure json array
        </Link>
      </div>
    </div>
  );
}
