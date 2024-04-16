"use client";
import localFont from "next/font/local";
import { useState } from "react";
import Quiz from "./Quiz/page";

const fontSerif = localFont({ src: "../fonts/NotoSerifTangut.ttf" });
const fontSageffine = localFont({ src: "../fonts/Sageffine.otf" });

export default function Home() {
  const year = new Date().getFullYear();
  const [registrado, setRegistrado] = useState(false);
  function registrarse() {
    setRegistrado(true);
  }
  return (
    <div
      className={`bg-[url('../views/img/bg_uvas_rojo.jpg')] max-h-screen min-h-screen flex flex-col justify-between ${fontSerif.className}`}
    >
      <header>
        <div className="flex justify-center items-center py-3 space-x-5">
          <div className="w-[20%] h-[20%]">
            <img
              src="/image/escarapelaArgentina.png"
              alt="escarapelaArgentina"
            />
          </div>
          <div className="w-[20%] h-[20%]">
            <img src="/image/BENGROUP__typo blanco.png" alt="" />
          </div>
        </div>
      </header>
      <main>
        {!registrado ? (
          <div className=" w-full md:w-[90%] mx-auto">
            <h1 className="w-full text-2xl font-bold text-center py-2">
              Ingrese sus datos para jugar
            </h1>
            <form className="flex flex-col w-[90%] md:w-[50%] mx-auto ">
              <label htmlFor="Email" className="py-3 font-bold text-2xl">
                Email:
              </label>
              <input
                type="email"
                className="text-gray-300 p-3 bg-rojoClaro border-black border rounded-md"
              />
              <label htmlFor="User" className="py-3 font-bold text-2xl">
                User:
              </label>
              <input
                type="text"
                className="text-gray-300 p-3 bg-rojoClaro border-black border rounded-md"
              />
              <button onClick={registrarse} className="btn shadow-glow">
                Registrarse
              </button>
            </form>
          </div>
        ) : (
          <Quiz />
        )}
      </main>
      <footer>
        <p className="font-thin text-xs text-center p-2">
          Arcenix Company Todos Los Derechos Reservados {year}
        </p>
      </footer>
    </div>
  );
}
