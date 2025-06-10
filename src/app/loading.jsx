import Image from "next/image";

const Loading = () => {
    return(
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-2 flex-col">
                <Image src="/firefly 2.png" alt="" width={100} height={100}/>
                <h3 className="text-accent text-4xl font-bold">Loading...</h3>
            </div>
        </div>
    )
}

export default Loading