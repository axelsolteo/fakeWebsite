import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sun, Calculator, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/solutions", label: "Nos Solutions" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/blog", label: "Blog" },
];

// Profils avec Company IDs hardcodés
const profiles = [
  { id: "A", name: "Profil A", companyId: "237959bb-84ac-438c-b8eb-7a6c8ca2cda5" },
  { id: "B", name: "Profil B", companyId: "77777777-7777-7777-7777-777777777777" },
  { id: "C", name: "Profil C", companyId: "88888888-8888-8888-8888-888888888888" },
  { id: "D", name: "Profil D", companyId: "99999999-9999-9999-9999-999999999999" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const [currentProfile, setCurrentProfile] = useState(profiles[0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync profile with local storage or state to be used in simulator
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('profileChanged', { detail: currentProfile }));
  }, [currentProfile]);

  const scrollToSimulator = (e: React.MouseEvent) => {
    if (location === "/") {
      e.preventDefault();
      const section = document.getElementById("simulateur-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-lg text-primary-foreground group-hover:bg-primary/90 transition-colors">
              <Sun className="h-6 w-6 fill-current" />
            </div>
            <span className={cn(
              "font-display font-bold text-2xl tracking-tight transition-colors",
              !isScrolled && location === "/" ? "text-white" : "text-foreground"
            )}>
              Solteo<span className="text-primary">Pose</span>
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === link.href 
                    ? "text-primary font-semibold" 
                    : !isScrolled && location === "/" ? "text-white/90 hover:text-white" : "text-foreground/80"
                )}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        {/* CTA & Profile Selector */}
        <div className="hidden md:flex items-center gap-4">
           <Link href="/simulateur">
            <a onClick={scrollToSimulator}>
              <Button className="gap-2 font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                <Calculator className="h-4 w-4" />
                Simulateur Gratuit
              </Button>
            </a>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={cn(
                "gap-2 font-semibold",
                !isScrolled && location === "/" ? "text-white hover:bg-white/10" : "text-foreground"
              )}>
                <User className="h-4 w-4" />
                {currentProfile.name}
                <ChevronDown className="h-3 w-3 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Se connecter en tant que</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {profiles.map((profile) => (
                <DropdownMenuItem 
                  key={profile.id}
                  onClick={() => setCurrentProfile(profile)}
                  className={cn(currentProfile.id === profile.id && "bg-primary/10 text-primary")}
                >
                  {profile.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className={cn("lg:hidden", !isScrolled && location === "/" && "text-white hover:bg-white/10")}>
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-6 mt-10">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    location === link.href && "text-primary"
                  )}>
                    {link.label}
                  </a>
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Link href="/simulateur">
                  <a onClick={scrollToSimulator}>
                    <Button className="w-full gap-2 justify-center font-bold">
                      <Calculator className="h-4 w-4" />
                      Simulateur Gratuit
                    </Button>
                  </a>
                </Link>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Profil sélectionné</p>
                  <div className="grid grid-cols-2 gap-2">
                    {profiles.map((profile) => (
                      <Button 
                        key={profile.id}
                        variant={currentProfile.id === profile.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentProfile(profile)}
                      >
                        {profile.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
