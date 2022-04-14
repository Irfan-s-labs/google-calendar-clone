
import CreateEventButton from './CreateEventButton'
import SmallCalender from './SmallCalender'


export default function Sidebar() {
  

  return (
    <aside className='border p-4 w-64 rounded m-1'>
      <CreateEventButton></CreateEventButton>
      <SmallCalender />
    </aside>
  )
}
