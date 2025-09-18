import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contactos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground transition-colors">Início</a>
          <span>/</span>
          <span className="text-foreground">Contactos</span>
        </nav>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl font-bold mb-4">Contactos</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estamos aqui para ajudar. Entre em contacto connosco através de qualquer 
            um dos meios abaixo e teremos todo o prazer em esclarecer as suas dúvidas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Informações de Contacto */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-xl flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-secondary" />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <address className="not-italic text-muted-foreground">
                  <p className="font-medium text-foreground">Lumiére Joalharia</p>
                  <p>Rua Augusta, 123</p>
                  <p>1100-048 Lisboa</p>
                  <p>Portugal</p>
                </address>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-xl flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-secondary" />
                  Telefone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <a href="tel:+351213456789" className="hover:text-secondary transition-colors">
                    +351 213 456 789
                  </a>
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Chamada para rede fixa nacional
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-xl flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-secondary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <a href="mailto:info@lumiere.pt" className="hover:text-secondary transition-colors">
                    info@lumiere.pt
                  </a>
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Resposta em 24h úteis
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-xl flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-secondary" />
                  Horários
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta:</span>
                    <span>10:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span>10:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Fechado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulário de Contacto */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">Envie-nos uma Mensagem</CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e entraremos em contacto consigo o mais breve possível.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      Primeiro Nome *
                    </label>
                    <Input id="firstName" placeholder="O seu primeiro nome" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Último Nome *
                    </label>
                    <Input id="lastName" placeholder="O seu último nome" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input id="email" type="email" placeholder="seu@email.com" required />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefone
                  </label>
                  <Input id="phone" type="tel" placeholder="+351 XXX XXX XXX" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Assunto *
                  </label>
                  <Input id="subject" placeholder="Em que podemos ajudar?" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Descreva a sua questão ou pedido..."
                    rows={6}
                    required
                  />
                </div>

                <div className="text-sm text-muted-foreground">
                  <p>
                    Ao enviar este formulário, concorda com o tratamento dos seus dados pessoais 
                    de acordo com a nossa{" "}
                    <a href="/privacidade" className="text-secondary hover:underline">
                      Política de Privacidade
                    </a>.
                  </p>
                </div>

                <Button className="w-full btn-gradient text-lg py-6">
                  Enviar Mensagem
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mapa (placeholder) */}
        <Card>
          <CardContent className="p-0">
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p className="text-lg font-medium">Mapa da Localização</p>
                <p className="text-sm">Rua Augusta, 123 - Lisboa</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Contactos;