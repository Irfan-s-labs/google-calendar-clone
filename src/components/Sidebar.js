
import CreateEventButton from './CreateEventButton'
import SmallCalender from './SmallCalender'


export default function Sidebar() {
  

  return (
    <aside className='border p-4 w-full md:w-64 '>
      <CreateEventButton></CreateEventButton>
      <SmallCalender />
    </aside>
  )
}
