import { Howl } from 'howler'

export function useSound(src: string) {
  return () => {
    const sound = new Howl({ src: [src], volume: 0.45 })
    sound.play()
  }
}
