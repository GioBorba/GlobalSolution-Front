import '@/app/layout';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';

export default function Cadastro() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/users/register', userData);
      if (response.status === 201) {
        alert('User registered successfully!');
      } else {
        alert('Registration failed!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed!');
    }
  };

  return (
    <>
      <Link href="/">
        <h1 className="absolute top-0 left-0 text-white font-bold text-2xl md:text-2xl mt-4 ml-4 z-10">
          OceanWise
        </h1>
      </Link>
      <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-[#0077b6] to-[#00a8e8] px-4 py-12 md:px-6">
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-2xl md:p-8 shadow-md">
          <div className="space-y-6 text-center">
            <h1 className="text-3xl font-bold md:text-4xl mt-6">Criar uma conta</h1>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-4 md:gap-6 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2 bg-white rounded-md shadow-lg">
                <label htmlFor="firstName" className="block text-sm font-medium text-black">
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  name="firstName"
                  value={userData.firstName}
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                  className="block w-full rounded-md border-gray-300 focus:border-[#00a8e8] focus:ring-[#00a8e8] text-black dark:placeholder-gray-400 sm:text-sm px-3 py-2 shadow-md"
                />
              </div>
              <div className="space-y-2 bg-white rounded-md shadow-lg">
                <label htmlFor="lastName" className="block text-sm font-medium text-black">
                  Sobrenome
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={userData.lastName}
                  onChange={handleChange}
                  placeholder="Digite seu sobrenome"
                  className="block w-full rounded-md border-gray-300 focus:border-[#00a8e8] focus:ring-[#00a8e8] dark:placeholder-gray-400 sm:text-sm px-3 py-2 shadow-md"
                />
              </div>
            </div>
            <div className="space-y-2 bg-white rounded-md shadow-lg">
              <label htmlFor="phone" className="block text-sm font-medium text-black">
                Telefone
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
                placeholder="(XX) XXXXX-XXXX"
                className="block w-full rounded-md border-gray-300 focus:border-[#00a8e8] focus:ring-[#00a8e8] dark:placeholder-gray-400 sm:text-sm px-3 py-2 shadow-md"
              />
            </div>
            <div className="space-y-2 bg-white rounded-md shadow-lg">
              <label htmlFor="email" className="block text-sm font-medium text-black">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
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
                name="password"
                value={userData.password}
                onChange={handleChange}
                placeholder='Digite sua senha'
                className="block w-full rounded-md border-gray-300 focus:border-[#00a8e8] focus:ring-[#00a8e8] dark:placeholder-gray-400 sm:text-sm px-3 py-2 shadow-md"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-[#00a8e8] px-4 py-2 text-white hover:bg-[#0077b6] transition-colors md:text-lg"
            >
              Cadastrar
            </button>
          </form>
          <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-4">
            Já tem uma conta?{" "}
            <Link href="/login" className="text-[#00a8e8] hover:underline">
              Faça login
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
