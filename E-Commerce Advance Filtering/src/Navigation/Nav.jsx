import { FiHeart } from "react-icons/fi";
import { AiOutlineShopping, AiOutlineUserAdd } from "react-icons/ai";

import "./Nav.css";
const Nav = ({ handleInputChange }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter Your search shoes"
          onChange={handleInputChange}
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>

        <a href="#">
          <AiOutlineShopping className="nav-icons" />
        </a>

        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
