
import check from '../../../public/images/check_circle_outline.png';
function NotifyStaffBtn() {
  return (
    <button className='bg-indigo-700 rounded-full w-full p-1 m-1 ml-0 flex justify-center items-center'>
      <div className="flex justify-between items-cente">
        <img src={check} className='size-6 mr-2' />
        <span className='text-pink-100'>Nofify Staff</span>
      </div>
    </button>
  )
}

export default NotifyStaffBtn