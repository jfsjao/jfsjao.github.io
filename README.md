# Portifolio JF - Windows XP

## Referência técnica

O modo Windows XP usa
[`cyanoxide/react-xp`](https://github.com/cyanoxide/react-xp) como benchmark de
arquitetura e comportamento.

Análise, diferenças e limites de reutilização:
[`docs/react-xp-reference.md`](docs/react-xp-reference.md).

Código e assets externos não foram copiados. Nenhum arquivo de licença foi
encontrado no commit analisado.

Portfolio pessoal inspirado no Windows XP, feito como uma experiencia de desktop interativo no navegador.

A ideia e transformar secoes comuns de um portfolio em "programas" classicos: o usuario entra em um desktop com wallpaper, icones, barra de tarefas e janelas que podem ser abertas, focadas, minimizadas e maximizadas.

## Ideia

Em vez de uma pagina tradicional com blocos de texto, o portfolio funciona como um mini sistema operacional:

- `Sobre Mim.doc` abre um documento estilo Word 2003 com apresentacao e curriculo.
- `Projetos` abre uma interface inspirada no Ares Galaxy com lista de projetos.
- `MSN Messenger` vira a area de contato.
- `Winamp` representa personalidade, musica ou detalhe visual divertido.
- `Skills.bmp` mostra habilidades em uma interface inspirada no Paint.
- `Meu Computador` concentra links externos como GitHub, LinkedIn e email.

O objetivo e manter nostalgia e usabilidade juntas: visual de Windows XP, mas construido com tecnologias atuais.

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- Framer Motion
- Howler
- Lucide React

## Status atual

Base inicial criada:

- boot screen estilo Windows XP
- desktop com wallpaper CSS inspirado no Bliss
- icones de apps
- taskbar com botao iniciar e relogio
- store global de janelas com Zustand
- janelas com foco, minimizar, maximizar, fechar e drag pela titlebar
- apps iniciais em formato stub para evoluir nas proximas fases

Ainda falta polir os apps, trocar icones temporarios por assets XP, adicionar sons, criar menu iniciar completo e finalizar conteudo real do portfolio.

## Rodando localmente

Instale as dependencias:

```bash
npm.cmd install
```

Rode o servidor de desenvolvimento:

```bash
npm.cmd run dev
```

Build de producao:

```bash
npm.cmd run build
```

Lint:

```bash
npm.cmd run lint
```

> No Windows/PowerShell, este projeto usa `npm.cmd` para evitar bloqueio de execution policy do `npm.ps1`.

## Estrutura principal

```txt
src/
  components/
    Boot/
    Desktop/
    Taskbar/
    Window/
    Apps/
  config/
  data/
  hooks/
  store/
  types/
  assets/
```

## Proximas fases

1. Melhorar visual do desktop com wallpaper e icones reais.
2. Completar comportamento das janelas, incluindo resize real.
3. Desenvolver cada app com conteudo final.
4. Adicionar sons, menu iniciar e pequenos detalhes de imersao.
5. Preparar SEO, og:image e deploy.
