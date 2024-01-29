import { PropsWithChildren } from "react";
export interface InfiniteScrollrProps extends PropsWithChildren {
    handleLoadMore: () => void;
    threshold?: IntersectionObserverInit['threshold'];
}
