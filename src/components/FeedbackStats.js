import React from 'react'
// import PropTypes from 'prop-types'
import { useContext } from 'react' //Bring context to this comp.
import FeedbackContext from '../context/FeedbackContext'

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext)

  //Calculate ratings average
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedback.length

  //limit to one decimal, nothing if the decimal is cero
  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating: {average ? average : 0}</h4>
    </div>
  )
}

// FeedbackStats.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// }

export default FeedbackStats
