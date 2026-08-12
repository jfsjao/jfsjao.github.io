# Referência técnica - cyanoxide/react-xp

## Fonte analisada

- Repositório: https://github.com/cyanoxide/react-xp
- Demo: https://react-xp.jamiepates.com/
- Commit analisado: `bbda829483cf0ab7420d01fc697ab007f9b0cdfe`
- Data do commit: 2026-06-15

Análise usada como referência de arquitetura e comportamento. Código e assets não
foram copiados.

## Estrutura observada

Projeto usa React 19, TypeScript, Vite, Tailwind CSS 4 e SCSS Modules.

Principais blocos:

```text
frontend/src/
├── components/
│   ├── Applications/
│   ├── Bios/
│   ├── Desktop/
│   ├── DesktopIcon/
│   ├── Login/
│   ├── StartMenu/
│   ├── TaskBar/
│   ├── Window/
│   └── WindowManagement/
├── context/
├── data/
├── styles/
└── utils/
```

Estado global usa Context + `useReducer`. Aplicações são registradas em
`applications.json`. Janelas guardam `appId`, ID, posição, tamanho, foco,
visibilidade, histórico e payload opcional.

## Recursos observados

- Sequências de BIOS, login, logout e shutdown.
- Desktop, ícones móveis, taskbar e Menu Iniciar.
- Janelas móveis e redimensionáveis.
- Resize por lados e cantos.
- Restauração da geometria anterior à maximização.
- Wallpapers, temas e efeito CRT.
- File Explorer.
- Internet Explorer com integração Wayback Machine.
- Notepad.
- Run.
- Settings.
- Solitaire.
- Paint.
- Clippy.
- Preferências parciais em `sessionStorage`.

## Conceitos úteis para este portfólio

- Registro central de aplicações.
- Separação entre janela e conteúdo do aplicativo.
- Estado explícito da sequência de inicialização.
- Configuração de tamanho, posição, resize e taskbar por aplicativo.
- Resize baseado na região do ponteiro.
- Geometria anterior salva ao maximizar.
- Tratamento especial para viewport estreita.
- Menu Iniciar e taskbar derivados do registro de aplicações.
- Preferências efêmeras mantidas durante a sessão.

## O que adaptar

### Sistema de janelas

Evoluir store Zustand existente com:

- `previousBounds`.
- Tamanho mínimo por aplicativo.
- Resize pelos oito lados e cantos.
- Clamp no viewport.
- Reação ao resize do navegador.
- Transferência de foco ao minimizar ou fechar.
- Restauração após maximizar.
- Regras mobile separadas.

### Registro de aplicações

Concentrar:

- ID.
- Título.
- Ícone.
- Componente.
- Tamanho e posição iniciais.
- Tamanho mínimo.
- `resizable`.
- `showOnTaskbar`.
- Disponibilidade por viewport.

Conteúdo profissional continua vindo de `src/content`.

### Boot e sessão

- Manter boot curto.
- Mostrar uma vez por sessão.
- Respeitar `prefers-reduced-motion`.
- Não obrigar login em toda entrada.
- Som somente após permissão/interação.

### Mobile

Referência reduz janelas maiores para caber no viewport. Este projeto adotará
regra mais forte abaixo de 768 px:

- Launcher em grade.
- Uma janela visível por vez.
- Janela maximizada na área útil.
- Sem drag ou resize.
- Retorno ao formal sempre acessível.

## O que não copiar

- Context + reducer global amplo.
- Manipulação direta extensa de estilos DOM.
- Componente de janela monolítico.
- Dependência de React 19 `Activity`.
- Paths globais de assets em `public`.
- Estado profissional misturado ao estado do desktop.
- Efeitos CRT ou animações sem reduced motion.
- Interações sem acessibilidade equivalente.

Projeto atual manterá React 18, Zustand, conteúdo tipado e carregamento assíncrono
do modo XP.

## Riscos observados

- Componente de janela complexo concentra drag, resize, foco e maximização.
- Manipulação direta do DOM dificulta testes.
- Alguns listeners precisam de auditoria de cleanup.
- Acessibilidade não deve ser herdada automaticamente.
- Fidelidade visual aumenta bundle e custo de manutenção.
- Assets históricos podem possuir restrições de copyright.

## Licença

Nenhum arquivo `LICENSE` ou `COPYING` foi encontrado no commit analisado.

Consequência:

- Repositório pode inspirar arquitetura e comportamento.
- Código não deve ser copiado.
- Assets não devem ser copiados.
- Qualquer reutilização exige licença ou autorização explícita do autor.
- Assets já existentes neste portfólio também precisam de origem e licença
  confirmadas antes do deploy.

## Decisão

Usar referência como benchmark funcional. Implementar solução própria:

- Portfólio formal permanece entrada principal.
- XP permanece experiência secundária.
- Zustand continua responsável por janelas.
- Conteúdo profissional permanece compartilhado.
- Melhorias XP entram em fases pequenas, testáveis e reversíveis.

