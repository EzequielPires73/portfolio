'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export function Header() {
    const pathname = usePathname();
    const [isTop, setIsTop] = useState(true);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsTop(scrollTop === 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`bg-card-dark shadow-md lg:shadow-none ${isTop ? 'lg:bg-transparent' : 'lg:bg-black/20 lg:backdrop-blur-2xl'} fixed top-0 left-0 w-full z-[999]`}>
            <div className="w-full max-w-7xl mx-auto px-3 xl:px-0 h-20 flex items-center justify-between">
                <Link href={'/'}>
                    <Image src={'/logo.svg'} alt="Logo" width={200} height={39} />
                </Link>
                <button onClick={() => setShow(true)} className="flex lg:hidden"><FiMenu size={28} /></button>
                <ul className="hidden lg:flex gap-10">
                    <li>
                        <Link
                            href={'/'}
                            className={`${pathname === '/' ? 'text-white font-medium' : 'opacity-50 hover:opacity-100 transition-all text-white font-medium'}`}>
                            <span className="text-primary">#</span> Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/projetos'}
                            className={`${pathname === '/projetos' ? 'text-white font-medium' : 'opacity-50 hover:opacity-100 transition-all text-white font-medium'}`}>
                            <span className="text-primary">#</span> Projetos
                        </Link>
                    </li>
                </ul>
                {show &&
                    <div className="absolute top-0 left-0 h-screen w-screen bg-background px-4 py-6">
                        <div className="w-full max-w-7xl mx-auto flex flex-col h-full">
                            <div className="flex items-center justify-between">
                                <Link href={'/'}>
                                    <Image src={'/logo.svg'} alt="Logo" width={200} height={39} />
                                </Link>
                                <button onClick={() => setShow(false)}>
                                    <FiX size={32} />
                                </button>
                            </div>
                            <ul className="flex justify-center flex-col gap-4 flex-1">
                                <li>
                                    <Link
                                        href={'/'}
                                        className={`text-3xl ${pathname === '/' ? 'text-white font-medium' : 'opacity-50 hover:opacity-100 transition-all text-white font-medium'}`}>
                                        <span className="text-primary">#</span> Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/projetos'}
                                        className={`text-3xl ${pathname === '/projetos' ? 'text-white font-medium' : 'opacity-50 hover:opacity-100 transition-all text-white font-medium'}`}>
                                        <span className="text-primary">#</span> Projetos
                                    </Link>
                                </li>
                            </ul>
                            <ul className="flex gap-6 mb-4">
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
                            </ul>
                        </div>
                    </div>
                }
            </div>
        </header>
    )
}