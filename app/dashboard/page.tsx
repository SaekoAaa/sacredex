import Link from "next/link";
const checkPage = () => {
  return (
    <section className="pages">
      <h1 className="introduce">
        <span className="i1">В</span>
        <span className="i1">в</span>
        <span className="i1">е</span>
        <span className="i1">д</span>
        <span className="i1">е</span>
        <span className="i1">н</span>
        <span className="i1">и</span>
        <span className="i1">е</span></h1>
      <h1>Ссылки</h1>
      <p>Tproger</p>
      <Link
        className="links"
        href={"https://tproger.ru/articles/computational-complexity-explained/"}
      >
        Оценка сложности алгоритмов
      </Link>
      <Link
        className="links"
        href={"https://tproger.ru/translations/algorithms-and-data-structures/"}
      >
        Алгоритмы и структуры данных для начинающих: сложность алгоритмов
      </Link>
      <p>Habr</p>
      <Link className="links" href={"https://habr.com/ru/post/173821/"}>
        Оценка сложности алгоритмов
      </Link>
      <p>Github</p>
      <Link
        className="links"
        href={
          "https://github.com/kolei/OAP/blob/master/articles/t1l1.md?ysclid=ldt3tsbo5x346717588"
        }
      >
        Основные понятия алгоритмизации
      </Link>
      <p>Radioprog</p>
      <Link className="links" href={"https://radioprog.ru/post/1414"}>
        Обозначение O-большое: введение для начинающих разработчиков
      </Link>
      <p>Bimlibik</p>
      <Link
        className="links"
        href={"https://bimlibik.github.io/posts/complexity-of-algorithms/"}
      >
        Сложность алгоритмов. Big O. Основы.
      </Link>
    </section>
  );
};
export default checkPage;
