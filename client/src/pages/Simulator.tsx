import { useProfile } from "@/lib/profileContext";

export default function Simulator() {
  const { currentProfile } = useProfile();

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">
                Estimez votre potentiel solaire
            </h1>
            <p className="text-slate-600 text-lg">
                Découvrez combien vous pouvez économiser en passant à l'autoconsommation avec notre outil officiel {currentProfile.companyName}.
            </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
          <iframe 
            key={currentProfile.companyId}
            src={`https://app.solteo.fr/lead-magnet?companyId=${currentProfile.companyId}`} 
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
        
        <div className="mt-12 text-center text-slate-500 text-sm">
          <p>En utilisant ce simulateur, vous acceptez d'être recontacté par un expert {currentProfile.companyName} pour affiner votre projet.</p>
        </div>
      </div>
    </div>
  );
}
