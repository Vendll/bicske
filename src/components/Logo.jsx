import Image from 'next/image'
import logo from '../../public/BICSKE_UJ_t.png'
import logo_m from '../../public/BICSKE_UJ_m.png'

export function Logo() {
  return (
    <>
      <div className="hidden sm:block">
        <Image src={logo} alt="Bicske" width={200} height={80} />
      </div>
      <div className="block sm:hidden">
        <Image src={logo_m} alt="Bicske" width={50} height={50} />
      </div>
    </>
  )
}
