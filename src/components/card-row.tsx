import {
  CalendarDateRangeIcon,
  Cog6ToothIcon,
  PencilSquareIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/16/solid'
import React from 'react'
import Card from './card'

const CardRow: React.FC = () => {
  const cards = [
    {
      title: 'Update Calendar',
      description: 'Change which dates are available.',
      Icon: CalendarDateRangeIcon,
    },
    {
      title: 'Update Listing',
      description: 'This is the second card.',
      Icon: PencilSquareIcon,
    },
    {
      title: 'Settings',
      description: 'This is the third card.',
      Icon: Cog6ToothIcon,
    },
    {
      title: 'Support',
      description: 'This is the fourth card.',
      Icon: QuestionMarkCircleIcon,
    },
  ]

  return (
    <div className="-mx-2 flex flex-wrap">
      {cards.map((card, index) => (
        <div key={index} className="mb-4 w-full px-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Card title={card.title} description={card.description} Icon={card.Icon} />
        </div>
      ))}
    </div>
  )
}

export default CardRow
