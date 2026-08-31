"use client";

import { ReactNode, useEffect } from "react";
import styles from "./bottom-sheet.module.css";

type BottomSheetProps = {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
};

export default function BottomSheet({
    open,
    onClose,
    children,
}: BottomSheetProps) {
    useEffect(() => {
        if (!open) {
            return;
        }

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [open, onClose]);

    if (!open) {
        return null;
    }

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div
                className={styles.sheet}
                role="dialog"
                aria-modal="true"
                onClick={(event) => event.stopPropagation()}
            >
                <span className={styles.handle}>Your Team</span>

                <button
                    type="button"
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Close"
                >
                    ×
                </button>

                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
}