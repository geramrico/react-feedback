import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'Item from context 1!',
      rating: 9,
    },
    {
      id: 2,
      text: 'Item from context 2 !',
      rating: 2,
    },
    {
      id: 3,
      text: 'Item from context 3!',
      rating: 5,
    },
  ])

  const addFeedback = (newFeedback) => {
    newFeedback.id = feedback.length + 1 //Should use UUID. this is for the example.
    console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure?')) {
      const filteredFeedback = feedback.filter((item) => item.id !== id)
      setFeedback(filteredFeedback)
    }
  }

  return <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>{children}</FeedbackContext.Provider>
}

export default FeedbackContext
