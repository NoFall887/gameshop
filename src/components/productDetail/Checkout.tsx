"use client";

import Card from "../Card";
import React, { Suspense } from "react";
import { game } from "@/lib/store";
import { Separator } from "../ui/separator";
import CheckoutProductSelect from "./CheckoutProductSelect";
import { Skeleton } from "../ui/skeleton";
import { IoGameController } from "react-icons/io5";
import FormTopup from "./Form";
import { Form } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import PromoForm from "./PromoForm";
import PaymentMethodForm from "./PaymentMethodForm";

export const formSchema = z.object({
    product: z.string().min(1, { message: "Product is required" }),
    userId: z.string().min(1, { message: "User ID is required" }),
    zoneId: z.string().min(1, { message: "Zone ID is required" }),
    nomorWhatsapp: z.string(),
    // .min(1, { message: "Nomor WhatsApp is required" })
    // .regex(/^08[0-9]d+$/, {
    //     message: "Nomor WhatsApp must be a valid Indonesian number (08xxxxxxx)",
    // }),
    promoCode: z.string(),
    paymentMethod: z.string().min(1, { message: "Payment method is required" }),
});

const Checkout: React.FC<{
    filteredGame: Promise<game>;
    selectedId: Promise<string | undefined>;
}> = ({ filteredGame, selectedId }) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            paymentMethod: "",
            product: "",
            userId: "",
            zoneId: "",
            nomorWhatsapp: "",
            promoCode: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                {/* left */}
                <Card className="col-start-1">
                    <h2 className="text-2xl font-semibold mb-6">Pilih Produk</h2>
                    <Suspense
                        fallback={
                            <>
                                <div className="p-3 flex gap-3 items-center rounded-xl border border-white w-fit">
                                    <Skeleton
                                        className="rounded-2xl w-24 h-24"
                                        variant="white"
                                    />
                                    <Skeleton className="h-4 w-[200px]" variant="white" />
                                </div>
                                <Separator className="my-5" />
                                <div className="flex gap-4 w-full">
                                    {Array.from({ length: 3 }).map((_, i) => {
                                        return (
                                            <div
                                                key={i}
                                                className="flex gap-2 items-center p-2 w-full rounded-xl border border-white/15"
                                            >
                                                <div className="flex flex-col gap-1 w-full p-2 text-sm">
                                                    {Array.from({ length: 3 }).map(
                                                        (_, i) => {
                                                            return (
                                                                <Skeleton
                                                                    key={i}
                                                                    variant="white"
                                                                    className="h-4 w-full mb-3"
                                                                />
                                                            );
                                                        }
                                                    )}
                                                </div>

                                                <Skeleton
                                                    className="rounded-2xl w-10 h-10"
                                                    variant="white"
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </>
                        }
                    >
                        <CheckoutProductSelect
                            filteredGame={filteredGame}
                            selectedId={selectedId}
                            form={form}
                        />
                    </Suspense>
                </Card>
                {/* right */}

                <Card className="md:col-start-2 md:-order-none order-first col-start-1">
                    <div className="flex gap-4 w-full items-center">
                        <div className="p-5 bg-[rgba(62,62,62,1)] rounded-3xl w-full max-w-20 aspect-square">
                            <IoGameController className="fill-[#979797] w-full h-full" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-3">Topup Game</h2>
                            <p className="text-muted-foreground text-xl">
                                Lengkapi data dan dapatkan produk anda!
                            </p>
                        </div>
                    </div>
                    <Separator className="my-5" />

                    <FormTopup form={form} />
                </Card>

                <PromoForm form={form} />
                <PaymentMethodForm form={form} />
            </form>
        </Form>
    );
};

export default Checkout;
