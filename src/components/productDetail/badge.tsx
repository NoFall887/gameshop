import React from "react";

const Badge: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className,
}) => {
    return (
        <p
            className={`font-bold text-xs sm:text-sm px-3 py-1 rounded-full bg-white/20 flex items-center gap-2 [&_svg]:size-3 sm:[&_svg]:size-4 [&_svg]:text-white ${className}`}
        >
            {children}
        </p>
    );
};

export default Badge;
