import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Filter, Grid, List, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import categoryRings from "@/assets/category-rings.jpg";

const Aneis = () => {
  const [priceRange, setPriceRange] = useState([500, 5000]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Mock produtos de anéis
  const products = [
    {
      id: "1",
      name: "Anel Solitário Diamante Clássico 1ct",
      price: 2450,
      originalPrice: 2890,
      image: categoryRings,
      category: "Anéis",
      isNew: true,
      discount: 15
    },
    {
      id: "2",
      name: "Anel Ouro Rosa 18k com Diamantes",
      price: 1850,
      image: categoryRings,
      category: "Anéis",
      isNew: false
    },
    {
      id: "3",
      name: "Aliança Clássica Ouro Branco 4mm",
      price: 890,
      originalPrice: 1050,
      image: categoryRings,
      category: "Anéis",
      discount: 15
    },
    {
      id: "4",
      name: "Anel Vintage com Esmeralda Central",
      price: 3200,
      image: categoryRings,
      category: "Anéis"
    },
    {
      id: "5",
      name: "Anel Trilogy Três Diamantes",
      price: 2100,
      image: categoryRings,
      category: "Anéis",
      isNew: true
    },
    {
      id: "6",
      name: "Anel Eternidade Pavé Completo",
      price: 1650,
      originalPrice: 1950,
      image: categoryRings,
      category: "Anéis",
      discount: 15
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground transition-colors">Início</a>
          <span>/</span>
          <span className="text-foreground">Anéis</span>
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-playfair text-4xl font-bold mb-4">Anéis</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Descubra a nossa coleção de anéis elegantes, desde solitários clássicos 
            a designs modernos. Cada peça é criada com a máxima qualidade e atenção ao detalhe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filtros Laterais */}
          <aside className="lg:col-span-1">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-playfair text-lg font-semibold mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filtros
              </h3>

              {/* Preço */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Preço (€)</h4>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={5000}
                  min={100}
                  step={50}
                  className="mb-3"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>€{priceRange[0]}</span>
                  <span>€{priceRange[1]}</span>
                </div>
              </div>

              {/* Tipo */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Tipo</h4>
                <div className="space-y-3">
                  {['Solitários', 'Alianças', 'Cocktail', 'Eternidade', 'Vintage'].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox id={type} />
                      <label htmlFor={type} className="text-sm cursor-pointer">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Material</h4>
                <div className="space-y-3">
                  {['Ouro Amarelo', 'Ouro Branco', 'Ouro Rosa', 'Platina'].map((material) => (
                    <div key={material} className="flex items-center space-x-2">
                      <Checkbox id={material} />
                      <label htmlFor={material} className="text-sm cursor-pointer">
                        {material}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pedra */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Pedra Principal</h4>
                <div className="space-y-3">
                  {['Diamante', 'Esmeralda', 'Safira', 'Rubi', 'Sem Pedra'].map((stone) => (
                    <div key={stone} className="flex items-center space-x-2">
                      <Checkbox id={stone} />
                      <label htmlFor={stone} className="text-sm cursor-pointer">
                        {stone}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Área de produtos */}
          <div className="lg:col-span-3">
            {/* Controles superiores */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
              <p className="text-muted-foreground mb-4 sm:mb-0">
                A mostrar {products.length} produtos
              </p>
              
              <div className="flex items-center gap-4">
                {/* Ordenação */}
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevância</SelectItem>
                    <SelectItem value="newest">Mais recentes</SelectItem>
                    <SelectItem value="price-asc">Preço: baixo para alto</SelectItem>
                    <SelectItem value="price-desc">Preço: alto para baixo</SelectItem>
                    <SelectItem value="popularity">Mais populares</SelectItem>
                  </SelectContent>
                </Select>

                {/* Visualização */}
                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Grid de produtos */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onAddToCart={(id) => console.log('Adicionar ao carrinho:', id)}
                  onAddToWishlist={(id) => console.log('Adicionar à wishlist:', id)}
                  onQuickView={(id) => console.log('Ver detalhes:', id)}
                />
              ))}
            </div>

            {/* Paginação */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" disabled>Anterior</Button>
                <Button className="bg-primary text-primary-foreground">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Seguinte</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Aneis;