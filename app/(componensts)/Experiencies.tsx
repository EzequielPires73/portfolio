import { experiences } from "@/src/repositories/experiences";
import { CardExperience } from "./cards/CardExperience";

export function Experiencies() {
    return (
        <div className="w-full max-w-7xl mx-auto py-20 px-3 lg:px-0 flex flex-wrap gap-12">
            <div className="flex flex-col items-center lg:items-start">
                <span className="text-primary text-lg">../experiências</span>
                <h2 className="text-white text-3xl lg:text-4xl font-medium my-2">Experiência Profissional</h2>
                <p className="text-white/80 max-w-md text-center lg:text-start">Estou sempre aberto a novos desafios e projetos emocionantes. Vamos trabalhar juntos para criar soluções incríveis para sua empresa!</p>
            </div>
            <div className="flex flex-col gap-8">
                {experiences.map(experience => <CardExperience experience={experience} />)}
            </div>
        </div>
    )
}