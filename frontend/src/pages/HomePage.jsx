import React from 'react'
import CardOutlineDemo from '../components/card'

const HomePage = () => {

  const cards = [
    {
      title: "Module 1",
      content: "AI Auto-Category & Tag Generator",
      link: "/module1"
    },
    {
      title: "Module 3",
      content: "AI Impact Reporting Generator",
      link: "/module3"
    }
  ]

  return (
    <div className="w-full h-screen flex justify-center items-center sm:gap-4 sm:flex-row flex-col p-8 gap-8">
      {cards.map((card, index) => (
        <CardOutlineDemo 
          key={index}
          title={card.title}
          content={card.content}
          link={card.link}
        />
      ))}
    </div>
  )
}

export default HomePage