import { PropsWithChildren } from 'react';

interface InfiniteScrollrProps extends PropsWithChildren {
    handleLoadMore: () => void;
    threshold?: IntersectionObserverInit['threshold'];
}

export type { InfiniteScrollrProps };
