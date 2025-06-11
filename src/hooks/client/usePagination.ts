import { useState, useEffect } from 'react';

interface UsePaginationProps<T> {
    items: T[];
    itemsPerPage: number;
    initialPage?: number;
}

export function usePagination<T>({ items, itemsPerPage, initialPage = 1}: UsePaginationProps<T>) {
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [currentItems, setCurrentItems] = useState<T[]>([]);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [items]);

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setCurrentItems(items.slice(startIndex, endIndex));
    }, [items, currentPage, itemsPerPage]);

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    const previousPage = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return {
        currentPage,
        totalPages,
        nextPage,
        previousPage,
        goToPage,
        currentItems,
    };
}
