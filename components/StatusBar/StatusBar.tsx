const BatteryIcon = () => (
  <div className='flex items-center'>
    <div className='border border-white rounded p-0.5'>
      <div className='h-2 w-4 bg-white rounded-sm'></div>
    </div>
    {/* <div className='w-1 h-2 rounded-r-sm bg-white'></div> */}
  </div>
)

const StatusBar = () => {
  return (
    <div className='flex justify-between px-6 pt-4'>
      <div className='text-xs'>WiFi</div>
      <div className='flex'>
        <BatteryIcon />
      </div>
    </div>
  )
}

export default StatusBar