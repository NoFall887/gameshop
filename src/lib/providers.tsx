"use client";

import { createContext, useContext, useRef } from "react";
import { GamesStore, createGamesStore } from "./store";
import { useStore } from "zustand";

export type GamesStoreApi = ReturnType<typeof createGamesStore>;

export const GamesStoreContext = createContext<GamesStoreApi | undefined>(undefined);

export const GamesStoreProvider = ({ children }: { children: React.ReactNode }) => {
    const storeRef = useRef<GamesStoreApi>(null);
    if (!storeRef.current) {
        storeRef.current = createGamesStore();
    }

    return (
        <GamesStoreContext.Provider value={storeRef.current}>
            {children}
        </GamesStoreContext.Provider>
    );
};

export const useGamesStore = <T,>(selector: (store: GamesStore) => T): T => {
    const store = useContext(GamesStoreContext);
    if (!store) {
        throw new Error("useGamesStore must be used within a GamesStoreProvider");
    }
    return useStore(store, selector);
};
