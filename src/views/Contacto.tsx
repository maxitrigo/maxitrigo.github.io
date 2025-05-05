import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import SplitType from "split-type";
import { FaWhatsapp } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export const Contacto = () => {
    const titleRef = useRef<any>(null);
    const textRef = useRef<any>(null);

    useGSAP(() => {
        const split = new SplitType(titleRef.current, {types: 'chars'})

        gsap.from(split.chars, {
            y: 100,
            opacity: 0,
            stagger: {
              each: 0.05,
              from: "random",
            },
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 80%',
              end: 'top 50%',
              scrub: true,
              toggleActions: 'play none none reverse',
            },
          });

        gsap.from(textRef.current, {
          opacity:0,
          scrollTrigger: {
              trigger: textRef.current,
              start: 'top 80%',
              end: 'top 50%',
              scrub: true,
              toggleActions: 'play none none reverse',
              },
        })
    })

    return (
        <div className="flex flex-col items-center justify-center mt-10 h-[100vh] gap-10">
          <div ref={titleRef} className="text-white text-8xl Dirtyline text-center">
            <h1>cOntActAme</h1>
          </div>
      
          <div ref={textRef} className="text-white text-xl text-center max-w-[500px] px-4 NohemiMedium">
            <p>
              ¿Tenés una idea, proyecto o simplemente querés saludar?  
              <br />
              Estoy a un clic de distancia.
            </p>
          </div>
      
            <div className="flex items-center bg-green-500 NohemiMedium rounded-full p-4 m-10 hover:scale-105 transition">

          <a
            href="https://wa.me/+59899978662"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4"
            >
            Hablame por WhatsApp
          </a>
          <div className="p-4 bg-neutral-900 rounded-full">
            <FaWhatsapp className="text-green-500 text-4xl" />
          </div>
              </div>
        </div>
      );
}