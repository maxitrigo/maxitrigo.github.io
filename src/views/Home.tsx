import { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import { LuChevronsDown } from 'react-icons/lu';

export const Home = () => {
  const textRef = useRef<any>(null); // Para el texto principal
  const subTextRef = useRef<any>(null); // Para el texto "Ignite the scroll"

  useEffect(() => {
    // Dividir el texto principal en letras
    if (textRef.current) {
      const split = new SplitType(textRef.current, { types: 'chars' });

      // Animación para las letras del texto principal
      gsap.from(split.chars, {
        y: 100,
        opacity: 0,
        stagger: {
          each: 0.05,
          from: "random",
        },
        duration: 1,
        ease: "back.out(2)",
      });

      // Dividir el texto "Ignite the scroll" en letras
      const subTextSplit = new SplitType(subTextRef.current, { types: 'chars' });

      // Animación para el texto "Ignite the scroll"
      gsap.from(subTextSplit.chars, {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 1,
        delay: 2, // Retrasar un poco la animación de este texto
      });

      return () => {
        split.revert(); // Limpiar cuando el componente se desmonte
        subTextSplit.revert(); // Limpiar también el "Ignite the scroll"
      };
    }
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center items-center p-2">
      <h1
        ref={textRef} // Asignamos el ref para el texto principal
        className="text-white NeueMetana text-center flex flex-col"
      >
        <span className="text-3xl sm:text-5xl md:text-6xl 2xl:text-[150px]">Craft the Code</span>
        <span className="text-2xl sm:text-4xl 2xl:text-[100px]">Launch the Vision</span>
        {/* <span className="text-2xl">The Vision</span> */}
      </h1>
      <span
        ref={subTextRef} // Asignamos el ref para "Ignite the scroll"
        className="text-2xl text-white Lactos mt-4"
      >
        Ignite the scroll
      </span>
      <span className="text-white text-2xl animate-bounce">
       <LuChevronsDown />
      </span>
    </section>
  );
};

