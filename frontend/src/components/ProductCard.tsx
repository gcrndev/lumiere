import { Heart, Eye, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  imageHover?: string;
  isNew?: boolean;
  discount?: number;
  category: string;
  onAddToCart?: (id: string) => void;
  onAddToWishlist?: (id: string) => void;
  onQuickView?: (id: string) => void;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  imageHover,
  isNew,
  discount,
  category,
  onAddToCart,
  onAddToWishlist,
  onQuickView,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  };

  const handleAddToWishlist = () => {
    setIsWishlisted(!isWishlisted);
    onAddToWishlist?.(id);
  };

  return (
    <div 
      className="group relative bg-card rounded-lg overflow-hidden hover-lift animate-fade-in-up"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
        {isNew && (
          <Badge className="bg-primary text-primary-foreground">Novo</Badge>
        )}
        {discount && (
          <Badge className="bg-secondary text-secondary-foreground">-{discount}%</Badge>
        )}
      </div>

      {/* Ações do produto */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
        <Button
          variant="secondary"
          size="icon"
          className="h-8 w-8 bg-background/90 hover:bg-background shadow-medium"
          onClick={handleAddToWishlist}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-secondary text-secondary' : ''}`} />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="h-8 w-8 bg-background/90 hover:bg-background shadow-medium"
          onClick={() => onQuickView?.(id)}
        >
          <Eye className="h-4 w-4" />
        </Button>
      </div>

      {/* Imagem do produto */}
      <div className="aspect-square overflow-hidden bg-surface-cream">
        <img
          src={isHovered && imageHover ? imageHover : image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
      </div>

      {/* Informações do produto */}
      <div className="p-4 space-y-2">
        <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
          {category}
        </div>
        
        <h3 className="font-playfair font-medium text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
          <a href={`/produto/${id}`} className="elegant-underline">
            {name}
          </a>
        </h3>

        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg font-playfair">
            {formatPrice(price)}
          </span>
          {originalPrice && (
            <span className="text-muted-foreground line-through text-sm">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>

        {/* Botão Adicionar ao Carrinho */}
        <div className="pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <Button 
            className="w-full bg-gradient-primary text-primary-foreground hover:shadow-gold"
            onClick={() => onAddToCart?.(id)}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;