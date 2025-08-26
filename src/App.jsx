import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Variants for the dropdown container
  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: { height: 0, opacity: 0, transition: { duration: 0.2 } },
  };

  // Variants for individual menu items
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  // Variants for sections on scroll
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Smooth scroll to section
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu on mobile
    }
  };

  return (
    <div className="font-sans text-gray-900 scroll-smooth">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Fawumi Seye</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-gray-700 hover:text-blue-600"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger with Animation */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.span
              initial={false}
              animate={{
                rotate: menuOpen ? 45 : 0,
                y: menuOpen ? 6 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="absolute w-6 h-0.5 bg-gray-700 rounded"
            />
            <motion.span
              initial={false}
              animate={{
                opacity: menuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="absolute w-6 h-0.5 bg-gray-700 rounded"
            />
            <motion.span
              initial={false}
              animate={{
                rotate: menuOpen ? -45 : 0,
                y: menuOpen ? -6 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="absolute w-6 h-0.5 bg-gray-700 rounded"
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown with Animation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden bg-white border-t shadow-md overflow-hidden"
            >
              {["about", "skills", "projects", "contact"].map((item) => (
                <motion.button
                  key={item}
                  variants={itemVariants}
                  onClick={() => scrollTo(item)}
                  className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-100"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <motion.section
        className="bg-blue-600 text-white text-center py-32 mt-16"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h1 className="text-5xl font-bold mb-4">Fawumi Seye</h1>
        <p className="text-xl">
          Full Stack Developer | Python | Django | React | Streamlit
        </p>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="p-8 max-w-3xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>
          I am a passionate Full Stack Developer with experience building robust
          web applications using <strong>Python, Django, React, and Streamlit</strong>.
          My focus is on delivering scalable, secure, and user-friendly solutions.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="bg-gray-100 p-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Python",
            "Django",
            "React",
            "Streamlit",
            "JavaScript",
            "PostgreSQL",
            "REST APIs",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="p-8 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <ul className="space-y-4">
          <li className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-semibold">
              Data Analytics & Sustainability Management App
            </h3>
            <p>
              Landing page built with React →{" "}
              <a
                href="https://edma.vzy.io"
                target="_blank"
                className="text-blue-500 underline"
              >
                edma.vzy.io
              </a>
            </p>
          </li>
          <li className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-semibold">Beedone App</h3>
            <p>Task management and productivity tool.</p>
          </li>
          <li className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-semibold">
              Student Management Application
            </h3>
            <p>End-to-end student records and performance tracking system.</p>
          </li>
          <li className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-semibold">
              Malicious Threat Detection System
            </h3>
            <p>Security-focused project built with Django.</p>
          </li>
          <li className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-semibold">Analytics API</h3>
            <p>Data pipeline and analytics backend built with Django.</p>
          </li>
          <li className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-semibold">Bank Analysis Dashboard</h3>
            <p>Interactive financial dashboard built using Streamlit.</p>
          </li>
        </ul>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="p-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="mb-2">
          📧 Email:{" "}
          <a
            href="mailto:fawumiseye223@gmail.com"
            className="text-blue-500 underline"
          >
            fawumiseye223@gmail.com
          </a>
        </p>
        <p>
          💻 GitHub:{" "}
          <a
            href="https://github.com/fawumi223"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            github.com/fawumi223
          </a>
        </p>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-blue-600 text-white text-center p-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <p>© {new Date().getFullYear()} Fawumi Seye | Full Stack Developer</p>
      </motion.footer>
    </div>
  );
}

export default App;


