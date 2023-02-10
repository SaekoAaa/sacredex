'use client'
import Link from 'next/link';
const Header = () => {
  return (
    <div>
    <header className="heading">Логарифмы в IT сфере</header>
      <nav>
        <Link href="/">Домой</Link>
        <Link href="/dashboard">Изучение</Link>
        <Link href="/dashboard">Галерея</Link>
        <Link href="/dashboard">Отзывы</Link>
      </nav>
      </div>
  );
}
export default Header;