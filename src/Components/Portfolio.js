import React, { useState } from 'react';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import AnimationIcon from '@mui/icons-material/Animation';

const portfolioItems = [
  {
    image: require('../Portfolioimg/App-1.jpg'),
    title: 'App 1',
    description: 'Lorem ipsum, dolor sit',
    filter: 'app',
  },
  {
    image: require('../Portfolioimg/product-1.jpg'),
    title: 'Product 1',
    description: 'Lorem ipsum, dolor sit',
    filter: 'product',
  },
  {
    image: require('../Portfolioimg/Branding-1.jpg'),
    title: 'Branding 1',
    description: 'Lorem ipsum, dolor sit',
    filter: 'branding',
  },
  {
    image: require('../Portfolioimg/Branding-2.jpg'),
    title: 'Branding 2',
    description: 'Lorem ipsum, dolor sit',
    filter: 'branding',
  },
  {
    image: require('../Portfolioimg/product-2.jpg'),
    title: 'Product 2',
    description: 'Lorem ipsum, dolor sit',
    filter: 'product',
  },

  {
    image:  require('../Portfolioimg/App-2.jpg'),
    title: 'App 2',
    description: 'Lorem ipsum, dolor sit',
    filter: 'app',
  },
  {
    image: require('../Portfolioimg/App3.jpg'),
    title: 'App 3',
    description: 'Lorem ipsum, dolor sit',
    filter: 'app',
  },
  {
    image: require('../Portfolioimg/product3.jpg'),
    title: 'Product 3',
    description: 'Lorem ipsum, dolor sit',
    filter: 'product',
  },
  {
    image: require('../Portfolioimg/Branding-3.jpg'),
    title: 'Branding 3',
    description: 'Lorem ipsum, dolor sit',
    filter: 'branding',
  },
];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.filter === activeFilter);

  return (
    <section id="portfolio" className="portfolio section py-20">
      <div className="container mx-auto text-center mb-10" data-aos="fade-up">
        <h2 className="text-3xl font-bold">AMC - Product</h2>
        <p className="text-gray-600">Necessitatibus eius consequatur</p>
      </div>

      <div className="container mx-auto">
        <ul className="flex justify-center space-x-4 mb-10">
          <li
            onClick={() => handleFilterChange('all')}
            className={`cursor-pointer ${activeFilter === 'all' ? 'font-bold' : ''}`}
          >
            All
          </li>
          <li
            onClick={() => handleFilterChange('app')}
            className={`cursor-pointer ${activeFilter === 'app' ? 'font-bold' : ''}`}
          >
            App
          </li>
          <li
            onClick={() => handleFilterChange('product')}
            className={`cursor-pointer ${activeFilter === 'product' ? 'font-bold' : ''}`}
          >
            Card
          </li>
          <li
            onClick={() => handleFilterChange('branding')}
            className={`cursor-pointer ${activeFilter === 'branding' ? 'font-bold' : ''}`}
          >
            Web
          </li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item, index) => (
            <div key={index} className={`portfolio-item ${item.filter} relative group `}>
              <img
                src={item.image}
                className="w-auto h-auto"
                alt={item.title}
              />
              <div className="absolute  bg-white opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex flex-col  items-center -mt-[90px]  w-[417px] p-4 text-left  ">
                <h4 className="text-xl mr-72 font-semibold">{item.title}</h4>
                <div className='flex'>
                <p className="text-gray-600 ">{item.description}</p>
                <ZoomInIcon sx={{fontSize:40}} className='ml-36 -mt-3 hover:text-red-400'/>
                <AnimationIcon sx={{fontSize:40}} className='-mt-3 hover:text-red-400'/>
                </div>
                <div className="flex  mt-2">
                  <a href={item.image} title={item.title} className="glightbox preview-link">
                    
                  </a>
                  <a href="portfolio-details.html" title="More Details" className="details-link ml-2">
                    <i className="bi bi-link-45deg text-red-500"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
