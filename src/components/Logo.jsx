import logo from '../images/BICSKE_UJ_t.png'
import logo_m from '../images/BICSKE_UJ_m.png'

export function Logo() {
  return (
    <>
      <div className="hidden sm:block">
        <img src="./BICSKE_UJ_t.png" alt="Bicske" width={200} height={80} />
      </div>
      <div className="block sm:hidden">
        <img src="./BICSKE_UJ_m.png" alt="Bicske" width={50} height={50} />
      </div>
    </>
  )
}
