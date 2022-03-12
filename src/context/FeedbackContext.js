import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  //Fetch Feedback
  const fetchFeedback = async () => {
    // Removed "http://localhost:5000" because it is now in the
    // package.json proxy

    const response = await fetch('/feedback?_sort=id&_order=desc')
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchFeedback()
  }, [])

  //Add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json()
    // Backend creates the ID
    // newFeedback.id = feedback.length + 1 //Should use UUID. this is for the example.
    // setFeedback([newFeedback, ...feedback])
    setFeedback([data, ...feedback]) //replace with data from backend
  }

  //Delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure?')) {
      await fetch(`/feedback/${id}`, {
        method: 'DELETE',
      })
      const filteredFeedback = feedback.filter((item) => item.id !== id)
      setFeedback(filteredFeedback)
    }
  }

  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updItem),
    })

    const data = await response.json()
    console.log(data);

    setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...data } : item)))
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
