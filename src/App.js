import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
// import FeedbackData from './data/FeedbackData'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'

import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {
  // const [feedback, setFeedback] = useState(FeedbackData)

  // Add & Delete Function were originally here and passed as props
  // but then I moved it to the context provider

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>  
            <Route
              exact
              path="/"
              element={
                <>
                  {/* Can Delete Feedback prop as it is now in context */}
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route exact path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
