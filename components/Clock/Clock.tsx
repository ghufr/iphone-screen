import { useEffect, useState } from 'react'
import useInterval from '@/utils/useInterval'

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Thrusday',
  'Wednesday',
  'Friday',
  'Saturday',
]

const Clock = () => {
  const [clock, setClock] = useState({
    time: '0:00',
    day: '',
    date: '',
  });

  useInterval(() => {
    const now = new Date();

    const clock = {
      time: now.toLocaleString('en-EN', { hour: '2-digit', minute: '2-digit', hour12: false }),
      day: days[now.getDay()],
      date: now.toLocaleString('en-EN', { day: 'numeric', month: 'short' })
    }
    setClock(clock);
  }, 1000);

  return (
    <div className='text-center'>
      <h1 className='text-7xl font-thin'>{clock.time}</h1>
      <p className='text-xl font-light'>{clock.day}, {clock.date}</p>
    </div>
  )
}

export default Clock