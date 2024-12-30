"use client";
import { useEffect } from "react";
import FlashSaleCard from "./FlashSaleCard";
import { useGamesStore } from "@/lib/providers";
import { Skeleton } from "../ui/skeleton";

const FlashSale = () => {
    const { games, loadGames } = useGamesStore((state) => state);
    useEffect(() => {
        loadGames();
    }, [loadGames]);
    if (games.length > 0) {
        const { name, image, items, id } = games[0];
        return (
            <div className="flex sm:grid sm:grid-cols-3 gap-5 overflow-x-auto">
                {items.map((game) => (
                    <FlashSaleCard
                        key={game.id}
                        gameImg={image}
                        gameName={name}
                        gameItem={game}
                        gameId={id}
                    />
                ))}
            </div>
        );
    } else {
        return (
            <div className="grid grid-cols-3 gap-5 mt-10">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i}>
                        <div className="flex items-center space-x-4 mb-3">
                            <Skeleton className="h-12 w-12 rounded-full" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[250px]" />
                                <Skeleton className="h-4 w-[200px]" />
                                <Skeleton className="h-4 w-16" />
                            </div>
                        </div>
                        <Skeleton className="h-4 w-[300px]" />
                    </div>
                ))}
            </div>
        );
    }
};

export default FlashSale;
