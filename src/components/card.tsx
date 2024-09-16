import { Text } from '@/components/text'
import React from 'react'

interface CardProps {
  title: string
  description: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> // Expecting an icon component
}

const Card: React.FC<CardProps> = ({ title, description, Icon }) => {
  return (
    <div className="max-w-sm overflow-hidden rounded p-4 shadow-md hover:bg-gray-100">
      <div className="mb-2 flex">
        <Icon className="h-6 w-6" />
      </div>
      <div className="text-left">
        <div className="text-m font-bold">{title}</div>
        <Text>{description}</Text>
      </div>
    </div>
  )
}

export default Card
