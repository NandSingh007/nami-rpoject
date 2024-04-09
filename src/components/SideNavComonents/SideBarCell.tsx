

function SideBarCell(props:{imageUrl: string, name: string}) {
  return (
    <div className='border-b-4 border-orange-600 py-2 pl-4 bg-slate-200'>
        <div className='flex  items-center w-10/12'>
             <img className='size-5 ml-2 mr-3' src={props.imageUrl} alt={`${props.imageUrl}_${props.name}`} />
             <p>{props.name}</p>
        </div>
    </div>
    
  )
}

export default SideBarCell
