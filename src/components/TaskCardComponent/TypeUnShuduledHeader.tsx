import StaffChip from './StaffChip'
import arrow from '../../../public/images/arrow.png';
import one from '../../../public/images/one.png';


interface TypeUnShuduledHeaderInterface {
    staffName: string,
    ScheduledTasks: string
}

function TypeUnShuduledHeader({staffName,ScheduledTasks}: TypeUnShuduledHeaderInterface) {
  return (
    <div className='header-cell flex items-center'>
            <div className='flex items-center'>
                <StaffChip staffName={staffName}/>
                <img src={ScheduledTasks==='Recurring'? arrow:one} className='size-4' />
            </div>
        </div>
  )
}

export default TypeUnShuduledHeader