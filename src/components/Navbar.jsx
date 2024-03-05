import { MenuItems } from "@/constans"
import Link from "next/link"
import { styles } from '../styles/index'
import '../styles/nav.css'

const Navbar = () => {
  return (  
    <nav className={`${styles.innerWidth}`}>
      <div className={`${styles.xPaddings} ${styles.flexEnd} ${styles.navPadding} gap-6`}>
        {MenuItems.map(item => (
          <Link 
            key={item.id} 
            href={`#${item.id}`}
            className="navMenuItem text-[16px]"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav> 
  )
}

export default Navbar