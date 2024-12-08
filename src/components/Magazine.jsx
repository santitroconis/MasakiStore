import "./magazine.css";
import { useNavigate } from "react-router-dom";

export default function Magazine({ title, price, frontpage }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/magazine/${title}`);
  };

  return (
    <div className="magazine" onClick={handleClick}>
      <img className="mag-frontpage-img" src={frontpage} alt={title} />
      <div className="mag-frontpage-price">{price}$</div>
    </div>
  );
}
