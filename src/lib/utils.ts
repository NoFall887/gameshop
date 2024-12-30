import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { game } from "./store";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const fetchGames = async () => {
    const res = await fetch(
        "https://6708f839af1a3998ba9fdc6e.mockapi.io/api/v1/products"
    );
    const data: game[] = await res.json();
    return data;
};

export function formatToRupiah(amount: number) {
    return "Rp " + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",-";
}
