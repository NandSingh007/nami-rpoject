import nofiImage from '../../public/images/bell.png'
import profilePhotoImage from '../../public/images/profileimage.png'
import searchImage from '../../public/images/search.png'


function TopNav() {
  return (
    <div className='flex justify-between px-4 py-4 border-b-2'>
        <div className="flex-initial w-60 text-lg  hidden md:block ">ABCHotel</div>
        <div className="flex-initial w-60 text-lg block md:hidden">Task Of Day</div>
        
        <div className='flex justify-between flex-initial w-28'>
            <img className='block md:hidden   size-8 g-amber-100' src={searchImage}/>
            <img className='size-8 g-amber-100' src={nofiImage}/>
            <img className='size-8 rounded-full g-amber-100'  src={profilePhotoImage}/>
        </div>
        
    </div>
  )
}

export default TopNav