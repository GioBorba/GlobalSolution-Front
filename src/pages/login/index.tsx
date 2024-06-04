import '@/app/layout';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Login() {
  return (
    <>
      <Link href="/">
        <h1 className="absolute top-0 left-0 text-white font-bold text-xl md:text-2xl mt-4 ml-4 z-10">
          OceanWise
        </h1>
      </Link>
      <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-[#0077b6] to-[#00a8e8] px-4 py-12 md:px-6">
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-2xl md:p-8 shadow-md space-y-6">
          <div className="space-y-6 text-center">
            <h1 className="text-3xl font-bold md:text-4xl">Login</h1>
          </div>
          <form className="grid gap-4 md:gap-6">
            <div className="space-y-2 bg-white rounded-md shadow-lg">
              <label htmlFor="email" className="block text-sm font-medium text-black">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="m@exemplo.com"
                className="block w-full rounded-md border-gray-300 focus:border-[#00a8e8] focus:ring-[#00a8e8] dark:placeholder-gray-400 sm:text-sm px-3 py-2 shadow-md"
              />
            </div>
            <div className="space-y-2 bg-white rounded-md shadow-lg">
              <label htmlFor="password" className="block text-sm font-medium text-black">
                Senha
              </label>
              <input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                className="block w-full rounded-md border-gray-300 focus:border-[#00a8e8] focus:ring-[#00a8e8] dark:placeholder-gray-400 sm:text-sm px-3 py-2 shadow-md"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-[#00a8e8] px-4 py-2 text-white hover:bg-[#0077b6] transition-colors md:text-lg"
            >
              Entrar
            </button>
          </form>
          <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
            Ainda não tem uma conta?{" "}
            <Link href="/cadastro" className="text-[#00a8e8] hover:underline">
              Cadastre-se
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
