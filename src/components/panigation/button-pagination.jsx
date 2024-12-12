export const ButtonPagination = ({ currentPage, totalPage, onNext, onPrev }) => {
    return (
        <div className="flex justify-center space-x-4">
            <button
                className="bg-white px-4 py-2 rounded-md hover:scale-[1.1]"
                onClick={onPrev}
                disabled={currentPage === 1}
            >
                Prev
            </button>
            <span className="text-white">
                Page {currentPage} of {totalPage}
            </span>
            <button
                className="bg-white px-4 py-2 rounded-md hover:scale-[1.1]"
                onClick={onNext}
                disabled={currentPage === totalPage}
            >
                Next
            </button>
        </div>
    );
};
