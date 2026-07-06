import { motion } from 'framer-motion';
import primaryLogo from '../../assets/icons/bios__primary_logo.png';
import secondaryLogo from '../../assets/icons/bios__secondary_logo.png';

interface BootScreenProps {
  onStart: () => void;
}

export function BootScreen({ onStart }: BootScreenProps) {
  const handleStart = () => {
    onStart();
  };

  return (
    <main className="flex min-h-svh items-center justify-center bg-black font-xp text-white">
      <section className="w-[min(520px,calc(100vw-32px))]">
        <div className="mb-8 flex flex-col items-start gap-3">
          <img src={primaryLogo} alt="Windows XP" className="h-auto w-72" draggable={false} />
          <img src={secondaryLogo} alt="Professional" className="h-auto w-36" draggable={false} />
        </div>
        <div className="h-5 overflow-hidden rounded-[2px] border border-zinc-500 bg-zinc-950 p-[3px]">
          <motion.div
            className="h-full w-1/3 rounded-[1px] bg-gradient-to-r from-xp-blue-dark via-xp-blue-light to-xp-blue-dark"
            animate={{ x: ['-120%', '320%'] }}
            transition={{ duration: 1.15, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <button
          onClick={handleStart}
          className="mt-6 px-4 py-2 bg-xp-blue-light text-xp-black font-bold rounded hover:bg-xp-blue-dark transition"
        >
          Abrir Modo Windows
        </button>
      </section>
    </main>
  );
}