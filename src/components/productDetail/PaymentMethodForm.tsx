import React from "react";
import Card from "../Card";
import { UseFormReturn } from "react-hook-form";
import z from "zod";
import { formSchema } from "./Checkout";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import SelectFormLabel from "./SelectFormLabel";
import Image from "next/image";
import { formatToRupiah } from "@/lib/utils";

const paymentMethods = [
    {
        name: "QRIS",
        payments: [
            {
                name: "QRIS",
                icon: "/assets/payment/qris.png",
                serviceCost: 1500,
            },
        ],
    },
    {
        name: "E-Wallet",
        payments: [
            {
                name: "Dana",
                icon: "/assets/payment/dana.png",
                serviceCost: 1500,
            },
            {
                name: "OVO",
                icon: "/assets/payment/ovo.png",
                serviceCost: 1500,
            },
            {
                name: "ShopeePay",
                icon: "/assets/payment/shopeepay.png",
                serviceCost: 1500,
            },
            {
                name: "LinkAja",
                icon: "/assets/payment/linkaja.png",
                serviceCost: 1500,
            },
        ],
    },
];

const PaymentMethodForm = ({
    form,
}: {
    form: UseFormReturn<z.infer<typeof formSchema>>;
}) => {
    return (
        <Card className="md:col-start-2 col-start-1">
            <h2 className="text-2xl font-semibold mb-6">Pilih Metode Pembayaran</h2>
            <FormField
                control={form.control}
                name="product"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel hidden>Metode Pembayaran</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className=" w-full mb-5"
                            >
                                <Accordion
                                    type="multiple"
                                    className="w-full"
                                    value={paymentMethods.map(
                                        (paymentMethod) => paymentMethod.name
                                    )}
                                >
                                    {paymentMethods.map((paymentMethod) => (
                                        <AccordionItem
                                            value={paymentMethod.name}
                                            key={paymentMethod.name}
                                            className=""
                                        >
                                            <AccordionTrigger className="bg-[rgba(62,62,62,1)] rounded-xl px-4 mb-3">
                                                {paymentMethod.name}
                                            </AccordionTrigger>
                                            <AccordionContent className="grid grid-cols-2 gap-4">
                                                {paymentMethod.payments.map((payment) => (
                                                    <FormItem
                                                        key={payment.name}
                                                        className="w-full"
                                                    >
                                                        <FormControl hidden>
                                                            <RadioGroupItem
                                                                value={payment.name}
                                                            />
                                                        </FormControl>
                                                        <SelectFormLabel
                                                            id={payment.name}
                                                            fieldValue={field.value}
                                                            className="w-full p-3 mt-0 bg-white/10 border-transparent text-sm"
                                                        >
                                                            <Image
                                                                src={payment.icon}
                                                                alt={payment.name}
                                                                height={128}
                                                                width={256}
                                                                className="w-full rounded-xl mb-3"
                                                            />
                                                            <p className="font-semibold  mb-2">
                                                                {payment.name}
                                                            </p>
                                                            <p className="text-gray-400 mb-2">
                                                                Biaya Layanan
                                                            </p>
                                                            <p className="font-semibold">
                                                                +{" "}
                                                                {formatToRupiah(
                                                                    payment.serviceCost
                                                                )}
                                                            </p>
                                                        </SelectFormLabel>
                                                    </FormItem>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </RadioGroup>
                        </FormControl>
                    </FormItem>
                )}
            />
        </Card>
    );
};

export default PaymentMethodForm;
