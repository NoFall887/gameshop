import { game } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const FavoriteGameCard: FC<{ game: game }> = ({ game }) => {
    return (
        <Link className="h-auto w-full max-w-44 sm:w-44 relative" href={`/${game.id}`}>
            <div className="z-10 relative flex flex-col items-center text-center pb-3">
                <Image
                    src={game.image}
                    alt={game.name}
                    width={124}
                    height={124}
                    className="relative rounded-md w-32 h-32 mb-3 border border-white  before:w-full before:h-full before:rounded-md before:absolute before:bg-stone-500 before:inset-0"
                />
                <p className="text-sm font-semibold ">{game.name}</p>
                <p className="text-xs text-muted-foreground">{game.publisher}</p>
            </div>
            <svg
                viewBox="0 0 180 102"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 w-44 aspect-[176/112]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M160.686 0.000976562H8C3.58172 0.000976562 0 3.5827 0 8.00098V82.6873C0 84.809 0.842852 86.8438 2.34314 88.3441L13.6569 99.6578C15.1571 101.158 17.192 102.001 19.3137 102.001H172C176.418 102.001 180 98.4193 180 94.001V19.3147C180 17.193 179.157 15.1581 177.657 13.6578L166.343 2.34412C164.843 0.843831 162.808 0.000976562 160.686 0.000976562Z"
                    fill="#282828"
                />
            </svg>
        </Link>
    );
};

export default FavoriteGameCard;
