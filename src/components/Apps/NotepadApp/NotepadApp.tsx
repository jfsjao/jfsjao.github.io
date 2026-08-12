const PROJECT_NOTE = `Bem-vindo ao meu portfólio!

Aqui você pode voltar no tempo e relembrar um pouco como era usar o Windows há alguns anos.

Escolhi o Windows XP porque meu primeiro contato com um computador aconteceu nesse sistema. Eu adorava explorar cada programa, descobrir configurações e aprender enquanto mexia em tudo.

Quem não lembra do Paciência Spider e do Pinball? Quero adicionar essas e outras lembranças mais para frente.

Enquanto isso, fique à vontade para abrir os programas, conhecer meus projetos e explorar um pouco da minha trajetória.

Para voltar ao portfólio normal, abra o Menu Iniciar, clique em "Desligar" e depois em "Desligar" novamente na janela de confirmação.

João Felipe`

export function NotepadApp() {
  return (
    <article className="flex h-full flex-col bg-white text-black">
      <nav
        aria-label="Menu do Bloco de Notas"
        className="flex h-[29px] shrink-0 items-center gap-0 border-b border-[#aca899] bg-[#ece9d8] px-[2px] font-xp text-[14px]"
      >
        {['Arquivo', 'Editar', 'Formatar', 'Exibir', 'Ajuda'].map((item) => (
          <span key={item} className="px-[7px] py-1">
            {item}
          </span>
        ))}
      </nav>

      <textarea
        aria-label="Apresentação do projeto"
        spellCheck={false}
        defaultValue={PROJECT_NOTE}
        wrap="soft"
        className="min-h-0 flex-1 resize-none border-0 bg-white px-[3px] py-[2px] text-black focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-1px] focus-visible:outline-[#7f9db9]"
        style={{
          fontFamily: '"Lucida Console", "Courier New", monospace',
          fontSize: '12px',
          fontWeight: 400,
          lineHeight: '18px',
          letterSpacing: 0,
        }}
      />
    </article>
  )
}
