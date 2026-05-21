import { useEffect, useState } from 'react'

export function useScreensaver(timeoutMs = 120000) {
  const [isIdle, setIsIdle] = useState(false)

  useEffect(() => {
    let timer = window.setTimeout(() => setIsIdle(true), timeoutMs)

    const reset = () => {
      setIsIdle(false)
      window.clearTimeout(timer)
      timer = window.setTimeout(() => setIsIdle(true), timeoutMs)
    }

    window.addEventListener('mousemove', reset)
    window.addEventListener('keydown', reset)

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('mousemove', reset)
      window.removeEventListener('keydown', reset)
    }
  }, [timeoutMs])

  return isIdle
}
