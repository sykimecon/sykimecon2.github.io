import React from 'react'

const Container = ({ children }) => {
  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-8">
      {children}
    </div>
  )
}

export default Container
