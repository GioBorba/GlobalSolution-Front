import Header from '@/components/Header';
import React from 'react';
import '@/app/layout'
import Footer from '@/components/Footer';


const Missao = () => {
  return (
    <>
    <div className="flex-grow flex flex-col w-full bg-gradient-to-b from-[#0077b6] to-[#00a8e8] text-white">

      <Header/>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 flex justify-center">Nossa Missão</h1>

        <div className="mb-8">
          
          <p className="mb-4 text-center">
            Nossa missão é fornecer uma plataforma dedicada a destacar iniciativas, projetos e organizações que contribuem para a sustentabilidade dos oceanos, enquanto capacitamos indivíduos a se tornarem agentes de mudança em suas comunidades. Os oceanos são essenciais para a vida na Terra. Eles não apenas fornecem recursos vitais, como alimentos e oxigênio, mas também desempenham um papel fundamental na regulação do clima global e na manutenção da biodiversidade. No entanto, os oceanos enfrentam ameaças significativas, incluindo a poluição, a pesca excessiva, a acidificação e o aquecimento causados pelas atividades humanas. Nossa missão é abordar esses desafios de frente, promovendo uma abordagem holística para a gestão dos oceanos - a Economia Azul. A Economia Azul reconhece que a saúde dos oceanos está intrinsecamente ligada ao bem-estar humano e busca promover o desenvolvimento econômico sustentável que respeite os limites do meio ambiente marinho.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Destaque de Iniciativas</h2>
          <p>
            Nossa plataforma destaca projetos e organizações que estão liderando o caminho na promoção da sustentabilidade dos oceanos. De programas de conservação marinha a iniciativas de desenvolvimento econômico sustentável, celebramos aqueles que estão fazendo a diferença.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Informação e Educação</h2>
          <p>
            Oferecemos recursos educacionais sobre os desafios enfrentados pelos oceanos e a importância da Economia Azul. Queremos capacitar indivíduos com o conhecimento necessário para tomar decisões informadas e agir em prol da conservação marinha.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Engajamento da Comunidade</h2>
          <p>
            Facilitamos o engajamento da comunidade, conectando pessoas que compartilham um interesse comum na proteção dos oceanos. Através de fóruns de discussão, eventos locais e campanhas de conscientização, incentivamos o diálogo e a colaboração.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Ação Prática</h2>
          <p>
            Fornecemos dicas e recursos práticos para que os indivíduos possam fazer a diferença em suas próprias vidas. Desde reduzir o uso de plástico até participar de iniciativas de limpeza costeira, incentivamos a ação concreta em prol da sustentabilidade dos oceanos.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Dicas para Contribuir com a Economia Azul</h2>
          <ul className="list-disc pl-4">
            <li><span className="font-bold">Reduza o Uso de Plástico</span>: <span className="font-semibold">Opte por alternativas sustentáveis e evite produtos descartáveis.</span></li>
            <li><span className="font-bold">Apoie Produtos Sustentáveis</span>: <span className="font-semibold">Procure por produtos certificados como sustentáveis, especialmente alimentos do mar.</span></li>
            <li><span className="font-bold">Participe de Limpezas Costeiras</span>: <span className="font-semibold">Junte-se a iniciativas locais de limpeza de praias e áreas costeiras.</span></li>
            <li><span className="font-bold">Promova o Turismo Responsável</span>: <span className="font-semibold">Escolha operadores turísticos que adotem práticas sustentáveis, como conservação da vida marinha.</span></li>
            <li><span className="font-bold">Eduque-se e Eduque os Outros</span>: <span className="font-semibold">Aprenda mais sobre os desafios enfrentados pelos oceanos e compartilhe esse conhecimento.</span></li>
            <li><span className="font-bold">Apoie Organizações e Iniciativas</span>: <span className="font-semibold">Contribua com ONGs e projetos que trabalham para a conservação dos oceanos.</span></li>
            <li><span className="font-bold">Advogue por Políticas Oceânicas Sustentáveis</span>: <span className="font-semibold">Pressione governos para implementar políticas que promovam a sustentabilidade dos oceanos.</span></li>
            <li><span className="font-bold">Reduza a Emissão de Carbono</span>: <span className="font-semibold">Tome medidas para reduzir sua pegada de carbono e combater o aquecimento global.</span></li>
            <li><span className="font-bold">Apoie a Ciência e a Inovação</span>: <span className="font-semibold">Incentive a pesquisa científica e o desenvolvimento de tecnologias inovadoras.</span></li>
            <li><span className="font-bold">Seja um Defensor dos Oceanos</span>: <span className="font-semibold">Promova a conscientização sobre a importância dos oceanos e inspire outros a se juntarem à causa.</span></li>
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Missao;
