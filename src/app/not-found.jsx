import Image from "next/image"

const Page = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-2 flex-col">
                <Image src="/firefly 3.png" alt="" width={100} height={100}/>
                <h3 className="text-accent text-4xl font-bold">Gada Njir</h3>
            </div>
        </div>
    )
}

export default Page