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
      
      <div className="empty__title font">Sorry, we couldn't find the pizza you requested.</div>
      <div className="empty__text font">
      <p>Most likely, you entered the name of the pizza incorrectly.</p>
         <p>To search for pizza, go to the main page.</p>
      </div>
      <div className="empty__image">
        <img src={emptyLogo} />
      </div>
      <div className="empty__button">
        <button>
          <Link className="link" to={"/"}>
          Back
          </Link>
        </button>
      </div>
    </div>
  );
};

export default MainNotFound;
