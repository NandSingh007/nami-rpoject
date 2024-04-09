

function ConsoleDropDownCell(props:{imageUrl: string, name: string}) {
    return (
      <div className='my-2 ml-5 ml-4'>
          <div className='flex items-center   '>
               <img className='size-3 mr-2' src={props.imageUrl} alt={`${props.imageUrl}_${props.name}`} />
               <p className='text-sm'>{props.name}</p>
          </div>
      </div>
      
    )
  }
  
  export default ConsoleDropDownCell