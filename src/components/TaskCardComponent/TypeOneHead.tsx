import StaffChip from './StaffChip'
import arrow from '../../../public/images/arrow.png';
import one from '../../../public/images/one.png';
import greenClock from '../../../public/images/greenClock.png'
import redClock from '../../../public/images/redClock.png'


interface HeadInterface {
  staffName: string,
  ScheduledTasks: string,
  ongoingTasks: string,
  pandingTime: string | "",
  status: string
}

type StatusColorMap = {
  [key: string]: string;
};

const statusColorMap: StatusColorMap = {
  "Not Accepted": "text-red-500",
  "Scheduled": "text-zinc-950",
  "Ongoing": "text-yellow-300"
};


function TypeOneHead({ staffName, ScheduledTasks, ongoingTasks, pandingTime, status }: HeadInterface) {
  return (
    <div className='header-cell flex items-center justify-between'>
      <div className='flex items-center'>
        <StaffChip staffName={staffName} />
        <div className={`text-xs bg-slate-300 rounded-full p-1 px-2 mr-2 ${statusColorMap[status] === undefined ? 'text-zinc-950' : statusColorMap[status]}`} >{status}</div>
        <img src={ScheduledTasks === 'Recurring' ? arrow : one} className='size-4' />
      </div>
      <div className={`${ongoingTasks == 'Not Accepted and delayed' ? "bg-red-300" : "bg-green-300"}  rounded-full flex items-center p-1 px-1 pl-0 `}>
        <img className='size-4 m-1' src={ongoingTasks == 'Not Accepted and delayed' ? redClock : greenClock} />
        <div className={`text-xs  ${ongoingTasks == 'Not Accepted and delayed' ? "text-red-600" : "text-green-600"}`}>{pandingTime}</div>
      </div>
    </div>
  )
}

export default TypeOneHead