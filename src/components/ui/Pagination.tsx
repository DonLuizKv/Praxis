import Button from "./Button";

interface PaginationProps {
    itemsPerPage?: number;
    currentPage: number;
    totalPages: number;
    onPrevious: () => void;
    onNext: () => void;

}

export default function Pagination({ currentPage, totalPages, onPrevious, onNext }: PaginationProps) {
    return (
        <section className="flex items-center justify-between px-4 py-3 border-t border-[#C8C8C8]">
            <p className="text-sm text-[#707070]">
                <b>{currentPage}</b> de {totalPages}
            </p>
            <div className="flex items-center gap-2">
                <Button 
                    type="button" 
                    style="outline-fullRound" 
                    text="Anterior" 
                    aditionalsStyles="text-[.8rem]" 
                    onClick={onPrevious} 
                />

                <Button 
                    type="button" 
                    style="outline-fullRound"
                    text="Siguiente"
                    aditionalsStyles="text-[.8rem]"
                    onClick={onNext}
                />
            </div>
        </section>
    )
}
