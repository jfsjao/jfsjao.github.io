import { useRef } from 'react'

export function useDoubleClick(onDoubleClick: () => void, delay = 260) {
  const lastClickRef = useRef(0)

  return () => {
    const now = window.Date.now()

    if (now - lastClickRef.current <= delay) {
      onDoubleClick()
      lastClickRef.current = 0
      return
    }

    lastClickRef.current = now
  }
}
