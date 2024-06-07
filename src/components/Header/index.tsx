import Link from "next/link";

export default function Header() {
  return (
    
    <header className="container mx-auto flex items-center justify-between py-6 px-4 md:px-6">
        <Link href="/" className="text-3xl font-bold">
            OceanWise
        </Link>
        <nav className="flex items-center gap-4">
            <Link
                href="/iniciativas"
                className="text-sm font-medium transition-colors hover:text-gray-200 hover:underline hover:underline-offset-4"
            >
                Iniciativas
            </Link>
            <Link
                href="/cep"
                className="text-sm font-medium transition-colors hover:text-gray-200 hover:underline hover:underline-offset-4"
            >
                Clima
            </Link>
            <Link
                href="/missao"
                className="text-sm font-medium transition-colors hover:text-gray-200 hover:underline hover:underline-offset-4"
            >
                Missão
            </Link>
            <Link
                href="/login"
                className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-[#0077b6] shadow transition-colors hover:bg-gray-200 hover:text-[#00a8e8] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            >
                Login
            </Link>
        </nav>
    </header>

  );
}
