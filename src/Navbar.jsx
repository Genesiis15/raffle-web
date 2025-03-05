import raffleLogo from "../src/assets/raffleLogo.png";
import logo from '../src/assets/logo.png';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 rounded-lg" style={{ minHeight: "80vh" }}>
        <img
          src={logo}
          alt="Fondo de la sección de trabajo"
          className="absolute inset-0 -z-10 w-full h-full object-cover object-right rounded-lg"
        />

        <div className="mx-auto px-6 lg:px-8">
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
            <div className="mx-auto max-w-2xl lg:mx-0">
              <img alt="Your Company" src={raffleLogo} className="h-10 w-auto" />
            </div>

         
            <button
              onClick={handleMenuClick}
              className="flex items-center justify-center px-4 py-3  text-white rounded-lg cursor-pointer "
              aria-expanded={isOpen}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <span className={`text-2xl transition-transform duration-300 ${isOpen ? "hidden" : ""}`}>☰</span>
              <span className={`text-2xl transition-transform duration-300 ${isOpen ? "" : "hidden"}`}>×</span>
            </button>
          </div>

         
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                exit={{ scaleY: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="fixed inset-0 bg-white/90 backdrop-blur-md flex items-center justify-center origin-top"
              >
               
                <button
                  onClick={handleMenuClick}
                  className="absolute top-6 right-6 text-5xl text-gray-900 hover:text-gray-600"
                >
                  ×
                </button>

               
                <motion.nav
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    visible: { transition: { staggerChildren: 0.2 } },
                    hidden: {}
                  }}
                  className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 md:gap-14 text-3xl md:text-4xl font-bold text-gray-900"
                >
                  {[
                    { name: "Sobre nosotros", href: "#AboutSection" },
                    { name: "Servicios", href: "#Services" },
                    { name: "Comentarios", href: "#comentarios" },
                    { name: "Equipo", href: "#teamraffle" },
                    { name: "Contacto", href: "#Contact" }
                  ].map(({ name, href }) => (
                    <motion.a
                      key={name}
                      href={href}
                      onClick={() => setIsOpen(false)} // Cierra el menú después del clic
                      className="cursor-pointer hover:text-primary transition-colors duration-200"
                      variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                      }}
                    >
                      {name}
                    </motion.a>
                  ))}
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
