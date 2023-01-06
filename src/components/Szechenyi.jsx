import Image from 'next/image'
import { useState } from 'react'

const Szechenyi = () => {
  const [visible, setVisible] = useState(true)

  const toggleImage = () => {
    setVisible(!visible)
  }

  return (
    <>
      {visible && (
        <div className="fixed right-0 bottom-0 z-50 h-[12.5rem] w-72">
          <button
            className="absolute top-7 left-10 z-[99] flex h-8 w-8 items-center justify-center rounded-full bg-gray-500 text-sm font-bold text-white hover:scale-110 dark:bg-gray-200 dark:text-gray-800"
            onClick={toggleImage}
          >
            X
          </button>
          <Image src="/szec.png" layout="fill" objectFit="contain" />
        </div>
      )}
    </>
  )
}

export default Szechenyi
