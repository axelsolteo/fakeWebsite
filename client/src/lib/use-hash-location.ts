import { useSyncExternalStore } from "react";
import { BaseLocationHook, navigate } from "wouter/use-location";

// returns the current hash location (minus the # symbol)
const currentLoc = () => window.location.hash.replace(/^#/, "") || "/";

export const useHashLocation: BaseLocationHook = () => {
    const location = useSyncExternalStore(
        (onChange) => {
            window.addEventListener("hashchange", onChange);
            return () => window.removeEventListener("hashchange", onChange);
        },
        () => currentLoc()
    );

    return [location, (to: string) => navigate("#" + to)];
};
