import { Project } from "../models/project";

export const projects = [
    new Project({
        id: 1,
        name: 'MindEase',
        thumb: '/pj-01.png',
        description: 'O MindEase é uma aplicação desenvolvida em Flutter dedicada ao suporte psicológico. Esta plataforma oferece um ambiente digital acolhedor para acessar recursos e orientações de saúde mental, tudo isso com uma experiência fluida e intuitiva graças à versatilidade do Flutter.',
        technologies: ['Dart', 'Flutter', 'Nest.js', 'Typescript', 'MySQL']
    }),
    new Project({
        id: 2,
        name: 'Liternautas',
        thumb: '/pj-02.png',
        description: 'O MindEase é uma aplicação desenvolvida em Flutter dedicada ao suporte psicológico. Esta plataforma oferece um ambiente digital acolhedor para acessar recursos e orientações de saúde mental, tudo isso com uma experiência fluida e intuitiva graças à versatilidade do Flutter.',
        technologies: ['React Native', 'Nest.js', 'Typescript', 'MySQL'],
        pages: [
            {
                name: 'Início',
                path: '/pj-02-home.png'
            },
            {
                name: 'Detalhes',
                path: '/pj-02-view.png'
            },
            {
                name: 'Estante',
                path: '/pj-02-estante.png'
            },
            {
                name: 'Aplicativo',
                path: '/pj-02.png'
            },
        ]
        
    }),
    new Project({
        id: 3,
        name: 'Catalão Diário',
        thumb: '/pj-03.png',
        description: 'O MindEase é uma aplicação desenvolvida em Flutter dedicada ao suporte psicológico. Esta plataforma oferece um ambiente digital acolhedor para acessar recursos e orientações de saúde mental, tudo isso com uma experiência fluida e intuitiva graças à versatilidade do Flutter.',
        technologies: ['Next.js', 'Nest.js', 'Typescript', 'MySQL']
    }),
    new Project({
        id: 3,
        name: 'Tema Digital',
        thumb: '/pj-04.png',
        description: 'O MindEase é uma aplicação desenvolvida em Flutter dedicada ao suporte psicológico. Esta plataforma oferece um ambiente digital acolhedor para acessar recursos e orientações de saúde mental, tudo isso com uma experiência fluida e intuitiva graças à versatilidade do Flutter.',
        technologies: ['Next.js', 'Nest.js', 'Typescript', 'MySQL']
    }),
]