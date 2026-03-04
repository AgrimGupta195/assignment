import React from 'react'
import CardOutlineDemo from '../components/card'

const HomePage = () => {

  const cards = [
    {
      title: "Module 1",
      content: "AI Auto-Category & Tag Generator"
    },
    {
      title: "Module 3",
      content: "AI Impact Reporting Generator"
    }
  ]

  return (
    <div className="w-full h-screen flex justify-center items-center gap-4 ">
      {cards.map((card, index) => (
        <CardOutlineDemo 
          key={index}
          title={card.title}
          content={card.content}
        />
      ))}
    </div>
  )
}

export default HomePage