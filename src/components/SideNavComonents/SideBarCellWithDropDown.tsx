
import dropDownImage from '../../../public/images/dropdown.png'
import consoleImage from '../../../public/images/console.png'


function SideBarCellWithDropDown() {
  return (
    <div>
        <div className='py-2  pl-2'>
        <div className='flex justify-evenly items-center w-7/12'>
             <img className='size-2 ml-1 mr-1 mt-2 mt-0' src={dropDownImage} alt={`dropdownimg_consoleImage`} />
             <img className='size-4 mx-1' src={consoleImage} alt={`consoleimg`} />
             <p className='text-base'>Console</p>
        </div>
     </div>
    </div>
  )
}

export default SideBarCellWithDropDown