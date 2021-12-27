import React, { useRef, useEffect, useState } from 'react'
import styles from './styles.module.css'

export const ReactScrollSlide = (props) => {
  const [slideIndex, setSlideIndex] = useState({
    current: 0
  })
  const slideEl = useRef({})

  //inject ref to children as properties to find top height of children
  //find top height of children via element.getBoundingClientRect().top
  //on mouse scroll, scroll to next component via built-in scrollIntoView()
  //if infiniteScroll false do not loop index of slides. Use mode % to create infite index loops
  //for better: scrollIntoView is so fast, create a customazable scroll animation. Idea change viewport offset height by css and animate with css.
  useEffect(() => {
    document.addEventListener('wheel', handleScroll, {
      passive: false
    })

    return () => {
      document.removeEventListener('wheel', handleScroll, {
        passive: false
      })
    }
  }, [])

  const indexRangeLimiter = (xNumber, min, max) => {
    if (xNumber > max) {
      return max
    } else if (xNumber < min) {
      return min
    } else {
      return xNumber
    }
  }
  const handleScroll = (e) => {
    e.preventDefault()
    const slideLength = Object.keys(slideEl.current).length - 1

    if (e.deltaY > 0) {
      setSlideIndex((prevSlideIndex) => {
        let newIndex = indexRangeLimiter(
          prevSlideIndex.current + 1,
          0,
          slideLength
        )
        scrollToSlide(newIndex)
        return { ...prevSlideIndex, current: newIndex }
      })
    } else if (e.deltaY < 0) {
      setSlideIndex((prevSlideIndex) => {
        let newIndex = indexRangeLimiter(
          prevSlideIndex.current - 1,
          0,
          slideLength
        )
        scrollToSlide(newIndex)
        return { ...prevSlideIndex, current: newIndex }
      })
    }
  }

  const scrollToSlide = (index) => {
    slideEl.current[index].scrollIntoView()
  }

  return (
    <React.Fragment>
      {props.children.map((child, index) =>
        React.cloneElement(child, {
          key: index,
          ref: (ref) => (slideEl.current[index] = ref)
        })
      )}
    </React.Fragment>
  )
}
