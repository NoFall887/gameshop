import { createStore } from "zustand";

export type gameItem = {
    id: string;
    name: string;
    iconUrl: string;
    priceDiscount: number;
    price: number;
};

export type game = {
    createdAt: string;
    name: string;
    image: string;
    publisher: string;
    description: string;
    id: string;
    category: string;
    items: gameItem[];
};

export type GamesState = { games: game[] };

export type GamesAction = {
    loadGames: (games: game[]) => void;
};

export type GamesStore = GamesState & GamesAction;

export const defaultGamesState: GamesState = { games: [] };
export const createGamesStore = (initstate: GamesState = defaultGamesState) => {
    return createStore<GamesStore>()((set) => ({
        ...initstate,
        loadGames: async () => {
            const games: game[] = await fetch(
                "https://6708f839af1a3998ba9fdc6e.mockapi.io/api/v1/products"
            ).then((res) => {
                if (res.ok) {
                    return res.json();
                }
            });
            set({ games });
        },
    }));
};
