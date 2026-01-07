import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Euro, Sun, MapPin, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Simulator() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  
  // Form State
  const [bill, setBill] = useState(1500); // Annual electricity bill
  const [location, setLocation] = useState("nice");
  
  const handleSimulate = () => {
    setLoading(true);
    // Fake calculation delay
    setTimeout(() => {
        const annualSavings = Math.round(bill * 0.7); // 70% savings
        const roiYears = 6;
        const systemSize = Math.ceil(bill / 300); // Rough estimation logic
        
        // Generate chart data over 20 years
        const data = [];
        let cumulativeSavings = 0;
        const initialCost = systemSize * 2200; // Approx cost per kW
        
        for (let i = 1; i <= 20; i++) {
            const yearlySaving = annualSavings * Math.pow(1.05, i-1); // 5% energy inflation
            cumulativeSavings += yearlySaving;
            data.push({
                year: `An ${i}`,
                savings: Math.round(cumulativeSavings - initialCost), // Net gain
            });
        }

        setResult({
            annualSavings,
            roiYears,
            systemSize,
            data
        });
        setLoading(false);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">
                Estimez votre potentiel solaire
            </h1>
            <p className="text-slate-600 text-lg">
                Découvrez combien vous pouvez économiser en passant à l'autoconsommation. Simulation gratuite et immédiate.
            </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* Input Form */}
            <div className="lg:col-span-4">
                <Card className="border-none shadow-xl">
                    <CardHeader className="bg-slate-900 text-white rounded-t-xl">
                        <CardTitle className="flex items-center gap-2">
                            <Sun className="h-5 w-5 text-yellow-400" />
                            Votre Projet
                        </CardTitle>
                        <CardDescription className="text-slate-400">
                            Renseignez vos informations
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                        <div className="space-y-4">
                            <Label>Votre facture d'électricité annuelle (€)</Label>
                            <div className="flex items-center gap-4">
                                <Input 
                                    type="number" 
                                    value={bill} 
                                    onChange={(e) => setBill(Number(e.target.value))}
                                    className="text-lg font-bold"
                                />
                            </div>
                            <Slider 
                                value={[bill]} 
                                min={500} 
                                max={5000} 
                                step={100} 
                                onValueChange={(vals) => setBill(vals[0])} 
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Localisation</Label>
                            <Select value={location} onValueChange={setLocation}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Sélectionnez votre zone" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="nice">Nice / Alpes-Maritimes (Ensoleillement max)</SelectItem>
                                    <SelectItem value="var">Var / Toulon</SelectItem>
                                    <SelectItem value="provence">Aix-en-Provence / Marseille</SelectItem>
                                    <SelectItem value="other">Autre région (France)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <Button 
                            className="w-full h-12 text-lg font-bold shadow-lg shadow-primary/20" 
                            onClick={handleSimulate}
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Calcul en cours...
                                </>
                            ) : (
                                "Lancer la simulation"
                            )}
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Results */}
            <div className="lg:col-span-8">
                {result ? (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        {/* KPI Cards */}
                        <div className="grid sm:grid-cols-3 gap-4">
                            <Card className="bg-green-50 border-green-100">
                                <CardContent className="p-6 text-center">
                                    <div className="text-sm text-green-600 font-medium mb-1">Économies / an</div>
                                    <div className="text-3xl font-bold text-green-700">{result.annualSavings} €</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-blue-50 border-blue-100">
                                <CardContent className="p-6 text-center">
                                    <div className="text-sm text-blue-600 font-medium mb-1">Rentabilité</div>
                                    <div className="text-3xl font-bold text-blue-700">{result.roiYears} ans</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-amber-50 border-amber-100">
                                <CardContent className="p-6 text-center">
                                    <div className="text-sm text-amber-600 font-medium mb-1">Puissance conseillée</div>
                                    <div className="text-3xl font-bold text-amber-700">{result.systemSize} kWc</div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Chart */}
                        <Card className="border-none shadow-lg">
                            <CardHeader>
                                <CardTitle>Vos gains cumulés sur 20 ans</CardTitle>
                                <CardDescription>Projection tenant compte de l'inflation de l'énergie (5%/an)</CardDescription>
                            </CardHeader>
                            <CardContent className="h-[400px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={result.data}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                        <XAxis 
                                            dataKey="year" 
                                            tick={{fontSize: 12}} 
                                            tickMargin={10} 
                                            interval={2} // Show every 2nd label
                                        />
                                        <YAxis 
                                            tickFormatter={(value) => `${value}€`} 
                                            tick={{fontSize: 12}}
                                        />
                                        <Tooltip 
                                            formatter={(value) => [`${value} €`, "Gain Net Cumulé"]}
                                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                        />
                                        <Bar dataKey="savings" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        <div className="flex justify-end">
                            <Button size="lg" className="px-8 font-bold">
                                Recevoir mon étude détaillée
                            </Button>
                        </div>
                    </motion.div>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-slate-400 bg-white/50 border border-dashed border-slate-200 rounded-xl min-h-[400px]">
                        <div className="bg-slate-100 p-4 rounded-full mb-4">
                            <Euro className="h-8 w-8 text-slate-400" />
                        </div>
                        <p className="text-lg">Remplissez le formulaire pour voir vos résultats</p>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}
