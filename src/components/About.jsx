import { UsersIcon } from "@heroicons/react/24/outline";
import React from "react";

function About() {
  return (
    <section className="mx-auto flex flex-col max-w-7xl px-6 py-12 lg:px-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <img
          src="src/assets/about-image.png"
          alt="about image"
          className="mb-6 lg:mb-0 lg:mr-6"
        />
        <div>
          <h1 className="text-2xl font-light text-left text-black">
            Sobre Nós
          </h1>
          <h2 className="text-lg font-light text-left text-gray-700 mt-4 max-w-xl">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </h2>
          <div className="mt-8">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-sm py-2 px-10 rounded flex items-center">
              <UsersIcon className="w-6 h-6 mr-2 text-black" />
              +2000 clientes satisfeitos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
