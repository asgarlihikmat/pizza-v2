import { Link, useNavigate } from "react-router-dom";
import emptyLogo from "../../assets/image/empty.png";

const MainNotFound = () => {
  const navigation = useNavigate();

  function timeToBack() {
    setTimeout(() => {
      navigation("/");
    }, 6000);
  }
  return (
    <div className="empty">
      
      <div className="empty__title font">К сожалению, мы не нашли пиццу по вашему запросу.</div>
      <div className="empty__text font">
        <p>Вероятней всего, вы не правельно указали название пиццы.</p>
        <p>Для того, чтобы поискать пиццу, перейди на главную страницу.</p>{" "}
      </div>
      <div className="empty__image">
        <img src={emptyLogo} />
      </div>
      <div className="empty__button">
        <button>
          <Link className="link" to={"/"}>
            Вернуться назад
          </Link>
        </button>
      </div>
    </div>
  );
};

export default MainNotFound;
