import '@/app/layout'
import Card from "@/components/Card";
import Footer from '@/components/Footer';
import Header from "@/components/Header";

export default function Iniciativas() {
  return (
    <>
      <div className="flex-grow flex flex-col w-full bg-gradient-to-b from-[#0077b6] to-[#00a8e8] text-white">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-8 flex justify-center">Iniciativas</h1>
          <div className="grid gap-8">
            <Card
              organization="Instituto Coral Vivo"
              imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8-1gMIjyX1ZSL9_lDdvJclkOXtbmN5_nKDg&s"
              text="O Instituto Coral Vivo, fundado em 1999, é uma organização dedicada à conservação e pesquisa dos recifes de coral brasileiros. Realizando estudos sobre os ecossistemas de recifes de coral, eles promovem a conscientização pública e trabalham para proteger esses ambientes marinhos únicos e importantes. Contribuem significativamente para a conservação marinha, pesquisa científica e educação ambiental."
              website="https://institutocoralvivo.org.br/"
            />
            <Card
              organization="Projeto Tamar"
              imageSrc="https://www.apcefsp.org.br/wp-content/uploads/2019/08/projetoTamar.jpg"
              text="O Projeto Tamar, estabelecido em 1980, é um programa brasileiro de conservação das tartarugas marinhas. Sua missão inclui a proteção das diferentes espécies de tartarugas marinhas que desovam nas praias brasileiras. Através do monitoramento de desovas, proteção de ninhos e educação ambiental, o Tamar desempenha um papel crucial na conservação marinha e na conscientização sobre a importância da preservação dos habitats costeiros."
              website="https://www.tamar.org.br/"
            />
            <Card
              organization="Instituto Aqualung"
              imageSrc="https://yt3.googleusercontent.com/be-KwRnkL-26P6UNwAXMoAMKdUDvalL3RIz0R_z1fxIbsEo0fWPmVRdFKNz2Dwd63-8oX6VG=s900-c-k-c0x00ffffff-no-rj"
              text="O Instituto Aqualung é uma organização que se dedica à conservação dos oceanos. Eles fazem isso por meio de pesquisa, conservação marinha, educação ambiental, advocacia política e gestão de resíduos. Seu objetivo é proteger a biodiversidade marinha, promover a sustentabilidade e conscientizar as pessoas sobre a importância dos oceanos."
              website="https://www.institutoaqualung.com/"
            />
            <Card
              organization="Instituto de Conservação Marinha (Projeto Albatroz)"
              imageSrc="https://golfinhorotador.org.br/wp-content/uploads/2017/08/projeto-albatroz.jpg"
              text="O Projeto Albatroz, estabelecido em 1990, é uma iniciativa brasileira focada na conservação das aves marinhas, especialmente albatrozes e petréis. Realizando pesquisas sobre essas aves e implementando medidas para reduzir as capturas acidentais em atividades pesqueiras, o Projeto Albatroz contribui para a conservação marinha e a conscientização sobre a importância da proteção das aves marinhas."
              website="https://www.projetoalbatroz.org.br/"
            />
            <Card
              organization="Ocean Conservancy"
              imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7x-BPhzJfsqffZA1nuH__0mLTsLL5iwE0Dw&s"
              text="Fundada em 1972, a Ocean Conservancy trabalha para proteger os oceanos do mundo, através de projetos que visam a redução da poluição marinha, a conservação de habitats marinhos, a promoção da pesca sustentável e a defesa de políticas públicas que protejam os oceanos. Eles também lideram o Dia Internacional de Limpeza Costeira, um evento global de limpeza de praias e costas, envolvendo milhões de voluntários em todo o mundo."
              website="https://oceanconservancy.org/"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
