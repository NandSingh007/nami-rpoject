import { useMemo, useState } from 'react'
import TaskCard from './TaskCard';
import { data } from '../Data';
import { Task } from '../Data';
type taskFiler = {filterName: string, isCLicked: boolean};

const taskFilerListInitial:taskFiler[] =[
    {filterName: "Not Accepted", isCLicked: false},
    {filterName: "Ongoing", isCLicked: false},
    {filterName: "Scheduled", isCLicked: false},
    {filterName: "Completed", isCLicked: false},
    {filterName: "Delayed", isCLicked: false},
    {filterName: "Ontime", isCLicked: false},
]
/*
Not Accepted, Ongoing,Scheduled,Completed  => status
---------------------------------------------
Delayed-> [ongoingTasks -> Accepted and Delayed, Not Accepted and delayed]
Ontime-> [ongoingTasks-> Accepted and On time]

*/




function TasksList() {
   
    const [taskFilerList, setTaskFilerList] = useState<taskFiler[]>(taskFilerListInitial);
    const [selectTaskList, setSelectTaskList] = useState<string[]>([]);
    const [filterByStatus, setFilterByStatus] = useState<string[]>([]);
    const [filterByOngoingTasks, setFilterByOngoingTasks] = useState<string[]>([]);
    const [filterByOngoingTasks2, setFilterByOngoingTasks2] = useState<string[]>([]);
    const updateTaskFilter= (index: number)=>{
         let data = taskFilerList;
         let taskName: string = data[index].filterName
         let isCLicked = data[index].isCLicked;
         data[index].isCLicked = !(data[index].isCLicked);
         setTaskFilerList(data);
        
         setSelectTaskList(!isCLicked? [...selectTaskList,taskName]: selectTaskList.filter((task)=> task!=taskName))
         setFilterByStatus(
          data[index].isCLicked && (taskName== 'Not Accepted'|| 'Ongoing' || 'Scheduled'||'Completed')?
          [...filterByStatus,taskName]: filterByStatus.filter((task)=> task!=taskName));
            
          
             
          setFilterByOngoingTasks2(
                data[index].isCLicked && (taskName== 'Delayed')?
                [...filterByOngoingTasks2,'Accepted and Delayed','Not Accepted and delayed']: filterByOngoingTasks2.filter((task)=> !(task== 'Accepted and Delayed'  ||task== 'Not Accepted and delayed') )) 

        
      
         console.log(selectTaskList);
         
         setFilterByOngoingTasks(
          data[index].isCLicked && (taskName== 'Ontime')?
          [...filterByOngoingTasks,'Accepted and On time' ]: filterByOngoingTasks.filter((task)=> (task!='Accepted and On time'))) 
         
    }

    const filterDataMemo: Task[] = useMemo(()=>{
         let filtedData = data.filter((task)=> filterByStatus.includes(task.status) ||  filterByOngoingTasks.includes(task.ongoingTasks) || filterByOngoingTasks2.includes(task.ongoingTasks))
         return (filtedData.length==0) ? data : [...filtedData]
        },[filterByStatus,filterByOngoingTasks,filterByOngoingTasks2]) 
    

  return (
    <div className='m-3 p-1'>
        <h5 className='hidden md:block'>Tasks of the days</h5>
       
        <div className='flex my-2 overflow-y-scroll'>
           {taskFilerList.map((taskType,index)=> 
                                          (
                                          <button onClick={()=>{updateTaskFilter(index)}}
                                               key={index} 
                                               className={`rounded-full border-solid border border-gray-400 mr-3 p-1 px-2 ${taskType.isCLicked? "bg-indigo-400":"bg-slate-50"}`}>
                                                    {taskType.filterName}
                                          </button>))}
        </div>
       
        <div className={`grid w-full  gap-3 grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
          
            {filterDataMemo.map(({id,staffName,taskName, dateAndTime,type,status,ScheduledTasks,ongoingTasks,star,pandingTime,isComplaint}:Task,index)=> 
            <div className='w-full'>
               <TaskCard key={index} id={id} staffName={staffName} taskName={taskName} dateAndTime={dateAndTime} type={type} status={status} ScheduledTasks={ScheduledTasks} ongoingTasks={ongoingTasks} star={star} pandingTime={pandingTime} isComplaint={isComplaint}/>
            </div>
            )}
          
          
         
        </div>
       
        </div>
        
        
    
  )
}

export default TasksList