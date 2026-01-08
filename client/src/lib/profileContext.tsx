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

// Profils avec Company IDs hardcodés
export const profiles: Profile[] = [
  { 
    id: "A", 
    name: "Manon", 
    companyName: "SolteoPose",
    companyId: "237959bb-84ac-438c-b8eb-7a6c8ca2cda5",
    theme: {
      primary: "142 71% 45%",      // Vert vif (original)
      secondary: "142 71% 45%",    // Vert vif
    }
  },
  { 
    id: "B", 
    name: "Clara", 
    companyName: "SolteoInstall",
    companyId: "b22249a5-0ddc-4c32-8d0e-9f62a163022e",
    theme: {
      primary: "199 89% 48%",      // Cyan / Bleu ciel
      secondary: "199 89% 48%",      // Cyan / Bleu ciel
    }
  },
  { 
    id: "C", 
    name: "Marion", 
    companyName: "SolteoEnergy",
    companyId: "724a24f0-a5d5-49ff-a906-fc473cd91dbc",
    theme: {
      primary: "38 92% 50%",       // Orange solaire
      secondary: "38 92% 50%",       // Orange solaire
    }
  },
  { 
    id: "D", 
    name: "Margaux", 
    companyName: "SolteoPose",
    companyId: "237959bb-84ac-438c-b8eb-7a6c8ca2cda5",
    theme: {
      primary: "142 71% 45%",      // Vert vif (original)
      secondary: "142 71% 45%",      // Vert vif (original)
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
