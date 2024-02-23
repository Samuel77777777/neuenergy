import styled from "styled-components";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Div>
      <ul className="sidebar-ul">
        <Link to="/">
          {" "}
          <li>Home</li>{" "}
        </Link>
        <Link to="/about">
          {" "}
          <li>About</li>
        </Link>
        <Link to="/contact">
          {" "}
          <li>Contact</li>
        </Link>

        <Link to="/service">
          <li>Product</li>
        </Link>
      </ul>
    </Div>
  );
};

export default Sidebar;

const Div = styled.div`
  position: absolute;
  right: 0%;
  width: 350px;
  height: 70vh;
  background: #727272;
  justify-content: center;
  box-shadow: 10px -5px 47px 0px rgba(0, 0, 0, 0);
  animation: myAnim 0.5s ease 0s 1 normal forwards;
  border-radius: 20px;
  .sidebar-ul {
    padding-top: 30px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .sidebar-ul li {
    color: #fff;
    font-family: DM Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 22.5px;
    text-transform: capitalize;
  }

  @keyframes myAnim {
    0% {
      opacity: 0;
      transform: translateX(50px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
