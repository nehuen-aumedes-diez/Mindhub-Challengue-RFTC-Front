import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
export default function AutoToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }, [pathname])
  return (
 null
  )
}
