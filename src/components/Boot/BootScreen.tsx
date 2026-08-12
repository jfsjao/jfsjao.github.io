import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ABOUT } from '../../data/portfolio.data'
import avatar from '../../assets/icons/avatar__skateboard.png'
import copyright from '../../assets/icons/bios__copyright.png'
import loadingBar from '../../assets/icons/bios__loading_bar.gif'
import primaryLogo from '../../assets/icons/bios__primary_logo.png'
import secondaryLogo from '../../assets/icons/bios__secondary_logo.png'
import shutDownIcon from '../../assets/icons/icon__shut_down--large.png'
import windowsLogo from '../../assets/icons/logo__windows_xp.png'

interface BootScreenProps {
  onStart: () => void
  onShutdown: () => void
  initialStage?: StartupStage
}

type StartupStage = 'bios' | 'welcome' | 'login' | 'loggingIn'

const STAGE_DELAYS: Partial<Record<StartupStage, number>> = {
  bios: 2200,
  welcome: 1100,
}

export function BootScreen({ onStart, onShutdown, initialStage = 'bios' }: BootScreenProps) {
  const reduceMotion = useReducedMotion()
  const [stage, setStage] = useState<StartupStage>(initialStage)

  useEffect(() => {
    const delay = STAGE_DELAYS[stage]
    if (!delay) {
      return
    }

    const nextStage = stage === 'bios' ? 'welcome' : 'login'
    const timer = window.setTimeout(
      () => setStage(nextStage),
      reduceMotion ? 100 : delay,
    )

    return () => window.clearTimeout(timer)
  }, [reduceMotion, stage])

  useEffect(() => {
    if (stage !== 'loggingIn') {
      return
    }

    const timer = window.setTimeout(onStart, reduceMotion ? 100 : 1250)
    return () => window.clearTimeout(timer)
  }, [onStart, reduceMotion, stage])

  const handleLogin = () => {
    setStage('loggingIn')
  }

  return (
    <main className="relative min-h-[100dvh] overflow-hidden bg-black font-xp text-white">
      <button
        type="button"
        onClick={onStart}
        className={`absolute right-4 top-4 z-20 rounded-[3px] border border-white/50 bg-black/35 px-3 py-2 text-sm text-white hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${stage === 'login' || stage === 'loggingIn' ? 'hidden' : ''}`}
      >
        Pular inicialização
      </button>

      <AnimatePresence mode="wait">
        {stage === 'bios' && (
          <motion.section
            key="bios"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex min-h-[100dvh] flex-col bg-black p-6 sm:p-12"
          >
            <div className="flex flex-1 flex-col items-center justify-center">
              <motion.img
                src={primaryLogo}
                alt="Windows XP"
                width={288}
                height={100}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="h-auto w-72"
                draggable={false}
              />
              <img
                src={loadingBar}
                alt="Carregando"
                width={150}
                height={15}
                className="mt-10 h-auto w-36"
                draggable={false}
              />
            </div>

            <div className="flex items-end justify-between gap-8">
              <img
                src={copyright}
                alt=""
                width={200}
                height={34}
                className="h-auto w-40 sm:w-52"
                draggable={false}
              />
              <img
                src={secondaryLogo}
                alt="Microsoft"
                width={75}
                height={25}
                className="h-auto w-16 sm:w-20"
                draggable={false}
              />
            </div>
          </motion.section>
        )}

        {stage === 'welcome' && (
          <motion.section
            key="welcome"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            className="flex min-h-[100dvh] items-center justify-center bg-[#5a7edc]"
          >
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="text-5xl font-bold italic tracking-tight text-white [text-shadow:2px_2px_1px_rgba(0,0,0,0.35)] sm:text-7xl"
            >
              Bem-vindo
            </motion.p>
          </motion.section>
        )}

        {(stage === 'login' || stage === 'loggingIn') && (
          <motion.section
            key="login"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid min-h-[100dvh] grid-rows-[clamp(64px,13vh,118px)_1fr_clamp(90px,13vh,122px)] bg-[#5a7edc]"
          >
            <div className="border-b-[3px] border-[#94adf4] bg-[linear-gradient(180deg,#2733a5_0%,#27339e_100%)]" />

            <div className="mx-auto grid w-full max-w-[920px] items-center px-6 py-7 md:grid-cols-[1fr_1px_1fr] md:px-8 md:py-10">
              <div className="flex flex-col items-center text-center md:items-end md:pr-12 md:text-right">
                {stage === 'loggingIn' ? (
                  <motion.p
                    initial={reduceMotion ? false : { opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-4xl font-bold italic [text-shadow:1px_2px_1px_rgba(0,0,0,0.28)] sm:text-5xl"
                  >
                    Bem-vindo
                  </motion.p>
                ) : (
                  <>
                    <img
                      src={windowsLogo}
                      alt="Windows XP"
                      width={272}
                      height={164}
                      className="mb-2 h-auto w-[178px] sm:w-[196px]"
                      draggable={false}
                    />
                    <p className="max-w-[270px] text-base font-bold leading-snug [text-shadow:1px_1px_1px_rgba(0,0,0,0.18)] sm:text-lg">
                      Para começar, clique no seu nome de usuário.
                    </p>
                  </>
                )}
              </div>

              <div className="hidden h-[58vh] max-h-[500px] min-h-72 bg-[linear-gradient(180deg,transparent_0%,rgba(205,220,255,.42)_14%,rgba(220,231,255,.78)_50%,rgba(205,220,255,.42)_86%,transparent_100%)] md:block" />

              <div className="mt-7 flex justify-center md:mt-0 md:justify-start md:pl-6">
                <motion.button
                  type="button"
                  disabled={stage === 'loggingIn'}
                  onClick={handleLogin}
                  animate={
                    stage === 'loggingIn'
                      ? { opacity: 0, x: 12 }
                      : { opacity: 1, x: 0 }
                  }
                  transition={{ duration: reduceMotion ? 0.1 : 0.7, ease: 'easeOut' }}
                  className="group flex w-full max-w-[330px] items-center gap-3 rounded-[8px] border border-transparent px-2 py-2 text-left transition-[background-color,border-color,box-shadow] hover:border-[#91a9ec] hover:bg-[#3c60bd]/70 hover:shadow-[inset_0_0_0_1px_rgba(25,57,147,.45)] active:translate-y-px disabled:cursor-wait disabled:border-[#91a9ec] disabled:bg-[#3c60bd]/70 focus-visible:border-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                >
                  <img
                    src={avatar}
                    alt=""
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-[3px] border-2 border-[#d9e5ff] bg-white object-cover shadow-[1px_2px_3px_rgba(0,0,0,0.45)] sm:h-16 sm:w-16"
                    draggable={false}
                  />
                  <span>
                    <strong className="block text-xl font-normal [text-shadow:1px_1px_1px_rgba(0,0,0,0.35)] sm:text-2xl">
                      {ABOUT.name}
                    </strong>
                    <span className="mt-1 block text-sm text-[#d7e5ff] sm:text-base">
                      {stage === 'loggingIn'
                        ? 'Carregando suas configurações pessoais…'
                        : ABOUT.role}
                    </span>
                  </span>
                </motion.button>
              </div>
            </div>

            <footer className="border-t-2 border-[#e68a3c] bg-[linear-gradient(180deg,#2833a4_0%,#27339d_100%)] text-sm shadow-[inset_0_1px_0_rgba(255,196,116,.35)]">
              <div className="mx-auto grid h-full w-full max-w-[920px] grid-cols-1 items-center gap-2 px-6 py-3 sm:grid-cols-2 sm:px-8">
                <button
                  type="button"
                  onClick={onShutdown}
                  className="flex w-fit items-center gap-2 rounded-[3px] px-1 py-1 text-left hover:bg-white/10 active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                  aria-label="Desligar o modo Windows XP e voltar ao portfólio normal"
                >
                  <img src={shutDownIcon} alt="" width={24} height={24} className="h-6 w-6" draggable={false} />
                  <span className="font-bold">Desligar o computador</span>
                </button>
                <p className="hidden max-w-[360px] text-sm leading-relaxed text-[#d9e4ff] sm:block">
                  Desligar encerra o modo Windows XP e retorna ao portfólio normal.
                </p>
              </div>
            </footer>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  )
}
