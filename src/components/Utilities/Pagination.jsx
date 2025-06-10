const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    const handleFirstPage = () => {
        setPage(1)
        scrollTop()
    }

    const handleLastPage = () => {
        setPage(lastPage)
        scrollTop()
    }

    return (
        <div className="flex justify-center items-center py-4 px-4 gap-4 md:text-2xl text-amber-50">
            
            {page <= 1 ? null : 
                <button onClick={handleFirstPage} className="transition-all hover:text-accent cursor-pointer underline">{"<< last"}</button>
            }

            {page <= 1 ? null : 
                <button onClick={handlePrevPage} className="transition-all hover:text-accent cursor-pointer underline">{"< Prev"}</button>
            }

            <p>{ page } of {lastPage}</p>

            {page >= lastPage ? null :
                <button onClick={handleNextPage} className="transition-all hover:text-accent cursor-pointer underline">{"Next >"}</button>
            }

            {page >= lastPage ? null :
                <button onClick={handleLastPage} className="transition-all hover:text-accent cursor-pointer underline">{"last>>"}</button>
            }
            
        </div>
    )
}

export default Pagination