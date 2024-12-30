"use client";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import styles from "@/css/flipclock.module.css";
const CountdownTimer = ({ date }: { date: number }) => {
    return (
        <FlipClockCountdown
            className={styles.flip_clock}
            to={date}
            renderMap={[false, true, true, true]}
            hideOnComplete={false}
            spacing={{ clock: 2 }}
            showLabels={false}
            showSeparators={false}
            renderOnServer={true}
        />
    );
};

export default CountdownTimer;
