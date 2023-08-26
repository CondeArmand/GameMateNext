import FooterNavbar from "@/components/FooterNavbar";
import Header from "@/components/Header";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Image from "next/image";

export default function TelaJogo() {
  return (
    <div className="bg-blue-jeans-50">
      <Header />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-4/12 bg-blue-jeans-50 p-4">
          <img src="https://images.igdb.com/igdb/image/upload/t_original/ar1xhe.jpg" alt="" className="w-full md:w-96 mx-auto md:ml-14" />
          <h2 className="text-center mt-2 text-white">Grand Theft Auto: Vice City - The Definitive Edition</h2>
          <div className="flex justify-center mt-2">
            <span className="bg-azul-infos-50 rounded-full px-3 py-1 text-sm font-semibold text-azul-textos-50 mr-2 mb-2">Adicionar Jogo</span>
            <span className="bg-azul-infos-50 rounded-full px-3 py-1 text-sm font-semibold text-azul-textos-50 mr-2 mb-2">
              <FormatListBulletedIcon className="text-lg" />
            </span>
            <span className="bg-azul-infos-50 rounded-full px-3 py-1 text-sm font-semibold text-azul-textos-50 mr-2 mb-2">
              <MoreHorizIcon className="text-lg" />
            </span>
            
          </div>
          <h3 className="flex justify-center items-center mt-2 text-white">SOBRE</h3>
          <div className="flex flex-col justify-center md:ml-14 text-white">
            <h4>Lançamento: </h4>
            <h4>Metacritic: </h4>
            <h4>Produtora:</h4>
            <h4>Publicadora</h4>
          </div>

          <div className="mt-5 ">
            <h4 className="text-white md:ml-14">Generos:</h4>
            <div className="flex flex-wrap md:mt-2 md:ml-12">
              <span className="bg-azul-infos-50 rounded-full px-3 py-1 text-sm font-semibold text-azul-textos-50 mr-2 mb-2">Ação</span>
              
            </div>
          </div>

          <div className="mt-5">
            <h4 className="md:ml-14">Plataformas:</h4>
            <div className="flex flex-wrap md:ml-12 md:mt-2">
              <span className="bg-azul-infos-50 rounded-full px-3 py-1 text-sm font-semibold text-azul-textos-50 mr-2 mb-2">Xbox</span>
              <span className="bg-azul-infos-50 rounded-full px-3 py-1 text-sm font-semibold text-azul-textos-50 mr-2 mb-2">Playstation</span>
              <span className="bg-azul-infos-50 rounded-full px-3 py-1 text-sm font-semibold text-azul-textos-50 mr-2 mb-2">PC</span>
              <span className="bg-azul-infos-50 rounded-full px-3 py-1 text-sm font-semibold text-azul-textos-50 mr-2 mb-2">PC</span>
              <span className="bg-azul-infos-50 rounded-full px-3 py-1 text-sm font-semibold text-azul-textos-50 mr-2 mb-2">PC</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-8/12 bg-blue-jeans-50 p-4">
          <Image src="https://images.igdb.com/igdb/image/upload/t_original/scf3n2.jpg" alt="" width={900} height={500} className="mx-auto md:ml-14" />
          <h2 className="text-center mt-4 text-white">
            Bem-vindo aos anos 80. Da década de penteados glam, dos excessos e dos ternos pastel, vem a história de um homem que sobe ao topo da cadeia criminal no retorno de Grand Theft Auto. Vice City é uma grande área urbana que engloba de praias até pântanos e do glamour até o gueto, e é a mais variada, completa e animada cidade digital já criada. Combinando uma jogabilidade não linear com uma narrativa centrada nos personagens, você chega a uma cidade cheia de prazeres e degradação, e tem a oportunidade de dominá-la como quiser.
          </h2>
        </div>
      </div>
      <div className="h-16"></div>
      <FooterNavbar  />
    </div>
  );
}
