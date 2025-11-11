import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

interface Integrante {
  nome: string;
  github: string;
  linkedin: string;
  foto: string;
}

function Contato() {
  const integrantes: Integrante[] = [
    {
      nome: "Anna Clara",
      github: "https://github.com/",
      linkedin: "https://linkedin.com/in/andradeannac",
      foto: "https://avatars.githubusercontent.com/u/109049321?v=4"
    },
    {
      nome: "Benner Dias",
      github: "https://github.com/BennerDias",
      linkedin: "https://linkedin.com/in/BennerDias",
      foto: "https://avatars.githubusercontent.com/u/183029242?v=4"
    },
    {
      nome: "Elzilane Barreto",
      github: "https://github.com/elzilanebarreto",
      linkedin: "https://linkedin.com/in/elzilanebarreto",
      foto: "https://avatars.githubusercontent.com/u/170752422?v=4"
    },
    {
      nome: "Maristela Rocha",
      github: "https://github.com/maristelarochas",
      linkedin: "https://www.linkedin.com/in/maristela-rocha/",
      foto: "https://avatars.githubusercontent.com/u/147320021?v=4"
    },
    {
      nome: "Mateus Heloi",
      github: "https://github.com/MateusHeloi",
      linkedin: "https://linkedin.com/in/mateus-heloi",
      foto: "https://avatars.githubusercontent.com/u/110264142?v=4"
    },
    {
      nome: "Paulo Henrique",
      github: "https://github.com/Phcode007",
      linkedin: "https://linkedin.com/in/paulo-henrique-belarmino-ads",
      foto: "https://avatars.githubusercontent.com/u/149791777?v=4"
    },
    {
      nome: "Vinícius Valverde",
      github: "https://github.com/Valverde08",
      linkedin: "https://linkedin.com/in/vinicius-valverde",
      foto: "https://avatars.githubusercontent.com/u/120853222?v=4"
    }
  ];

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900 text-white'>
      <div className='flex flex-col items-center justify-center min-h-screen py-10 px-6'>
        <h1 className='text-4xl font-bold mb-12 text-center tracking-tight'>
          Integrantes do Projeto
        </h1>

        {/* Primeira linha */}
        <div className='flex flex-wrap justify-center gap-10 mb-10'>
          {integrantes.slice(0, 4).map((i) => (
            <div
              key={i.nome}
              className='flex flex-col items-center bg-slate-800 bg-opacity-70 rounded-2xl shadow-lg p-6 w-56 hover:bg-slate-700 hover:scale-105 transition duration-300'
            >
              <img
                src={i.foto}
                alt={i.nome}
                className='w-28 h-28 rounded-full object-cover mb-4 border-2 border-orange-400 shadow-md hover:border-orange-300 transition'
              />
              <span className='text-lg font-semibold mb-2 text-center'>
                {i.nome}
              </span>
              <div className='flex space-x-5 mt-2'>
                <a
                  href={i.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-300 hover:text-orange-400 transition'
                >
                  <GithubLogoIcon size={26} weight='fill' />
                </a>
                <a
                  href={i.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-300 hover:text-orange-400 transition'
                >
                  <LinkedinLogoIcon size={26} weight='fill' />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Segunda linha */}
        <div className='flex flex-wrap justify-center gap-10'>
          {integrantes.slice(4).map((i) => (
            <div
              key={i.nome}
              className='flex flex-col items-center bg-slate-800 bg-opacity-70 rounded-2xl shadow-lg p-6 w-56 hover:bg-slate-700 hover:scale-105 transition duration-300'
            >
              <img
                src={i.foto}
                alt={i.nome}
                className='w-28 h-28 rounded-full object-cover mb-4 border-2 border-orange-400 shadow-md hover:border-orange-300 transition'
              />
              <span className='text-lg font-semibold mb-2 text-center'>
                {i.nome}
              </span>
              <div className='flex space-x-5 mt-2'>
                <a
                  href={i.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-300 hover:text-orange-400 transition'
                >
                  <GithubLogoIcon size={26} weight='fill' />
                </a>
                <a
                  href={i.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-300 hover:text-orange-400 transition'
                >
                  <LinkedinLogoIcon size={26} weight='fill' />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className='mt-12 text-center text-gray-400 text-sm'>
          Grupo 2 — Projeto Integrador — Generation Brasil
        </p>
      </div>
    </div>
  );
}

export default Contato;
