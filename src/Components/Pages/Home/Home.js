import React from 'react'
import homeImage from './home-image.png'
import Button from '../../Utilities/Button/Button'

export default function Home() {
  return (
    <>
      <div className="firstcon text-center justify-content-center">
        <br />
        <h1 className="font-weight-bold">We're all in protect mode but we're <br />motivated by different things.</h1>
        <br />
        <h1 className="font-weight-bold"><i>What type of protector are you?</i></h1>
        <Button linkTo="/quiz">Take The Quiz To Find Out!</Button>
        <img src={homeImage} alt="" className="homeimage img-fluid mx-auto d-flex" />
      </div>
    </>
  )
}