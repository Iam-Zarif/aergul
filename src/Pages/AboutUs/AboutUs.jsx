import { motion } from "framer-motion"; // For animations
import "./about.css";
import about from "../../../public/about/about1.jpg"

const AboutUs = () => {
  return (
    <div className="bg-gray-50 font-sans  pt-16">
      {/* Hero Section */}
      <section
        className="w-full bg-indigo-900 relative text-white h-[600px] py-20 px-6 text-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${about})`,
        }}
      >
        {/* Add a dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <motion.div
          className="relative container mx-auto z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-5xl text-white font-extrabold">About Us</h1>
          <p className="mt-4 text-lg text-white">
            We are a passionate team dedicated to delivering excellence.
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
          <p className="mt-4 text-lg text-gray-700">
            Founded in 2015, our journey began with a simple mission to create
            impactful solutions for the modern world. Our team has grown, but
            our passion and commitment to quality remain at the heart of
            everything we do.
          </p>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-gray-100">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                className="relative group"
                key={index}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={`https://via.placeholder.com/400?text=Image+${
                    index + 1
                  }`}
                  alt="Gallery Image"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-40 transition-all duration-300 rounded-lg"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-6 text-center bg-indigo-900 text-white">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold">Mission & Vision</h2>
          <p className="mt-4 text-lg">
            Our mission is to empower businesses and individuals with
            cutting-edge solutions that make a real difference. Our vision is to
            be recognized as a global leader in innovation, sustainability, and
            customer satisfaction.
          </p>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {/* Example team member card */}
            {["John Doe", "Jane Smith", "Robert Brown", "Emily White"].map(
              (name, index) => (
                <motion.div
                  className="relative group border rounded-lg shadow-lg p-6"
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <img
                    src={`https://via.placeholder.com/150?text=Team+Member+${
                      index + 1
                    }`}
                    alt="Team Member"
                    className="w-32 h-32 object-cover rounded-full mx-auto"
                  />
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    {name}
                  </h3>
                  <p className="mt-2 text-gray-600">Position</p>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
