import { Link } from '@remix-run/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
 import { useEffect } from "react";

export default function Sectwo(){
    useEffect(() => {
        // Initialize AOS
        AOS.init({ 
          duration: 1500, // Duration of the animation
          offset: 50, // Offset (in px) from the original position when animations start
          easing: 'ease-in-out', // Easing type
          delay: 0, // Delay (in ms) for the animation to start
        });
      }, []);
    return(
        <>
        <section className="sectwoMain">
           <div>
            <h1 data-aos="fade-right" className="text-center bebas-neue-regular whatwe">What we do</h1>
            <h1 data-aos="fade-left" className="text-center bebas-neue-regular dofor"> for you ?</h1>
           </div>
           <Link to='https://themes.vamtam.com/?theme=tecnologia&n=1'>link</Link>
        </section>
        </>
    )
}