import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"

const Page = async ({params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    console.log(anime)

    return(
        <>
            <div className="pt-4 px-4">
                <h3 className="text-4xl text-amber-50">{anime.data.title} - {anime.data.year}</h3>
            </div>
            <div className="pt-4 px-4 flex gap-2 text-amber-50 overflow-x-auto">
                <div className="w-36 flex flex-col justify-center items-center rounded border border-amber-50 p-2">
                    <h3>Peringkat di MAL</h3>
                    <p>{anime.data.rank}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-amber-50 p-2">
                    <h3>Rating</h3>
                    <p>{anime.data.score}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-amber-50 p-2">
                    <h3>Episode</h3>
                    <p>{anime.data.episodes}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-amber-50 p-2">
                    <h3>Disukai oleh</h3>
                    <p>{anime.data.favorites} wibu</p>
                </div>
            </div>
            <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-amber-50">
                <Image
                src={anime.data.images.webp.image_url}
                alt={anime.data.images.jpg.image_url}
                width={250}
                height={250}
                className="w-full rounded object-cover border border-amber-50"
                />
                <p className="text-justify text-m">{anime.data.synopsis}</p>
            </div>
            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
            </div>
        </>
    )
}

export default Page