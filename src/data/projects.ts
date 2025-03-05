import { IProject } from "@/components/Project";
import { FaLaravel, FaReact } from "react-icons/fa";
import { SiFirebase, SiTypescript } from "react-icons/si";

import souAlunoImage from "@/assets/projects/sou-aluno.png";
import souAlunoImage2 from "@/assets/projects/sou-aluno-2.jpg";
import souAlunoImage3 from "@/assets/projects/sou-aluno-3.jpg";

import bookLabImage from "@/assets/projects/book-lab.png";
import bookLabImage2 from "@/assets/projects/book-lab-2.jpg";
import bookLabImage3 from "@/assets/projects/book-lab-3.jpg";

import flupeImage from "@/assets/projects/flupe.png";
import flupeImage2 from "@/assets/projects/flupe-2.jpg";
import flupeImage3 from "@/assets/projects/flupe-3.jpg";

import deltaMareImage from "@/assets/projects/delta-mare.png";
import deltaMareImage2 from "@/assets/projects/delta-mare-2.jpg";
import deltaMareImage3 from "@/assets/projects/delta-mare-3.jpg";
import deltaMareImage4 from "@/assets/projects/delta-mare-4.jpg";

import contaiImage from "@/assets/projects/contai.png";
import contaiImage2 from "@/assets/projects/contai-2.png";
import contaiImage3 from "@/assets/projects/contai-3.png";
import contaiImage4 from "@/assets/projects/contai-4.png";
import { FaNodeJs } from "react-icons/fa6";

export const projects = [
  {
    id: "contai",
    name: "Gestão Financeira Pessoal - Contai",
    image: contaiImage,
    gallery: [contaiImage, contaiImage2, contaiImage3, contaiImage4],
    description:
      "Plataforma desenvolvida por mim e minha companheira para controle financeiro pessoal.",
    content:
      "<h3 class='text-xl font-bold mb-4'>O Contai é uma plataforma de gestão financeira pessoal.</h3><p>Com o Contai é possível cadastrar suas contas, receitas e despesas e com isso ter um controle total de suas finanças.</p><p>A plataforma conta com diversos relatórios e gráficos para facilitar a visualização de suas finanças.</p><p>A plataforma foi planejada por minha companheira (de vida) <a href='https://www.linkedin.com/in/gabriela-t-010258195/' class='hover:underline font-bold' target='_blank'>Gabriela Tavares</a> que com seu conhecimento da área financeira colaborou com as operações e regras de negócio da plataforma.</p>",
    techs: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Node Js",
        icon: FaNodeJs,
      },
    ],
  },
  {
    id: "sou-aluno",
    name: "App Sou Aluno - Cultura Inglesa",
    image: souAlunoImage,
    gallery: [souAlunoImage, souAlunoImage2, souAlunoImage3],
    description: "App desenvolvido em react native para os alunos da Cultura Inglesa.",
    content:
      "<h3 class='text-xl font-bold mb-4'>O App Sou Aluno foi desenvolvido para a Cultura Inglesa utilizando React Native, o app conta com integração ao Firebase para envio de push notifications e Google Analytics.</h3><p>O App se comunica diretamente com a API desenvolvida pela Cutura Inglesa afim de mostrar diversas informações para o responsável financeiro e/ou aluno.</p><p>Com o app é possível também realizar pagamentos de cobranças via boletos e cartão de crédito.</p>",
    techs: [
      {
        name: "React Native",
        icon: FaReact,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Firebase",
        icon: SiFirebase,
      },
    ],
  },
  {
    id: "book-lab",
    name: "BookLab - Edify",
    image: bookLabImage,
    gallery: [bookLabImage, bookLabImage2, bookLabImage3],
    description: "A web platform for managing books.",
    content:
      "<h3 class='text-xl font-bold mb-4'>A plataforma foi desenvolvida para possibilitar os alunos darem vida as suas histórias.</h3><p>A plataforma conta com um módulo de desenho em que possibilita o aluno adicionar e desenhar páginas no livro e também adicionar textos para contar sua história.</p><p>Com o livro pronto e revisado pelo professor, basta o responsável do aluno solicitar a impressão e a plataforma gera um PDF e envia para a gráfica e com isso recebe seu livro impresso em casa!</p>",
    techs: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Laravel",
        icon: FaLaravel,
      },
    ],
  },
  {
    id: "flupe",
    name: "Plataforma de Gestão - Flupe",
    image: flupeImage,
    gallery: [flupeImage, flupeImage2, flupeImage3],
    description: "A management platform for Flupe.",
    content:
      "<h3 class='text-xl font-bold mb-4'>O Flupe é uma ferramenta que possibilita gamificar qualquer conteúdo educacional, tornando o aprendizado muito mais dinâmico.</h3><p>A plataforma possibilita o professor a transformar seu conteúdo em um minigame dentre os diversos templates cadatrados no sistema, com isso o aluno aprende jogando!</p><p>Assim que as atividades são cadastradas, a plataforma serve essas informações através de uma api e um aplicativo consome esses dados tranformando em jogo!</p>",
    techs: [
      {
        name: "Laravel",
        icon: FaLaravel,
      },
    ],
  },
  {
    id: "delta-mare",
    name: "Plataforma de Gestão - Delta Mare",
    image: deltaMareImage,
    description: "A management platform for Delta Mare.",
    gallery: [deltaMareImage, deltaMareImage2, deltaMareImage3, deltaMareImage4],
    content:
      "<h3 class='text-xl font-bold mb-4'>A Delta Mare é uma fornecedora de peixes e está presente nos cardápios dos melhores restaurantes do Rio e Grande Rio.</h3><p>Esse projeto desenvolvido com a stack Laravel (api) e React.js (front) surgiu com a necessidade de automatizar diversos setores da empresa que antes eram controlados de forma manual.</p><p>A plataforma atende diversos tipos de cadastros, tais quais: Unidade, Produtos, Categorias, Cargas, Checagens, Clientes e Vendedores.</p><p>A plataforma conta com uma dashboard completa para acompanhar todos os processos da empresa.</p><p>A plataforma conta com um módulo de venda afim de automatizar todo o processo com o controle de estoque e inadimplência.</p>",
    techs: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Laravel",
        icon: FaLaravel,
      },
    ],
  },
] as unknown as IProject["project"][];
