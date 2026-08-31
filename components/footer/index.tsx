'use client'

import { useState } from 'react'
import BottomSheet from '../bottom-sheet'
import styles from './footer.module.css'
import RosterList from '../roster-list'

export function Footer() {
    const [isTeamModalOpen, setIsTeamModalOpen] = useState(false)
    return <div className={styles.container}>
        <button className={styles.button}
            onClick={() => setIsTeamModalOpen(true)}>
            {`[View Teams (0/6) & Stats]`}
        </button>

        <BottomSheet
            open={isTeamModalOpen}
            onClose={() => setIsTeamModalOpen(false)}
        >
            <>Bottom Sheet opened</>
        </BottomSheet>
    </div>
}