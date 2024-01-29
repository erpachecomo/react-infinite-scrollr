import React, { useEffect, useRef, } from "react";
import { InfiniteScrollrProps } from "./InfiniteScrollr.types";

const InfiniteScrollr: React.FC<InfiniteScrollrProps> = ({ children, handleLoadMore, threshold = 1 }) => {
    const observerTarget = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    handleLoadMore();
                }
            },
            { threshold }
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current);
            }
        };
    }, [observerTarget]);
    return (
        <>
            {children}
            <div ref={observerTarget}></div>
        </>
    );
}
export default InfiniteScrollr