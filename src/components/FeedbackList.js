// import PropTypes from 'prop-types'
import Feedbackitem from './Feedbackitem'
import { useContext } from 'react' //Bring context to this comp.
import FeedbackContext from '../context/FeedbackContext'

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext)

  if (!feedback || feedback.lenght === 0) {
    return <p>No feedback yet</p>
  }

  const ratings = feedback.map((item) => <Feedbackitem key={item.id} item={item} />)

  return <div className="feedback-list">{ratings}</div>
}

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// }

export default FeedbackList
