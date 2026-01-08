import { useSyncExternalStore } from "react";

const currentLoc = () => window.location.hash.replace(/^#/, "") || "/";

export const useHashLocation = () => {
    const location = useSyncExternalStore(
        (onChange) => {
            window.addEventListener("hashchange", onChange);
            return () => window.removeEventListener("hashchange", onChange);
        },
        () => currentLoc()
    );

    const navigate = (to: string) => {
        window.location.hash = to;
    };

    return [location, navigate] as const;
};
