import styles from "@/css/home.module.css";
import ProductCarousel from "@/components/homepage/ProductCarousel";
import CountdownTimer from "@/components/homepage/CountdownTimer";
import FlashSale from "@/components/homepage/FlashSale";
import FavoriteGame from "@/components/homepage/FavoriteGame";

export default function Home() {
    return (
        <>
            {/* HERO SECTION */}
            <section className={`w-full ${styles.hero_container} py-20 relative `}>
                <ProductCarousel />
                <div className="max-w-7xl mx-auto mb-20 px-4 sm:px-6 lg:px-8">
                    <div className="text-left mt-6 mb-10 md:mb-20">
                        <p className="text-base sm:text-xl md:text-3xl font-semibold">
                            Starlight November 2023: Melissa “Nightwalker”
                        </p>
                        <h1 className="text-sm sm:text-base md:text-xl">
                            Segera dapatkan skin startlight Melissa “Nightwalker” dengan
                            topup murah hanya di VocaGame.
                        </h1>
                    </div>
                    {/* flash sale */}
                    <div className="mb-4 sm:mb-10">
                        <div className="flex gap-6 items-center mb-3">
                            <h2 className="font-medium text-base sm:text-3xl">
                                FLASH SALE
                            </h2>
                            <CountdownTimer
                                date={new Date().getTime() + 4 * 3600 * 1000}
                            />
                        </div>
                        <p className="sm:text-xl">
                            Segera dapatkan penawaran terbatas dari kami, jangan sampai
                            ketinggalan!
                        </p>
                    </div>

                    <FlashSale />
                </div>
                <img
                    src="/assets/graphic.png"
                    aria-hidden
                    alt=""
                    className="w-full absolute bottom-0 left-0"
                />
            </section>
            {/* FEATURES SECTION */}
            <section className="w-full py-20 bg-[rgba(26,26,26,1)] -mt-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FavoriteGame />
                </div>
            </section>
        </>
    );
}
