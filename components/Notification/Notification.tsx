import useInterval from '@/utils/useInterval';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export interface NotificationProps {
  title: string;
  description: string;
}

// const NotificationIcon = () => (
//   <div>
//   </div>
// )

const Notification = (props: NotificationProps) => {
  // const [shownAt, setshownAt] = useState('now');



  // useInterval(() => {
  //   const now
  //   setshownAt()
  // }, 10000)
  return (
    <div className='bg-white/50 rounded-2xl p-3 mb-3 backdrop-blur'>
      <div className="flex justify-between items-center mb-2">
        <div className='flex items-center'>
          <Image src={"/assets/icons/ios-message.svg"} alt="App Icon" height={16} width={16} />
          <div className='pl-2 text-xs text-black opacity-50'>MESSAGES</div>
        </div>
        <div className='text-xs text-black opacity-50'>now</div>
      </div>
      <div>
        <p className='text-black font-semibold text-sm'>{props.title}</p>
        <p className='text-black text-xs font-light'>{props.description}</p>
      </div>
    </div>
  )
}

export default Notification