import homeImage from '../../public/images/homeIcon.png'
import consoleImage from '../../public/images/consolesmall.png'
function MobileFooter() {
    return (
        <footer
            className="sm: block bg-white text-3xl text-white text-center border-t-4  fixed  inset-x-0 bottom-0 
           p-4 rounded-t-lg">


            <div className='flex items-center justify-around bg-white'>

                <div className="flex justify-center items-center flex-col">
                    <img src={homeImage} className='size-7' />
                    <p className='text-indigo-600 text-xs'>Home</p>
                </div>

                <div className="flex justify-center items-center flex-col">
                    <img src={consoleImage} className='size-7' />
                    <p className='text-black text-xs'>Console</p>
                </div>
            </div>
        </footer>
    )
}

export default MobileFooter