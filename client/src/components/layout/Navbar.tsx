import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sun, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/solutions", label: "Nos Solutions" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <div className="hidden md:flex items-center gap-8">
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

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
           <Link href="/simulateur">
            <Button variant="secondary" className="gap-2 font-medium">
              <Calculator className="h-4 w-4" />
              Simulateur
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
              Devis Gratuit
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className={cn("md:hidden", !isScrolled && location === "/" && "text-white hover:bg-white/10")}>
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
                  <Button variant="outline" className="w-full gap-2 justify-start">
                    <Calculator className="h-4 w-4" />
                    Simulateur d'économies
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="w-full">Devis Gratuit</Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
