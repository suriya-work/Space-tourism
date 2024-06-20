import { RefObject, useCallback, useEffect } from 'react'

const useOutSideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback()
      }
    },
    [ref, callback]
  )

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => handleClick(e)
    document.addEventListener('click', clickHandler)

    return () => {
      document.removeEventListener('click', clickHandler)
    }
  }, [handleClick])
}

export default useOutSideClick
