import React from 'react';
import ChecklistIcon from '@mui/icons-material/Checklist';
import WorkIcon from '@mui/icons-material/Work';
import BarChartIcon from '@mui/icons-material/BarChart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';

const services = [
  {
    icon: <WorkIcon sx={{ fontSize: 40 }} className='-mt-14' />,
    title: 'Lorem Ipsum',
    description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
  },
  {
    icon: <SignalCellularAltOutlinedIcon sx={{ fontSize: 40 }} className='-mt-14' />,
    title: 'Sed ut perspiciatis',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
  },
  {
    icon: <LightModeOutlinedIcon sx={{ fontSize: 40 }} className='-mt-14' />,
    title: 'Nemo Enim',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
  },
  {
    icon: <ChecklistIcon sx={{ fontSize: 40, border:1 }} className='-mt-14' />,
    title: 'Dolor Sitema',
    description: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata',
  },
  {
    icon: <VisibilityIcon sx={{ fontSize: 40 }} className='-mt-14' />,
    title: 'Magni Dolores',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    icon: <CalendarTodayIcon sx={{ fontSize: 40 }} className='-mt-14' />,
    title: 'Eiusmod Tempor',
    description: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="services section py-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-4">
            <div className="grid grid-cols-1 md:grid-cols-1 ml-16  gap-8">
              {services.slice(0, 3).map((service, index) => (
                <div key={index} className="service-item p-4 border border-transparent rounded-lg shadow-md transition-transform transform hover:border-red-500 hover:shadow-lg hover:scale-105 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <span className="text-red-500 mr-4">{service.icon}</span>
                    <div>
                      <h4 className="title text-xl font-semibold mb-2">
                        <a href="#" className="hover:underline">{service.title}</a>
                      </h4>
                      <p className="description text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4">
            <div className="grid grid-cols-1 md:grid-cols-1 mr-16 gap-8">
              {services.slice(3, 6).map((service, index) => (
                <div key={index} className="service-item p-4 border border-transparent rounded-lg shadow-md transition-transform transform hover:border-red-500 hover:shadow-lg hover:scale-105 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <span className="text-red-500 mr-4">{service.icon}</span>
                    <div>
                      <h4 className="title text-xl font-semibold mb-2">
                        <a href="#" className="hover:underline">{service.title}</a>
                      </h4>
                      <p className="description text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
