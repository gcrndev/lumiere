import { Button } from "@/components/ui/button";
import heroJewelry from "@/assets/hero-jewelry.jpg";

const Hero = () => {
  return (
    <section className="relative h-[48vh] flex items-center justify-center overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroJewelry}
          alt="Lumiére Jewelry Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="font-playfair text-2xl md:text-6xl font-bold mb-3 leading-tight">
            Joias que Contam
            <span className="block text-brand-navy">Histórias</span>
          </h1>

          <p className="text-lg md:text-xl font-light mb-6 max-w-2xl mx-auto opacity-90">
            Lorem ipsum dolor sit amet consectetur
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="outline"
              size="lg"
              className="text-base px-6 py-3 h-auto bg-transparent border-white text-white hover:bg-brand-navy hover:text-brand-gold-light hover:border-brand-navy transition-colors"
            >
              Ver Novidades
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
