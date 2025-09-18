import { useState } from "react";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import lumierelogo from "@/assets/lumiere-logo.png";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartItems] = useState(3); // Mock cart items
  const [wishlistItems] = useState(5); // Mock wishlist items

  const categories = [
    {
      name: "Anéis",
      href: "/aneis",
      subcategories: [
        { name: "Anéis de Noivado", href: "/aneis/noivado" },
        { name: "Anéis Solitários", href: "/aneis/solitarios" },
        { name: "Alianças", href: "/aneis/aliancas" },
        { name: "Anéis Cocktail", href: "/aneis/cocktail" }
      ]
    },
    {
      name: "Brincos",
      href: "/brincos",
      subcategories: [
        { name: "Brincos Pendentes", href: "/brincos/pendentes" },
        { name: "Argolas", href: "/brincos/argolas" },
        { name: "Studs", href: "/brincos/studs" },
        { name: "Ear Cuffs", href: "/brincos/ear-cuffs" }
      ]
    },
    {
      name: "Colares",
      href: "/colares",
      subcategories: [
        { name: "Gargantilhas", href: "/colares/gargantilhas" },
        { name: "Pendentes", href: "/colares/pendentes" },
        { name: "Correntes", href: "/colares/correntes" },
        { name: "Lariats", href: "/colares/lariats" }
      ]
    },
    {
      name: "Pulseiras",
      href: "/pulseiras",
      subcategories: [
        { name: "Pulseiras Tennis", href: "/pulseiras/tennis" },
        { name: "Pulseiras Charm", href: "/pulseiras/charm" },
        { name: "Braceletes", href: "/pulseiras/braceletes" },
        { name: "Pulseiras Corrente", href: "/pulseiras/corrente" }
      ]
    }
  ];

  return (
    <>
      {/* Barra de aviso superior */}
      <div className="bg-brand-navy text-primary-foreground text-center py-2 px-4 text-sm font-medium">
        <p>✨ Portes grátis para compras superiores a €75 • Devolução gratuita até 30 dias</p>
      </div>

      {/* Header principal */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur glass-effect">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <Sheet>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <div className="flex flex-col space-y-4 mt-8">
                    <img src={lumierelogo} alt="Lumiére" className="h-12 w-12 mb-6" />
                    {categories.map((category) => (
                      <div key={category.name} className="space-y-2">
                        <h3 className="font-playfair font-semibold text-lg">{category.name}</h3>
                        {category.subcategories.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className="block text-muted-foreground hover:text-foreground transition-colors pl-4 elegant-underline"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
              
              <a href="/" className="flex items-center space-x-2">
                <img src={lumierelogo} alt="Lumiére" className="h-10 w-10" />
                <span className="font-playfair text-xl font-bold">Lumiére</span>
              </a>
            </div>

            {/* Navegação Desktop */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="/novidades"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 elegant-underline"
                  >
                    Novidades
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {categories.map((category) => (
                  <NavigationMenuItem key={category.name}>
                    <NavigationMenuTrigger className="elegant-underline">
                      {category.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-80">
                        {category.subcategories.map((subcategory) => (
                          <NavigationMenuLink
                            key={subcategory.name}
                            href={subcategory.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{subcategory.name}</div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}

                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="/colecoes"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 elegant-underline"
                  >
                    Coleções
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="/promocoes"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 elegant-underline text-secondary"
                  >
                    Promoções
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Barra de pesquisa - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Pesquisar joias..."
                  className="pl-9 pr-4 w-full border-border/50 focus:border-primary"
                />
              </div>
            </div>

            {/* Ícones da direita */}
            <div className="flex items-center space-x-2">
              {/* Pesquisa Mobile */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
              </Button>

              <Button variant="ghost" size="icon" className="relative">
                <User className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                {wishlistItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-secondary">
                    {wishlistItems}
                  </Badge>
                )}
              </Button>

              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-secondary">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>

          {/* Barra de pesquisa Mobile */}
          {isSearchOpen && (
            <div className="md:hidden border-t bg-background p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Pesquisar joias..."
                  className="pl-9 pr-4 w-full"
                  autoFocus
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;