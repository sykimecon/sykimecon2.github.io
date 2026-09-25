import React from 'react'

const Container = ({ children }) => {
  return (
    <div className="w-full max-w-4xl py-10 px-6 sm:px-8 mx-auto">
      {children}
    </div>
  )
}

export default Container
