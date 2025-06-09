import Link from "next/link"

const Navbar = () => {
    return (
        <header className="bg-indigo-500">
            <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
                <Link href="/" className="font-bold text-white text-4xl">Cirunime</Link>
                <input placeholder="cari anime" className="bg-white" />
            </div>
        </header>
    )
}

export default Navbar