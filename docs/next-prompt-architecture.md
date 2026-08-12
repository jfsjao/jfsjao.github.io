# Prompt mestre — Reestruturação do Portfólio Formal + Modo Windows XP

> Referência técnica adicionada após esta auditoria:
> `docs/react-xp-reference.md`.
>
> O projeto `cyanoxide/react-xp` será usado como benchmark funcional, sem cópia
> de código ou assets. Nenhum arquivo de licença foi encontrado no commit
> analisado.

> Estado deste documento: planejamento e arquitetura.
>
> Este prompt não autoriza implementação imediata. O agente deve primeiro auditar o
> projeto, apresentar a arquitetura completa e aguardar aprovação antes de editar
> qualquer arquivo.

## Papel do agente

Você é um arquiteto de software e product designer sênior trabalhando em um
portfólio pessoal existente.

Trabalhe em modo de raciocínio profundo/ultra. Nesta etapa, **não implemente, não
edite arquivos, não instale dependências e não gere código de produção**. Sua
responsabilidade agora é auditar, documentar e arquitetar toda a evolução do
projeto antes da execução.

Se estiverem disponíveis, utilize as skills de frontend design, design taste,
prompt enhancement e web design guidelines. Leia integralmente as instruções das
skills aplicáveis antes de começar.

## Objetivo do produto

Transformar o projeto atual em um portfólio com duas experiências conectadas:

1. Um portfólio formal, moderno, profissional, responsivo e acessível, que será a
   página inicial.
2. Um modo alternativo inspirado no Windows XP, acessível por um botão destacado
   na navbar do portfólio formal.

O portfólio formal deve ser eficiente para recrutadores, mobile e mecanismos de
busca. O modo Windows XP deve continuar sendo o diferencial criativo e interativo
do projeto.

As duas experiências devem consumir a mesma fonte de dados, evitando duplicação
ou divergência de conteúdo.

## Auditoria obrigatória do repositório

Antes de propor qualquer arquitetura:

1. Leia todo o projeto atual.
2. Localize e leia qualquer `AGENTS.md`, `README.md`, documentação, configuração
   e convenção existente.
3. Confira `package.json`, TypeScript, Vite, Tailwind, ESLint, assets e estrutura
   de componentes.
4. Inspecione o estado do Git e preserve alterações existentes.
5. Identifique arquivos antigos, duplicados, desconectados ou possivelmente
   obsoletos.
6. Não considere o README como fonte absoluta: compare a documentação com o
   código real.
7. Não modifique nenhum arquivo nesta etapa.

### Stack conhecida

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- Framer Motion
- Howler
- Lucide React

### Estrutura atual aproximada

```text
src/
├── components/
│   ├── Apps/
│   │   ├── AresApp/
│   │   ├── MSNApp/
│   │   ├── MyComputerApp/
│   │   ├── PaintApp/
│   │   ├── WinampApp/
│   │   └── WordApp/
│   ├── Boot/
│   ├── Desktop/
│   ├── Taskbar/
│   └── Window/
├── config/
├── data/
├── hooks/
├── store/
├── types/
└── assets/
```

### Recursos já identificados

- Boot screen inspirado no Windows XP.
- Desktop com wallpaper.
- Ícones de aplicativos.
- Barra de tarefas e relógio.
- Menu Iniciar.
- Gerenciamento global de janelas com Zustand.
- Abrir, fechar, focar, minimizar, maximizar, mover e redimensionar janelas.
- Aplicativos inspirados em Word, Ares, MSN, Paint, Winamp e Meu Computador.
- Dados iniciais de perfil, projetos, contatos e habilidades.
- Hooks iniciais para som e screensaver.

### Problemas conhecidos que precisam ser confirmados

- Referência a `src/assets/icons/docword.png`, aparentemente inexistente.
- Nome profissional inconsistente entre telas.
- URLs diferentes para o GitHub.
- Foto profissional ausente.
- Notificação com botão de fechar sem comportamento.
- `SelectionBox` vazio.
- Hooks de som e screensaver ainda não conectados.
- Controles visuais sem funcionalidade.
- Possíveis assets duplicados.
- Pasta antiga `PortfolioStartup`, possivelmente desconectada.
- README desatualizado.
- Build e lint ainda não confirmados por falta das dependências instaladas.
- Ausência de testes automatizados.
- SEO e metadados incompletos.

Confirme cada item. Não presuma que essa lista esteja completa.

## Experiência principal desejada

### Portfólio formal

A entrada padrão deve abrir um site profissional convencional com:

1. Navbar.
2. Hero.
3. Sobre.
4. Experiência profissional.
5. Projetos.
6. Skills.
7. Formação acadêmica.
8. Certificações, idiomas e trabalho voluntário, quando houver.
9. Contato.
10. Footer.

Na navbar, incluir um botão destacado:

```text
Modo Windows XP
```

Esse botão deve trocar para a experiência Windows sem recarregar
desnecessariamente o projeto.

### Modo Windows XP

O modo Windows deve preservar a identidade atual e evoluir para uma experiência
coerente e funcional.

Ele deve conter uma ação clara para:

```text
Voltar ao portfólio profissional
```

Essa ação pode aparecer no Menu Iniciar e, se necessário, em outro ponto
acessível da interface.

## Decisão de navegação

Compare:

1. `/` e `/windows`.
2. `/` e `/?mode=windows`.
3. Estado local sem URL.
4. Hash routing.

Avalie:

- Compatibilidade com hospedagem estática.
- Links compartilháveis.
- SEO.
- Histórico do navegador.
- Botão voltar.
- Complexidade.
- Necessidade ou não de React Router.
- Persistência do modo.
- Comportamento do boot ao entrar novamente.

Apresente uma recomendação final fundamentada.

Preferência inicial, que pode ser contestada com justificativa:

```text
/                 → portfólio formal
/?mode=windows    → modo Windows XP
```

Considere usar `sessionStorage` somente para registrar se o usuário já assistiu
ao boot durante a sessão.

## Fonte única de conteúdo

Projete uma camada de conteúdo compartilhada pelos dois modos. Avalie:

```text
src/content/
├── profile.data.ts
├── experience.data.ts
├── projects.data.ts
├── skills.data.ts
├── education.data.ts
├── certifications.data.ts
└── contacts.data.ts
```

### Perfil

- Nome.
- Cargo.
- Resumo curto.
- Biografia completa.
- Localização.
- Disponibilidade.
- Foto.
- Currículo em PDF.
- Anos de experiência.
- Idiomas.

### Experiência

- Empresa.
- Cargo.
- Período.
- Localização.
- Tipo de contratação.
- Descrição.
- Responsabilidades.
- Resultados.
- Tecnologias.
- Emprego atual.

### Projetos

- ID e slug.
- Nome.
- Resumo.
- Descrição completa.
- Imagem.
- Tecnologias.
- Repositório.
- Demo.
- Status.
- Destaque.
- Período.
- Categoria.
- Contexto.
- Desafios.
- Resultados.

### Skills

Evite depender apenas de percentuais subjetivos. Analise uma modelagem por:

- Categoria.
- Tecnologia.
- Nível descritivo.
- Anos ou contexto de uso.
- Destaque.
- Ícone.

Categorias sugeridas:

- Front-end.
- Back-end.
- Dados e IA.
- Bancos de dados.
- DevOps.
- Ferramentas.

### Contato

- GitHub.
- LinkedIn.
- E-mail.
- WhatsApp.
- Localização.
- Disponibilidade.
- Formulário, somente se realmente necessário.

Crie os tipos TypeScript propostos apenas como documentação nesta etapa. Não os
implemente.

## Arquitetura de diretórios a ser avaliada

Analise criticamente:

```text
src/
├── app/
│   ├── App.tsx
│   ├── AppModeProvider.tsx
│   └── app-mode.types.ts
├── features/
│   ├── formal/
│   │   ├── FormalPortfolio.tsx
│   │   ├── components/
│   │   └── styles/
│   └── windows/
│       ├── WindowsPortfolio.tsx
│       ├── Apps/
│       ├── Boot/
│       ├── Desktop/
│       ├── Taskbar/
│       └── Window/
├── shared/
│   ├── components/
│   ├── hooks/
│   ├── assets/
│   ├── types/
│   └── utils/
├── content/
├── store/
├── main.tsx
└── index.css
```

Não aceite essa estrutura automaticamente. Verifique se ela representa ganho
real para o tamanho do projeto.

A arquitetura final deve:

- Ser simples.
- Evitar abstrações prematuras.
- Separar claramente os dois modos.
- Compartilhar conteúdo.
- Preservar o sistema de janelas existente.
- Permitir migração incremental.
- Evitar uma grande reescrita.
- Manter imports compreensíveis.
- Facilitar testes.
- Facilitar deploy estático.

Mostre a árvore final recomendada e explique a responsabilidade de cada
diretório.

## Direção visual do portfólio formal

O site formal não deve parecer um template genérico, uma landing page de IA ou
uma coleção de cards sem personalidade.

### Direção desejada

- Profissional.
- Editorial.
- Contemporânea.
- Técnica.
- Confiável.
- Boa densidade de informação.
- Hierarquia tipográfica forte.
- Uso generoso, mas não excessivo, de espaço.
- Interações discretas.
- Identidade própria.
- Referências sutis ao Windows XP, sem transformar o site formal em uma segunda
  interface XP.

### Evitar

- Gradientes roxos genéricos.
- Excesso de glassmorphism.
- Glow neon.
- Cards arredondados em todas as seções.
- Emojis como ícones funcionais.
- Texto centralizado em excesso.
- Animações constantes.
- Layout excessivamente simétrico.
- Barras de skills genéricas sem contexto.
- Copywriting artificial.
- Uso excessivo de azul somente porque o modo alternativo é Windows XP.

## Design system inicial para avaliação

Não trate estas cores como definitivas. Analise contraste e coerência:

- Background principal: Off White (`#F5F3EE`).
- Surface: White (`#FFFFFF`).
- Texto principal: Ink Black (`#171717`).
- Texto secundário: Slate Gray (`#5E6268`).
- Accent principal: Windows Blue reinterpretado (`#245EDC`).
- Accent escuro: Deep Navy (`#0A246A`).
- Borda: Soft Gray (`#D8D6D0`).
- Disponibilidade/sucesso: Muted Green (`#2E7D4F`).

### Tipografia

- Escolher uma família principal com excelente legibilidade.
- Considerar uma combinação editorial de sans-serif e mono.
- Não depender automaticamente de Inter.
- Se usar fontes externas, avaliar performance e fallback.
- Código e tecnologias podem usar uma fonte monoespaçada.
- Garantir boa renderização em português.

### Componentes

- Navbar limpa com navegação por âncoras.
- CTA principal com foco evidente.
- Hero assimétrico.
- Timeline de experiência legível.
- Projetos com hierarquia editorial, não apenas cards repetidos.
- Skills agrupadas por domínio.
- Contato direto e objetivo.
- Footer discreto.
- Botão “Modo Windows XP” com personalidade, sem dominar a navbar.

### Responsividade e acessibilidade visual

- Mobile-first.
- Sem rolagem horizontal.
- Navbar adaptada para mobile.
- Conteúdo legível a partir de 320 px.
- Áreas clicáveis com tamanho adequado.
- Respeitar `prefers-reduced-motion`.
- Respeitar navegação por teclado.
- Contraste WCAG AA.
- Definir comportamento específico do modo Windows em celular.

## Auditoria completa do modo Windows

### Boot

Verificar:

- Duração.
- Possibilidade de pular.
- Som de inicialização.
- Repetição durante a mesma sessão.
- Reduced motion.
- Transição para o desktop.
- Acessibilidade.

### Desktop

Verificar:

- Seleção de ícone.
- Duplo clique.
- Caixa de seleção.
- Menu de contexto.
- Organização dos ícones.
- Wallpapers.
- Responsividade.
- Touch.
- Teclado.
- Tamanho mínimo da viewport.
- Botão para voltar ao modo formal.

### Janelas

Verificar:

- Foco e `z-index`.
- Abrir, fechar, minimizar, restaurar e maximizar.
- Posição anterior à maximização.
- Arrastar janela maximizada para restaurar.
- Resize por lados e cantos.
- Tamanhos mínimos por aplicativo.
- Limites do viewport.
- Reação ao resize do navegador.
- Animações.
- Touch.
- Teclado.
- Acessibilidade.
- Estado depois de alternar os modos.

### Taskbar

Verificar:

- Indicação de janela ativa.
- Muitas janelas abertas.
- Minimização e restauração.
- Relógio.
- Área de notificação.
- Menu Iniciar.
- Clique fora.
- Navegação por teclado.
- Layout mobile.

### Menu Iniciar

Verificar:

- Nome e avatar.
- Abertura dos aplicativos.
- Fechamento ao clicar fora.
- Logoff.
- Desligar.
- Links externos.
- Voltar ao portfólio formal.
- Botões sem função.
- Hierarquia e fidelidade visual.

### Word

Deve representar:

- Sobre.
- Resumo profissional.
- Experiência.
- Formação.
- Foto.
- Link para currículo.
- Links profissionais.

Identifique o que deve ser funcional e o que pode permanecer decorativo.

### Ares

Deve representar projetos reais. Verificar:

- Busca.
- Filtros.
- Tipo correto de projeto.
- Lista sem duplicações artificiais.
- Repositório.
- Demo.
- Tecnologias.
- Descrição.
- Imagens.
- Estados vazios.
- Links externos seguros.

### MSN

Deve representar contato e disponibilidade. Verificar:

- Avatar.
- Links reais.
- Campo de mensagem.
- Possível integração com e-mail ou WhatsApp.
- Clareza sobre o que é funcional.
- Categorias representadas como contatos.
- Acessibilidade do formulário.

### Paint

Deve representar skills. Verificar:

- Categorias.
- Ícones.
- Níveis descritivos.
- Ferramentas decorativas.
- Responsividade.
- Legibilidade.
- Valor real das interações.

### Winamp

Decidir entre:

1. Player funcional com áudio devidamente autorizado.
2. Easter egg visual simples.
3. Remoção temporária até uma fase posterior.

Recomende a opção com melhor relação entre impacto e esforço.

### Meu Computador

Verificar:

- GitHub.
- LinkedIn.
- E-mail.
- WhatsApp.
- Currículo.
- Links externos.
- Ícones coerentes.
- Estados de foco.
- Comportamento mobile.

### Sons e screensaver

Verificar:

- Hooks existentes.
- Controle de volume.
- Mutar.
- Autoplay bloqueado pelo navegador.
- Persistência da preferência.
- Screensaver por inatividade.
- Mouse, toque e teclado para sair.
- Reduced motion.
- Consumo de recursos.

## Inventário de assets

Classifique os assets como:

- Existentes e utilizáveis.
- Existentes, mas duplicados.
- Referenciados e ausentes.
- Temporários.
- Obsoletos.
- Necessários para o site formal.
- Necessários para o modo Windows.

Inventarie:

- Foto profissional.
- Currículo em PDF.
- Favicon.
- `og:image`.
- Screenshots dos projetos.
- Ícones de tecnologias.
- Ícones XP ausentes.
- Avatar do Menu Iniciar e MSN.
- Áudios autorizados.
- Wallpapers.
- Imagens de preview.

Não procure ou baixe imagens nesta etapa. Documente necessidades, formato,
proporção, resolução, destino e licença a confirmar.

## SEO e metadados

Planeje:

- Idioma `pt-BR`.
- Title.
- Meta description.
- Canonical.
- Open Graph.
- Twitter/X cards.
- Favicon.
- `theme-color`.
- Dados estruturados apropriados.
- Headings semânticos.
- Texto alternativo.
- Sitemap, se necessário.
- `robots.txt`.
- Preview social.
- URLs compartilháveis.
- Conteúdo indexável no modo formal.
- Evitar que o modo Windows prejudique a indexação principal.

## Acessibilidade

Inclua:

- Estrutura semântica.
- Ordem de headings.
- Skip link.
- Navegação por teclado.
- Foco visível.
- Contraste.
- `aria-label` somente onde necessário.
- Janelas com semântica adequada.
- Gerenciamento de foco ao abrir e fechar janelas.
- Reduced motion.
- Áudio opcional.
- Touch targets.
- Formulários com labels.
- Links externos claros.
- Compatibilidade com leitores de tela.
- Alternativa utilizável ao modo desktop em telas pequenas.

## Performance

Planeje:

- Compressão e dimensões das imagens.
- Lazy loading.
- Code splitting do modo Windows.
- Carregamento do modo Windows somente quando solicitado.
- Evitar carregar todos os assets XP na página formal.
- Bundle analysis.
- Font loading.
- Preload somente do que for crítico.
- Evitar animações caras.
- Evitar recriações desnecessárias de áudio.
- Avaliar impacto de Framer Motion, Howler e Lucide.
- Bons Core Web Vitals.

O modo Windows possui muitos assets e deve ser candidato forte a carregamento
assíncrono.

## Testes e qualidade

Planeje uma estratégia proporcional:

- Build TypeScript.
- ESLint.
- Testes unitários da store e utilitários.
- Testes dos componentes críticos.
- Teste da troca de modo.
- Testes do sistema de janelas.
- Testes de links.
- Testes responsivos.
- Testes de acessibilidade.
- Smoke test de produção.
- Console sem erros.
- Checklist manual do modo XP.

Não adicione ferramentas nesta etapa. Recomende o conjunto mínimo e justifique.

## Conteúdo a confirmar

Crie uma lista objetiva dos dados ausentes ou inconsistentes:

- Nome profissional definitivo.
- Cargo desejado.
- Resumo curto.
- Biografia.
- Foto.
- Currículo.
- GitHub correto.
- LinkedIn correto.
- WhatsApp.
- E-mail.
- Localização.
- Disponibilidade.
- Experiências e datas.
- Formação e datas.
- Projetos definitivos.
- Repositórios.
- Demos.
- Screenshots.
- Tecnologias.
- Resultados mensuráveis.
- Certificações.
- Idiomas.
- Trabalho voluntário.
- Preferências visuais.
- Destino de deploy.

Separe:

1. Dados obrigatórios para começar.
2. Dados que podem usar placeholder.
3. Dados obrigatórios antes do deploy.

## Migração incremental

Não proponha uma reescrita completa. Organize:

1. Corrigir bloqueadores.
2. Criar fonte única de conteúdo.
3. Introduzir controle de modo.
4. Preservar o modo Windows atual.
5. Criar esqueleto formal.
6. Construir seções formais.
7. Migrar apps XP para os novos dados.
8. Finalizar interações XP.
9. Trabalhar SEO, acessibilidade e performance.
10. Testar e publicar.

Para cada fase, informe:

- Objetivo.
- Arquivos afetados.
- Novos arquivos.
- Dependências.
- Riscos.
- Critérios de aceite.
- Como validar.
- O que explicitamente fica fora da fase.

## Formato obrigatório da resposta

Entregue somente um documento de arquitetura, sem implementar código:

### 1. Resumo executivo

Explique a solução de maneira curta e clara.

### 2. Auditoria do estado atual

Inclua:

- O que existe.
- O que funciona.
- O que é apenas visual.
- O que está quebrado.
- O que está ausente.
- O que está duplicado ou obsoleto.

Use caminhos de arquivos locais para sustentar as conclusões.

### 3. Decisões de arquitetura

Para cada decisão:

- Contexto.
- Opções.
- Decisão recomendada.
- Justificativa.
- Consequências.
- Riscos.

Inclua navegação, estado do modo, boot, conteúdo, diretórios, lazy loading,
janelas, responsividade e deploy.

### 4. Árvore final de diretórios

Mostre a estrutura recomendada e explique seus limites.

### 5. Contratos de dados

Documente interfaces TypeScript propostas sem editar o projeto.

### 6. Design system

Defina:

- Direção estética.
- Cores.
- Tipografia.
- Espaçamento.
- Grid.
- Breakpoints.
- Bordas.
- Sombras.
- Motion.
- Estados interativos.
- Acessibilidade.

### 7. Wireframe textual

Descreva desktop e mobile para navbar, hero, sobre, experiência, projetos,
skills, formação, contato, footer e transição para Windows.

### 8. Auditoria completa do Windows XP

Classifique cada item como:

- Bloqueador.
- Importante.
- Polimento.
- Opcional.

### 9. Inventário de assets

Use tabela com:

- Asset.
- Estado.
- Formato.
- Dimensão ou proporção.
- Destino.
- Prioridade.
- Origem ou licença a confirmar.

### 10. Conteúdo pendente

Separe dados obrigatórios, placeholders possíveis e dados necessários antes do
deploy.

### 11. Plano incremental

Crie fases pequenas com critérios de aceite verificáveis.

### 12. Estratégia de testes

Inclua validações automáticas e manuais.

### 13. Riscos e mitigação

Inclua pelo menos:

- Crescimento do bundle.
- Complexidade do modo XP.
- Mobile.
- Acessibilidade.
- Assets sem licença.
- Conteúdo incompleto.
- Deploy estático.
- Regressões no sistema de janelas.

### 14. Definition of Done

Defina objetivamente quando:

- O portfólio formal está pronto.
- O modo Windows está pronto.
- O projeto está pronto para deploy.

### 15. Perguntas finais

Faça apenas perguntas que bloqueiam decisões. Não pergunte algo que possa ser
descoberto no repositório.

## Regras finais

- Não altere arquivos.
- Não escreva código de produção.
- Não instale dependências.
- Não reorganize diretórios.
- Não remova assets.
- Não invente experiências, projetos ou resultados profissionais.
- Não esconda inconsistências.
- Não proponha backend sem necessidade clara.
- Não adicione React Router automaticamente.
- Não recomende bibliotecas sem justificar custo e benefício.
- Não transforme o site formal em um clone do Windows XP.
- Não descarte a experiência XP existente.
- Evite overengineering.
- Prefira migração incremental.
- Diferencie fatos observados de recomendações.
- Use caminhos de arquivos para sustentar a auditoria.
- Finalize o documento e aguarde aprovação antes de implementar.

O resultado desta etapa deve permitir que outro agente execute o projeto fase por
fase sem reinterpretar a intenção do produto.

---

**Nota de design:** o projeto ainda não possui `DESIGN.md`. Inclua no plano a
criação futura desse arquivo depois que o design system for aprovado. Não crie o
arquivo durante a etapa de auditoria.
