import { useState } from 'react'

const Szechenyi = () => {
  const [visible, setVisible] = useState(true)

  const toggleImage = () => {
    setVisible(!visible)
  }

  return (
    <>
      {visible && (
        <div className="fixed right-0 bottom-0 z-50 h-[5.5rem] w-32 md:h-[12.5rem] md:w-72">
          <button
            className="absolute top-0 left-1 z-[99] flex h-8 w-8 items-center justify-center rounded-full bg-gray-500 text-sm font-bold text-white hover:scale-110 dark:bg-gray-200 dark:text-gray-800 md:top-7 md:left-10"
            onClick={toggleImage}
          >
            X
          </button>
          <img src="/szec.png" layout="fill" objectFit="contain" />
        </div>
      )}
    </>
  )
}

export default Szechenyi
