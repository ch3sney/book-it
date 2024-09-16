import { Badge } from '@/components/badge'
import { CalendarSmall } from '@/components/calendar-small'
import CardRow from '@/components/card-row'
import { Divider } from '@/components/divider'
import { Heading } from '@/components/heading'
import { Text } from '@/components/text'
import { getRecentOrders } from '@/data'

export function Stat({ title, value, change }: { title: string; value: string; change: string }) {
  return (
    <div>
      <Divider />
      <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">{title}</div>
      <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">{value}</div>
      <div className="mt-3 text-sm/6 sm:text-xs/6">
        <Badge color="lime"></Badge> <span className="text-zinc-500">from last week</span>
      </div>
    </div>
  )
}

export default async function Home() {
  let orders = await getRecentOrders()

  return (
    <>
      <Heading>Welcome, Brutus!</Heading>
      <div className="mb-4">
        <Text>Organizations can view and book your venue. Here are some steps to boost your engagement.</Text>
      </div>
      <CardRow />
      <Divider className="mt-4" />
      <Heading className="mt-8">Venue Statistics</Heading>
      <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <Stat title="Total revenue" value="$5.9K" change="+4.5%" />
        <Stat title="Average order value" value="$455" change="-0.5%" />
        <Stat title="Upcoming bookings" value="4" change="+25.0%" />
        <Stat title="Pageviews" value="823,067" change="-21.2%" />
      </div>
      <Divider className="mt-4" />
      <Heading className="mt-8">Upcoming Bookings</Heading>
      <div className="mt-4">
        <CalendarSmall></CalendarSmall>
      </div>
    </>
  )
}
