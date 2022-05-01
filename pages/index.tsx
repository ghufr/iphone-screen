import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'

import HomeIndicator from '@/components/HomeIndicator'
import Clock from '@/components/Clock'
import StatusBar from '@/components/StatusBar'
import Notification from '@/components/Notification'
import useTimeout from '@/utils/useTimeout'
import styles from '../styles/Home.module.css'
import { NotificationProps } from '@/components/Notification/Notification'
import FloatingBottomIcon from '@/components/FloatingBottomIcon'
import Image from 'next/image'


const NotificationSection = () => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  useTimeout(() => {
    setNotifications([
      {
        title: "Ghufron",
        description: "Happy Eid Mubarak. Wishing you peace, happiness, and prosperity!"
      }
    ])
  }, 3000);

  return (
    <div className="px-4 mt-12">
      {notifications.map((item, i) => (
        <Transition
          key={i}
          show={notifications.length > 0}
          enter="transition-all duration-150"
          enterFrom="opacity-0 translate-x-12"
          enterTo="opacity-100 translate-x-0"
        >
          <Notification title={item.title} description={item.description} />
        </Transition>
      ))}
    </div>
  )
}
const Home: NextPage = () => {
  const [message, setMessage] = useState("");



  return (
    <div className='max-w-sm mx-auto h-screen relative text-white'>
      {/* <div className={styles.template} /> */}
      <div className={styles.ios}>
        <StatusBar />
        <div className="flex justify-center mt-6">
          <Image src="/assets/icons/lock.svg" width={64 / 2.5} height={94 / 2.5} alt="Lock Icon" />
        </div>
        <div className='mt-6'>
          <Clock />
        </div>

        <NotificationSection />

        {/* <FloatingBottomIcon /> */}

        <div className='absolute bottom-2 w-full'>
          <HomeIndicator />
        </div>
      </div>

    </div>
  )
}

export default Home
