import { useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaAws, FaDocker, FaGitAlt, FaNodeJs, FaReact} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiAdobe, SiCoreldraw, SiGithubactions, SiJavascript, SiNestjs, SiNextdotjs, SiNginx, SiRedux, SiTypescript } from "react-icons/si";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { CgVercel } from "react-icons/cg";
import { DiPhotoshop } from "react-icons/di";

gsap.registerPlugin(ScrollTrigger);

export const Portfolio = () => {
  const project1 = useRef<any>(null);
  const project2 = useRef<any>(null);
  const project3 = useRef<any>(null);
  const project4 = useRef<any>(null);
  const textRef = useRef<any>(null);
  const textRef2 = useRef<any>(null);
  const textRef3 = useRef<any>(null);
  const textRef4 = useRef<any>(null);
  const imgRef = useRef<any>(null);
  const imgRef2 = useRef<any>(null);
  const imgRef3 = useRef<any>(null);
  const imgRef4 = useRef<any>(null);
  const titleRef = useRef<any>(null);
  const titleRef2 = useRef<any>(null);
  const titleRef3 = useRef<any>(null);
  const titleRef4 = useRef<any>(null);
  const portfolioRef = useRef<any>(null);
  const portfolioRightRef = useRef<any>(null);
  const tecLeftRef = useRef<any>(null);
  const tecRightRef = useRef<any>(null);
  const techRef = useRef<any>(null);
  const buttonOneRef = useRef<any>(null);
  const buttonTwoRef = useRef<any>(null);
  const buttonThreeRef = useRef<any>(null);
  const buttonfourRef = useRef<any>(null);

  useGSAP(() => {
    const split = new SplitType(titleRef.current, { types: 'chars' });
    const split2 = new SplitType(titleRef2.current, { types: 'chars' });
    const split3 = new SplitType(titleRef3.current, { types: 'chars' });
    const split4 = new SplitType(titleRef4.current, { types: 'chars' });

    gsap.from(split.chars, {
      y: 100,
      opacity: 0,
      stagger: {
        each: 0.05,
        from: "random",
      },
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: project1.current,
        start: 'top 50%',
        end: 'top 20%',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(split2.chars, {
      y: 100,
      opacity: 0,
      stagger: {
        each: 0.05,
        from: "random",
      },
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: project2.current,
        start: 'top 50%',
        end: 'top 20%',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(split3.chars, {
      y: 100,
      opacity: 0,
      stagger: {
        each: 0.05,
        from: "random",
      },
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: project3.current,
        start: 'top 50%',
        end: 'top 20%',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(split4.chars, {
      y: 100,
      opacity: 0,
      stagger: {
        each: 0.05,
        from: "random",
      },
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: project4.current,
        start: 'top 50%',
        end: 'top 20%',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(textRef.current, {
      opacity: 0,
      y: 250,
      scrollTrigger: {
        trigger: project1.current,
        start: 'top 50%',
        end: 'top top',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(buttonOneRef.current, {
      opacity: 0,
      y: 250,
      scrollTrigger: {
        trigger: project1.current,
        start: 'top 40%',
        end: 'top 20%',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(buttonTwoRef.current, {
      opacity: 0,
      y: 250,
      scrollTrigger: {
        trigger: project2.current,
        start: 'top 40%',
        end: 'top 20%',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(buttonThreeRef.current, {
      opacity: 0,
      y: 250,
      scrollTrigger: {
        trigger: project3.current,
        start: 'top 40%',
        end: 'top 20%',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(buttonfourRef.current, {
      opacity: 0,
      y: 250,
      scrollTrigger: {
        trigger: project4.current,
        start: 'top 40%',
        end: 'top 20%',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(imgRef.current, {
      opacity: 0,
      y: 150,
      scrollTrigger: {
        trigger: project1.current,
        start: 'top 80%',
        end: 'top top',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });

    gsap.fromTo(portfolioRef.current,
      {
        x: "-30%",
        opacity: 0
      }, {
      x: "-40%",
      duration: 20,
      opacity: 1,
      ease: "linear",
      scrollTrigger: {
        trigger: portfolioRef.current,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
        toggleActions: 'play none none reverse',
      }
    });

    gsap.fromTo(portfolioRightRef.current,
      {
        x: "-30%",
        opacity: 0
      }, {
      x: "-20%",
      duration: 20,
      opacity: 1,
      ease: "linear",
      scrollTrigger: {
        trigger: portfolioRef.current,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
        toggleActions: 'play none none reverse',
      }
    });

    gsap.from(textRef2.current, {
      opacity: 0,
      y: 250,
      scrollTrigger: {
        trigger: project2.current,
        start: 'top 50%',
        end: 'top top',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(imgRef2.current, {
      opacity: 0,
      y: 150,
      scrollTrigger: {
        trigger: project2.current,
        start: 'top 80%',
        end: 'top top',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(textRef3.current, {
      opacity: 0,
      y: 250,
      scrollTrigger: {
        trigger: project3.current,
        start: 'top 50%',
        end: 'top top',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(imgRef3.current, {
      opacity: 0,
      y: 150,
      scrollTrigger: {
        trigger: project3.current,
        start: 'top 80%',
        end: 'top top',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(textRef4.current, {
      opacity: 0,
      y: 250,
      scrollTrigger: {
        trigger: project4.current,
        start: 'top 50%',
        end: 'top top',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(imgRef4.current, {
      opacity: 0,
      y: 150,
      scrollTrigger: {
        trigger: project4.current,
        start: 'top 80%',
        end: 'top top',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });

    gsap.fromTo(tecLeftRef.current,
      {
        x: "-30%",
        opacity: 100
      }, {
      x: "-40%",
      duration: 20,
      opacity: 1,
      ease: "linear",
      scrollTrigger: {
        trigger: tecLeftRef.current,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
        toggleActions: 'play none none reverse',
      }
    });

    gsap.fromTo(tecRightRef.current,
      {
        x: "-30%",
        opacity: 100
      }, {
      x: "-20%",
      opacity: 1,
      ease: "linear",
      scrollTrigger: {
        trigger: tecRightRef.current,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
        toggleActions: 'play none none reverse',
      }
    });

    gsap.from(techRef.current, {
      opacity:0,
      x:100,
      scrollTrigger: {
        trigger:techRef.current,
        start: 'top 70%',
        end: 'top 40%',
        scrub: true,
        toggleActions: 'play none none reverse',
      }
    })
    
  }, []);


  return (
    <div className="">
      <section>
        <div className="overflow-hidden whitespace-nowrap w-full">
          <h1
            ref={portfolioRef}
            className="text-[100px] italic sm:text-8xl md:text-[150px] text-white Aiter"
          >
            Showcase • Showcase • Showcase • Showcase • 

          </h1>
          <h1
            ref={portfolioRightRef}
            className="text-4xl italic sm:text-8xl md:text-[100px] text-white Lactos"
          >
            Showcase • Showcase • Showcase • Showcase • Showcase • Showcase • Showcase • Showcase • 
          </h1>
        </div>
      </section>
      <section className="aurora mt-20">
        <div className="bg-gradient-to-t from-transparent to-neutral-900 flex flex-col md:flex-row justify-center items-center text-white p-4 lg:p-10" ref={project1}>
          <div className="w-full lg:w-1/2 p-4 lg:p-10 lg:ml-20">
            <h2
              ref={titleRef}
              className="text-4xl sm:text-5xl font-extrabold italic lg:text-6xl"
            >
              GYMmetrics
            </h2>
            <p ref={textRef} className="mt-6 text-base sm:text-xl">
             A web-app all in one gym management platform built from scratch
              <br /> Built QR-based access system reducing front desk time by 30%
              <br /> Integrated MercadoPago, increasing membership sales by 20% in 3 months
              <br /> Designed financial dashboard improving decision-making for 5+ gym owners
              <br /> Optimized gym management processes by 20%
            </p>
            <br />
            <button ref={buttonOneRef} className="mt-6 bg-white text-black py-2 px-4 rounded-3xl font-bold hover:scale-110 hover:bg-[#e4ff00] transform transition duration-300 flex items-center gap-2" onClick={() => window.open("https://gym-metrics.com/" , "_blank")}>Go to <IoMdArrowDroprightCircle /></button>
          </div>

          <div ref={imgRef} className="w-full lg:w-1/2 flex flex-col items-center">
            <img className="rounded-2xl max-w-[300px]" src="https://res.cloudinary.com/disfpwpwx/image/upload/v1745534143/zxddmxrj7eaq5vydggmj.png" alt="Gymmetrics preview" />
            <div className="flex gap-6 mt-4 text-2xl sm:text-3xl">
              <FaReact className="hover:text-[#61DAFB] hover:scale-150 transform transition duration-300" />
              <RiTailwindCssFill className="hover:text-[#38B2AC] hover:scale-150 transform transition duration-300" />
              <SiNestjs className="hover:text-[#E0234E] hover:scale-150 transform transition duration-300" />
              <BiLogoPostgresql className="hover:text-[#336791] hover:scale-150 transform transition duration-300" />
              <FaDocker className="hover:text-[#2496ED] hover:scale-150 transform transition duration-300" />
              <FaAws className="hover:text-[#FF9900] hover:scale-150 transform transition duration-300" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center text-white p-4 lg:p-10 mt-40 mb-40 sm:mb-0 sm:mt-0 " ref={project2}>
          <div className="w-full lg:w-1/2 p-4 lg:p-10 lg:ml-20">
            <h2
              ref={titleRef2}
              className="text-4xl sm:text-5xl text-white font-bold italic lg:text-6xl"
            >
              YoChambeo
            </h2>
            <p ref={textRef2} className="mt-6 text-base sm:text-xl">
              Job matching web-app that connects employers with job seekers
              <br />Automated job post generation on instagram, saving 5+ hours weekly per client
              <br />Boosted Instagram traffic by 40% via auto-posting system
              <br />Increased job applications by 30% in 3 months
              <br />Simplified employer dashboard improving job post completion rate by 25%
            </p>
            <br />
            <button ref={buttonTwoRef} className="mt-6 bg-white text-black py-2 px-4 rounded-3xl font-bold hover:scale-110 transform transition duration-300 flex items-center gap-2" onClick={() => window.open("https://yochambeo.com/" , "_blank")}>Go to <IoMdArrowDroprightCircle /></button>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center" ref={imgRef2}>
            <img className="rounded-2xl max-w-[300px] h-[380px] object-cover" src="https://res.cloudinary.com/disfpwpwx/image/upload/v1745600811/yochambeo_pbgtza.png" alt="Gymmetrics preview" />
            <div className="flex gap-6 mt-4 text-2xl sm:text-3xl">
              <FaReact className="hover:text-[#61DAFB] hover:scale-150 transform transition duration-300" />
              <RiTailwindCssFill className="hover:text-[#38B2AC] hover:scale-150 transform transition duration-300" />
              <SiNestjs className="hover:text-[#E0234E] hover:scale-150 transform transition duration-300" />
              <BiLogoPostgresql className="hover:text-[#336791] hover:scale-150 transform transition duration-300" />
              <FaDocker className="hover:text-[#2496ED] hover:scale-150 transform transition duration-300" />
              <FaAws className="hover:text-[#FF9900] hover:scale-150 transform transition duration-300" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center text-white p-4 lg:p-10 mt-40 mb-40 sm:mb-0 sm:mt-0 " ref={project3}>
          <div className="w-full lg:w-1/2 p-4 lg:p-10 lg:ml-20">
            <h2
              ref={titleRef3}
              className="text-4xl sm:text-5xl font-bold italic lg:text-6xl"
            >
              MobileCer
            </h2>
            <p ref={textRef3} className="mt-6 text-base sm:text-xl">
            A Revolutionary Mobile Repair Shop Experience
            <br />Real-Time Repair Tracking: Customers see exactly where their device is in the repair process.
            <br />Automated Status Updates: Email notifications at every milestone
            <br />24/7 Support Chatbot: Instant answers to common customer questions
            <br />Optimized Workflow: Dashboard reduces average repair time by 35%
            </p>
            <button ref={buttonThreeRef} className="mt-6 bg-white text-black py-2 px-4 rounded-3xl font-bold hover:bg-[red] hover:scale-110 transform transition duration-300 flex items-center gap-2" onClick={() => window.open("https://pffront-fawn.vercel.app/" , "_blank")}>Go to<IoMdArrowDroprightCircle /></button>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center" ref={imgRef3}>
            <img className="rounded-2xl w-[300px] h-[380px] object-cover" src="https://res.cloudinary.com/disfpwpwx/image/upload/v1748549034/Screenshot_2025-05-29_170246_njpsts.png" alt="Gymmetrics preview" />
            <div className="flex gap-6 mt-4 text-2xl sm:text-3xl">
              <SiNextdotjs className="hover:scale-150 transform transition duration-300" />
              <RiTailwindCssFill className="hover:text-[#38B2AC] hover:scale-150 transform transition duration-300" />
              <SiNestjs className="hover:text-[#E0234E] hover:scale-150 transform transition duration-300" />
              <BiLogoPostgresql className="hover:text-[#336791] hover:scale-150 transform transition duration-300" />
              <FaDocker className="hover:text-[#2496ED] hover:scale-150 transform transition duration-300" />
              <CgVercel className="hover:scale-150 transform transition duration-300" />
              <SiTypescript className="hover:text-[#007ACC] hover:scale-150 transform transition duration-300" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center text-white p-4 lg:p-10 mt-40 mb-40 sm:mb-0 sm:mt-0 bg-gradient-to-b from-transparent to-neutral-900" ref={project4}>
          <div className="w-full lg:w-1/2 p-4 lg:p-10 lg:ml-20">
            <h2
              ref={titleRef4}
              className="text-4xl sm:text-5xl font-bold italic lg:text-6xl"
            >
              Peugeot
            </h2>
            <p ref={textRef4} className="mt-6 text-base sm:text-xl">
              Rebranding Peugeot: Tradition and Future in a Bold Visual Identity  
              <br />Lion + Fleur-de-Lis Isotype: Strength and French heritage in a modern, timeless symbol.  
              <br />Retro Shield: Inspired by mid-20th century rallies and the Dakar—perfect for classic models and special editions.  
              <br />Full Versatility: Designed to adapt across apps, vehicles, merchandise, and events.  
              <br />Emotional Impact: Revives Peugeot’s legacy and reshapes it into a compelling contemporary story.  
            </p>
            <button ref={buttonfourRef} className="mt-6 bg-white text-black py-2 px-4 rounded-3xl font-bold hover:scale-110 transform transition duration-300 flex items-center gap-2" onClick={() => window.open("https://www.behance.net/gallery/227553959/Peugeot-Case-Study" , "_blank")}>Go to<IoMdArrowDroprightCircle /></button>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center" ref={imgRef4}>
            <img className="rounded-2xl w-[300px] h-[380px] object-cover" src="https://res.cloudinary.com/disfpwpwx/image/upload/v1749155210/CAR7_zl2iw5.jpg" alt="Gymmetrics preview" />
            <div className="flex gap-6 mt-4 text-2xl sm:text-3xl">
              <DiPhotoshop className="hover:scale-150 transform transition duration-300" />
              <SiCoreldraw className="hover:scale-150 transform transition duration-300" />
              <SiAdobe className="hover:scale-150 transform transition duration-300" />
            </div>
          </div>
        </div>
      </section>
      <section className="text-white overflow-hidden py-20">
        <div className="">
          <div className="overflow-hidden whitespace-nowrap w-full sm:mb-10 mb-8">
                  <h1
                    ref={tecLeftRef}
                    className="text-[100px] italic sm:text-8xl md:text-[150px] text-white Aiter"
                  >
                    TechStack • TechStack • TechStack • TechStack • 

                  </h1>
                  <h1
                    ref={tecRightRef}
                    className="text-4xl italic sm:text-8xl md:text-[100px] text-white Lactos"
                  >
                    TechStack • TechStack • TechStack • TechStack • TechStack • TechStack • TechStack • TechStack • 
                  </h1>
                </div>

          <div ref={techRef} className="flex flex-wrap gap-6 items-center justify-center">
            {[
              { 
                name: 'React',
                icon: <FaReact/>,
              },
              {
                name: 'Tailwind CSS',
                icon: <RiTailwindCssFill/>,
              },
              {
                name: 'Docker',
                icon: <FaDocker/>,
              },
              {
                name: 'PostgreSQL',
                icon: <BiLogoPostgresql/>,
              },
              {
                name: 'AWS',
                icon: <FaAws/>,
              },
              {
                name: 'NestJS',
                icon: <SiNestjs/>,
              },
              {
                name: 'Next.js',
                icon: <SiNextdotjs />,
              },
              {
                name: 'Node.js',
                icon: <FaNodeJs />,
              },
              {
                name: 'TypeScript',
                icon: <SiTypescript />,
              },
              {
                name: 'JavaScript',
                icon: <SiJavascript />,
              },
              {
                name: 'Redux',
                icon: <SiRedux />,
              },
              {
                name: 'Git',
                icon: <FaGitAlt />,
              },
              {
                name: 'Nginx',
                icon: <SiNginx />,
              },
              {
                name: 'GitHub Actions',
                icon: <SiGithubactions />,
              },
              {
                name: 'Photoshop',
                icon: <DiPhotoshop />,
              },
              {
                name: 'CorelDraw',
                icon: <SiCoreldraw />,
              },
            ].map((skill, index) => (
              <div
                key={index}
                className={`tech-item group flex justify-center items-center p-8 rounded-xl  border border-neutral-800 transition-all duration-300 hover:scale-105`}
              >
                <div className="mr-4 text-3xl sm:text-6xl">
                  {skill.icon}
                </div>
                <h3 className="text-sm sm:text-lg">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};
