import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Battery, Zap, Sun } from "lucide-react";
import stockInverter from "@assets/stock_images/solar_inverter_95f84260.jpg";
import stockPanel from "@assets/generated_images/modern_solar_panels_on_a_french_residential_roof.png";

export default function Solutions() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">Nos Technologies</Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Des équipements premium pour une performance durable
          </h1>
          <p className="text-slate-600 text-lg">
            Nous sélectionnons rigoureusement nos partenaires pour vous garantir les meilleurs rendements du marché et une fiabilité à toute épreuve.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <img 
              src={stockPanel} 
              alt="Panneaux solaires monocristallins" 
              className="rounded-3xl shadow-xl relative z-10 w-full"
            />
          </div>
          <div>
            <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <Sun className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-display font-bold mb-4">Panneaux Monocristallins</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Nos panneaux dernière génération offrent un rendement exceptionnel même par faible luminosité. Esthétiques "Full Black", ils s'intègrent parfaitement à votre toiture.
            </p>
            <ul className="space-y-3">
              {[
                "Technologie Shingled : Plus de puissance par m²",
                "Garantie produit et performance 25 ans",
                "Esthétique premium Full Black",
                "Résistance aux intempéries (grêle, vent)"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <span className="font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1">
            <div className="bg-amber-100 w-12 h-12 rounded-xl flex items-center justify-center text-amber-600 mb-6">
              <Zap className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-display font-bold mb-4">Micro-Onduleurs Enphase</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Le cerveau de votre installation. Contrairement à un onduleur central, les micro-onduleurs optimisent la production de chaque panneau indépendamment.
            </p>
            <ul className="space-y-3">
              {[
                "Production optimisée (+5 à 10% de rendement)",
                "Pas de point unique de défaillance",
                "Surveillance panneau par panneau",
                "Garantie 25 ans standard"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <span className="font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group order-1 lg:order-2">
             <div className="absolute inset-0 bg-amber-100 rounded-3xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500" />
             <img 
               src={stockInverter} 
               alt="Micro onduleur solaire"
               className="rounded-3xl shadow-xl relative z-10 w-full"
             />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
            <div className="text-center mb-10">
                <h3 className="text-2xl font-display font-bold mb-2">Options de Stockage</h3>
                <p className="text-slate-500">Maximisez votre autoconsommation</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Batterie Virtuelle", desc: "Stockez votre surplus sur le réseau et récupérez-le quand vous en avez besoin via notre partenaire." },
                    { title: "Batterie Physique", desc: "Stockage physique Lithium-Ion pour une autonomie maximale, même en cas de coupure réseau." },
                    { title: "Pilotage Intelligent", desc: "Système domotique pour déclencher vos appareils (chauffe-eau, VE) au moment de la production." }
                ].map((opt, i) => (
                    <Card key={i} className="border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Battery className="h-5 w-5 text-primary" />
                                {opt.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-base">
                                {opt.desc}
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
