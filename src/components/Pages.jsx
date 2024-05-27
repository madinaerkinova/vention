import React from 'react';

const Pages = () => {  
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 border rounded shadow">
            <h3 className="text-xl font-bold mb-4">Service One</h3>
            <p>We provide high-quality development teams.</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h3 className="text-xl font-bold mb-4">Service Two</h3>
            <p>Expert management and support for your projects.</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h3 className="text-xl font-bold mb-4">Service Three</h3>
            <p>Comprehensive solutions tailored to your needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pages;
