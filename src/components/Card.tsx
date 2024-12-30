import React from "react";

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className,
}) => {
    return (
        <div className={`${className} p-4 lg:p-6 bg-[rgba(40,40,40,1)] rounded-2xl`}>
            {children}
        </div>
    );
};

export default Card;
