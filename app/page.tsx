import { Inter } from "@next/font/google";
import Image from 'next/image'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="home-intro">
        <h1 className="header">
          <span className="i">Л</span>
          <span className="i">О</span>
          <span className="i">Г</span>
          <span className="i">А</span>
          <span className="i">Р</span>
          <span className="i">И</span>
          <span className="i">Ф</span>
          <span className="i">М</span>
          <span className="i">Ы</span>
          <span className="i">&nbsp;</span>
          <span className="i">И</span>
          <span className="i">&nbsp;</span>
          <span className="i">А</span>
          <span className="i">Л</span>
          <span className="i">Г</span>
          <span className="i">О</span>
          <span className="i">Р</span>
          <span className="i">И</span>
          <span className="i">Т</span>
          <span className="i">М</span>
          <span className="i">Ы</span></h1>
        <div className="home-arrow">
        <Image width={70} height={50} src={"/down-arrow.png"} alt="arrow down"/>
        </div></div>
    <div className="home-section-1">
        <h1 className="home-header">Определение алгоритма</h1>
        <p className="home-text">
          Алгоритм – точное предписание, которое задает вычислительный процесс,
          начинающийся с произвольного исходного данного и направленный на
          получение полностью определенного этим исходным данным результата.
        </p>
    </div>
    <div className="home-section-2">
      <section className="main-paragraph">
      <h1 className="home-header">Теория алгоритмов </h1>
      </section>
      <p className="home-gap"></p>
      <section className="main-paragraph">
      <p className="home-text">
          — наука, изучающая общие свойства и закономерности алгоритмов и
          разнообразные формальные модели их представления. Задачи теории
          алгоритмов :
        </p>
        <p className="home-text">
          • доказательство алгоритмической неразрешимости задач
        </p>
        <p className="home-text">• анализ сложности алгоритмов</p>
        <p className="home-text">• классификация алгоритмов</p>
        <p className="home-text">
          • разработка критериев оценки качества алгоритмов и другие
        </p>
      </section>

    </div>
    <div className="home-section-3">
      <section className="main-paragraph">
      <h1 className="home-header">Пример алгоритма в быту.</h1>
      </section>
      <p className="home-gap"></p>
      <section className="main-paragraph">
      <p className="home-text">Как сделать бутерброд:</p>
      <p className="home-text">• Взять хлеб. Отрезать кусок.</p>
        <p className="home-text">
          • Взять масло. Намазать на отрезанный кусок хлеба.
        </p>
        <p className="home-text">• Взять колбасу. Отрезать кусок.</p>
        <p className="home-text">• Положить колбасу на хлеб</p>
      </section>
      
    </div>
    </div>
  );
}
