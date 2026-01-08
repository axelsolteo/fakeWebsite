import { Sun, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "wouter";
import { useProfile } from "@/lib/profileContext";

export function Footer() {
  const { currentProfile } = useProfile();
  const brandBase = currentProfile.companyName.replace(/Solteo/, '');

  return (
    <footer className="bg-slate-900 text-slate-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-md text-primary-foreground">
                <Sun className="h-5 w-5 fill-current" />
              </div>
              <span className="font-display font-bold text-xl">Solteo{brandBase}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Expert en solutions photovoltaïques pour les particuliers. 
              Installation certifiée RGE, matériel premium et accompagnement de A à Z.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-white">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/"><a className="hover:text-primary transition-colors">Accueil</a></Link></li>
              <li><Link href="/solutions"><a className="hover:text-primary transition-colors">Nos Solutions</a></Link></li>
              <li><Link href="/realisations"><a className="hover:text-primary transition-colors">Réalisations</a></Link></li>
              <li><Link href="/blog"><a className="hover:text-primary transition-colors">Actualités & Aides</a></Link></li>
              <li><Link href="/simulateur"><a className="hover:text-primary transition-colors">Simulateur</a></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>04 93 00 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@{currentProfile.companyName.toLowerCase()}.fr</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Nice, France</span>
              </li>
            </ul>
          </div>

          {/* Legal / Social */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-white">Suivez-nous</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            <p className="text-xs text-slate-500">
              © 2024 {currentProfile.companyName}.<br />Tous droits réservés.
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Mentions Légales</a>
            <a href="#" className="hover:text-slate-300">Politique de Confidentialité</a>
            <a href="#" className="hover:text-slate-300">CGV</a>
          </div>
          <div>
            Conçu avec énergie ☀️
          </div>
        </div>
      </div>
    </footer>
  );
}
