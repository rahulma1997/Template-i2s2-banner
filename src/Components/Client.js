import React from 'react';

// Import your images
const clients = [
  { src: require('../clientsimg/client-1.png'), alt: 'Client 1' },
  { src: require('../clientsimg/client-2.png'), alt: 'Client 2' },
  { src: require('../clientsimg/client-3.png'), alt: 'Client 3' },
  { src: require('../clientsimg/client-4.png'), alt: 'Client 4' },
  { src: require('../clientsimg/client-5.png'), alt: 'Client 5' },
  { src: require('../clientsimg/client-6.png'), alt: 'Client 6' },
];

const ClientsSection = () => {
  return (
    <section id="clients" className="clients section p-10 bg-gray-100">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((client, index) => (
            <div key={index} className="client-logo   flex justify-center">
              <img
                src={client.src}
                alt={client.alt}
                className="img-fluid w-16 opacity-30 text-black hover:opacity-85 transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
