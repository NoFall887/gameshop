import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { InputForm } from "@/components/ui/InputForm";
import { UseFormReturn } from "react-hook-form";
import z from "zod";
import { formSchema } from "./Checkout";

function FormTopup({ form }: { form: UseFormReturn<z.infer<typeof formSchema>> }) {
    return (
        <>
            <div className="flex gap-4 mb-4">
                <FormField
                    control={form.control}
                    name="userId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                User ID <span>*</span>
                            </FormLabel>
                            <FormControl>
                                <InputForm placeholder="Masukkan User ID" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="zoneId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Zone ID <span>*</span>
                            </FormLabel>
                            <FormControl>
                                <InputForm placeholder="Masukkan Zone ID" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <FormField
                control={form.control}
                name="nomorWhatsapp"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Nomor WhatsApp</FormLabel>
                        <FormControl>
                            <InputForm placeholder="Masukkan Nomor WhatsApp" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <p className="text-muted-foreground text-sm mt-5">
                Untuk mengetahui User ID Anda, silakan klik menu profile dibagian kiri
                atas pada menu utama game. User ID akan terlihat dibagian bawah Nama
                Karakter Game Anda. Silakan masukkan User ID dan Server ID / Zone ID Anda
                untuk menyelesaikan transaksi. User ID berada diluar tanda kurung dan
                Server ID / Zone ID didalam tanda kurung. Contoh : 12345678(1234).
            </p>
        </>
    );
}

export default FormTopup;
