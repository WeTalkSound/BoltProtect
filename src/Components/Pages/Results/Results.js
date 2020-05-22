import React from 'react'

export default function Results({ grade, image }) {
  let description = "Yo! Stuff"
  return (
    <>
      <h3 className="text-center">You're a { grade }</h3>
      <div className="col-sm-12 mb-3 col-md-6">
        <img
            className="img-fluid"
            src={image}
            alt={grade}
            style={{
                maxHeight: "350px",
                margin: "0 auto",
                display: "block"
            }}
        />
      </div>
      <div className="col-sm-12 mb-3 col-md-6">
        <p>{description}</p>
      </div>
    </>
  )
}