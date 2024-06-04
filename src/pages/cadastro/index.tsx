import '@/app/layout'
import Footer from '@/components/Footer'

export default function Cadastro() {
    return (
      <div className="w-full max-w-md mx-auto space-y-6 py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0077b6] to-[#00a8e8] text-white">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Cadastre-se</h1>
          <p className="text-gray-200">Preencha os campos abaixo para criar sua conta.</p>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="first-name" className="block text-gray-200 font-medium">
                Nome
              </label>
              <input
                id="first-name"
                type="text"
                placeholder="Digite seu nome"
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0077b6] focus:ring-[#0077b6] bg-white text-gray-900 placeholder:text-gray-500 py-2 px-3"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="last-name" className="block text-gray-200 font-medium">
                Sobrenome
              </label>
              <input
                id="last-name"
                type="text"
                placeholder="Digite seu sobrenome"
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0077b6] focus:ring-[#0077b6] bg-white text-gray-900 placeholder:text-gray-500 py-2 px-3"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-gray-200 font-medium">
              Telefone
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="(XX) XXXXX-XXXX"
              required
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0077b6] focus:ring-[#0077b6] bg-white text-gray-900 placeholder:text-gray-500 py-2 px-3"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-gray-200 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="exemplo@email.com"
              required
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0077b6] focus:ring-[#0077b6] bg-white text-gray-900 placeholder:text-gray-500 py-2 px-3"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-gray-200 font-medium">
              Senha
            </label>
            <input
              id="password"
              type="password"
              required
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0077b6] focus:ring-[#0077b6] bg-white text-gray-900 placeholder:text-gray-500 py-2 px-3"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-white text-[#0077b6] hover:bg-gray-300 focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors duration-300 ease-in-out py-2 px-4 font-medium"
          >
            Cadastrar
          </button>
        </form>
        <Footer/>
      </div>
    )
  }