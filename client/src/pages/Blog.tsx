import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "MaPrimeRénov' 2026 : Ce qui change pour le solaire",
    excerpt: "Tout savoir sur les nouvelles aides de l'état pour l'installation de panneaux photovoltaïques en 2026. Barèmes, éligibilité et démarches.",
    category: "Aides Financières",
    date: "12 Jan 2026",
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?q=80&w=1964&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Comment fonctionne l'autoconsommation avec revente ?",
    excerpt: "Comprendre le mécanisme de l'EDF OA (Obligation d'Achat). Comment vendre votre surplus d'électricité et rentabiliser votre installation plus vite.",
    category: "Guide Technique",
    date: "05 Jan 2026",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf2f26f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Panneaux solaires : Quelle durée de vie réelle ?",
    excerpt: "Démêlons le vrai du faux sur la longévité des installations solaires modernes. Performance garantie, maintenance et recyclage.",
    category: "Actualités",
    date: "28 Dec 2025",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
  }
];

export default function Blog() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">Le Blog Solaire</Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Actualités et conseils d'experts
          </h1>
          <p className="text-slate-600 text-lg">
            Restez informé sur les dernières innovations et les aides disponibles pour votre projet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-primary font-bold shadow-sm">{article.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6 flex-grow">
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0 mt-auto">
                <Button variant="link" className="px-0 text-primary font-semibold hover:no-underline group/btn">
                    Lire l'article <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
