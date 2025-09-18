import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import lumierelogo from "@/assets/lumiere-logo.png";

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-playfair text-2xl font-semibold mb-4">
              Subscreva a nossa Newsletter
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Receba em primeira mão as nossas novidades, ofertas exclusivas e conselhos de joalharia.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="O seu email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-brand-gold-light"
              />
              <Button className="btn-gradient whitespace-nowrap">
                Subscrever
              </Button>
            </div>
            <p className="text-xs text-primary-foreground/60 mt-3">
              Ao subscrever, concorda com os nossos Termos de Serviço e Política de Privacidade.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={lumierelogo} alt="Lumiére" className="h-8 w-8" />
              <span className="font-playfair text-xl font-bold">Lumiére</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Desde 1985, criamos joias que celebram os momentos mais especiais da sua vida. 
              Cada peça é cuidadosamente selecionada para garantir a máxima qualidade e elegância.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Loja</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/novidades" className="text-primary-foreground/80 hover:text-brand-gold-light transition-colors elegant-underline">Novidades</a></li>
              <li><a href="/aneis" className="text-primary-foreground/80 hover:text-brand-gold-light transition-colors elegant-underline">Anéis</a></li>
              <li><a href="/brincos" className="text-primary-foreground/80 hover:text-brand-gold-light transition-colors elegant-underline">Brincos</a></li>
              <li><a href="/colares" className="text-primary-foreground/80 hover:text-brand-gold-light transition-colors elegant-underline">Colares</a></li>
              <li><a href="/pulseiras" className="text-primary-foreground/80 hover:text-brand-gold-light transition-colors elegant-underline">Pulseiras</a></li>
              <li><a href="/aliancas" className="text-primary-foreground/80 hover:text-brand-gold-light transition-colors elegant-underline">Alianças</a></li>
              <li><a href="/promocoes" className="text-primary-foreground/80 hover:text-brand-gold-light transition-colors elegant-underline">Promoções</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Atendimento</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/contactos" className="text-primary-foreground/80 hover:text-brand-gold-light transition-colors elegant-underline">Contactos</a></li>
              <li><a href="/envios" className="text-primary-foreground/80 hover:text-brand-gold-light transition-colors elegant-underline">Envios & Devoluções</a></li>
              <li><a href="/guia-tamanhos" className="text-primary-foreground/80 hover:text-brand-gold-light transition-colors elegant-underline">Guia de Tamanhos</a></li>
              <li><a href="/garantia" className="text-primary-foreground/80 hover:text-brand-gold-light transition-colors elegant-underline">Garantia</a></li>
              <li><a href="/cuidados" className="text-primary-foreground/80 hover:text-brand-gold-light transition-colors elegant-underline">Cuidados com Joias</a></li>
              <li><a href="/faq" className="text-primary-foreground/80 hover:text-brand-gold-light transition-colors elegant-underline">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-brand-gold-light" />
                <div className="text-primary-foreground/80">
                  <p>Rua Augusta, 123</p>
                  <p>1100-048 Lisboa</p>
                  <p>Portugal</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-brand-gold-light" />
                <span className="text-primary-foreground/80">+351 213 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-gold-light" />
                <span className="text-primary-foreground/80">info@lumiere.pt</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium mb-2">Horário de Atendimento</h5>
              <div className="text-xs text-primary-foreground/70 space-y-1">
                <p>Segunda a Sexta: 10:00 - 19:00</p>
                <p>Sábado: 10:00 - 17:00</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60">
              © 2024 Lumiére. Todos os direitos reservados.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="/privacidade" className="text-primary-foreground/60 hover:text-brand-gold-light transition-colors elegant-underline">
                Política de Privacidade
              </a>
              <a href="/termos" className="text-primary-foreground/60 hover:text-brand-gold-light transition-colors elegant-underline">
                Termos e Condições
              </a>
              <a href="/cookies" className="text-primary-foreground/60 hover:text-brand-gold-light transition-colors elegant-underline">
                Política de Cookies
              </a>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-primary-foreground/60">Pagamento seguro:</span>
              <div className="flex gap-1">
                <div className="w-8 h-5 bg-white/10 rounded border border-white/20 flex items-center justify-center">
                  <span className="text-[8px] text-white/80">VISA</span>
                </div>
                <div className="w-8 h-5 bg-white/10 rounded border border-white/20 flex items-center justify-center">
                  <span className="text-[8px] text-white/80">MC</span>
                </div>
                <div className="w-8 h-5 bg-white/10 rounded border border-white/20 flex items-center justify-center">
                  <span className="text-[7px] text-white/80">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;