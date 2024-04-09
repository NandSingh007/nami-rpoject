
import SideBarCell from './SideNavComonents/SideBarCell'
import home from '../../public/images/home.png'
import SideBarCellWithDropDown from './SideNavComonents/SideBarCellWithDropDown'
import ConsoleDropDownCell from './SideNavComonents/ConsoleDropDownCell'
import calanderImage from '../../public/images/calander-side-bar.png'
import overviewImage from '../../public/images/Overview.png'
import staffImage from '../../public/images/staff.png'
import { useEffect, useState } from 'react'

type SideBarDropDownData = {imageurl: string,name: string}

function SideNav() {
  const [dropDownData, setDropDownData] = useState<SideBarDropDownData[]>([]);
  useEffect(()=>{
    const data:SideBarDropDownData[] = [{imageurl: calanderImage, name: 'Attandance'},{imageurl: overviewImage, name: 'Overview'}, {imageurl: staffImage, name: 'Staff'}]
    setDropDownData(data)
  },[])
  return (
    <div>
        <div>
            <SideBarCell imageUrl={home} name='Home'/>
            <SideBarCellWithDropDown />
            <div>
              {dropDownData.map((data,index)=>(<ConsoleDropDownCell key={index} imageUrl= {data.imageurl} name= {data.name}/>))}
            </div>
        </div>
    </div>
  )
}

export default SideNav