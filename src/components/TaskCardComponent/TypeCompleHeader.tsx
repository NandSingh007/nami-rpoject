import StaffChip from './StaffChip'
import starImg from '../../../public/images/Star.png'

interface TypeCompleHeader {
    staffName: string,
    isComplaint: boolean | "",
    star: 1 | 2 | 3 | 4 | 5 | "",
    ongoingTasks: string
}

function starBatchColor(n: number): string {
    if (n <= 2) {
        return "bg-red-600"
    } else if (n == 3) {
        return "bg-yellow-600"
    } else {
        return "bg-green-600"
    }

}


function TypeCompleHeader({ staffName, isComplaint, star, ongoingTasks }: TypeCompleHeader) {
    return (
        <div>
            <div className='header-cell flex items-center justify-between'>
                <div className='flex items-center'>
                    <StaffChip staffName={staffName} />
                    <div className={`text-xs  rounded-full p-1 px-2 mr-2  text-white ${ongoingTasks == 'Accepted and On time' ? 'bg-green-600' : 'bg-red-600'}`}>{ongoingTasks == 'Accepted and On time' ? 'On - Time' : 'Delayed'}</div>
                    <div className={`${isComplaint == "" || !isComplaint ? 'hidden' : ' text-xs text-white rounded-full p-1 px-2 mr-2  text-white  bg-red-600'}`}>Complaint</div>
                </div>
                <div className={`${star == "" ? 'hidden' : `rounded-full flex items-center p-1 px-2 ${starBatchColor(star)}`} }`}>
                    <div className={`text-white`}>{star}</div>
                    <img className='size-4 m-1' src={starImg} />

                </div>
            </div>
        </div>
    )
}

export default TypeCompleHeader