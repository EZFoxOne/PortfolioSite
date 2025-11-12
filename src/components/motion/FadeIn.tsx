import { motion, useReducedMotion } from "framer-motion";
import { type PropsWithChildren } from "react";

type FadeInProps = PropsWithChildren<{
    delay?: number;
    y?: number;
    duration?: number;
    className?: string;
}>;

/**
 * FadeIn – reusable entrance motion
 * Handles user "reduce motion" preference automatically.
 */
export default function FadeIn({
                                   children,
                                   delay = 0,
                                   y = 16,
                                   duration = 0.5,
                                   className,
                               }: FadeInProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
