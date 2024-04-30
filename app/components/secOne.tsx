import imgOne from '/golo.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Secone(){
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
        <section className="seconeMain mt-3 mb-3">
        <div className="grid grid-cols-1 md:grid-cols-2">
  <div className=" p-4 gOne">
    <img data-aos="zoom-in" src={imgOne}/>
  </div>
  <div className="bg-black-200 p-4 gTwo flex items-center justify-center">
  <div> <h3 data-aos="fade-right" className='bantxt1 bebas-neue-regular'>We manage your IT, so you can manage your business.</h3>
    <h6 data-aos="fade-left" className='bantxt2 amatic-sc-regular'> Take charge of your business continuity with innovative IT solutions</h6>
    <button data-aos="fade-up" className='banBtn py-2 px-5 my-3'>Get a Qoute</button>
    </div> 
  </div>
</div>

        </section>
        </>
    )
}