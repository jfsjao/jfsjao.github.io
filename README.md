# Portfólio — João Felipe Silva

Portfólio pessoal com duas experiências conectadas:

- **Portfólio formal** (`/`): landing page single-page voltada a recrutadores —
  sobre, focos de atuação, experiência, projetos, skills, formação e contato.
- **Modo Windows XP** (`/?mode=windows`): o mesmo conteúdo em forma de desktop
  interativo nostálgico, com boot, login, taskbar, Menu Iniciar e janelas.

Os dois modos compartilham a mesma fonte de conteúdo
(`src/data/portfolio.data.ts`), então nada é duplicado ou diverge entre eles.
A troca de modo é feita por query string, sem recarregar a página, e
preserva o histórico do navegador (`history.pushState` / `popstate`).

## Modo Windows XP

Referência técnica de arquitetura e comportamento:
[`cyanoxide/react-xp`](https://github.com/cyanoxide/react-xp) (benchmark,
código não copiado — ver [`docs/react-xp-reference.md`](docs/react-xp-reference.md)).

A ideia é transformar seções comuns de um portfólio em "programas" clássicos.
O usuário passa pelo boot e tela de login do XP e chega a um desktop com
wallpaper, ícones, barra de tarefas e janelas que podem ser abertas,
focadas, arrastadas, redimensionadas, minimizadas e maximizadas — com um
launcher em grade e janela cheia em telas menores que 768px.

Apps disponíveis:

- `Leia-me.txt` — Bloco de Notas com a história do portfólio.
- `Sobre Mim.docx` — documento estilo Word 2003 com apresentação e bio.
- `Ares Galaxy` — lista de projetos pesquisável, com filtro por tipo.
- `MSN Messenger` — contatos e disponibilidade.
- `Paint` — skills desenhadas à mão em um canvas.
- `Meu Computador` — links externos (GitHub, LinkedIn, e-mail).
- `Winamp` — easter egg visual, sem áudio funcional nesta entrega.

O favicon da aba troca dinamicamente entre os dois modos.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Zustand (store das janelas)
- Framer Motion (boot, login, Menu Iniciar)
- GSAP + ScrollTrigger (reveals e scrollytelling do portfólio formal)
- Howler (dependência disponível para áudio, não usada nesta entrega)

## Rodando localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

Lint e checagem de tipos:

```bash
npm run lint
npx tsc -b --noEmit
```

## Deploy

Pipeline de CI/CD em `.github/workflows` builda e publica no GitHub Pages a
cada push em `main`.

## Estrutura principal

```txt
src/
  app/            # seleção de modo (formal/windows) e favicon dinâmico
  features/
    formal/       # portfólio formal (seções, hooks de reveal, conteúdo editorial)
    windows/      # shell do modo Windows XP
  components/
    Boot/         # boot e login do XP
    Desktop/      # desktop, ícones, notificações
    Taskbar/      # taskbar e Menu Iniciar
    Window/       # janela genérica (drag, resize, foco)
    Apps/         # cada "programa" do XP
  config/         # apps e layout do desktop
  data/           # fonte única de conteúdo (ABOUT, PROJECTS, SKILLS, CONTACTS)
  hooks/
  store/          # Zustand — estado global das janelas
  types/
  assets/
```
