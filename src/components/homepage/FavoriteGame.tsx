"use client";

import { useGamesStore } from "@/lib/providers";
import { game } from "@/lib/store";
import { useEffect, useState } from "react";
import FavoriteGameCard from "./FavoriteGameCard";

type categories = "MOBILE" | "PC" | null;

const gamesCategories: Array<{ name: string; filter: categories }> = [
    {
        name: "Rekomendasi",
        filter: null,
    },
    {
        name: "Mobile Game",
        filter: "MOBILE",
    },
    {
        name: "PC Game",
        filter: "PC",
    },
];

const FavoriteGame = () => {
    const [category, setCategory] = useState<categories>(null);
    const { games } = useGamesStore((state) => state);
    const [filteredGames, setFilteredGames] = useState<game[]>([]);

    useEffect(() => {
        setFilteredGames(
            games.filter((game) => {
                if (category === null) {
                    return true;
                }
                return game.category === category;
            })
        );
    }, [games, category]);
    return (
        <>
            <h2 className="font-semibold text-base sm:text-3xl text-white mb-8">
                Temukan Game Favorit
            </h2>
            <div className="flex-col sm:flex-row flex gap-10 sm:gap-16">
                <div className=" w-full sm:w-40 rounded-lg flex flex-row sm:flex-col">
                    {gamesCategories.map((gamecategory) => (
                        <button
                            key={gamecategory.name}
                            onClick={() => setCategory(gamecategory.filter)}
                            className={`w-full rounded-lg text-sm sm:text-base p-4 sm:text-start text-center transition-all duration-200 ease-in-out ${
                                gamecategory.filter === category
                                    ? "bg-white text-black"
                                    : "hover:bg-stone-800"
                            }`}
                        >
                            {gamecategory.name}
                        </button>
                    ))}
                </div>
                <div className="flex flex-wrap gap-3 justify-center sm:justify-start sm:gap-10 ">
                    {filteredGames.map((game) => (
                        <FavoriteGameCard key={game.id} game={game} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default FavoriteGame;
