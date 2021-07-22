import React from 'react'
import "../App.css"

const Results = (props) => {

  const { result } = props

  return (
    <>
      <p className="results">{result} </p>
    </>
  )

}

export default Results;