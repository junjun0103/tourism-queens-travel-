import React from "react"

const Title = ({ title }) => {
  return (
    <div className="section-title">
      <h2 className="title-style">{title || ""}</h2>
    </div>
  )
}

export default Title
