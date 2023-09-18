'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
        <header className={`bg-zinc-700 ${isTop ? 'lg:bg-transparent' : 'lg:bg-black/20 lg:backdrop-blur-2xl'} fixed top-0 left-0 w-full z-[999]`}>
            <div className="w-full max-w-7xl mx-auto h-20 flex items-center justify-between">
                <Link href={'/'}>
                    <Image src={'/logo.svg'} alt="Logo" width={242} height={39} />
                </Link>
                <ul className="flex gap-10">
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
            </div>
        </header>
    )
}