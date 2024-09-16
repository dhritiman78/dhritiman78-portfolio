import React from 'react';

const servicesList = [
  {
    title: 'Web Development',
    description: 'Building responsive and dynamic websites.',
    icon: '🌐',
  },
  {
    title: 'Backend Development',
    description: 'Server-side programming and API development.',
    icon: '🖥️',
  },
    {
        title: 'Full Stack Development',
        description: 'Developing both the front-end and back-end of web applications.',
        icon: '📦',
    },
    {
        title: 'Database Management',
        description: 'Designing and managing databases.',
        icon: '💽',
    },
];

const ServicePage = () => {
  return (
    <div className="min-h-screen mt-16 bg-gray-100">
      <header className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">My Services</h1>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center"
            >
              <span className="text-6xl">{service.icon}</span>
              <h2 className="text-xl font-semibold text-gray-800 mt-4">{service.title}</h2>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
