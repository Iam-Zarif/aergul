import { motion } from "framer-motion"; // For animations
import "./about.css";
import about from "../../../public/about/about.mp4"
import dream from "../../../public/about/dream.jpg"
import budgeting from "../../../public/about/budgeting.gif"
import certificate from "../../../public/about/certificate.gif"
import chat from "../../../public/about/chat.gif"
import engineeringIndustries from "../../../public/about/emerging-industries.gif"
import proofOfConcept from "../../../public/about/proof-of-concept.gif"
import customerCare from "../../../public/about/customer-care.gif"
import photo from "../../../public/newitems/photo.jpg";
import photo1 from "../../../public/newitems/photo2.jpg";
import photo2 from "../../../public/newitems/photo3.jpg";
import photo3 from "../../../public/newitems/photo4.jpg";
import photo4 from "../../../public/newitems/sample.jpg";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 font-sans  pt-16">
      {/* Hero Section */}
      <section className="relative w-full h-[94vh] text-white bg-indigo-900">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover e"
        >
          <source src={about} type="video/mp4" />
        </video>

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-7xl font-extrabold">WHO WE ARE</h1>
          <p className="mt-4 text-2xl max-w-3xl">
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
      <section className="  ">
        <motion.div
          className="w-full mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className=" w-full  pb-24 ">
            <div className="flex items-center flex-col gap-2">
              <p className="text-lg font-extrabold text-gray-300">
                Share your setup with
              </p>
              <p className="text-4xl font-extrabold">#aergul</p>
            </div>

            <div className="grid w-full grid-cols-12 gap-4 grid-rows-12 h-[100vh] lg:-mt-12">
              <div className="col-span-1 cols-start-1 row-start-1 row-span-6 h-full">
                <img
                  alt="image"
                  src={photo}
                  className="h-full w-full object-cover shadow-sm shadow-gray-500 rounded-xl"
                />
              </div>
              <div className="col-span-4 row-start-3 row-span-4">
                <img
                  alt="image"
                  src={photo1}
                  className="h-full w-full object-cover shadow-sm shadow-gray-500 rounded-xl"
                />
              </div>
              <div className="col-span-2 row-span-5 row-start-4">
                <img
                  alt="image"
                  src={photo2}
                  className="h-full w-full object-cover shadow-sm shadow-gray-500 rounded-xl"
                />
              </div>
              <div className="col-span-3 row-span-6 row-start-2">
                <img
                  alt="image"
                  src={photo3}
                  className="h-full w-full object-cover shadow-sm shadow-gray-500 rounded-xl"
                />
              </div>
              <div className="col-span-4 row-span-6 row-start-1">
                <img
                  alt="image"
                  src={photo4}
                  className="h-full w-full object-cover shadow-sm shadow-gray-500 rounded-xl"
                />
              </div>
              <div className="col-span-2 row-span-6 row-start-7">
                <img
                  alt="image"
                  src={photo1}
                  className="h-full w-full object-cover shadow-sm shadow-gray-500 rounded-xl"
                />
              </div>
              <div className="col-span-3 row-span-4 row-start-7">
                <img
                  alt="image"
                  src={photo2}
                  className="h-full w-full object-cover shadow-sm shadow-gray-500 rounded-xl"
                />
              </div>
              <div className="col-span-3 row-span-3">
                <img
                  alt="image"
                  src={photo3}
                  className="h-full w-full object-cover shadow-sm shadow-gray-500 rounded-xl"
                />
              </div>
              <div className="col-span-4 row-span-6 row-start-7">
                <img
                  alt="image"
                  src={photo4}
                  className="h-full w-full object-cover shadow-sm shadow-gray-500 rounded-xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Discover the key reasons why customers trust and love our services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description:
                  "Highly skilled professionals dedicated to excellence.",
                icon: certificate, // Updated GIF path
              },
              {
                title: "Innovative Solutions",
                description:
                  "Creative and tailored solutions for modern challenges.",
                icon: engineeringIndustries, // Updated GIF path
              },
              {
                title: "Customer Focus",
                description: "Your satisfaction is at the heart of what we do.",
                icon: customerCare, // Updated GIF path
              },
              {
                title: "Global Reach",
                description: "Services and support available worldwide.",
                icon: chat, // Updated GIF path
              },
              {
                title: "Affordable Pricing",
                description: "Top-notch services at competitive prices.",
                icon: budgeting, // Updated GIF path
              },
              {
                title: "Proven Track Record",
                description:
                  "Years of success and a growing list of happy clients.",
                icon: proofOfConcept, // Updated GIF path
              },
            ].map((item, index) => (
              <motion.div
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="mx-auto w-20 h-20 mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 px-6 text-center text-white bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${dream})`,
        }}
      >
        <motion.div
          className="max-w-4xl mx-auto bg-black bg-opacity-70 p-6 rounded-lg"
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
      <section className="py-20 bg-gray-100">
        <motion.div
          className="max-w-7xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Here We Stay
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Visit us at our prime location, where innovation meets tradition. We
            are always here to serve you.
          </p>

          <div className="relative overflow-hidden rounded-lg shadow-lg">
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14594.235186233633!2d90.42194549999999!3d23.86979595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c59f9145c717%3A0x5274ac52b7ce8384!2sDakshin%20Khan%20Bazar!5e0!3m2!1sen!2sbd!4v1734363531294!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96"
            ></iframe>
          </div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <a
              href="https://goo.gl/maps/YOUR_LOCATION_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
            >
              Get Directions
            </a>
          </motion.div>
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
