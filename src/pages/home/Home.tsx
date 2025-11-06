import React, { useState } from "react";
import { MapPin, Car, Users, Building2, Clock } from "lucide-react";

export default function VeloGoHomePage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: MapPin,
      title: "Preço Justo",
      desc: "Transparência em cada corrida",
    },
    {
      icon: Car,
      title: "Próximo a você",
      desc: "Encontre transporte em segundos",
    },
    {
      icon: Users,
      title: "Motoristas Verificados",
      desc: "Segurança garantida",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-800 via-slate-700 to-slate-900 text-white">
      {/* Header/Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white/5 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <Car className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold">VeloGo</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#funciona" className="hover:text-orange-400 transition">
            Como Funciona
          </a>
          <a href="#beneficios" className="hover:text-orange-400 transition">
            Benefícios
          </a>
          <a href="#contato" className="hover:text-orange-400 transition">
            Contato
          </a>
        </div>

        <div className="flex gap-3">
          <button className="px-6 py-2 rounded-lg border border-white/30 hover:bg-white/10 transition text-sm">
            Entrar
          </button>
          <button className="px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition font-semibold text-sm">
            Começar Agora
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Mobilidade Inteligente
              <br />
              na Palma da Sua Mão
            </h1>

            <p className="text-xl text-slate-300">
              VeloGO conecta você aos melhores meios de transporte. Rápido,
              seguro e econômico.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 transition font-semibold flex items-center gap-2">
                Baixar App
                <span>→</span>
              </button>
              <button className="px-8 py-3 rounded-lg border border-white/30 hover:bg-white/10 transition">
                Saiba Mais
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div>
                <div className="text-4xl font-bold text-orange-400">50K+</div>
                <div className="text-sm text-slate-400">Usuários Ativos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-400">500+</div>
                <div className="text-sm text-slate-400">Cidades</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-400">24/7</div>
                <div className="text-sm text-slate-400">Disponível</div>
              </div>
            </div>
          </div>

          {/* Right Content - Map Card */}
          <div className="relative">
            <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 aspect-square relative overflow-hidden">
              {/* Simulated Map Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-800"></div>
              </div>

              {/* Map Pin */}
              <div className="absolute top-1/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2 animate-bounce">
                <div className="bg-orange-500 rounded-full p-6 shadow-2xl shadow-orange-500/50">
                  <MapPin className="w-8 h-8" />
                </div>
              </div>

              {/* Info Cards */}
              <div className="absolute bottom-8 left-8 right-8 space-y-3">
                <div className="bg-slate-800/90 backdrop-blur rounded-xl p-4 shadow-xl">
                  <div className="font-semibold mb-1">Próximo a você</div>
                  <div className="text-sm text-slate-300">
                    Encontre transporte em segundos
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-800/70 backdrop-blur rounded-lg p-3 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-700/90 transition"
                      onMouseEnter={() => setActiveFeature(idx)}
                    >
                      <feature.icon className="w-5 h-5 text-orange-400 mb-1" />
                      <div className="text-xs text-center">
                        {feature.title.split(" ")[0]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animated Corner Accent */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
            </div>

            {/* Floating Feature Info */}
            <div className="absolute -bottom-6 -right-6 bg-slate-800 rounded-xl p-4 shadow-2xl border border-orange-500/20">
              <div className="flex items-center gap-3">
                {React.createElement(features[activeFeature].icon, {
                  className: "w-8 h-8 text-orange-400",
                })}
                <div>
                  <div className="font-semibold text-sm">
                    {features[activeFeature].title}
                  </div>
                  <div className="text-xs text-slate-400">
                    {features[activeFeature].desc}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
