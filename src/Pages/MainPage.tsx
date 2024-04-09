import TopNav from '../components/TopNav'
import SideNav from '../components/SideNav'
import TasksList from '../components/TasksList'

import MobileFooter from '../components/MobileFooter'

export default function MainPage() {
  return (
    <div>
        <div className='sticky'>
            <TopNav />
        </div>
        <div className="flex">
          <div className="hidden md:block flex-auto w-1/12 h-screen">
            <SideNav />
          </div>
          <div className="flex-auto h-screen w-10/12">
            <TasksList />
          </div>
        </div>
        
       <div className='block md:hidden'>
       <MobileFooter /> 
       </div>
     
    </div>
  )
}
