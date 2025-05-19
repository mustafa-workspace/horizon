import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/types'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <nav className="flex flex-col gap-4">
        <Link href="/" className='mb-12 cursor pointer items-center gap-2'>
          <Image src="../icons/hor.svg" alt='Logo Horizone' width={34} height={34} className='size-[24px] max-xl:size-14'/>
          <h1 className='sidebar-logo'>Horizon</h1>
        </Link>
        {sidebarLinks.map((items) => {
          return <Link href={items.route} key={items.label}><Image src={items.imgUrl}  alt={items.label}/> {items.label} </Link>
        })}
      </nav>
    </div>
  )
}

export default Sidebar