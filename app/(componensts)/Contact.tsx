import {FaHeart} from "react-icons/fa";

export function Contact() {
    return (
        <div className="h-fit bg-background pb-6">
            <div className="w-full max-w-7xl mx-auto py-20 flex flex-col items-center">
                <span className="text-primary text-lg">../Contato</span>
                <h2 className="text-white text-4xl font-medium mt-2">Vamos trabalhar juntos?</h2>
                <h2 className="text-white text-4xl font-medium mt-2">Entre em contato</h2>
                <form className="flex gap-6 mt-10 flex-col items-center w-full max-w-lg">
                    <input placeholder="Ex.: Ezequiel Pires" className="w-full h-14 bg-card rounded-md p-3 placeholder:text-white/8"/>
                    <input placeholder="Ex.: ezequiel@gmail.com" className="w-full h-14 bg-card rounded-md p-3 placeholder:text-white/8"/>
                    <textarea placeholder="Mensagem" className="w-full h-28 bg-card rounded-md p-3 placeholder:text-white/8"/>
                    <button className="h-12 w-fit px-8 flex items-center justify-center bg-primary-dark hover:bg-primary transition-colors rounded-md text-white font-semibold">Enviar mensagem</button>
                </form>
            </div>
            <footer className="flex justify-center">
                <span className="flex items-center gap-4 text-white">Made with <FaHeart className={"text-primary"} /> Ezequiel Pires</span>
            </footer>
        </div>
    )
}