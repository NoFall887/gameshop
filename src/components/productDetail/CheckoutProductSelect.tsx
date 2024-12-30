"use client";
import React, { use, useEffect } from "react";
import { game } from "@/lib/store";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { formatToRupiah } from "@/lib/utils";
import Ribbon from "./Ribbon";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { formSchema } from "./Checkout";
import { UseFormReturn } from "react-hook-form";
import z from "zod";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import SelectFormLabel from "./SelectFormLabel";

const CheckoutProductSelect: React.FC<{
    filteredGame: Promise<game>;
    selectedId: Promise<string | undefined>;
    form: UseFormReturn<z.infer<typeof formSchema>>;
}> = ({ filteredGame, selectedId, form }) => {
    const game = use<game>(filteredGame);
    const selectedProduct = use<string | undefined>(selectedId);

    useEffect(() => {
        if (selectedProduct) {
            form.setValue("product", selectedProduct.toString());
        }
    }, [selectedProduct]);
    return (
        <>
            <div className="p-3 flex gap-3 items-center rounded-xl border border-white w-fit">
                <Image src={game.items[0].iconUrl} alt="game" height={32} width={32} />
                <p className="font-semibold text-base">
                    {game.items[0].name.split(" ")[1]}
                </p>
            </div>
            <Separator className="my-5" />
            <FormField
                control={form.control}
                name="product"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel hidden>Pilih produk</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="gird grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-5"
                            >
                                {game.items.map((item) => {
                                    const nameSplit = item.name.split("(");
                                    return (
                                        <FormItem key={item.id} className="">
                                            <FormControl hidden>
                                                <RadioGroupItem
                                                    value={item.id.toString()}
                                                />
                                            </FormControl>
                                            <SelectFormLabel
                                                id={item.id.toString()}
                                                fieldValue={field.value}
                                                className="w-full h-full flex gap-2 px-3 py-4 mt-0 justify-center items-center"
                                            >
                                                <div className="flex flex-col gap-1 text-sm text-left">
                                                    <p className="text-white">
                                                        {nameSplit[0].trim()}
                                                    </p>
                                                    {nameSplit.length > 1 && (
                                                        <p className="text-white">
                                                            {"(" + nameSplit[1].trim()}
                                                        </p>
                                                    )}
                                                    <p className="text-green-400">
                                                        {formatToRupiah(
                                                            item.priceDiscount > 0
                                                                ? item.priceDiscount
                                                                : item.price
                                                        )}
                                                    </p>
                                                    {item.priceDiscount > 0 && (
                                                        <p className="text-muted-foreground line-through">
                                                            {formatToRupiah(item.price)}
                                                        </p>
                                                    )}
                                                </div>

                                                <Image
                                                    src={game.items[0].iconUrl}
                                                    alt="game"
                                                    height={32}
                                                    width={32}
                                                />
                                                {item.priceDiscount > 0 && (
                                                    <Ribbon
                                                        discount={(
                                                            ((item.price -
                                                                item.priceDiscount) /
                                                                item.price) *
                                                            100
                                                        ).toFixed(0)}
                                                    />
                                                )}
                                            </SelectFormLabel>
                                        </FormItem>
                                    );
                                })}
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    );
};

export default CheckoutProductSelect;
