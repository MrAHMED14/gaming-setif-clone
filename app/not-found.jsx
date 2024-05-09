import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full grid place-content-center gap-24 mt-10">
      <h2 className="text-8xl font-extrabold">404</h2>
      <Link href="/" className="">
        <div className="bg-[#ff0000] hover:bg-red-500 px-5 py-3 rounded-md text-center">
          <h1 className="text-white font-semibold">Return Home</h1>
        </div>
      </Link>
    </div>
  );
}
