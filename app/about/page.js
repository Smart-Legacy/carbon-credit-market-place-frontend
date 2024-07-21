// pages/about.tsx

const About = () => {
  return (
    <div className="p-4 md:px-32 bg-white text-black">
      <h1 className="text-3xl font-bold mb-4 text-center">
        About Green Carbon Solution
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2 text-center">Our Mission</h2>
        <p>
          At Green Carbon Solution, our mission is to combat climate change by
          providing innovative carbon offset solutions. We strive to help
          individuals and businesses reduce their carbon footprint and
          contribute to a sustainable future.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2 text-center">Our Vision</h2>
        <p>
          Our vision is to be a global leader in the carbon offset market,
          promoting environmental stewardship and fostering a low-carbon
          economy. We aim to create a world where sustainable practices are the
          norm and the impacts of climate change are significantly mitigated.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2 text-center">Our Values</h2>
        <ul className="list-disc pl-5">
          <li className="mb-2">
            <strong>Integrity:</strong> We uphold the highest standards of
            integrity in all of our actions.
          </li>
          <li className="mb-2">
            <strong>Innovation:</strong> We continuously seek innovative
            solutions to address the challenges of climate change.
          </li>
          <li className="mb-2">
            <strong>Sustainability:</strong> We are committed to promoting
            sustainable practices in all aspects of our business.
          </li>
          <li className="mb-2">
            <strong>Collaboration:</strong> We believe in the power of
            collaboration and work closely with our partners to achieve our
            goals.
          </li>
          <li className="mb-2">
            <strong>Transparency:</strong> We maintain transparency in our
            operations and openly share our progress with our stakeholders.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2 text-center">Contact Us</h2>
        <p>
          For more information about our services or to get in touch with us,
          please visit our{" "}
          <a href="/contact-us" className="text-green-600 underline">
            Contact Us
          </a>{" "}
          page.
        </p>
      </section>
    </div>
  );
};

export default About;
