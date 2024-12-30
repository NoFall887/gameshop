"use client";
import { game } from "@/lib/store";
import Image from "next/image";
import { use } from "react";
import Badge from "./badge";
import { FaHeadset } from "react-icons/fa6";
import { BsShieldFillCheck } from "react-icons/bs";

const Banner: React.FC<{
    filteredGame: Promise<game>;
}> = ({ filteredGame }) => {
    const game = use<game>(filteredGame);
    return (
        <div
            className={`w-full rounded-3xl overflow-hidden mb-4`}
            style={{
                backgroundImage: `url(${game.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="p-8 flex flex-col sm:flex-row gap-6 bg-white/30 backdrop-blur-md sm:mt-96">
                <Image
                    src={game.image}
                    alt="game"
                    width={110}
                    height={110}
                    className="rounded-2xl aspect-square w-52 mx-auto sm:mx-0 sm:w-28"
                />
                <div className="text-center sm:text-left">
                    <h1 className="text-lg sm:text-3xl md:text-4xl font-semibold mb-1">
                        {game.name}
                    </h1>
                    <p className="text-sm sm:text-xl mb-3">{game.publisher}</p>
                    <div className="flex gap-3 items-center justify-center sm:justify-start">
                        <Badge>
                            <FaHeadset />
                            <span>Customer Service 24/7</span>
                        </Badge>
                        <Badge>
                            <BsShieldFillCheck />
                            <span>Official Distributor</span>
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
