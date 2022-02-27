import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {

  const headerStyles = {
    backgroundColor: props.bgColor,
  }

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{props.text}</h2>
      </div>
    </header>
  )
}

// If no prop is passed, this'd be the default.
Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
}

//To check types, not needed (just example)
Header.propTypes = {
  text: PropTypes.string,
}

export default Header
