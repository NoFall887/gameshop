import React, { ReactNode } from "react";
import { FormLabel } from "../ui/form";
import { cn } from "@/lib/utils";
import { FaCheck } from "react-icons/fa6";

const SelectFormLabel = ({
    fieldValue,
    id,
    children,
    className,
}: {
    id: string;
    fieldValue: string;
    children: ReactNode;
    className?: string;
}) => {
    return (
        <FormLabel
            className={cn(
                " cursor-pointer block rounded-xl border border-white/15 relative",

                className,
                {
                    "bg-white/15 border-white border": fieldValue == id,
                }
            )}
        >
            {fieldValue == id && (
                <div className="absolute bottom-0 right-0 p-1 bg-white rounded-ss-xl rounded-ee-xl flex items-center justify-center">
                    <FaCheck className="w-4 h-4 text-black  " />
                </div>
            )}
            {children}
        </FormLabel>
    );
};

export default SelectFormLabel;
