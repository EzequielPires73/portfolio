import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"

export function BannerHome() {
    return (
        <div className="min-h-[900px] h-screen w-full relative bg-background">
            <div className="absolute bottom-0 right-0">
                <img src="./vector.svg" alt="" />
            </div>
            <div className="absolute top-[-150px] right-[200px]">
                <div className="w-[300px] h-[300px] rounded-full bg-primary/60 filter blur-[200px]" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="w-full max-w-7xl mx-auto px-3 xl:px-0 h-full flex flex-col-reverse lg:flex-row lg:justify-between justify-center items-center">
                    <div className="h-fit flex flex-col items-center lg:items-start justify-center">
                        <span className="text-primary text-lg">Olá, meu nome é</span>
                        <h1 className="text-white text-3xl lg:text-5xl font-semibold mt-2">Ezequiel Pires</h1>
                        <p className="max-w-lg text-white/80 mt-3 text-center lg:text-start">Olá, meu nome é Ezequiel Pires e sou um desenvolvedor front-end apaixonado por tecnologia. Com mais de <strong>3 anos de experiência</strong>. Meu objetivo é criar interfaces de usuário bonitas e funcionais. Estou sempre aberto a novas oportunidades e desafios.</p>
                        <ul className="mt-8 flex justify-center lg:justify-start gap-4 max-w-lg flex-wrap">
                            <li>
                                <button className="h-8 px-6 flex items-center justify-center bg-primary-dark/20 rounded-md text-primary font-medium">React</button>
                            </li>
                            <li>
                                <button className="h-8 px-6 flex items-center justify-center bg-primary-dark/20 rounded-md text-primary font-medium">Next.js</button>
                            </li>
                            <li>
                                <button className="h-8 px-6 flex items-center justify-center bg-primary-dark/20 rounded-md text-primary font-medium">React Native</button>
                            </li>
                            <li>
                                <button className="h-8 px-6 flex items-center justify-center bg-primary-dark/20 rounded-md text-primary font-medium">Flutter</button>
                            </li>
                            <li>
                                <button className="h-8 px-6 flex items-center justify-center bg-primary-dark/20 rounded-md text-primary font-medium">TypeScript</button>
                            </li>
                            <li>
                                <button className="h-8 px-6 flex items-center justify-center bg-primary-dark/20 rounded-md text-primary font-medium">Express</button>
                            </li>
                            <li>
                                <button className="h-8 px-6 flex items-center justify-center bg-primary-dark/20 rounded-md text-primary font-medium">Prisma</button>
                            </li>
                        </ul>
                        <div className="mt-8 flex flex-col lg:flex-row gap-4 items-center">
                            <Link href={'/'} className="h-12 w-fit px-8 flex items-center justify-center bg-primary-dark hover:bg-primary transition-colors rounded-md text-white font-semibold">Entre em contato</Link>
                            <div className="flex gap-4">
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
                        </div>
                    </div>
                    <div className="border-4 border-white/30 p-2 rounded-full">
                        <div className="relative w-28 h-28 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden">
                            <Image src={'/my.jfif'} alt="" fill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}