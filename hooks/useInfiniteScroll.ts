import { RefObject, useEffect, useRef } from "react";

type Props = {
    targetRef: RefObject<HTMLDivElement | null>,
    onLoadMore: () => void;
    isEnabled: boolean;
};

export function useInfiniteScroll({
    targetRef,
    onLoadMore,
    isEnabled,
}: Props) {
    useEffect(() => {
        const element = targetRef.current;

        if (!element || !isEnabled) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    onLoadMore();
                }
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [targetRef, onLoadMore, isEnabled]);
}