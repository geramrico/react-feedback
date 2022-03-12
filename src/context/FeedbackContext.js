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

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  //Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = feedback.length + 1 //Should use UUID. this is for the example.
    console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
  }

  //Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure?')) {
      const filteredFeedback = feedback.filter((item) => item.id !== id)
      setFeedback(filteredFeedback)
    }
  }

  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item)))
    setFeedbackEdit({
      item: {},
      edit: false,
    })
  }

  //Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        updateFeedback,
        editFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
