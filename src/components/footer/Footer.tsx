import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import { Car } from "lucide-react";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <footer className="flex justify-end bg-slate-900 text-white border-t border-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <Car className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold">VeloGo</span>
        </div>

        <div className="flex items-center gap-4 text-white/80">
          <a
            href="https://github.com/Grupo2-JS09"
            target="_blank"
            className="hover:text-orange-400 transition"
          >
            <LinkedinLogoIcon size={28} weight="fill" />
          </a>
          <a
            href="https://github.com/Grupo2-JS09"
            target="_blank"
            className="hover:text-orange-400 transition"
          >
            <GithubLogoIcon size={28} weight="fill" />
          </a>
          <a
            href="https://github.com/Grupo2-JS09"
            target="_blank"
            className="hover:text-orange-400 transition"
          >
            <InstagramLogoIcon size={28} weight="fill" />
          </a>
        </div>

        <div className="text-sm text-white/70 text-center md:text-right">
          <p>© {data} VeloGo — Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
