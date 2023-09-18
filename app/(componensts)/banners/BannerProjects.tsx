import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export function BannerProjects() {
    return (
        <div className="h-screen w-full relative bg-background">
            <div className="absolute bottom-0 right-0">
                <img src="./vector.svg" alt="" />
            </div>
            <div className="absolute top-[-150px] right-[200px]">
                <div className="w-[300px] h-[300px] rounded-full bg-primary/60 filter blur-[200px]" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="w-full max-w-7xl mx-auto h-full flex justify-center items-center">
                    <div className="h-full flex flex-col items-center justify-center">
                        <span className="text-primary text-lg">../projetos</span>
                        <h1 className="text-white text-5xl font-semibold mt-2">Meus projetos</h1>
                        <p className="max-w-lg text-white/80 mt-3 text-center">Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à vontade e explore os projetos para ver como foram criados, as tecnologias utilizadas e as funcionalidades implementadas.</p>
                        <Link href={'/'} className="text-white/80 hover:text-white transition-colors font-semibold mt-6 flex items-center gap-3"><FaArrowLeft /> Voltar para home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}