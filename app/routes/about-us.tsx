import React from 'react';

function AboutUs() {
  return (
    <div className="bg-gray-100 p-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">About Sanjeevani</h1>
        <p className="mt-2 text-xl text-gray-700">
          Your All-in-One Healthcare Solution
        </p>
      </header>

      {/* Introduction Section */}
      <section className="max-w-4xl mx-auto mb-8 text-center">
        <p className="text-lg text-gray-800">
          At Sanjeevani, we believe in a holistic approach to healthcare. Our
          mission is to empower individuals with accessible, comprehensive, and
          innovative health solutions, streamlining care through a single platform.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-left mb-4">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 text-center">
          Our mission is to provide integrated healthcare solutions that are
          convenient, reliable, and effective, bridging the gap between patients
          and providers to ensure quality healthcare for everyone.
        </p>
      </section>

      {/* Values Section */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-left mb-4">
          Our Values
        </h2>
        <ul className="text-lg text-gray-700 list-disc list-inside">
          <li>Compassion: Prioritizing care and empathy in every interaction.</li>
          <li>Innovation: Utilizing cutting-edge technology to enhance accessibility.</li>
          <li>Trust: Building reliable relationships with patients and providers.</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto mb-12 text-left">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-700">
          For any questions, assistance, or feedback, reach out to us at{' '}
          <a href="mailto:contact@sanjeevani.com" className="text-blue-600 underline">
            contact@sanjeevani.com
          </a>{' '}
          or connect with us on our social media channels.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
