import { Switch, Route, Router as WouterRouter } from "wouter";
import { useHashLocation } from "./lib/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ProfileProvider } from "@/lib/profileContext";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Solutions from "@/pages/Solutions";
import Gallery from "@/pages/Realizations";
import Blog from "@/pages/Blog";
import Simulator from "@/pages/Simulator";
import Contact from "@/pages/Contact";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <WouterRouter hook={useHashLocation}>
        <Navbar />
        <main className="flex-grow">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/solutions" component={Solutions} />
            <Route path="/realisations" component={Gallery} />
            <Route path="/blog" component={Blog} />
            <Route path="/simulateur" component={Simulator} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </WouterRouter>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ProfileProvider>
          <Toaster />
          <Router />
        </ProfileProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
