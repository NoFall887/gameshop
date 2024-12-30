import { fetchGames } from "@/lib/utils";
import Banner from "@/components/productDetail/Banner";
import { Suspense } from "react";
import Checkout from "@/components/productDetail/Checkout";
import { Skeleton } from "@/components/ui/skeleton";

const Page = async ({
    params,
    searchParams,
}: {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
    const productId = searchParams.then((params) => (params.id ? params.id : undefined));
    const filteredGame = params.then(async (id) => {
        const games = await fetchGames();
        return games.filter((game) => game.id === id.id)[0];
    });

    return (
        <div className=" bg-black relative py-16 px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-gray-200 to-gray-900 absolute top-0 left-0 w-full h-96 z-0"></div>
            <div className="max-w-7xl mx-auto min-h-screen relative z-10">
                {/* banner */}
                <Suspense
                    fallback={
                        <Skeleton className={`w-full rounded-3xl overflow-hidden mb-4`}>
                            <div className="p-8 flex gap-6 bg-white/30 backdrop-blur-md mt-52">
                                <Skeleton className="rounded-2xl w-24 h-24" />
                                <div className="">
                                    <Skeleton className="h-4 w-full mb-3" />
                                    <Skeleton className="h-4 w-full mb-3" />
                                    <div className="flex gap-3 items-center">
                                        <Skeleton className="h-4 w-[250px]" />
                                        <Skeleton className="h-4 w-[250px]" />
                                    </div>
                                </div>
                            </div>
                        </Skeleton>
                    }
                >
                    <Banner filteredGame={filteredGame} />
                </Suspense>
                {/* payment */}

                <Checkout filteredGame={filteredGame} selectedId={productId} />
            </div>
        </div>
    );
};

export default Page;
