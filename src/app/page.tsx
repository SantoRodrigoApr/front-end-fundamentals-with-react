import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20pxl] items-center justify-items-center min-h-screen p-8">
      <main className="flex flex-col gap-[32-px] row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-(family-name:--font-family-name)">
          <li>
            <Link className="underline" href="/nivel-0">
              Nivel 0
            </Link>
          </li>
          <li>
            <Link className="underline" href="/nivel-1">
              Nivel 1
            </Link>
          </li>
          <li>
            <Link className="underline" href="/nivel-2">
              Nivel 2
            </Link>
          </li>
          <li>
            <Link className="underline" href="/nivel-3/server-side">
              Nivel 3 - Server-side
            </Link>
          </li>
          <li>
            <Link className="underline" href="/nivel-3/client-side">
              Nivel 3 - Client-side
            </Link>
          </li>
          <li>
            <Link className="underline" href="/nivel-3/community-libraries">
              Nivel 3 - Community Libraries
            </Link>
          </li>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>Fundamentos de Front-End com React - 2025</p>
      </footer>
    </div>
  );
}
