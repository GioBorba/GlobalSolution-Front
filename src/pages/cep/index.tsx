import '@/app/layout';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useState } from "react";
import axios from 'axios';

interface Address {
  city: string;
  state: string;
  neighborhood: string;
  street: string;
}

interface Weather {
  temperature: number;
  condition: string;
}

export default function WeatherInfo() {
  const [address, setAddress] = useState<Address | null>(null);
  const [weather, setWeather] = useState<Weather | null>(null);
  const [cepError, setCepError] = useState<string | null>(null);
  const [coordsError, setCoordsError] = useState<string | null>(null);
  const [cep, setCep] = useState<string>('');
  const [latitude, setLatitude] = useState<string>('');
  const [longitude, setLongitude] = useState<string>('');
  const apiKey = '4855cc296b2d36d0f161fdd74262c3da';

  const handleSearchByCep = async () => {
    try {
      const cepResponse = await axios.get(`https://viacep.com.br/ws/${cep}/json`);

      if (cepResponse.data.erro || Object.keys(cepResponse.data).length === 0 || cepResponse.data == null) {
        setCepError("CEP não encontrado. Verifique o número e tente novamente.");
        setAddress(null);
        setWeather(null);
      } else {
        const { localidade: city, uf: state, bairro: neighborhood, logradouro: street } = cepResponse.data;
        setAddress({ city, state, neighborhood, street });
        setCepError(null);
      }
    } catch (error) {
      console.error(error);
      setCepError("Erro ao buscar informações. Verifique o CEP e tente novamente.");
      setAddress(null);
      setWeather(null);
    }
  };

  const handleSearchByCoordinates = async () => {
    try {
      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}&lang=pt_br`);

      const { current } = weatherResponse.data;
      setWeather({
        temperature: current.temp,
        condition: current.weather[0].description,
      });
      setCoordsError(null);
    } catch (error) {
      console.error(error);
      setCoordsError("Erro ao buscar informações. Verifique a latitude e longitude e tente novamente.");
      setWeather(null);
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen w-full bg-gradient-to-b from-[#0077b6] to-[#00a8e8] text-black">
        <Header />
        <div className="flex flex-col items-center justify-center flex-grow w-full max-w-5xl mx-auto py-16 px-6 sm:px-8 lg:px-10">
          <div className="w-full flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
            <div className="flex flex-col items-center w-full md:w-1/2">
              <input 
                type="text"
                placeholder="Digite o CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
              <button
                onClick={handleSearchByCep}
                className="mt-4 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Buscar por CEP
              </button>
              {cepError && <p className="mt-4 text-red-500">{cepError}</p>}
              {address && (
                <div className="bg-white shadow-md rounded-md p-8 mt-4 w-full">
                  <h2 className="text-lg font-medium mb-6">Informações do CEP</h2>
                  <div className="space-y-4">
                    <div>
                      <span className="font-medium">Cidade:</span> {address.city}
                    </div>
                    <div>
                      <span className="font-medium">Estado:</span> {address.state}
                    </div>
                    <div>
                      <span className="font-medium">Bairro:</span> {address.neighborhood}
                    </div>
                    <div>
                      <span className="font-medium">Rua:</span> {address.street}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col items-center w-full md:w-1/2">
              <input 
                type="text"
                placeholder="Latitude"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
              <input 
                type="text"
                placeholder="Longitude"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
              <button
                onClick={handleSearchByCoordinates}
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Buscar por Coordenadas
              </button>
              {coordsError && <p className="mt-4 text-red-500">{coordsError}</p>}
            </div>
          </div>
          {weather && (
            <div className="bg-white shadow-md rounded-md p-8 text-black mt-8 w-full">
              <h2 className="text-lg font-medium mb-6">Informações do Clima</h2>
              <div className="space-y-4">
                <div>
                  <span className="font-medium">Temperatura: </span> {weather.temperature}°C
                </div>
                <div>
                  <span className="font-medium">Condição: </span> {weather.condition}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}