# VeloGo - Sistema de Gerenciamento de Serviços de Transporte

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 📋 Sobre o Projeto

VeloGo é uma aplicação web moderna para gerenciamento de serviços de transporte, permitindo o cadastro, edição e exclusão de categorias e serviços. O sistema oferece cálculo automático de valores de corridas baseado em distância, velocidade média e preço por quilômetro.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e dev server de alta performance
- **React Router DOM** - Roteamento para aplicações React
- **Axios** - Cliente HTTP para requisições à API
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Biblioteca de ícones
- **Phosphor Icons** - Conjunto adicional de ícones
- **React Spinners** - Componentes de loading
- **React Toastify** - Notificações toast

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── categoria/
│   │   ├── cardcategoria/
│   │   ├── deletarcategoria/
│   │   ├── formcategoria/
│   │   └── listacategoria/
│   ├── servico/
│   │   ├── cardservico/
│   │   ├── deletarservico/
│   │   ├── formservico/
│   │   └── listaservicos/
│   ├── navbar/
│   ├── footer/
│   └── utils/
├── models/
│   ├── Categoria.ts
│   ├── Servico.ts
│   └── Usuario.ts
├── pages/
│   ├── home/
│   ├── login/
│   └── cadastro/
├── services/
│   └── Service.ts
└── App.tsx
```

## 🛣️ Rotas da Aplicação

### Rotas Principais

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/` | Home | Página inicial com informações do serviço |
| `/categorias` | ListaCategoria | Listagem de todas as categorias |
| `/cadastrarcategoria` | FormCategoria | Formulário de cadastro de categoria |
| `/editarcategoria/:id` | FormCategoria | Formulário de edição de categoria |
| `/deletarcategoria/:id` | DeletarCategoria | Confirmação de exclusão de categoria |
| `/servicos` | ListaServicos | Listagem de todos os serviços |
| `/cadastrarservico` | FormServico | Formulário de cadastro de serviço |
| `/editarservico/:id` | FormServico | Formulário de edição de serviço |
| `/deletarservico/:id` | DeletarServico | Confirmação de exclusão de serviço |

## 🔌 Endpoints da API

### Categorias

```typescript
GET    /categorias          // Listar todas as categorias
GET    /categorias/:id      // Buscar categoria por ID
POST   /categorias          // Criar nova categoria
PUT    /categorias/atualizar // Atualizar categoria
DELETE /categorias/:id      // Deletar categoria
```

### Serviços

```typescript
GET    /servicos                    // Listar todos os serviços
GET    /servicos/:id                // Buscar serviço por ID
GET    /servicos/viagem/:id         // Calcular valor da viagem
GET    /servicos/viagem/tempo/:id   // Calcular tempo da viagem
POST   /servicos                    // Criar novo serviço
PUT    /servicos                    // Atualizar serviço
DELETE /servicos/:id                // Deletar serviço
```

## 📦 Instalação e Configuração

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd velogo
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure a URL da API no arquivo `src/services/Service.ts`:
```typescript
const api = axios.create({
  baseURL: "http://localhost:3000" // Altere para a URL da sua API
});
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

5. Acesse a aplicação em `http://localhost:5173`

## 🎨 Funcionalidades

### Gerenciamento de Categorias
- ✅ Listagem de categorias
- ✅ Cadastro de novas categorias
- ✅ Edição de categorias existentes
- ✅ Exclusão de categorias

### Gerenciamento de Serviços
- ✅ Listagem de serviços com cards informativos
- ✅ Cadastro de novos serviços com:
  - Destino
  - Distância (km)
  - Velocidade média (km/h)
  - Preço por quilômetro (R$)
  - Categoria associada
- ✅ Cálculo automático de:
  - Tempo estimado de viagem
  - Valor total da corrida
- ✅ Edição de serviços existentes
- ✅ Exclusão de serviços

## 🎯 Modelos de Dados

### Categoria
```typescript
interface Categoria {
  id: number;
  tipo: string;
  servico: Servico;
}
```

### Serviço
```typescript
interface Servico {
  id: number;
  preco_km: number;
  distancia: number;
  velocidade_media: number;
  destino: string;
  usuario: Usuario;
  categoria: Categoria;
}
```

### Usuário
```typescript
interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto: string;
  servico: Servico;
}
```

## 🛠️ Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria build de produção
npm run preview  # Visualiza build de produção
npm run lint     # Executa o linter
```

## 📝 Notas de Desenvolvimento

- O projeto utiliza **ESLint** para manter a qualidade do código
- **Tailwind CSS** é usado para estilização com classes utility-first
- Componentes de loading são exibidos durante requisições assíncronas
- Validações de formulário implementadas
- Notificações toast para feedback do usuário

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📄 Licença

Este projeto está sob a licença MIT.

---

**Desenvolvido com ❤️ pelo VeloGroup**
