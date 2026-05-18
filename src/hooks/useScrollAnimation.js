import { useEffect, useRef } from 'react'

export function useScrollAnimation(options = {}) {
  const ref = useRef(null)
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
  } = options

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animated')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin])

  return ref
}
