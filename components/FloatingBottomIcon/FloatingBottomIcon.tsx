const IconButton = () => (
  <button className='rounded-full bg-black/40'>
    <div className='w-12 h-12'></div>
  </button>
)
const FloatingBottomIcon = () => {
  return (
    <div className='absolute bottom-12 mx-12 flex justify-between w-full'>
      <IconButton />
      <IconButton />
    </div>
  )
}

export default FloatingBottomIcon