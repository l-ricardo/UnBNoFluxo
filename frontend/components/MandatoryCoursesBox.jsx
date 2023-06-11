import { Stack } from "@mui/material"
import Period from "./Period"
import styles from "../styles/MandatoryCoursesBox.module.css"

export default function MandatoryCoursesBox({ data, maxPeriodNumber }) {
    return (
        <Stack className={`${styles.grid} ${styles.scrollable}`}>
            {Array.from({ length: maxPeriodNumber }, (_, index) => (
                <Period key={index + 1} data={data} periodNumber={index + 1} />
            ))}
        </Stack>
    )
}
