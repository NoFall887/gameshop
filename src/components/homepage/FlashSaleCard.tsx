import { gameItem } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const FlashSaleCard: FC<{
    gameImg: string;
    gameName: string;
    gameItem: gameItem;
    gameId: string;
}> = ({ gameName, gameItem, gameImg, gameId }) => {
    return (
        <Link
            className="rounded-lg bg-black sm:flex-1 min-w-72 sm:w-auto"
            href={`/${gameId}?id=${gameItem.id}`}
        >
            <div className="flex gap-3 rounded-lg bg-gradient-to-tl from-gray-500 to-black p-3 items-center">
                <Image
                    src={gameImg}
                    alt="game"
                    className="rounded-lg"
                    width={60}
                    height={60}
                />
                <div className="">
                    <p className="text-sm">{gameItem.name}</p>
                    <p className="text-xs text-muted-foreground">{gameName}</p>
                </div>
            </div>
            <div className="flex gap-2 justify-between items-center px-3 py-4">
                <p className="px-4 py-2 text-xs rounded-full uppercase bg-red-600">
                    PROMO
                </p>
                <p>
                    -{" "}
                    {(
                        ((gameItem.price - gameItem.priceDiscount) / gameItem.price) *
                        100
                    ).toFixed(2)}
                    %
                </p>
            </div>
        </Link>
    );
};

export default FlashSaleCard;
