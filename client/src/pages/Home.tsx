import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Leaf, PiggyBank, Zap, ShieldCheck, Home as HomeIcon } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/modern_solar_panels_on_a_french_residential_roof.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Installation solaire moderne sur toit" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground font-medium text-sm backdrop-blur-sm mb-4">
                🌿 Installateur certifié RGE QualiPV
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1]">
                Votre énergie, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">
                  Notre expertise.
                </span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-slate-200 leading-relaxed"
            >
              Réduisez votre facture d'électricité jusqu'à 70% grâce à nos solutions photovoltaïques sur-mesure. Une installation clé en main, rentable et durable.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/contact">
                <Button size="lg" className="text-lg h-14 px-8 shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-0.5">
                  Demander mon étude gratuite
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="#simulateur-section">
                <Button variant="outline" size="lg" className="text-lg h-14 px-8 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm">
                  Estimer mes économies
                </Button>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest">Découvrir</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-primary py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <div>
              <div className="text-4xl font-display font-bold mb-1">15+</div>
              <div className="text-sm opacity-80">Années d'expérience</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold mb-1">500+</div>
              <div className="text-sm opacity-80">Projets réalisés</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold mb-1">-70%</div>
              <div className="text-sm opacity-80">Sur votre facture</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold mb-1">100%</div>
              <div className="text-sm opacity-80">Satisfaction client</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SOLAR */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Pourquoi passer au solaire aujourd'hui ?
            </h2>
            <p className="text-muted-foreground text-lg">
              L'énergie solaire n'a jamais été aussi accessible et performante. C'est le moment idéal pour investir dans votre indépendance énergétique.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: PiggyBank,
                title: "Économies Immédiates",
                description: "Produisez votre propre électricité et protégez-vous des hausses constantes des tarifs de l'énergie. Rentabilité assurée en quelques années."
              },
              {
                icon: Leaf,
                title: "Énergie Verte",
                description: "Participez activement à la transition énergétique en consommant une énergie propre, locale et renouvelable. Réduisez votre empreinte carbone."
              },
              {
                icon: HomeIcon,
                title: "Valorisation Immobilière",
                description: "Une maison équipée de panneaux solaires voit sa valeur augmenter. Améliorez le DPE de votre logement pour une future revente."
              }
            ].map((feature, idx) => (
              <Card key={idx} className="border-none shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="pt-8 px-8 pb-8 text-center">
                  <div className="bg-primary/10 text-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent rounded-3xl transform rotate-3 scale-105 z-0" />
              <img 
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop" 
                alt="Installation solaire" 
                className="rounded-3xl shadow-2xl relative z-10 w-full"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl z-20 hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Garantie 25 ans</div>
                    <div className="text-sm text-slate-500">Performance linéaire</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">L'expertise Solteo</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                Une installation de qualité, <br/>sans compromis.
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Chez Solteo Pose, nous ne nous contentons pas de poser des panneaux. Nous concevons le système énergétique optimal pour votre habitation, en tenant compte de votre consommation, de votre exposition et de votre budget.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Étude personnalisée et dimensionnement précis",
                  "Matériel premium (SunPower, DualSun, Enphase)",
                  "Démarches administratives incluses (Mairie, Consuel, EDF OA)",
                  "Service après-vente réactif et maintenance"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/solutions">
                <Button size="lg" variant="secondary" className="px-8">
                  Découvrir nos solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATED SIMULATOR SECTION */}
      <section className="py-24 bg-background border-t border-slate-100" id="simulateur-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Estimez vos économies en 2 minutes
            </h2>
            <p className="text-slate-600 text-lg">
              Utilisez notre configurateur pour découvrir le potentiel solaire de votre toiture.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
            <iframe 
              src="https://app.solteo.fr/lead-magnet?companyId=237959bb-84ac-438c-b8eb-7a6c8ca2cda5" 
              title="Formulaire Estimation Solaire Solteo" 
              width="100%" 
              height="870px" 
              frameBorder="0" 
              allow="geolocation" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-secondary rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <Zap className="h-12 w-12 mx-auto mb-6 text-yellow-400 fill-yellow-400" />
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Prêt à passer au solaire ?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Obtenez votre étude personnalisée gratuite en moins de 2 minutes. Découvrez combien vous pouvez économiser dès aujourd'hui.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-secondary hover:bg-blue-50 text-lg h-14 px-8">
                    Devis Gratuit
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg h-14 px-8">
                  Parler à un expert
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
