import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface Profile {
  id: string;
  name: string;
  companyName: string;
  companyId: string;
  theme: {
    primary: string;
    secondary: string;
  };
}

// Profils avec Company IDs et thèmes de couleurs
export const profiles: Profile[] = [
  { 
    id: "A", 
    name: "Profil A", 
    companyName: "SolteoPose",
    companyId: "237959bb-84ac-438c-b8eb-7a6c8ca2cda5",
    theme: {
      primary: "142 71% 45%",      // Vert vif (original)
      secondary: "215 90% 32%",    // Bleu profond
    }
  },
  { 
    id: "B", 
    name: "Profil B", 
    companyName: "SolteoInstall",
    companyId: "77777777-7777-7777-7777-777777777777",
    theme: {
      primary: "199 89% 48%",      // Cyan / Bleu ciel
      secondary: "221 83% 53%",    // Bleu électrique
    }
  },
  { 
    id: "C", 
    name: "Profil C", 
    companyName: "SolteoEnergy",
    companyId: "88888888-8888-8888-8888-888888888888",
    theme: {
      primary: "38 92% 50%",       // Orange solaire
      secondary: "25 95% 53%",     // Orange foncé
    }
  },
  { 
    id: "D", 
    name: "Profil D", 
    companyName: "SolteoGreen",
    companyId: "99999999-9999-9999-9999-999999999999",
    theme: {
      primary: "158 64% 52%",      // Vert menthe / émeraude
      secondary: "160 84% 39%",    // Vert forêt
    }
  },
];

interface ProfileContextType {
  currentProfile: Profile;
  setCurrentProfile: (profile: Profile) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [currentProfile, setCurrentProfile] = useState<Profile>(profiles[0]);

  // Apply theme colors when profile changes
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary', currentProfile.theme.primary);
    root.style.setProperty('--secondary', currentProfile.theme.secondary);
    root.style.setProperty('--ring', currentProfile.theme.primary);
  }, [currentProfile]);

  return (
    <ProfileContext.Provider value={{ currentProfile, setCurrentProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
}
