import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const OdometerDigit = ({ char }) => {
    const isDigit = !isNaN(parseInt(char, 10));

    if (!isDigit) {
        return <span className="inline-block">{char}</span>;
    }

    const num = parseInt(char, 10);

    return (
        <span className="relative inline-block h-[1.1em] w-[0.65em] overflow-hidden tabular-nums">
            <motion.span
                animate={{ y: `-${num * 1.1}em` }}
                transition={{ type: "spring", stiffness: 75, damping: 15 }}
                className="absolute left-0 top-0 flex flex-col"
            >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                    <span key={n} className="h-[1.1em] flex items-center justify-center select-none">
                        {n}
                    </span>
                ))}
            </motion.span>
        </span>
    );
};

const Odometer = ({ value, duration = 2.5 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [count, setCount] = useState(0);

    const { prefix, number, suffix } = useRef(
        (() => {
            const str = String(value);
            const match = str.match(/^([^0-9]*)([0-9]+)([^0-9]*)$/);
            if (match) {
                return {
                    prefix: match[1],
                    number: parseInt(match[2], 10),
                    suffix: match[3],
                };
            }
            return {
                prefix: "",
                number: parseInt(str.replace(/[^0-9]/g, ""), 10) || 0,
                suffix: str.replace(/[0-9]/g, ""),
            };
        })()
    ).current;

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, number, {
                duration: duration,
                ease: "easeOut",
                onUpdate(latest) {
                    setCount(Math.round(latest));
                },
            });
            return () => controls.stop();
        }
    }, [isInView, number, duration]);

    const digits = String(count)
        .padStart(String(number).length, "0")
        .split("");

    return (
        <span ref={ref} className="inline-flex items-center select-none font-bold">
            {prefix && <span>{prefix}</span>}
            {digits.map((digit, idx) => (
                <OdometerDigit key={idx} char={digit} />
            ))}
            {suffix && <span>{suffix}</span>}
        </span>
    );
};

export default Odometer;
