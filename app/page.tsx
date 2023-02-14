import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='home-section'>
      <h1 className='header'>ЛОГАРИФМЫ И АЛГОРИТМЫ</h1>
      <section className='main-paragraph'>
      <h1 className='home-header'>Определение алгоритма</h1>
      <p className='home-text'>
      Алгоритм – точное предписание, которое 
задает вычислительный процесс, начинающийся с 
произвольного исходного данного и направленный на 
получение полностью определенного этим исходным данным 
результата.
      </p>
      <p className='home-gap'></p>
      <h1 className='home-header'>Теория алгоритмов </h1>
      <p className='home-text'>— наука, изучающая 
общие свойства и закономерности алгоритмов и 
разнообразные формальные модели их представления.
Задачи теории алгоритмов :
</p>
<p className='home-text'>• доказательство алгоритмической неразрешимости задач</p>
<p className='home-text'>• анализ сложности алгоритмов</p>
<p className='home-text'>• классификация алгоритмов</p>
<p className='home-text'>• разработка критериев оценки качества алгоритмов 
и другие</p>
<p className='home-gap'></p>
<h1 className='home-header'>Пример алгоритма в быту.</h1>
<p>Как сделать бутерброд:</p>
<p className='home-text'>• Взять хлеб. Отрезать кусок.</p>
<p className='home-text'>• Взять масло. Намазать на отрезанный кусок хлеба.</p>
<p className='home-text'>• Взять колбасу. Отрезать кусок.</p>
<p className='home-text'>• Положить колбасу на хлеб</p>
      </section>
    </div>
  )
}