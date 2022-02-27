import PropTypes from 'prop-types'
import Feedbackitem from './Feedbackitem'

const FeedbackList = ({ feedback,handleDelete }) => {

  if (!feedback || feedback.lenght === 0) {
    return <p>No feedback yet</p>
  }

  const ratings = feedback.map((item) => <Feedbackitem 
                                              key={item.id} 
                                              item={item}
                                              handleDelete={handleDelete} />)

  return <div className="feedback-list">{ratings}</div>
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
}

export default FeedbackList
