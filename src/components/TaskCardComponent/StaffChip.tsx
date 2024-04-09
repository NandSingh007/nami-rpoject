import catlary from "../../../public/images/catlary.png"

interface StaffChipInterFace {
  staffName: string,
}


function StaffChip({ staffName }: StaffChipInterFace) {
  return (
    <div className='p-1 flex justify-between items-center rounded-md bg-slate-300 mx-2 my-2'>
      <img src={catlary} alt='catlary' className='size-4' />
      <p className='text-xs mx-1'>{staffName}</p>
      <div className='rounded-full size-3 bg-red-600'></div>
    </div>
  )
}

export default StaffChip