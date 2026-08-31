"use client";

import { useState } from "react";
import BottomSheet from "../bottom-sheet";
import styles from "./footer.module.css";
import RosterList from "../roster-list";
import { useRosterStore } from "@/lib/store/rosterStore";

export function Footer() {
    const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

    const roster = useRosterStore((state) => state.roster);

    const rosterCount = roster.filter(Boolean).length;

    return (
        <div className={styles.container}>
            <button
                type="button"
                className={styles.button}
                onClick={() => setIsTeamModalOpen(true)}
            >
                {`[View Teams (${rosterCount}/6) & Stats]`}
            </button>

            <BottomSheet
                open={isTeamModalOpen}
                onClose={() => setIsTeamModalOpen(false)}
            >
                <RosterList roster={roster} />
            </BottomSheet>
        </div>
    );
}