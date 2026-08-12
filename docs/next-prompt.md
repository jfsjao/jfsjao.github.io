# Contrato de execução - Portfólio Formal + Modo Windows XP

## Estado

Documento ativo do projeto.

Auditoria inicial concluída. Arquitetura-base definida. Implementação exige
execução incremental, validação ao fim de cada fase e preservação das alterações
existentes.

Documento histórico detalhado: `next-prompt-architecture.md`.

Referência técnica do modo XP: `docs/react-xp-reference.md`.

## Objetivo final

Entregar portfólio pessoal pronto para deploy, com duas experiências conectadas:

1. Portfólio formal em `/`.
2. Experiência Windows XP em `/?mode=windows`.

Ambas usam mesma fonte de conteúdo. Portfólio formal prioriza recrutadores, SEO,
mobile, acessibilidade e performance. Windows XP preserva diferencial criativo,
sem prejudicar experiência principal.

## Limite desta entrega

Projeto termina quando estiver tecnicamente pronto para deploy.

Incluído:

- Reorganização incremental da estrutura.
- Fonte única de conteúdo tipada.
- Portfólio formal completo.
- Alternância de modo pela URL.
- Boot XP uma vez por sessão.
- Lazy loading do modo XP.
- Retorno claro ao portfólio formal.
- Correção dos bloqueadores XP.
- XP funcional em desktop.
- XP adaptado em mobile.
- SEO técnico.
- Acessibilidade WCAG AA nos fluxos principais.
- Otimização básica de assets e bundle.
- Testes essenciais.
- Build, lint e smoke test válidos.
- Atualização do README.
- Criação de `DESIGN.md` após aprovação visual.

Não incluído sem nova decisão:

- Backend.
- CMS.
- Banco de dados.
- Formulário com serviço próprio.
- Autenticação.
- Blog.
- Painel administrativo.
- React Router.
- Aplicativo nativo.
- PWA offline.
- Analytics.
- Deploy efetivo ou compra de domínio.
- Winamp musical completo.
- Screensaver complexo.
- Fidelidade pixel-perfect total ao Windows XP.
- Reescrita integral do sistema de janelas.

## Decisões-base

### Referência externa

`cyanoxide/react-xp` serve como benchmark funcional para boot, login, desktop,
taskbar, Menu Iniciar, registro de aplicações, janelas, resize, maximização e
mobile.

Não copiar código ou assets. Commit analisado não contém arquivo de licença.
Manter React 18, Zustand, fonte única de conteúdo e implementação própria.

### Navegação

- `/`: portfólio formal.
- `/?mode=windows`: modo XP.
- Query string controla modo.
- `history.pushState` e `popstate` preservam histórico.
- Sem React Router enquanto existirem somente dois modos.
- `sessionStorage` guarda apenas se boot já apareceu.

### Conteúdo

Fonte única:

```text
src/content/
├── content.types.ts
├── profile.data.ts
├── experience.data.ts
├── projects.data.ts
├── skills.data.ts
├── education.data.ts
├── certifications.data.ts
└── contacts.data.ts
```

Dados ausentes permanecem ausentes. Proibido inventar experiência, projeto,
resultado, métrica ou certificação.

### Estrutura

```text
src/
├── app/
├── content/
├── features/
│   ├── formal/
│   └── windows/
├── shared/
├── assets/
│   └── windows/
├── main.tsx
└── index.css
```

Regras:

- Mover XP gradualmente.
- Manter imports funcionando após cada etapa.
- Compartilhar somente conteúdo e primitives realmente comuns.
- Isolar CSS XP do CSS formal.
- Manter Zustand no sistema de janelas.
- Evitar abstrações preventivas.

### Mobile XP

Abaixo de 768 px:

- Launcher em grade.
- Uma janela visível por vez.
- Janela ocupa área útil.
- Sem drag ou resize.
- Taskbar compacta.
- Retorno ao formal sempre acessível.

A partir de 768 px:

- Desktop livre.
- Múltiplas janelas.
- Drag, resize, foco, minimizar, maximizar e restaurar.

### Carregamento

- Formal pertence ao bundle inicial.
- XP usa `React.lazy`.
- Assets XP carregam somente ao entrar no modo.
- Howler não entra no bundle formal.
- Apps XP podem receber chunks próprios após análise real do bundle.

## Direção visual formal

Leitura:

Portfólio de desenvolvedor para recrutadores. Editorial técnico, profissional,
contemporâneo, confiável. Referências XP discretas.

Parâmetros:

- `DESIGN_VARIANCE: 6`
- `MOTION_INTENSITY: 5`
- `VISUAL_DENSITY: 4`

Direção:

- Hero assimétrico.
- Forte hierarquia sans-serif.
- Fonte mono somente para tecnologia, datas e metadados.
- Neutros frios.
- Um azul reinterpretado como accent.
- Projetos em composição editorial.
- Skills agrupadas por contexto, sem percentuais.
- Movimento curto e motivado.
- Tema claro e escuro coerentes.
- Mobile-first.

Evitar:

- Gradiente roxo genérico.
- Glow.
- Glassmorphism excessivo.
- Três cards iguais.
- Cards em toda seção.
- Hero centralizado genérico.
- Animações infinitas.
- Copy artificial.
- Métricas inventadas.
- Em dash visível.
- Controles sem função apresentados como funcionais.

## Conteúdo previsto

Portfólio formal:

1. Navbar.
2. Hero.
3. Sobre.
4. Experiência.
5. Projetos.
6. Skills.
7. Formação.
8. Certificações, idiomas e voluntariado quando houver dados.
9. Contato.
10. Footer.

Modo XP:

- Boot.
- Desktop ou launcher mobile.
- Taskbar.
- Menu Iniciar.
- Word: perfil, experiência, formação e currículo.
- Ares: projetos reais.
- MSN: contato e disponibilidade.
- Paint: skills por domínio.
- Meu Computador: links e currículo.
- Winamp: easter egg visual nesta entrega.

## Fases

### Fase 0 - Baseline

Objetivo:

- Instalar dependências existentes.
- Confirmar build e lint.
- Corrigir somente bloqueadores indispensáveis.

Aceite:

- Dependências resolvidas.
- Erros iniciais documentados.
- Nenhuma mudança visual ampla.

### Fase 1 - Conteúdo único

Objetivo:

- Criar tipos.
- Migrar dados atuais.
- Remover divergência entre modos.

Aceite:

- XP usa `src/content`.
- Nenhum dado profissional inventado.
- Inconsistências restantes marcadas.

### Fase 2 - Dois modos

Objetivo:

- Formal como entrada.
- Query string.
- Histórico.
- Lazy loading.
- Sessão do boot.
- Retorno ao formal.

Aceite:

- Entrada direta funciona.
- Voltar e avançar funcionam.
- Reentrada XP não repete boot na sessão.
- Bundle formal não carrega XP antecipadamente.

### Fase 3 - Organização XP

Objetivo:

- Mover componentes e assets XP.
- Isolar CSS.
- Preservar comportamento.

Aceite:

- Build verde.
- XP mantém recursos atuais.
- Duplicações identificadas removidas somente após confirmação de uso.

### Fase 4 - Design system e esqueleto formal

Objetivo:

- Tokens.
- Tipografia.
- Grid.
- Tema.
- Estrutura semântica.
- `DESIGN.md`.

Aceite:

- Aprovação visual.
- Navegação por teclado.
- Layout válido em 320, 768, 1024 e 1440 px.

### Fase 5 - Conteúdo formal

Objetivo:

- Construir todas seções com dados reais disponíveis.

Aceite:

- Fonte única.
- Seções vazias não renderizam.
- Sem placeholders fingindo conteúdo final.
- CTA e navegação consistentes.

### Fase 6 - XP essencial

Objetivo:

- Corrigir notificações, menu, taskbar, janelas e apps principais.
- Adaptar mobile.
- Remover dados artificiais.

Aceite:

- Fluxos XP principais funcionam por mouse, touch e teclado.
- Nenhum botão falso essencial.
- Sem referência de asset quebrada.

### Fase 7 - Assets

Objetivo:

- Foto.
- Currículo.
- Screenshots.
- Favicon.
- OG image.
- Licenças.

Aceite:

- Dimensões declaradas.
- Imagens otimizadas.
- Zero asset crítico ausente.
- Licença ou origem registrada.

### Fase 8 - Qualidade

Objetivo:

- SEO.
- Acessibilidade.
- Performance.
- Testes.
- Documentação.

Aceite:

- TypeScript verde.
- Lint verde.
- Testes essenciais verdes.
- Smoke test verde.
- Console limpo.
- Metadados completos.
- WCAG AA nos fluxos principais.

## Testes mínimos

- Unitários da store Zustand.
- Seleção do modo pela URL.
- Histórico do navegador.
- Boot por sessão.
- Abrir, focar, minimizar, restaurar, maximizar e fechar janela.
- XP mobile.
- Links externos.
- Renderização com conteúdo opcional ausente.
- Navegação por teclado.
- Reduced motion.
- Auditoria automatizada de acessibilidade.
- Build de produção servido localmente.

Ferramentas serão escolhidas na Fase 8. Preferência inicial:

- Vitest.
- React Testing Library.
- Playwright.
- axe-core.

## Regras de execução

- Antes de cada fase, inspecionar estado Git.
- Preservar mudanças do usuário.
- Implementar uma fase por vez.
- Validar antes de avançar.
- Não instalar biblioteca sem verificar `package.json`.
- Não trocar stack sem ganho comprovado.
- Não criar backend.
- Não inventar conteúdo.
- Não remover asset sem confirmar referências.
- Não alterar URL pública ou campo de formulário silenciosamente.
- Usar `apply_patch` para edições.
- Rodar build, lint e testes proporcionalmente ao risco.
- Informar bloqueio real, não parar por dúvida solucionável no repositório.

## Definition of Done

Projeto pronto quando:

- `/` abre portfólio formal completo.
- `/?mode=windows` abre XP.
- Alternância preserva histórico.
- Conteúdo é compartilhado.
- XP carrega sob demanda.
- Formal funciona em mobile, teclado e leitor de tela.
- XP possui fallback mobile utilizável.
- Nenhum conteúdo ou asset crítico está quebrado.
- SEO básico está completo.
- Build, lint, testes e smoke test passam.
- README e `DESIGN.md` refletem código real.
- Restam somente itens explicitamente opcionais.

## Bloqueios humanos

Resolver durante Fase 1:

- Nome profissional definitivo.
- GitHub correto.
- Cargo alvo.
- Experiências e datas.
- Projetos definitivos.

Resolver antes da Fase 7:

- Foto.
- Currículo.
- Screenshots.
- Licença dos assets XP e sons.

Resolver antes do deploy:

- Plataforma.
- Domínio ou URL pública.
- Canonical.
- Contatos públicos finais.

## Primeiro checkpoint

Próxima execução autorizável:

`Fase 0 - Baseline`

Após Fase 0, parar. Mostrar:

- Resultado de instalação.
- Build.
- Lint.
- Bloqueadores reais.
- Diff criado.
- Proposta exata da Fase 1.
