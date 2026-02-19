import { motion } from "framer-motion";
import aboutBg from "@/assets/about-bg.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="relative overflow-hidden py-16 md:py-24">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${aboutBg})` }}
      />
      <div className="absolute inset-0 bg-muted/80" />

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-8 text-3xl font-bold text-primary md:text-4xl">Sobre a Empresa</h2>
          <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
            Fundada em 2023, nossa empresa de design se dedica a transformar ideias em realidade com
            criatividade e precisão. Especializados em edição de imagens, criação de logos, tags,
            panfletos e uma ampla gama de serviços de design, estamos comprometidos em atender às
            necessidades e desejos dos nossos clientes. Cada projeto é realizado com muito amor e
            carinho, garantindo que o resultado final não apenas atenda, mas supere as expectativas.
            Nossa prioridade é a satisfação do cliente, e trabalhamos incansavelmente para entregar
            soluções personalizadas que refletem a visão única de cada um.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
