import { indeciso, lf, tasklist } from '../../assets/projects';

// Projects card data 

const CardData = [
  {
    icon: lf,
    alt: "Vetor de flor em tons de verde",
    color: "#185B42",
    title: "Lethícia Fachetti",
    gitUrl: "https://github.com/santos-vinicius/lethiciafachetti",
    demoUrl: "https://lethiciafachetti.vercel.app/",
    tags: ["React", "StyledComponents", "Swiper", "Vercel"],
    description: "Landing Page criada para uma psicóloga."
  },
  {
    icon: indeciso,
    alt: "Vetor de um gato marrom com expressão de dúvida",
    color: "#493838",
    title: "Indeciso",
    gitUrl: "https://github.com/santos-vinicius/indeciso",
    demoUrl: "https://indeciso.vercel.app/",
    tags: ["VanillaJS", "TailwindCSS", "Figma", "Vercel"],
    description: "Web app que ajuda a escolher entre duas opções."
  },
  {
    icon: tasklist,
    alt: "Vetor de uma lista de tarefas na cor laranja",
    color: "#764907",
    title: "Lista de Tarefas",
    gitUrl: "https://github.com/santos-vinicius/task-list",
    demoUrl: "https://task-list-pied-seven.vercel.app/",
    tags: ["React", "HTML", "CSS", "Vercel"],
    description: "Lista de Tarefas criada para estudos iniciais em React"
  },
];

export default CardData