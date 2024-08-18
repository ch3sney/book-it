import { CalendarMonth } from '@/components/calendar-month'
import { Heading } from '@/components/heading'
import { getOrders } from '@/data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Availability',
}

export default async function Orders() {
  let orders = await getOrders()

  return (
    <>
      <div className="flex items-end justify-between gap-4">
        <Heading>Availability</Heading>
      </div>
      <div className="mt-4">
        {' '}
        <CalendarMonth></CalendarMonth>
      </div>
    </>
  )
}
