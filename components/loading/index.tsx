
import LoadingIcon from "@/assets/icons/LoadingIcon";
import styles from "./loading.module.css";

interface ILoadingProps {
    size?: number;
    color?: string;
};

export default function Loading({
    size = 48,
    color = "#000000",
}: ILoadingProps) {
    return (
        <div
            role="status"
            aria-label="Loading..."
            className={styles.loading}
            style={{
                width: size,
                height: size,
                color,
            }}
        >
            <LoadingIcon />
        </div>
    );
}