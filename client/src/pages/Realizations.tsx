import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";
import stockHouse from "@assets/stock_images/beautiful_french_pro_9ea2dfc3.jpg";
import stockFamily from "@assets/stock_images/family_house_exterio_bf63191d.jpg";

const projects = [
  {
    id: 1,
    location: "Mougins (06)",
    size: "6 kWc",
    type: "Résidentiel",
    image: stockHouse,
    review: "Installation impeccable, équipe très professionnelle. Mes factures ont été divisées par 3 !",
    author: "Jean-Marc D."
  },
  {
    id: 2,
    location: "Antibes (06)",
    size: "3 kWc",
    type: "Résidentiel",
    image: stockFamily,
    review: "Je recommande Solteo Pose les yeux fermés. Le suivi administratif a été parfait.",
    author: "Sophie L."
  },
  {
    id: 3,
    location: "Vence (06)",
    size: "9 kWc",
    type: "Villa",
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=1974&auto=format&fit=crop",
    review: "Excellent travail. Les panneaux Full Black sont très discrets sur ma toiture.",
    author: "Pierre A."
  }
];

export default function Gallery() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">Nos Réalisations</Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Ils produisent leur propre énergie
          </h1>
          <p className="text-slate-600 text-lg">
            Découvrez les projets de nos clients satisfaits dans les Alpes-Maritimes et le Var.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-white/90 text-slate-900 backdrop-blur-sm shadow-sm hover:bg-white">{project.type}</Badge>
                </div>
                <img 
                  src={project.image} 
                  alt={`Projet ${project.location}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-display font-bold text-lg flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        {project.location}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium">{project.size}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((s) => (
                        <Star key={s} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-slate-600 italic text-sm border-l-2 border-primary/30 pl-4 mb-4">
                    "{project.review}"
                </blockquote>
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    — {project.author}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
