'use client'
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  return (
    <div className='navbar'>
                <Link className="nav-section" style={{flexGrow: 8}} href="/">
                  <span>
                  <div className='navtxt icon'>
          <Image width={30} height={30} src={"/home_icon.png"} alt="home icon"/>
          </div>
          </span>
          </Link>
          <Link className="nav-section" style={{flexGrow: 1}} href="/dashboard"><span><div className='navtxt'>Изучение</div></span></Link>
          <Link className="nav-section" style={{flexGrow: 1}} href="/dashboard"><span><div className='navtxt'>Галерея</div></span></Link>
          <Link className="nav-section" style={{flexGrow: 1}} href="/dashboard"><span><div className='navtxt'>Отзывы</div></span></Link>
    </div>
  );
}
export default Header;