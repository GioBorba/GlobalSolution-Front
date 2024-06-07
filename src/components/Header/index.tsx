import Link from "next/link";

export default function Header() {
  return (
    
    <header className="container mx-auto flex items-center justify-between py-6 px-4 md:px-6">
        <Link href="/" className="bg:text-3xl font-bold sm:text-sm">
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
                APIs
            </Link>
            <Link
                href="/missao"
                className="text-sm font-medium transition-colors hover:text-gray-200 hover:underline hover:underline-offset-4"
            >
                Missão
            </Link>

        </nav>
    </header>

  );
}
