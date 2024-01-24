import React from 'react'
const QuoteCard = (props) => {
  return (
  <div className="quote__card">
    <h3 className='quote'>{props.text}</h3>
    <br />
    <p className='quote__author'>-- {props.authors}</p>
  </div>

  )
}

export default QuoteCard