import React, { useState, forwardRef, useImperativeHandle } from "react"
// import ReactDom from "react-dom"

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false)
  //   event handler : set open or close modal
  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      closeModal: () => close(),
    }
  })
  //   open
  const open = () => {
    setDisplay(true)
  }
  //   close
  const close = () => {
    setDisplay(false)
  }
  //   initial value of the display : false
  if (display) {
    return (
      <div className={"modal-wrapper"}>
        <div onClick={close} className={"modal-backdrop"}>
          <div className={"modal-box"}>{props.children}</div>
        </div>
      </div>
    )
  }

  return null
})

export default Modal
