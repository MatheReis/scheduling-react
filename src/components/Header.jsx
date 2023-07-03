import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div>
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-16"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                className="h-8 w-auto mr-4"
                src="src/assets/logo.png"
                alt="logo"
              />
            </a>
          </div>
          {isSmallScreen ? (
            <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          ) : (
            <div className="mt-5 flex justify-between">
              <div className="flex space-x-5">
                <a
                  href="#"
                  className="text-base font-medium text-white hover:text-gray-300 border-r px-4 border-ffc200"
                >
                  inicio
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-white hover:text-gray-300 hover:border-b-1 border-r px-3 border-ffc200"
                >
                  produtos
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-white hover:text-gray-300 px-2 border-ffc200"
                >
                  agendamento
                </a>
              </div>
            </div>
          )}
        </nav>
        <ContentHeader />
      </div>
    </header>
  );
}

function ContentHeader() {
  return (
    <section className="mx-auto flex flex-col lg:flex-row max-w-7xl p-4 lg:p-24">
      <div className="container mx-auto">
        <h1 className="text-2xl font-light text-center lg:text-left text-yellow-400">
          Seja bem-vindo!
        </h1>
        <div className="flex py-4">
          <h1 className="text-3xl font-bold text-center lg:text-left text-white max-w-xl w-full">
            Descubra sua beleza interior e realce sua confiança conosco
          </h1>
        </div>
        <div className="flex justify-center lg:justify-start py-4">
          <Button />
        </div>
      </div>
    </section>
  );
}

const Button = () => {
  return (
    <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-10 rounded flex items-center">
      Reserve um horário
      <motion.div
        className="ml-2"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.3 }}
      >
        <FiArrowRight size={20} />
      </motion.div>
    </button>
  );
};


const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="mt-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-10 h-10 cursor-pointer"
        onClick={toggleMenu}
      >
        <path
          fillRule="evenodd"
          d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
          clipRule="evenodd"
        />
      </svg>
      {isMenuOpen && (
        <div className="bg-gray-800 fixed inset-y-0 left-0 w-64 p-6">
          <div className="flex flex-col justify-between">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto mr-4"
                  src="src/assets/logo.png"
                  alt="logo"
                />
              </a>
            </div>
            <div className="mt-12"></div>
            <a
              href="#"
              className="text-base font-medium text-white hover:text-gray-300 border-b border-gray-700 py-2"
            >
              Início
            </a>
            <div className="mt-2"></div>
            <a
              href="#"
              className="text-base font-medium text-white hover:text-gray-300 border-b border-gray-700 py-2"
            >
              Produtos
            </a>
            <div className="mt-2"></div>
            <a
              href="#"
              className="text-base font-medium text-white hover:text-gray-300 py-2"
            >
              Agendamento
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
