import type { ImageMetadata } from 'astro';
import fireflyLensImg from '../assets/projects/firefly-lens.png';
import viuAiImg from '../assets/projects/viu-ai.jpg';
import naoESoRetaImg from '../assets/projects/nao-e-so-reta.png';
import cajuImg from '../assets/projects/caju.png';
import seiHubImg from '../assets/projects/sei-hub.svg';
import moleculeLabImg from '../assets/projects/molecule-lab.png';

/**
 * Compute responsive raster widths for `<Picture />` without upscaling.
 */
export function getProjectWidths(img: { width: number }): number[] {
  const maxWidth = Math.min(1080, img.width);
  const widths = [400, 720].filter((w) => w < maxWidth);
  widths.push(maxWidth);
  return widths;
}

export interface Publication {
  id: string;
  plateNumber: string;
  plateNumberEn: string;
  title: string;
  authors: string[];
  venue: string;
  venueEn: string;
  location: string;
  year: number;
  type: 'Artigo em Congresso' | 'Apresentação Oral' | 'Trabalho Premiado' | 'Congresso';
  typeEn: 'Conference Paper' | 'Oral Presentation' | 'Awarded Work' | 'Conference';
  award?: string;
  awardEn?: string;
  abstract: string;
  abstractEn: string;
  equation?: string;
  tags: string[];
  tagsEn: string[];
  pdfUrl: string;
  doiUrl: string;
  doiCode: string;
  repoUrl?: string;
  bibtex: string;
  featured?: boolean;
}

export interface Project {
  id: string;
  figNumber: string;
  title: string;
  titleEn: string;
  repoName: string;
  subtitle: string;
  subtitleEn: string;
  category: 'codigo' | 'hackathon' | 'jogo';
  categoryLabel: string;
  categoryLabelEn: string;
  description: string;
  descriptionEn: string;
  equation?: string;
  image?: ImageMetadata;
  tech: string[];
  repoUrl: string;
  liveUrl?: string;
  highlight?: string;
  highlightEn?: string;
  year: string;
  featured?: boolean;
}

export const profileData = {
  name: 'Caio Marcelo Cavallari Ruas',
  shortName: 'Caio M. C. Ruas',
  role: 'Bacharelando em Ciência e Tecnologia — Ilum (CNPEM) & Treinador Oficial IASC / Caça Asteroides MCTI',
  roleEn: 'B.Sc. Student in Science and Technology — Ilum (CNPEM) & Official Trainer at IASC / MCTI Asteroid Hunt',
  institution: 'Ilum — Escola de Ciência (CNPEM)',
  location: 'Campinas, SP — Brasil',
  email: 'caio24010@ilum.cnpem.br',
  orcid: 'https://orcid.org/0009-0009-4474-1672',
  orcidId: '0009-0009-4474-1672',
  lattes: 'http://lattes.cnpq.br/4924298812121535',
  lattesId: '4924298812121535',
  github: 'https://github.com/CaioRuas24010',
  cvPdfUrl: '/cv-caio-ruas.pdf',
};

export const publications: Publication[] = [
  {
    id: 'pub-bmrs-2026',
    plateNumber: 'PRANCHA I',
    plateNumberEn: 'PLATE I',
    title: 'Oxidation Group Distribution in Graphene Oxide: Effects on Electronic Properties',
    authors: ['RUAS, Caio Marcelo Cavallari', 'LIMA, Felipe Crasto de'],
    venue: 'XXIV B-MRS Meeting (Apresentação Oral)',
    venueEn: 'XXIV B-MRS Meeting (Oral Presentation)',
    location: 'Curitiba, PR',
    year: 2026,
    type: 'Apresentação Oral',
    typeEn: 'Oral Presentation',
    award: 'CNPq / INCT Materials Informatics',
    awardEn: 'CNPq / INCT Materials Informatics',
    abstract:
      'Apresentação oral dos resultados da pesquisa em modelagem teórica e computacional das propriedades eletrônicas do óxido de grafeno (GO), com ênfase na influência do grau de oxidação e da distribuição espacial dos grupos funcionais oxigenados sobre a estrutura eletrônica.',
    abstractEn:
      'Oral presentation of theoretical and computational modeling results on the electronic properties of graphene oxide (GO), focusing on how the oxidation degree and spatial distribution of oxygen functional groups modulate its electronic structure.',
    tags: ['Física de Materiais', 'Óxido de Grafeno', 'Estrutura Eletrônica', 'INCT Materials Informatics'],
    tagsEn: ['Materials Physics', 'Graphene Oxide', 'Electronic Structure', 'INCT Materials Informatics'],
    pdfUrl: '#pdf-bmrs-2026',
    doiUrl: 'https://orcid.org/0009-0009-4474-1672',
    doiCode: 'B-MRS.2026.GO',
    featured: true,
    bibtex: `@inproceedings{ruas2026oxidation,
  author    = {Ruas, Caio Marcelo Cavallari and Lima, Felipe Crasto de},
  title     = {Oxidation Group Distribution in Graphene Oxide: Effects on Electronic Properties},
  booktitle = {Proceedings of the XXIV B-MRS Meeting},
  year      = {2026},
  address   = {Curitiba, PR, Brazil},
  note      = {Oral Presentation -- CNPq/INCT Materials Informatics}
}`,
  },
  {
    id: 'pub-unesp-2026',
    plateNumber: 'PRANCHA II',
    plateNumberEn: 'PLATE II',
    title: 'Métricas em espaços normados e distância em grafos: uma leitura matemática com estudo de caso em Barão Geraldo (Campinas/SP)',
    authors: [
      'RUAS, Caio Marcelo Cavallari',
      'BRAMANTE, Pedro Henrique Medeiros',
      'CANSI, Thalles José de Souza',
      'WASQUES, Vinicius Francisco',
    ],
    venue: 'IV Encontro do Programa de Pós-Graduação em Matemática (PGMAT) — IGCE/UNESP',
    venueEn: 'IV Meeting of the Graduate Program in Mathematics (PGMAT) — IGCE/UNESP',
    location: 'Rio Claro, SP',
    year: 2026,
    type: 'Trabalho Premiado',
    typeEn: 'Awarded Work',
    award: '1º Lugar na Sessão de Pôsteres — PGMAT/UNESP 2026',
    awardEn: '1st Place Poster Award — PGMAT/UNESP 2026',
    abstract:
      'Trabalho desenvolvido na interface entre espaços normados, métricas contínuas e teoria dos grafos, classificado em 1º lugar na Sessão de Pôsteres do IGCE/UNESP. Investiga como diferentes normas Lp se comparam às distâncias geodésicas reais na malha viária de Barão Geraldo (Campinas/SP).',
    abstractEn:
      'Research at the interface between normed vector spaces, continuous metrics, and graph theory, awarded 1st Place in the Poster Session at IGCE/UNESP. Investigates how theoretical Lp norms compare against actual shortest-path graph distances in the urban street network of Barão Geraldo (Campinas/SP).',
    tags: ['Espaços Normados', 'Teoria dos Grafos', 'Geometria Métrica', 'Barão Geraldo'],
    tagsEn: ['Normed Spaces', 'Graph Theory', 'Metric Geometry', 'Urban Networks'],
    pdfUrl: 'https://github.com/ThallesCansi/nao-e-so-reta',
    doiUrl: 'https://github.com/ThallesCansi/nao-e-so-reta',
    doiCode: 'UNESP.PGMAT.2026.01',
    repoUrl: 'https://github.com/ThallesCansi/nao-e-so-reta',
    featured: true,
    bibtex: `@inproceedings{ruas2026metricas,
  author    = {Ruas, Caio Marcelo Cavallari and Bramante, Pedro Henrique Medeiros and Cansi, Thalles Jos{\\'e} de Souza and Wasques, Vinicius Francisco},
  title     = {M{\\'e}tricas em espa{\\c{c}}os normados e dist{\\^a}ncia em grafos: uma leitura matem{\\'a}tica com estudo de caso em Bar{\\~a}o Geraldo (Campinas/SP)},
  booktitle = {IV Encontro do Programa de P{\\'o}s-Gradua{\\c{c}}{\\~a}o em Matem{\\'a}tica (PGMAT) -- IGCE/UNESP},
  year      = {2026},
  address   = {Rio Claro, SP, Brazil},
  note      = {1st Place in the Poster Session}
}`,
  },
  {
    id: 'pub-cbeb-2026',
    plateNumber: 'PRANCHA III',
    plateNumberEn: 'PLATE III',
    title: 'Simulation-based geometry optimization of a bone-on-a-chip through a machine learning-assisted evolutionary approach',
    authors: [
      'NICOLAI, Gabriel',
      'VILARINS, Katarina da Silva',
      'RUAS, Caio',
      'RIBEIRO, Larissa M. S.',
      'LOPES, Filipe Loyola',
      'GUIMARÃES, Marcília Valéria',
      'BONACIN, Rodrigo',
      'DAGUANO, Juliana K. M. B.',
      'MORAES, Matheus B. de',
    ],
    venue: 'XXX Congresso Brasileiro de Engenharia Biomédica (CBEB 2026) — Conference Paper',
    venueEn: 'XXX Brazilian Congress on Biomedical Engineering (CBEB 2026) — Conference Paper',
    location: 'Fortaleza, CE',
    year: 2026,
    type: 'Artigo em Congresso',
    typeEn: 'Conference Paper',
    award: 'Artigo Completo Publicado — CBEB 2026',
    awardEn: 'Published Conference Paper — CBEB 2026',
    abstract:
      'Artigo de congresso que estabelece um framework em malha fechada (closed-loop) acoplando simulações de fluido-dinâmica computacional (CFD) e transporte de massa (consumo de oxigênio e tensão de cisalhamento na parede — WSS) a modelos substitutos (surrogate models) de aprendizado de máquina e algoritmos evolutivos para otimizar a geometria e as condições operacionais de dispositivos microfluídicos bone-on-a-chip.',
    abstractEn:
      'Conference paper establishing a closed-loop simulation-surrogate-optimization framework that couples computational fluid dynamics (CFD) and mass transport simulations (oxygen consumption and wall shear stress — WSS) with machine learning surrogate models and evolutionary algorithms to optimize microfluidic bone-on-a-chip geometries.',
    tags: ['Bone-on-a-Chip', 'CFD & Microfluídica', 'Surrogate Modeling', 'Algoritmos Evolutivos', 'CTI Renato Archer'],
    tagsEn: ['Bone-on-a-Chip', 'CFD & Microfluidics', 'Surrogate Modeling', 'Evolutionary Algorithms', 'Biomedical Eng.'],
    pdfUrl: 'https://www.researchgate.net/publication/396054562',
    doiUrl: 'https://www.researchgate.net/publication/396054562',
    doiCode: 'RG.396054562 / CBEB.2026',
    featured: true,
    bibtex: `@inproceedings{nicolai2026boneonachip,
  author    = {Nicolai, Gabriel and Vilarins, Katarina da Silva and Ruas, Caio Marcelo Cavallari and Ribeiro, Larissa M. S. and Lopes, Filipe Loyola and Guimar{\\~a}es, Marc{\\'i}lia Val{\\'e}ria and Bonacin, Rodrigo and Daguano, Juliana Kelmy Mac{\\'a}rio Barboza and Moraes, Matheus Bernardelli de},
  title     = {Simulation-based geometry optimization of a bone-on-a-chip through a machine learning-assisted evolutionary approach},
  booktitle = {Proceedings of the Brazilian Congress on Biomedical Engineering (CBEB 2026)},
  year      = {2026},
  month     = {nov},
  address   = {Fortaleza, CE, Brazil},
  url       = {https://www.researchgate.net/publication/396054562}
}`,
  },
  {
    id: 'pub-lnbio-2025',
    plateNumber: 'PRANCHA IV',
    plateNumberEn: 'PLATE IV',
    title: 'Base Molecular do Mecanismo de Ação de Inibidores de Bombas de Efluxo de Bactérias Gram-Negativas e Proposição de Novos Inibidores Baseados em Estrutura',
    authors: ['RUAS, Caio Marcelo Cavallari', 'ERDMANN, Rafael Dalacorte'],
    venue: 'IV Simpósio Ilum — Ciências da Vida (Orientação: Dr. Celso Eduardo Benedetti, LNBio/CNPEM)',
    venueEn: 'IV Ilum Symposium — Life Sciences (Advisor: Dr. Celso Eduardo Benedetti, LNBio/CNPEM)',
    location: 'Campinas, SP',
    year: 2025,
    type: 'Trabalho Premiado',
    typeEn: 'Awarded Work',
    award: 'Prêmio de Destaque em Ciências da Vida — IV Simpósio Ilum/CNPEM',
    awardEn: 'Outstanding Work Award in Life Sciences — IV Ilum/CNPEM Symposium',
    abstract:
      'Investigação sobre os mecanismos moleculares de ação de inibidores de bombas de efluxo bacterianas e proposição racional de novos inibidores baseados em estrutura tridimensional. Trabalho premiado como Destaque na área de Ciências da Vida no IV Simpósio Ilum.',
    abstractEn:
      'Investigation into the molecular mechanisms of efflux pump inhibitors in Gram-negative bacteria and structure-based rational design of novel candidate inhibitors. Awarded Outstanding Work in Life Sciences at the IV Ilum Symposium.',
    tags: ['Biologia Estrutural', 'LNBio / CNPEM', 'Bombas de Efluxo', 'Drug Design'],
    tagsEn: ['Structural Biology', 'LNBio / CNPEM', 'Efflux Pumps', 'Structure-Based Drug Design'],
    pdfUrl: '#pdf-simposio-ilum-2025',
    doiUrl: 'https://orcid.org/0009-0009-4474-1672',
    doiCode: 'ILUM.LNBIO.2025',
    featured: true,
    bibtex: `@inproceedings{ruas2025efluxo,
  author    = {Ruas, Caio Marcelo Cavallari and Erdmann, Rafael Dalacorte},
  title     = {Base Molecular do Mecanismo de A{\\c{c}}{\\~a}o de Inibidores de Bombas de Efluxo de Bact{\\'e}rias Gram-Negativas e Proposi{\\c{c}}{\\~a}o de Novos Inibidores Baseados em Estrutura},
  booktitle = {IV Simp{\\'o}sio Ilum -- Escola de Ci{\\^e}ncia (CNPEM)},
  year      = {2025},
  address   = {Campinas, SP, Brazil},
  note      = {Advisor: Celso Eduardo Benedetti (LNBio/CNPEM). Outstanding Work Award in Life Sciences}
}`,
  },
  {
    id: 'pub-ebee-2025',
    plateNumber: 'PRANCHA V',
    plateNumberEn: 'PLATE V',
    title: 'Theoretical Modeling of the Disordered Electronic Spectrum in Graphene Oxide',
    authors: ['RUAS, Caio Marcelo Cavallari', 'LIMA, Felipe Crasto de'],
    venue: 'XIX Escola Brasileira de Estrutura Eletrônica (EBEE)',
    venueEn: 'XIX Brazilian School of Electronic Structure (EBEE)',
    location: 'Niterói, RJ',
    year: 2025,
    type: 'Congresso',
    typeEn: 'Conference',
    abstract:
      'Investigação teórica do espectro eletrônico desordenado do óxido de grafeno, analisando a densidade de estados e os efeitos de desordem configuracional através de métodos computacionais de estrutura eletrônica.',
    abstractEn:
      'Theoretical investigation of the disordered electronic spectrum in graphene oxide, analyzing the density of states and configurational disorder effects via computational electronic structure methods.',
    tags: ['Estrutura Eletrônica', 'Física Teórica', 'Sistemas Desordenados', 'Óxido de Grafeno'],
    tagsEn: ['Electronic Structure', 'Theoretical Physics', 'Disordered Systems', 'Graphene Oxide'],
    pdfUrl: '#pdf-ebee-2025',
    doiUrl: 'https://orcid.org/0009-0009-4474-1672',
    doiCode: 'EBEE.2025.GO',
    featured: false,
    bibtex: `@inproceedings{ruas2025theoretical,
  author    = {Ruas, Caio Marcelo Cavallari and Lima, Felipe Crasto de},
  title     = {Theoretical Modeling of the Disordered Electronic Spectrum in Graphene Oxide},
  booktitle = {XIX Escola Brasileira de Estrutura Eletr{\\^o}nica},
  year      = {2025},
  address   = {Niter{\\'o}i, RJ, Brazil}
}`,
  },
];

export const projects: Project[] = [
  {
    id: 'proj-firefly-lens',
    figNumber: 'FIG. 01',
    title: 'FireFly Lens',
    titleEn: 'FireFly Lens',
    repoName: 'ThallesCansi/firefly-lens',
    subtitle: 'Um calendário de fogo a partir de dois sensores de satélite (MODIS & VIIRS)',
    subtitleEn: 'One fire calendar from two satellite sensors (MODIS & VIIRS)',
    category: 'hackathon',
    categoryLabel: 'Hackathons & Inovação',
    categoryLabelEn: 'Hackathons & Innovation',
    description:
      'Detecções de fogo ativo dos sensores MODIS (1 km) e VIIRS (375 m) harmonizadas em uma única escala física (escala MODIS Aqua) e visualizadas como um calendário 3D de atividade de queimadas na América do Sul (2002–2026). Desenvolvido no NASA Space Apps Challenge.',
    descriptionEn:
      'MODIS (1 km) and VIIRS (375 m) active-fire detections harmonized onto a single physical scale (MODIS Aqua scale) and visualized as a 3D calendar of fire activity across South America (2002–2026). Built for the NASA Space Apps Challenge.',
    equation:
      '\\hat{N}_{\\text{MODIS}}(t) = \\mathcal{H}_{\\theta}\\!\\left(N_{\\text{VIIRS}}(t),\\, N_{\\text{Aqua}}(t)\\right), \\quad \\text{bias: } 506\\% \\to <1\\%',
    image: fireflyLensImg,
    tech: ['NASA MODIS & VIIRS', 'Harmonização Estatística', 'Visualização 3D', 'TypeScript'],
    repoUrl: 'https://github.com/ThallesCansi/firefly-lens',
    liveUrl: 'https://firefly-lens.vercel.app',
    highlight: 'NASA Space Apps 2026 ★',
    highlightEn: 'NASA Space Apps 2026 ★',
    year: '2026',
    featured: true,
  },
  {
    id: 'proj-viu-ai',
    figNumber: 'FIG. 02',
    title: 'Viu AI',
    titleEn: 'Viu AI',
    repoName: 'ThallesCansi/viu-ai',
    subtitle: 'Agente autônomo para inteligência, marketing e resposta ao mercado',
    subtitleEn: 'Autonomous agent for market intelligence, marketing, and rapid response',
    category: 'hackathon',
    categoryLabel: 'Hackathons & Inovação',
    categoryLabelEn: 'Hackathons & Innovation',
    description:
      'Agente autônomo em closed-loop capaz de monitorar sinais internos e externos de mercado, detectar anomalias, investigar evidências, construir hipóteses, avaliar urgência e preparar decisões acionáveis. Projeto vencedor do 1º Lugar no Hack2L (Unicamp / Canastra Ventures).',
    descriptionEn:
      'Closed-loop autonomous AI agent capable of monitoring internal and external market signals, detecting anomalies, investigating evidence, formulating hypotheses, and preparing voice-enabled Decision Rooms. 1st Place winner at Hack2L (Unicamp / Canastra Ventures).',
    equation:
      '\\text{Signals} \\longrightarrow \\text{Detect} \\longrightarrow \\text{Investigate} \\longrightarrow \\text{Decide} \\longrightarrow \\text{Learn}',
    image: viuAiImg,
    tech: ['React 19', 'Open Agent Loops', 'Featherless AI', 'ElevenLabs', 'TypeScript'],
    repoUrl: 'https://github.com/ThallesCansi/viu-ai',
    liveUrl: 'https://hackathons.canastra.ventures/projects/viu-ai-capithon',
    highlight: '1º Lugar — Hack2L Unicamp 2026',
    highlightEn: '1st Place — Hack2L Unicamp 2026',
    year: '2026',
    featured: true,
  },
  {
    id: 'proj-nao-e-so-reta',
    figNumber: 'FIG. 03',
    title: 'Não É Só Reta — Laboratório de Métricas Urbanas',
    titleEn: 'Not Just a Straight Line — Urban Metrics Lab',
    repoName: 'ThallesCansi/nao-e-so-reta',
    subtitle: 'Métricas em Espaços Normados vs. Distância em Grafos (Barão Geraldo)',
    subtitleEn: 'Normed Vector Space Metrics vs. Street Graph Distance (Barão Geraldo)',
    category: 'codigo',
    categoryLabel: 'Códigos & Pesquisa',
    categoryLabelEn: 'Code & Research',
    description:
      'Aplicação interativa em Streamlit + OSMnx + NetworkX que compara a distância intrínseca (menor caminho no grafo viário via OpenStreetMap) com distâncias extrínsecas de normas L1, L2, L∞ e Lp, incluindo índice de tortuosidade e calibração empírica de p em Barão Geraldo (Campinas/SP).',
    descriptionEn:
      'Interactive Streamlit + OSMnx + NetworkX application comparing intrinsic road network distance (shortest path on OpenStreetMap graphs) against extrinsic L1, L2, L∞, and Lp norm metrics, including tortuosity indices and empirical p-calibration in Barão Geraldo (Campinas/SP).',
    equation:
      '\\|\\mathbf{x} - \\mathbf{y}\\|_p = \\left(\\sum_{i=1}^2 |x_i - y_i|^p\\right)^{\\!1/p} \\;\\text{vs.}\\; d_G(u,v)',
    image: naoESoRetaImg,
    tech: ['Streamlit', 'OSMnx / NetworkX', 'Folium', 'Espaços Normados', 'Python'],
    repoUrl: 'https://github.com/ThallesCansi/nao-e-so-reta',
    liveUrl: 'https://naoesoreta.streamlit.app/',
    highlight: '1º Lugar Pôster — PGMAT/UNESP 2026',
    highlightEn: '1st Place Poster — PGMAT/UNESP 2026',
    year: '2026',
    featured: true,
  },
  {
    id: 'proj-caju-nasa',
    figNumber: 'FIG. 04',
    title: 'CAJU — NASA Space Apps',
    titleEn: 'CAJU — NASA Space Apps',
    repoName: 'ThallesCansi/caju',
    subtitle: 'Jornada Narrativa & Jogo Educativo — NASA International Space Apps Challenge',
    subtitleEn: 'Narrative Journey & Educational Game — NASA International Space Apps Challenge',
    category: 'jogo',
    categoryLabel: 'Jogos & Simulações Interativas',
    categoryLabelEn: 'Games & Interactive Simulations',
    description:
      'Jogo educativo e experiência narrativa interativa em React premiada com o People’s Choice Award no NASA International Space Apps Challenge, guiando o jogador por missões ambientais sobre água, fogo, solo e atmosfera através de dados de observação da Terra.',
    descriptionEn:
      'Educational game and interactive narrative experience built with React, awarded the People’s Choice Award at the NASA International Space Apps Challenge. Guides players through environmental missions covering water, fire, soil, and atmosphere using Earth observation data.',
    image: cajuImg,
    tech: ['React', 'Game Design Educativo', 'NASA Earth Data', 'Storytelling'],
    repoUrl: 'https://github.com/ThallesCansi/caju',
    highlight: 'People’s Choice — NASA Space Apps 2024',
    highlightEn: 'People’s Choice — NASA Space Apps 2024',
    year: '2024',
    featured: true,
  },
  {
    id: 'proj-sei-hub',
    figNumber: 'FIG. 05',
    title: 'SEI Hub · Site Estudantil da Ilum',
    titleEn: 'SEI Hub · Ilum Student Hub',
    repoName: 'ThallesCansi/sei-hub',
    subtitle: 'Hub acadêmico para comunicados, eventos, disciplinas e espaços institucionais',
    subtitleEn: 'Academic hub for announcements, events, courses, and student organizations',
    category: 'codigo',
    categoryLabel: 'Códigos & Pesquisa',
    categoryLabelEn: 'Code & Research',
    description:
      'Plataforma web para a comunidade estudantil da Ilum centralizando mural de postagens (eventos, materiais, estágios), calendário integrado, biblioteca visual de disciplinas, perfis via Supabase e espaços do Centro Acadêmico e Atlética.',
    descriptionEn:
      'Web platform for the Ilum student community centralizing announcement boards (events, study materials, internships), an integrated calendar, visual course library, Supabase user profiles, and spaces for the Student Union and Athletics.',
    image: seiHubImg,
    tech: ['React 18', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Playwright'],
    repoUrl: 'https://github.com/ThallesCansi/sei-hub',
    highlight: 'Comunidade Ilum',
    highlightEn: 'Ilum Community',
    year: '2025',
    featured: false,
  },
  {
    id: 'proj-molecule-lab',
    figNumber: 'FIG. 06',
    title: 'Molecule Lab — Construtor Molecular 2D',
    titleEn: 'Molecule Lab — 2D Molecular Builder',
    repoName: 'ThallesCansi/molecule-lab-frontend',
    subtitle: 'Simulador interativo de moléculas e estabilidade térmica (Ciência Aberta CNPEM)',
    subtitleEn: 'Interactive molecule builder and thermal stability simulator (CNPEM Open Science)',
    category: 'jogo',
    categoryLabel: 'Jogos & Simulações Interativas',
    categoryLabelEn: 'Games & Interactive Simulations',
    description:
      'Aplicação web interativa de divulgação científica desenvolvida para totens e tablets no Ciência Aberta do CNPEM e Ilum: permite construir moléculas em canvas 2D com regras reais de valência e simular sua estabilidade térmica em tempo real via Server-Sent Events (SSE).',
    descriptionEn:
      'Interactive science outreach web app built for kiosks and tablets at CNPEM Open Science and Ilum Open Doors: allows visitors to build molecules on a 2D canvas with real valence rules and simulate their thermal stability in real time via Server-Sent Events (SSE).',
    equation:
      '\\langle E_k \\rangle = \\frac{1}{2} m \\langle v^2 \\rangle = \\frac{d}{2} k_B T',
    image: moleculeLabImg,
    tech: ['React 18', 'TypeScript', 'Canvas 2D', 'Server-Sent Events', 'Tailwind CSS'],
    repoUrl: 'https://github.com/ThallesCansi/molecule-lab-frontend',
    liveUrl: 'https://molecule-lab-frontend.vercel.app',
    highlight: 'Ciência Aberta CNPEM / Ilum',
    highlightEn: 'CNPEM / Ilum Science Outreach',
    year: '2026',
    featured: false,
  },
];

export const educationList = [
  {
    period: '2024 – 2026',
    title: 'Bacharelado em Ciência e Tecnologia (Em andamento)',
    titleEn: 'B.Sc. in Science and Technology (In Progress)',
    institution: 'Ilum — Escola de Ciência (CNPEM), Campinas/SP',
    detail: 'Formação interdisciplinar em Física, Matemática, Computação Científica, Química, Biologia e Ciência de Dados integrada ao ecossistema de pesquisa do CNPEM.',
    detailEn: 'Interdisciplinary degree integrating Physics, Mathematics, Scientific Computing, Chemistry, Biology, and Data Science within the CNPEM national research ecosystem.',
  },
  {
    period: '2026',
    title: 'IV Escola de Férias de Fabricação e Caracterização de Dispositivos',
    titleEn: 'IV Winter/Summer School on Device Fabrication and Characterization',
    institution: 'Ilum / LNNano / CNPEM',
    detail: 'Treinamento prático em micro/nanofabricação e técnicas avançadas de caracterização experimental de materiais e dispositivos.',
    detailEn: 'Hands-on training in micro/nanofabrication and advanced experimental characterization of materials and devices.',
  },
  {
    period: '2025',
    title: 'CNPEM–IBM School: Sustainable Materials and AI (18 horas)',
    titleEn: 'CNPEM–IBM School: Sustainable Materials and AI (18 hours)',
    institution: 'LNNano / CNPEM & IBM Research',
    detail: 'Escola científica voltada à descoberta de materiais sustentáveis acelerada por Inteligência Artificial e modelagem quântica.',
    detailEn: 'Scientific school focused on sustainable materials discovery accelerated by Artificial Intelligence and quantum modeling.',
  },
  {
    period: '2025',
    title: 'Curso de Férias: Sistemas Complexos em Física e Além (20 horas)',
    titleEn: 'Short Course: Complex Systems in Physics and Beyond (20 hours)',
    institution: 'Ilum — Escola de Ciência (CNPEM)',
    detail: 'Dinâmica não-linear, redes complexas, transições de fase e fenômenos emergentes.',
    detailEn: 'Nonlinear dynamics, complex networks, phase transitions, and emergent phenomena.',
  },
  {
    period: '2019 – 2021',
    title: 'Ensino Médio',
    titleEn: 'High School Diploma',
    institution: 'Avance Colégio e Cursos',
    detail: 'Conquista de 7 medalhas em Olimpíadas Científicas Nacionais (3x Ouro e 1x Bronze na OBA; 2x Prata e 1x Bronze na ONC) e Menção Honrosa na 16ª OBMEP.',
    detailEn: 'Earned 7 medals in National Science Olympiads (3x Gold and 1x Bronze at OBA; 2x Silver and 1x Bronze at ONC) plus Honorable Mention at the 16th OBMEP.',
  },
];

export const experienceList = [
  {
    period: '2021 – Atual',
    periodEn: '2021 – Present',
    role: 'Treinador Oficial — International Astronomical Search Collaboration (IASC) / Caça Asteroides MCTI',
    roleEn: 'Official Trainer — International Astronomical Search Collaboration (IASC) / MCTI Asteroid Hunt',
    institution: 'IASC (NASA Partner) & Ministério da Ciência, Tecnologia e Inovações (MCTI)',
    description:
      'Atuação como treinador voluntário regional no Brasil, integrando a equipe oficial do IASC e o programa Caça Asteroides MCTI. Responsável por orientar e auxiliar participantes em campanhas de ciência cidadã voltadas à identificação de asteroides em imagens astronômicas, contribuindo para a formação científica e a popularização da Astronomia.',
    descriptionEn:
      'Regional volunteer trainer in Brazil as part of the official IASC team and the MCTI Asteroid Hunt program. Responsible for mentoring participants in citizen science campaigns dedicated to identifying asteroids in astronomical imagery and promoting Astronomy outreach.',
  },
  {
    period: 'Jul/2025 – Ago/2026',
    periodEn: 'Jul/2025 – Aug/2026',
    role: 'Bolsista de Iniciação Científica CNPq / INCT Materials Informatics',
    roleEn: 'CNPq / INCT Materials Informatics Undergraduate Research Fellow',
    institution: 'Ilum — Escola de Ciência (CNPEM)',
    advisor: 'Orientação: Prof. Dr. Felipe David Crasto de Lima',
    advisorEn: 'Advisor: Prof. Dr. Felipe David Crasto de Lima',
    description:
      'Pesquisa concluída em modelagem teórica e computacional das propriedades eletrônicas do óxido de grafeno, investigando os efeitos do grau de oxidação e da distribuição de grupos funcionais oxigenados.',
    descriptionEn:
      'Completed undergraduate research on theoretical and computational modeling of the electronic properties of graphene oxide, investigating the effects of oxidation degree and oxygen functional group distribution.',
  },
  {
    period: '2022 – 2023',
    periodEn: '2022 – 2023',
    role: 'Monitor de Física, Matemática e Química',
    roleEn: 'Physics, Mathematics, and Chemistry Teaching Assistant',
    institution: 'Avance Colégio e Cursos',
    description:
      'Atuação durante dois anos auxiliando estudantes de ensino médio e pré-vestibular na resolução de problemas e na preparação para olimpíadas científicas nacionais, impulsionando o número de medalhas conquistadas.',
    descriptionEn:
      'Mentored high school and college-prep students for two years in problem-solving and preparation for national science olympiads, contributing to a marked increase in student medals.',
  },
];

export const awardsList = [
  {
    year: '2026',
    title: '1º Lugar no Hack2L — Unicamp',
    titleEn: '1st Place at Hack2L — Unicamp',
    issuer: 'Canastra Ventures, Liga Empreendedora & Instituto de Computação (Unicamp)',
    detail: 'Premiação concedida à equipe pelo desenvolvimento do projeto Viu AI, solução baseada em agentes de inteligência artificial.',
    detailEn: 'Awarded 1st place for developing Viu AI, an autonomous closed-loop market intelligence agent solution.',
  },
  {
    year: '2026',
    title: '1º Lugar na Sessão de Pôsteres — IV Encontro do PGMAT/UNESP',
    titleEn: '1st Place in the Poster Session — IV PGMAT/UNESP Meeting',
    issuer: 'PGMAT — IGCE / UNESP (Rio Claro, SP)',
    detail: 'Premiação pelo trabalho "Métricas em espaços normados e distância em grafos: uma leitura matemática com estudo de caso em Barão Geraldo (Campinas/SP)".',
    detailEn: 'Awarded for the work "Metrics in normed spaces and graph distance: a mathematical reading with a case study in Barão Geraldo (Campinas/SP)".',
  },
  {
    year: '2026',
    title: 'Prêmio de Destaque na Área de Ciências da Vida — IV Simpósio Ilum/CNPEM',
    titleEn: 'Outstanding Work Award in Life Sciences — IV Ilum/CNPEM Symposium',
    issuer: 'Ilum Escola de Ciência & LNBio / CNPEM',
    detail: 'Reconhecimento pelo trabalho sobre a base molecular de inibidores de bombas de efluxo de bactérias Gram-negativas (coautoria com Rafael D. Erdmann, orientação de Celso E. Benedetti).',
    detailEn: 'Recognized for structural biology research on the molecular mechanism of efflux pump inhibitors in Gram-negative bacteria (with Rafael D. Erdmann; advisor: Dr. Celso E. Benedetti).',
  },
  {
    year: '2024 & 2025',
    title: 'People’s Choice Award & Menções Honrosas — NASA Space Apps Challenge',
    titleEn: 'People’s Choice Award & Honorable Mentions — NASA Space Apps Challenge',
    issuer: 'NASA International Space Apps Challenge',
    detail: 'Premiações locais nas categorias People’s Choice (2024 — Projeto Caju) e Menção Honrosa (2024, 2025), além de participação nos desafios NextWave Hackathon (Yuno/Nauta) e AMAthon (Ambev/Água AMA).',
    detailEn: 'Local awards in the People’s Choice (2024 — Project Caju) and Honorable Mention (2024, 2025) categories, alongside participation in NextWave Hackathon (Yuno/Nauta) and AMAthon (Ambev/Água AMA).',
  },
  {
    year: '2018 – 2021',
    title: '7 Medalhas em Olimpíadas Científicas Nacionais + Menção Honrosa OBMEP',
    titleEn: '7 Medals in National Science Olympiads + OBMEP Honorable Mention',
    issuer: 'OBA, ONC & OBMEP',
    detail: '3 Medalhas de Ouro (2018, 2020, 2021) e 1 de Bronze (2019) na OBA; 2 Medalhas de Prata (2019, 2021) e 1 de Bronze (2020) na ONC; Menção Honrosa na 16ª OBMEP (2021).',
    detailEn: '3 Gold Medals (2018, 2020, 2021) and 1 Bronze (2019) at the Brazilian Astronomy Olympiad (OBA); 2 Silver Medals (2019, 2021) and 1 Bronze (2020) at the National Science Olympiad (ONC); Honorable Mention at the 16th OBMEP (2021).',
  },
];
