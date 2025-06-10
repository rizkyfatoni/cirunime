import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
        <header className="bg-primary">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
                <Link href="/" className="font-bold text-accent text-4xl">Cirunime</Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default Navbar