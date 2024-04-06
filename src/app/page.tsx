import { Navbar } from "@/components/Navbar/Navbar";
import { BiSolidContact, BiSolidDashboard } from "react-icons/bi";
import {
  BsDatabaseFillAdd,
  BsDatabaseFillGear,
  BsDatabaseFillUp,
} from "react-icons/bs";
import {
  FaChartLine,
  FaPlay,
  FaQuoteLeft,
  FaQuoteRight,
  FaRobot,
  FaUser,
} from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { GrSystem } from "react-icons/gr";
import { IoIosArrowDown, IoLogoFacebook } from "react-icons/io";
import {
  MdAlternateEmail,
  MdDataExploration,
  MdDataset,
  MdFindInPage,
  MdWaterfallChart,
} from "react-icons/md";
import { RiPencilRuler2Fill } from "react-icons/ri";
import { SiSitepoint } from "react-icons/si";

export default function Home() {
  return (
    <div className="bg-base-100 w-full h-screen">
      <nav className="absolute w-full top-0  left-1/2 transform -translate-x-1/2 flex items-center justify-between z-10 px-4 py-16">
        <div className="h-10 rounded-full -mt-8 mx-10 font-extrabold text-2xl">
          <strong className="text-purple-500">{"{"}</strong>
          <strong>{"FULL"}</strong>
          <strong className="text-purple-500">{': "CODE" }'}</strong>
        </div>
        <ul className="px-12 p-3 bg-puple-alpha rounded-full  flex max-w-fit gap-12  transform -translate-x-full -translate-y-1/2 left-1/2 top-1/2 font-semibold ">
          <li className="hover:text-white">Home</li>
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Contato</li>
        </ul>
      </nav>
      <div className="w-full  bg-base-100 h-screen flex flex-row">
        <div className="w-6/12 flex items-center justify-center">
          <div className="w-auto min-h-96 gap-8 flex flex-col justify-center items-start ">
            <div className="max-w-[600px]">
              <h1 className="w-auto text-start text-7xl z-10 mb-8">
                <strong>DESENVOLVER</strong> SOLUÇÕES
              </h1>
              Somos a vanguarda da tecnologia, unindo a arte da engenharia com a
              ciência dos dados. Nossa missão é desbravar novos horizontes,
              criando soluções que impulsionam o progresso e revelam o potencial
              infinito do mundo moderno.
            </div>
            <button className="btn btn-primary ">Vamos conversar</button>
          </div>
        </div>
        <div className="flex justify-center  items-center w-6/12 rounded-bl-[200px] bg-purple-400">
          <img src="./mascote.png" alt="mascote" className="w-auto h-5/6" />
        </div>
      </div>

      <div className="divider">
        <button className="flex  justify-center items-center w-12 h-12 rounded-full text-white bg-primary">
          <IoIosArrowDown />
        </button>
      </div>

      <h3 className="badge badge-secondary badge-lg p-4 mx-20 shadow-lg">
        Sobre
      </h3>

      <div className=" w-full h-screen bg-base-100 flex justify-around items-center p-10 ">
        <div className="w-1/2  h-full">
          <div className="carousel w-full h-full rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
              <img src="./carousel-1.jpg" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src="./carousel-2.jpg" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src="./carousel-3.jpg" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img src="./carousel-4.jpg" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-1/2  h-full  text-4xl justify-center items-center">
          <h3 className=" w-4/5 text-balance  font-semibold ">
            {" "}
            <FaQuoteLeft />
            Na FullCode, estamos na vanguarda da transformação digital,
            oferecendo soluções inovadoras em engenharia de software, engenharia
            de dados e ciência de dados. Combinando expertise técnica e paixão
            pela inovação, capacitamos nossos clientes a conquistarem novos
            horizontes e maximizarem seu potencial.
          </h3>
        </div>
      </div>
      <div className="divider">
        <button className="flex  justify-center items-center w-12 h-12 rounded-full text-white bg-primary">
          <IoIosArrowDown />
        </button>
      </div>

      <h3 className="badge badge-secondary badge-lg p-4 mx-20 shadow-lg">
        depoimentos
      </h3>

      <div className=" w-full h-96 bg-base-100 flex justify-around items-center p-10 ">
        <div className="w-96  flex flex-col gap-2">
          <div className="flex  justify-center items-center text-wrap w-16 h-16 rounded-full border-2 border-base-300 bg-base-300 text-4xl ">
            A
          </div>
          <div className="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-primary"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-primary"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-primary"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-primary"
              checked
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-primary"
            />
          </div>
          <text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            obcaecati voluptatem deserunt aperiam magnam praesentium nostrum
            autem provident tempora suscipit? Voluptatem debitis laboriosam ut
            ab nesciunt suscipit ex architecto consequatur.
          </text>
        </div>

        <div className="w-96 max-h-auto flex flex-col gap-2">
          <div className="flex  justify-center items-center text-wrap w-16 h-16 rounded-full border-2 border-base-300 bg-base-300 text-4xl ">
            A
          </div>
          <div className="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-primary"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-primary"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-primary"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-primary"
              checked
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-primary"
            />
          </div>
          <text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            obcaecati voluptatem deserunt aperiam magnam praesentium nostrum
            autem provident tempora suscipit? Voluptatem debitis laboriosam ut
            ab nesciunt suscipit ex architecto consequatur.
          </text>
        </div>

        <div className="w-96 max-h-auto flex flex-col gap-2">
          <div className="flex  justify-center items-center text-wrap w-16 h-16 rounded-full border-2 border-base-300 bg-base-300 text-4xl ">
            A
          </div>
          <div className="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-primary"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-primary"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-primary"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-primary"
              checked
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-primary"
            />
          </div>
          <text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            obcaecati voluptatem deserunt aperiam magnam praesentium nostrum
            autem provident tempora suscipit? Voluptatem debitis laboriosam ut
            ab nesciunt suscipit ex architecto consequatur.
          </text>
        </div>
      </div>

      <div className="divider">
        <button className="flex  justify-center items-center w-12 h-12 rounded-full bg-primary text-white">
          <IoIosArrowDown />
        </button>
      </div>

      <h3 className="badge badge-secondary badge-lg p-4 mx-20 shadow-lg">
        Serviços
      </h3>
      <div className=" w-full h-screen bg-base-100 flex justify-around p-10 ">
        <div className="flex flex-col justify-center text-white">
          <div className="flex flex-row justify-center align-middle gap-4">
            <div className="bg-black rounded-full flex  justify-center items-center h-12 w-12 shadow-md">
              <GrSystem className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-3xl z-10 mb-8 font-bold text-black">
              Engenharia Software
            </h3>
          </div>
          <div className="bg-purple-400 w-96 h-auto rounded-3xl shadow-xl p-6">
            <ul className="flex flex-col justify-start text-xl gap-2 font-semibold">
              <li className="p-2 rounded-lg flex flex-row justify-center items-center gap-2">
                <div className="bg-black shadow-lg text-white  rounded-full p-2 hover:bg-secondary">
                  <BiSolidDashboard />
                </div>
                Criação de Dashboards intuitivos
              </li>
              <li className="p-2 rounded-lg flex flex-row justify-center items-center gap-2">
                <div className="bg-black text-white  rounded-full p-2">
                  <FaRobot />
                </div>
                Desenvolvimento de Sistemas de Automação eficientes
              </li>

              <li className="p-2 rounded-lg flex flex-row justify-center items-center gap-2">
                <div className="bg-black text-white  rounded-full p-2">
                  <SiSitepoint />
                </div>
                Design de Landing Pages impactantes para o seu negócio
              </li>
              <li className="p-2 rounded-lg flex flex-row justify-center items-center gap-2">
                <div className="bg-black text-white  rounded-full p-2">
                  <RiPencilRuler2Fill />
                </div>
                Desenvolvimento de Sistemas Personalizados por encomenda
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-end text-white">
          <div className="flex flex-row justify-center align-middle gap-4">
            <div className="bg-black rounded-full flex  justify-center items-center h-12 w-12 shadow-md">
              <BsDatabaseFillGear className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-3xl z-10 mb-8 font-bold text-black">
              Engenharia Dados
            </h3>
          </div>
          <div className="bg-purple-400 w-96 h-auto rounded-3xl shadow-xl p-6">
            <ul className="flex flex-col justify-start text-xl gap-2 font-semibold">
              <li className="p-2 rounded-lg flex flex-row justify-start items-center gap-2">
                <div className="bg-black text-white  rounded-full p-2">
                  <BsDatabaseFillAdd />
                </div>
                Coleta de Dados de Fontes Variadas
              </li>
              <li className="p-2 rounded-lg flex flex-row justify-start items-center gap-2">
                <div className="bg-black text-white  rounded-full p-2">
                  <BsDatabaseFillUp />
                </div>
                Modelagem de Dados
              </li>

              <li className="p-2 rounded-lg flex flex-row justify-start items-center gap-2">
                <div className="bg-black text-white  rounded-full p-2">
                  <MdWaterfallChart />
                </div>
                Escalabilidade e Desempenho
              </li>
              <li className="p-2 rounded-lg flex flex-row justify-start items-center gap-2">
                <div className="bg-black text-white  rounded-full p-2">
                  <MdFindInPage />
                </div>
                Otimização de Consultas e Desempenho
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center text-white">
          <div className="flex flex-row justify-center align-middle gap-4">
            <div className="bg-black rounded-full flex  justify-center items-center h-12 w-12 shadow-md">
              <GrSystem className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-3xl z-10 mb-8 font-bold text-black">
              Ciencia de dados
            </h3>
          </div>
          <div className="bg-purple-400 w-96 h-auto rounded-3xl shadow-xl p-6">
            <ul className="flex flex-col justify-start text-xl gap-2 font-semibold">
              <li className="p-2 rounded-lg flex flex-row justify-start items-center gap-2">
                <div className="bg-black shadow-lg text-white  rounded-full p-2 hover:bg-secondary">
                  <MdDataExploration />
                </div>
                Análise Exploratória de Dados
              </li>
              <li className="p-2 rounded-lg flex flex-row justify-start items-center gap-2">
                <div className="bg-black text-white  rounded-full p-2">
                  <MdDataset />
                </div>
                Visualização de Dados
              </li>

              <li className="p-2 rounded-lg flex flex-row justify-start items-center gap-2">
                <div className="bg-black text-white  rounded-full p-2">
                  <FaChartLine />
                </div>
                Otimização de Processos
              </li>
              <li className="p-2 rounded-lg flex flex-row justify-start items-center gap-2">
                <div className="bg-black text-white  rounded-full p-2">
                  <RiPencilRuler2Fill />
                </div>
                Interpretação e Comunicação de Resultados
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="divider">
        <button className="flex  justify-center items-center w-12 h-12 rounded-full bg-primary text-white">
          <IoIosArrowDown />
        </button>
      </div>

      <h3 className="badge badge-secondary badge-lg p-4 mx-20 shadow-lg">
        Contato
      </h3>

      <div className=" w-full h-[550px] bg-base-100 flex justify-around p-4 ">
        <form className="flex w-[500px] h-fit flex-col gap-4  p-4 rounded-md">
          <label className="input input-bordered flex items-center gap-2">
            <FaUser />
            <input type="text" className="grow" placeholder="Nome" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <textarea
            className="textarea textarea-bordered h-48"
            placeholder="Bio"
          ></textarea>
          <button className="btn btn-primary bg-primary">Enviar</button>
        </form>
        <div className="bg-primary  w-[500px] h-[500px] shadow-xl p-4 rounded-full flex justify-center items-center font-semibold">
          <h3 className="w-80 text-balance text-2xl z-10 items-center text-white">
            <FaQuoteLeft />
            Estamos aqui para ouvir, entender e transformar suas necessidades em
            soluções concretas. Entre em contato e descubra como podemos
            impulsionar o seu sucesso juntos!
          </h3>
        </div>
      </div>
      <div className=" w-full h-60 bg-primary text-white rounded-tl-[400px] flex justify-center items-center">
        <div className=" flex flex-col w-3/4 items-center">
          <div className="flex flex-row justify-around  w-full items-center gap-2">
            <ul>
              <li>teste</li>
              <li>teste</li>
              <li>teste</li>
              <li>teste</li>
            </ul>
            <ul>
              <li>teste</li>
              <li>teste</li>
              <li>teste</li>
              <li>teste</li>
            </ul>
            <ul>
              <li>teste</li>
              <li>teste</li>
              <li>teste</li>
              <li>teste</li>
            </ul>
          </div>
          <div className="flex w-full">
            <IoLogoFacebook />
          </div>
        </div>
      </div>
    </div>
  );
}
