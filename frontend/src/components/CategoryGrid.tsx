import categoryRings from "@/assets/category-rings.jpg";
import categoryEarrings from "@/assets/category-earrings.jpg";
import categoryNecklaces from "@/assets/category-necklaces.jpg";
import categoryBracelets from "@/assets/category-bracelets.jpg";
import { Link, NavLink } from "react-router-dom";

interface Category {
  id: string;
  name: string;
  image: string;
  href: string;
  description?: string;
}

const CategoryGrid = () => {
  const categories: Category[] = [
    {
      id: "aneis",
      name: "Anéis",
      image: categoryRings,
      href: "/aneis",
      description: "Anéis de noivado, alianças e solitários",
    },
    {
      id: "brincos",
      name: "Brincos",
      image: categoryEarrings,
      href: "/brincos",
      description: "Studs, argolas e brincos pendentes",
    },
    {
      id: "colares",
      name: "Colares",
      image: categoryNecklaces,
      href: "/colares",
      description: "Gargantilhas, pendentes e correntes",
    },
    {
      id: "pulseiras",
      name: "Pulseiras",
      image: categoryBracelets,
      href: "/pulseiras",
      description: "Pulseiras tennis, charm e braceletes",
    },
    {
      id: "aliancas",
      name: "Alianças",
      image: categoryRings,
      href: "/aliancas",
      description: "Alianças de casamento clássicas e modernas",
    },
    {
      id: "colecoes",
      name: "Coleções",
      image: categoryNecklaces,
      href: "/colecoes",
      description: "Coleções exclusivas e limitadas",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold mb-4">
            Descubra as Nossas Categorias
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={category.href}
              className={`group relative overflow-hidden rounded-xl bg-surface-cream hover-lift animate-fade-in-up ${
                index === categories.length - 1 && categories.length % 3 !== 0
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Imagem */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Conteúdo */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-playfair text-2xl font-semibold mb-2 group-hover:text-brand-gold-light transition-colors">
                  {category.name}
                </h3>
                {category.description && (
                  <p className="text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {category.description}
                  </p>
                )}
              </div>

              {/* Indicador de hover */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
