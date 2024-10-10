// import React from 'react';
// import slideone from "../image/banner1.jpg"
// import slidetwo from "../image/banner2.jpg"
// import slidethree from "../image/banner3.jpg"
// const Banner = () => {
//   return (
//     <section id="hero" className="hero section bg-gray-900 text-white">
//       <div
//         id="hero-carousel"
//         className="carousel slide relative"
//         data-bs-ride="carousel"
//         data-bs-interval="5000"
//       >
//         <div className="carousel-inner relative overflow-hidden w-full">
//           <div className="carousel-item active">
//             <img
//               src={slideone}
//               alt="Slide 1"
//               className="block w-full h-auto"
//             />
//             <div className="carousel-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Sailor</h2>
//               <p className="mb-6">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//               </p>
//               <a href="#featured-services" className="btn-get-started bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
//                 Get Started
//               </a>
//             </div>
//           </div>

//           <div className="carousel-item">
//             <img
//               src={slidetwo}
//               alt="Slide 2"
//               className="block w-full h-auto"
//             />
//             <div className="carousel-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">At vero eos et accusamus</h2>
//               <p className="mb-6">
//                 Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.
//               </p>
//               <a href="#featured-services" className="btn-get-started bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
//                 Get Started
//               </a>
//             </div>
//           </div>

//           <div className="carousel-item">
//             <img
//               src={slidethree}
//               alt="Slide 3"
//               className="block w-full h-auto"
//             />
//             <div className="carousel-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">Temporibus autem quibusdam</h2>
//               <p className="mb-6">
//                 Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.
//               </p>
//               <a href="#featured-services" className="btn-get-started bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
//                 Get Started
//               </a>
//             </div>
//           </div>
//         </div>

//         <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
//         </a>

//         <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
//           <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
//         </a>

//         <ol className="carousel-indicators">
//           {/* Add indicators if necessary */}
//         </ol>
//       </div>
//     </section>
//   );
// };

// export default Banner;



import React from 'react';
import { useSpring, animated } from 'react-spring';
import slideone from "../image/banner1.jpg";
import slidetwo from "../image/banner2.jpg";
import slidethree from "../image/banner3.jpg";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const slides = [
  {
    image: slideone,
    title: "Welcome to Sailor",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    image: slidetwo,
    title: "At vero eos et accusamus",
    content: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut."
  },
  {
    image: slidethree,
    title: "Temporibus autem quibusdam",
    content: "Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium."
  }
];

const Banner = () => {
  const [index, setIndex] = React.useState(0);
  
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const { opacity, transform } = useSpring({
    opacity: 1,
    transform: `translateY(0px)`,
    from: { opacity: 0, transform: `translateY(20px)` },
    reset: true,
    config: { tension: 200, friction: 20 },
    onRest: () => {
      setTimeout(nextSlide, 5000);
    }
  });

  return (
    <section id="hero" className="hero section bg-gray-900 text-white relative">
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src={slides[index].image}
          alt={`Slide ${index + 1}`}
          className="absolute inset-0 opacity-60 w-full h-full object-cover"
        />
        <animated.div className="carousel-container  absolute top-28 ml-52 mr-52 transform -translate-x-1/2 -translate-y-1/2 text-center" style={{ opacity, transform }}>
          <h2 className="text-3xl md:text-4xl mb-8 font-bold">{slides[index].title}</h2>
          <p className="mb-8">{slides[index].content}</p>
          <a href="#featured-services" className="btn-get-started bg-red-600 hover:bg-red-800 text-white px-6 py-2 rounded">
            Get Started
          </a>
        </animated.div>
      </div>

      {/* Previous Button */}
      <button className="carousel-control-prev absolute top-1/2 left-5 transform -translate-y-1/2 z-10 bg-red" onClick={() => setIndex((index - 1 + slides.length) % slides.length)}>
        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"><ArrowForwardIosIcon />
        </span>
      </button>
      
      {/* Next Button */}
      <button className="carousel-control-next absolute top-1/2 right-5 transform -translate-y-1/2 z-10" onClick={nextSlide}>
        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"><ArrowBackIosNewIcon /></span>
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel-indicator w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setIndex(i)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Banner;
