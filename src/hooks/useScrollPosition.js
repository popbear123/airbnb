import { useEffect, useState } from "react";
import { throttle } from 'underscore'

export function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  const scrollHandler = throttle(function () {
    setScrollX(window.scrollX)
    setScrollY(window.scrollY)
  }, 50)

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler)

    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [scrollHandler])

  return { scrollX, scrollY }
}