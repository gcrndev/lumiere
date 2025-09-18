import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Shield, Sparkles } from "lucide-react";
import heroJewelry from "@/assets/hero-jewelry.jpg";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroJewelry}
              alt="Sobre a Lumiére"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-navy/70" />
          </div>
          
          <div className="relative z-10 text-center text-white">
            <h1 className="font-playfair text-5xl font-bold mb-4">
              A Nossa História
            </h1>
            <p className="text-xl font-light max-w-2xl mx-auto">
              Desde 1985, criamos momentos únicos através de joias excepcionais
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          {/* História */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-playfair text-3xl font-bold mb-6">
                  Uma Tradição de Excelência
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    A Lumiére nasceu em 1985 com uma missão simples mas poderosa: 
                    criar joias que celebrem os momentos mais especiais da vida. 
                    Fundada por mestres joalheiros apaixonados pela arte, 
                    rapidamente nos estabelecemos como referência em elegância e qualidade.
                  </p>
                  <p>
                    Ao longo de quase quatro décadas, temos acompanhado famílias 
                    inteiras nos seus momentos mais preciosos - desde pedidos de 
                    casamento a celebrações de aniversário, cada peça que criamos 
                    carrega consigo uma história única.
                  </p>
                  <p>
                    Hoje, a Lumiére combina técnicas tradicionais de joalharia 
                    com design contemporâneo, mantendo sempre o compromisso com 
                    a excelência que nos define desde o primeiro dia.
                  </p>
                </div>
              </div>
              <div className="bg-surface-cream p-8 rounded-xl">
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Award className="w-16 h-16 mx-auto mb-4" />
                    <p className="font-medium">Imagem da nossa oficina</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Valores */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl font-bold mb-4">
                Os Nossos Valores
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Princípios que orientam cada decisão e cada peça que criamos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-3">
                    Excelência
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Cada detalhe é cuidadosamente pensado para garantir 
                    a máxima qualidade em todas as nossas criações.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-3">
                    Paixão
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    A arte da joalharia é a nossa paixão, transmitida 
                    em cada peça que sai das nossas mãos.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-3">
                    Confiança
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Construímos relacionamentos duradouros baseados 
                    na transparência e honestidade.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-3">
                    Tradição
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Honramos as técnicas tradicionais enquanto 
                    abraçamos a inovação e o design contemporâneo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Processo */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl font-bold mb-4">
                O Nosso Processo
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Da conceção à criação, cada joia passa por um processo 
                rigoroso de qualidade e atenção ao detalhe
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                  1
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3">
                  Design & Conceção
                </h3>
                <p className="text-muted-foreground">
                  Cada peça começa com um esboço cuidadoso, onde forma e função 
                  se encontram para criar algo verdadeiramente especial.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                  2
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3">
                  Seleção de Materiais
                </h3>
                <p className="text-muted-foreground">
                  Utilizamos apenas os melhores materiais - ouro certificado, 
                  diamantes de qualidade excepcional e pedras preciosas selecionadas.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                  3
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3">
                  Artesania & Acabamentos
                </h3>
                <p className="text-muted-foreground">
                  Mestres joalheiros dão vida ao design através de técnicas 
                  refinadas, garantindo que cada detalhe seja perfeito.
                </p>
              </div>
            </div>
          </section>

          {/* Compromisso */}
          <section className="bg-surface-cream rounded-xl p-8 text-center">
            <h2 className="font-playfair text-3xl font-bold mb-4">
              O Nosso Compromisso
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-6">
              Na Lumiére, acreditamos que cada cliente merece uma experiência 
              excepcional. Por isso, oferecemos garantia vitalícia em todas as 
              nossas peças, serviço personalizado e atendimento especializado 
              para que possa encontrar a joia perfeita para cada momento especial da sua vida.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">39</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">50k+</div>
                <div className="text-sm text-muted-foreground">Clientes Felizes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Joias Criadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Garantia de Qualidade</div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;