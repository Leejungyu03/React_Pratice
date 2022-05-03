import { useEffect, useRef, useState } from "react"

const BUTTON_TEXT = {
  NORMALE: '버튼이 눌리지 않았다.',
  CLICKED: '버튼이 방금 눌렸다.'
}

export default function Button() {
  const [message, setMessage] = useState('버튼이 눌리지 않았다.')
  const timer = useRef();

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
    }
  }, [])

  return (
    <div>
      <button onClick={click} disabled={message === BUTTON_TEXT.CLICKED}>button</button>
      <p>{message}</p>
    </div>
  )

  function click() {
    setMessage(BUTTON_TEXT.CLICKED)
    timer.current = setTimeout(() => {
      setMessage(BUTTON_TEXT.NORMALE)
    }, 5000)
  }
}