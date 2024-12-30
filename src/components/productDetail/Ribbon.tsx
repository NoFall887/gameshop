import React from "react";
import styles from "@/css/ribbon.module.css";

const Ribbon = ({ discount }: { discount: string }) => {
    return (
        <div className={`${styles.ribbon} font-semibold `}>
            <span>{discount}% OFF</span>
        </div>
    );
};

export default Ribbon;
