"use client"

import React, { useEffect, useState } from "react";
import HeaederMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

    const fetchData = async() => {
        const populerAnime = await getAnimeResponse ("top/anime", `page=${page}`)
        setTopAnime(populerAnime)
    }

    useEffect (() => {
        fetchData()
    }, [page])

    return(
        <div>
            <HeaederMenu title={`Anime Terpopuler #${page}`}/>
            <AnimeList api={topAnime}/>
            <Pagination page={page} 
            lastPage={topAnime.pagination?.last_visible_page}
            setPage={setPage}
            />
        </div>
    )
}

export default Page