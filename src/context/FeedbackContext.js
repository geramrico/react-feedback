import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])
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

  //Fetch Feedback
  const fetchFeedback = async () => {
    const response = await fetch('http://localhost:5000/feedback?_sort=id&_order=desc')
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchFeedback()
  }, [])

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
        isLoading,
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
