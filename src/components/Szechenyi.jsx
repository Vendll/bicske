import { useState } from 'react'

const Szechenyi = () => {
  const [visible, setVisible] = useState(true)

  const toggleImage = () => {
    setVisible(!visible)
  }

  return (
    <>
      {visible && (
        <div className="fixed bottom-0 right-0 z-50 h-[5.5rem] w-32 md:h-[12.5rem] md:w-72">
          <button
            className="absolute left-1 top-0 z-[99] flex h-8 w-8 items-center justify-center rounded-full bg-gray-500 text-sm font-bold text-white hover:scale-110 dark:bg-gray-200 dark:text-gray-800 md:left-10 md:top-7"
            onClick={toggleImage}
          >
            X
          </button>

          <img src="./szec.png" layout="fill" objectFit="contain" />
        </div>
      )}
    </>
  )
}

export default Szechenyi
