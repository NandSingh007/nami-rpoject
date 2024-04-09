
import calender from '../../../public/images/calender.png'

interface DateAndIdInterFace {
    id: string | number,
    dateAndTime: string,
}

function DateAndId({ id, dateAndTime }: DateAndIdInterFace) {
    return (
        <div className="m-1 flex justify-between items-center">
            <div className="ml-1 flex justify-between items-center">
                <img className='size-4 mr-1' src={calender} />
                <span className='text-xs'>{dateAndTime}</span>
            </div>
            <span className='text-xs mr-2'>#{id}</span>
        </div>
    )
}

export default DateAndId