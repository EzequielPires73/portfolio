import { Experience } from "../models/experience";

export const experiences = [
    new Experience({
        company: 'Portal Catalão',
        description: 'Tenho experiência Full Stack no Portal Catalão, trabalhando com Node.js, React, Next.js, React Native e Flutter. Além disso, possuo conhecimento em PHP para manutenção de sistemas legados. Estou comprometido em fornecer soluções eficientes e inovadoras.',
        duration: 2,
        id: 1,
        name: 'Desenvolvedor Full-Stack',
        start: 2021,
        technologies: ['React', 'Next.js', 'Nest.js', 'React Native', 'Flutter', 'PHP'],
        image: 'https://portalcatalao.com.br/favicon.ico',
    }),
    new Experience({
        company: 'Rotina Imóveis',
        description: 'Tenho experiência como desenvolvedor Full Stack na Rotina Imóveis, utilizando tecnologias como Nest.js, Next.js, TypeScript e MySQL. Minha atuação incluiu o desenvolvimento de sistemas robustos e escaláveis para a empresa.',
        duration: 1,
        id: 1,
        name: 'Desenvolvedor Full-Stack',
        start: 2023,
        technologies: ['Next.js', 'Nest.js', 'Typescript', 'MySQL'],
        image: 'https://www.rotinaimoveis.com.br/icon.png'
    }),
]