import { motion } from 'framer-motion'

export function BootScreen() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-black font-xp text-white">
      <section className="w-[min(520px,calc(100vw-32px))]">
        <div className="mb-8">
          <p className="text-[42px] leading-none">
            Windows<span className="ml-2 text-[22px] text-[#f15a24]">XP</span>
          </p>
          <p className="mt-2 text-xp-md text-zinc-300">Professional</p>
        </div>
        <div className="h-5 overflow-hidden rounded-[2px] border border-zinc-500 bg-zinc-950 p-[3px]">
          <motion.div
            className="h-full w-1/3 rounded-[1px] bg-gradient-to-r from-xp-blue-dark via-xp-blue-light to-xp-blue-dark"
            animate={{ x: ['-120%', '320%'] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </section>
    </main>
  )
}
