import TypeOneHead from './TaskCardComponent/TypeOneHead'
import TaskNameAndType from './TaskCardComponent/TaskNameAndType'
import DateAndId from './TaskCardComponent/DateAndId'
import FromTo from './TaskCardComponent/FromTo'
import { Task } from '../Data'
import TypeUnShuduledHeader from './TaskCardComponent/TypeUnShuduledHeader'
import TypeCompleHeader from './TaskCardComponent/TypeCompleHeader'
import ViewDetailsButton from './TaskCardComponent/ViewDetailsButton'
import NotifyStaffBtn from './TaskCardComponent/NotifyStaffBtn'





function TaskCard({ id, staffName, taskName, dateAndTime, type, status, ScheduledTasks, ongoingTasks, star, pandingTime, isComplaint }: Task) {

    return (
        <div>
            <div className='border border-gray-400 rounded-lg'>
                <div className='rounded-md p-1'>
                    {(status === 'UnScheduled' ? <TypeUnShuduledHeader staffName={staffName} ScheduledTasks={ScheduledTasks} /> : (status === 'Completed') ? <TypeCompleHeader staffName={staffName} isComplaint={isComplaint} star={star} ongoingTasks={ongoingTasks} /> : <TypeOneHead staffName={staffName} ScheduledTasks={ScheduledTasks} ongoingTasks={ongoingTasks} pandingTime={pandingTime} status={status} />)}
                    <TaskNameAndType taskName={taskName} type={type} />
                    <DateAndId id={id} dateAndTime={dateAndTime} />
                    <FromTo />
                    {(status === 'UnScheduled' ? <ViewDetailsButton /> : (status === 'Completed') ? <ViewDetailsButton /> : <NotifyStaffBtn />)}
                </div>
            </div>
        </div>
    )
}

export default TaskCard