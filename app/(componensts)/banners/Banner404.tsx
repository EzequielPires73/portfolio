import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin, FaArrowRight, FaArrowLeft } from "react-icons/fa"

export function Banner404({message}: {message: string}) {
    return (
        <div className="h-screen w-full relative bg-background">
            <div className="absolute bottom-0 right-0">
                <img src="./vector.svg" alt="" />
            </div>
            <div className="absolute top-[-150px] right-[200px]">
                <div className="w-[300px] h-[300px] rounded-full bg-primary/60 filter blur-[200px]" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="w-full max-w-7xl mx-auto px-3 xl:px-0 h-full flex justify-center items-center">
                    <div className="h-full flex flex-col items-center justify-center">
                        <span className="text-red-500 text-lg">../not-found</span>
                        <h1 className="text-white text-5xl font-semibold mt-2">{message}</h1>
                        <div className="mt-8 flex gap-4 items-center">
                            <Link href={'/'} className="h-12 w-fit px-8 flex items-center justify-center bg-primary-dark hover:bg-primary transition-colors rounded-md text-white font-semibold">Entre em contato</Link>
                            <Link href={'/'} className="text-white/50 hover:text-white transition-all">
                                <FaWhatsapp size={24} />
                            </Link>
                            <Link href={'/'} className="text-white/50 hover:text-white transition-all">
                                <FaInstagram size={24} />
                            </Link>
                            <Link href={'/'} className="text-white/50 hover:text-white transition-all">
                                <FaGithub size={24} />
                            </Link>
                            <Link href={'/'} className="text-white/50 hover:text-white transition-all">
                                <FaLinkedin size={24} />
                            </Link>
                        </div>
                        <Link href={'/'} className="text-white/80 hover:text-white transition-colors font-semibold mt-8 flex items-center gap-3"><FaArrowLeft /> Voltar para home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}