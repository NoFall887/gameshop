import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "black" | "white";
}

function Skeleton({ className, variant = "black", ...props }: SkeletonProps) {
    return (
        <div
            className={cn(
                "animate-pulse rounded-md bg-primary/10",
                {
                    "bg-black/15": variant === "black",
                    "bg-white/15": variant === "white",
                },
                className
            )}
            {...props}
        />
    );
}

export { Skeleton };
