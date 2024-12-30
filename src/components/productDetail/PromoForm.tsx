import React from "react";
import { formSchema } from "./Checkout";
import { UseFormReturn } from "react-hook-form";
import z from "zod";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { InputForm } from "../ui/InputForm";
import { FaSearch } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { RxCaretRight } from "react-icons/rx";
import Card from "../Card";

const PromoForm = ({ form }: { form: UseFormReturn<z.infer<typeof formSchema>> }) => {
    return (
        <Card className="md:col-start-2 col-start-1">
            <div className="flex mb-6">
                <FormField
                    control={form.control}
                    name="promoCode"
                    render={({ field }) => (
                        <FormItem className="w-full relative">
                            <FaSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 w-6 h-6" />
                            <FormLabel></FormLabel>
                            <FormControl>
                                <InputForm
                                    className="rounded-r-none w-full flex-1 pl-14"
                                    style={{ marginTop: 0 }}
                                    placeholder="Ketik kode promo (opsional)"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <button
                    className="h-14 px-6 py-3 bg-white text-black rounded-r-2xl"
                    type="button"
                >
                    Gunakan
                </button>
            </div>
            <button className=" flex gap-3 items-center rounded-2xl border border-white/30 w-full p-4">
                <MdLocalOffer className="w-6 h-6" />
                <span>Lihat promo tersedia</span>
                <RxCaretRight className="w-6 h-6 ml-auto" />
            </button>
        </Card>
    );
};

export default PromoForm;
