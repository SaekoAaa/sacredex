'use client'
import Link from 'next/link';
const List = () => {
  return (
    <div className='listhd'>
        <h1>Сложность алгоритмов</h1>
        <Link className="listlinks" href={'/dashboard/'}>Введение...</Link>
        <Link className="listlinks" href={'/dashboard/basics'}>Материал</Link>
        <Link className="listlinks" href={'/dashboard/'}>Раздел 1</Link>
        <Link className="listlinks" href={'/dashboard/'}>Раздел 2</Link>
        <Link className="listlinks" href={'/dashboard/'}>Раздел 3</Link>
      </div>
  );
}
export default List;