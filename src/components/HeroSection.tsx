import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-32"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-primary/70" />

      <div className="container relative mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-4xl font-bold md:text-6xl"
        >
          <span className="text-secondary">GR</span> Design
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mb-8 max-w-xl text-lg text-secondary/90"
        >
          Papelaria & Personalizados — cada projeto realizado com amor e carinho ✨
        </motion.p>
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="#catalogo"
          className="inline-block rounded-lg bg-secondary px-8 py-3 font-semibold text-secondary-foreground transition-transform hover:scale-105"
        >
          Ver Catálogo
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
