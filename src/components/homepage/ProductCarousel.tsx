"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "@/css/carousel.module.css";

const ProductCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollTo = useCallback(
        (index: number) => {
            if (!emblaApi) return;
            emblaApi.scrollTo(index);
        },
        [emblaApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
    }, [emblaApi, setScrollSnaps, onSelect]);

    return (
        <div className={`${styles.embla} overflow-hidden`}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className={styles.embla__slide}>
                            <img src="/assets/melissa.jpg" alt="Slide 1" />
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.embla__dots}>
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.embla__dot} ${
                            index === selectedIndex ? styles.embla__dot__selected : ""
                        }`}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductCarousel;
