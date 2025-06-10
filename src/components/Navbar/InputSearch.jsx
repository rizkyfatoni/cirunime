"use client"

import { MagnifyingGlassIcon } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value

        if(!keyword) return

        if(event.key === "Enter" || event.type === "click"){
            event.preventDefault()
            router.push(`/search/${keyword}`)
        }
    }

    return (    
        <div className="relative">
            <input 
                placeholder="cari anime"
                className="bg-secondary text-amber-50 w-full p-2 rounded"
                ref={searchRef}
                onKeyDown={handleSearch}
            />
            <button className="absolute top-2.5 end-2 cursor-pointer text-white opacity-50" onClick={handleSearch}>
                <MagnifyingGlassIcon size={20} />
            </button>
        </div>
    )
}

export default InputSearch