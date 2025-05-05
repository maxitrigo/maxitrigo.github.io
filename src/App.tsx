import { useEffect, useRef } from 'react';
import './App.css';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactLenis } from 'lenis/react'


import { Home } from './views/Home';
import { Portfolio } from './views/Portfolio';
import { Contacto } from './views/Contacto';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const introHero = useRef(null);
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    function update(time: any) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  },[])

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(introHero.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: introHero.current,
        start: 'top top',
        end: '+=400',
        scrub: true,

      }
    });
  }, { dependencies: [] });

  return (
    <ReactLenis root options={{autoRaf: false}} ref={lenisRef}>

      <div className='w-full'>
        <div ref={introHero} className='' >
          <Home />
        </div>

        <div>
          <Portfolio />
        </div>

        <div>
          <Contacto/>
        </div>

      </div>

    </ReactLenis>
  );
}

export default App;
