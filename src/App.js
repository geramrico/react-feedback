import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import FeedbackData from './data/FeedbackData'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

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

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
              </>
            }
          ></Route>

          <Route exact path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink/>
      </div>
    </Router>
  )
}

export default App
