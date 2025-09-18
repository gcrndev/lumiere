import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { useState } from "react";
import categoryRings from "@/assets/category-rings.jpg";
import categoryEarrings from "@/assets/category-earrings.jpg";
import categoryNecklaces from "@/assets/category-necklaces.jpg";
import categoryBracelets from "@/assets/category-bracelets.jpg";

const FeaturedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock produtos em destaque
  const featuredProducts = [
    {
      id: "1",
      name: "Anel Solitário Diamante Clássico",
      price: 2450,
      originalPrice: 2890,
      image: categoryRings,
      category: "Anéis",
      isNew: true,
      discount: 15
    },
    {
      id: "2", 
      name: "Brincos Pérola Dourada Premium",
      price: 890,
      image: categoryEarrings,
      category: "Brincos",
      isNew: false
    },
    {
      id: "3",
      name: "Colar Gargantilha Elegante",
      price: 1250,
      originalPrice: 1499,
      image: categoryNecklaces,
      category: "Colares",
      discount: 17
    },
    {
      id: "4",
      name: "Pulseira Tennis Diamantes",
      price: 3200,
      image: categoryBracelets,
      category: "Pulseiras"
    },
    {
      id: "5",
      name: "Anel Ouro Rosa Moderno", 
      price: 1850,
      image: categoryRings,
      category: "Anéis",
      isNew: true
    },
    {
      id: "6",
      name: "Brincos Argola Minimalista",
      price: 650,
      originalPrice: 780,
      image: categoryEarrings,
      category: "Brincos", 
      discount: 17
    },
    {
      id: "7",
      name: "Colar Pendente Coração",
      price: 980,
      image: categoryNecklaces,
      category: "Colares"
    },
    {
      id: "8",
      name: "Pulseira Charm Personalizada",
      price: 1450,
      image: categoryBracelets,
      category: "Pulseiras",
      isNew: true
    }
  ];

  const itemsPerView = 4;
  const maxIndex = Math.max(0, featuredProducts.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const handleAddToCart = (id: string) => {
    console.log("Adicionar ao carrinho:", id);
  };

  const handleAddToWishlist = (id: string) => {
    console.log("Adicionar à wishlist:", id);
  };

  const handleQuickView = (id: string) => {
    console.log("Ver detalhes:", id);
  };

  return (
    <section className="py-16 bg-surface-cream">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="font-playfair text-4xl font-bold mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Uma seleção cuidadosa das nossas peças mais adoradas, 
              escolhidas pela sua elegância e qualidade excecionais.
            </p>
          </div>

          <div className="flex gap-2 mt-6 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="hover:bg-accent"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="hover:bg-accent"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Carrossel de produtos */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              width: `${(featuredProducts.length / itemsPerView) * 100}%`
            }}
          >
            {featuredProducts.map((product) => (
              <div 
                key={product.id} 
                className="w-full px-3"
                style={{ width: `${100 / featuredProducts.length}%` }}
              >
                <ProductCard
                  {...product}
                  onAddToCart={handleAddToCart}
                  onAddToWishlist={handleAddToWishlist}
                  onQuickView={handleQuickView}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores de progresso */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-primary' : 'bg-border'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8 py-3 h-auto font-semibold hover:bg-primary hover:text-primary-foreground"
          >
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;