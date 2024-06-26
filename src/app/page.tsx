import Header from "@/components/Header";
import Link from "next/link";

export default function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto flex flex-col items-center justify-between gap-12 px-4 py-12 md:px-6 md:py-24 lg:flex-row lg:gap-8 sm:w-full">
        <div className="max-w-prose space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            SALVE O OCEANO
          </h1>
          <p>
            Os oceanos enfrentam desafios críticos. Da poluição ao aquecimento
            global, eles estão sob pressão. É hora de agir. Junte-se a nós na
            proteção dos oceanos. Sua ajuda é essencial para garantir um futuro
            sustentável. Vamos trabalhar juntos para preservar a saúde dos
            nossos mares. Cadastre-se para apoiar a causa e ser um de nós!
          </p>
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <Link
              href="/cadastro"
              className="inline-flex h-10 w-48 items-center justify-center rounded-md bg-white text-sm font-medium text-[#0077b6] shadow transition-colors hover:bg-gray-200 hover:text-[#00a8e8] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            >
              Cadastrar-se
            </Link>
            <div className="flex flex-col items-center mt-4 space-y-4 md:mt-0 md:flex-row md:space-y-0">
              <p className="text-center text-sm font-medium text-white md:mr-2">
                Ou
              </p>
              <Link
                href="/login"
                className="inline-flex h-10 w-48 items-center justify-center rounded-md bg-white text-sm font-medium text-[#0077b6] shadow transition-colors hover:bg-gray-200 hover:text-[#00a8e8] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              >
                Logar-se
              </Link>
            </div>
          </div>
        </div>
        <img
          src="https://img.odcdn.com.br/wp-content/uploads/2023/07/fundo-do-oceano.jpg"
          alt="Ocean"
          width={300}
          height={300}
          className="w-full max-w-md rounded-xl object-cover md:max-w-lg lg:max-w-xl"
        />
      </main>
    </>
  );
}
