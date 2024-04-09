interface TaskNameAndTypeInterFace {
    taskName: string,
    type: string
}


function TaskNameAndType({ taskName, type }: TaskNameAndTypeInterFace) {
    return (
        <div className='ml-1 p-1 px-2 flex justify-between items-center'>
            <span className='font-bold text-lg'>{taskName}</span>
            <div className={`text-xs bg-slate-300 rounded-full p-1 px-2 ${type === 'Guest' ? 'text-red-500' : 'text-indigo-500'}`}>{type} Task</div>
        </div>
    )
}

export default TaskNameAndType
