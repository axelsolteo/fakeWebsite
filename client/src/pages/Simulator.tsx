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
        
        {/* Mentions RGPD */}
        <div className="mt-8 max-w-4xl mx-auto text-center text-slate-500 text-xs leading-relaxed space-y-2 px-4">
          <p className="font-medium text-slate-600">Mentions légales et RGPD</p>
          <p>
            En soumettant ce formulaire, vous acceptez que vos données personnelles soient collectées et traitées par {currentProfile.companyName} dans le but de vous recontacter pour vous proposer une offre personnalisée concernant l'installation de panneaux solaires.
          </p>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données, ainsi que d'un droit d'opposition et de limitation du traitement. Vous pouvez exercer ces droits en nous contactant à l'adresse : contact@{currentProfile.companyName.toLowerCase()}.fr
          </p>
          <p>
            Vos données sont conservées pendant une durée de 3 ans à compter de votre dernier contact avec nous et ne sont jamais transmises à des tiers sans votre consentement explicite.
          </p>
        </div>
      </div>
    </div>
  );
}
