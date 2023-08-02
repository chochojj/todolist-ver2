import styled from "styled-components";
import carrot_hover from "../../assets/imgs/carrot_hover.png";
import { theme } from "../../style/theme";
import { Link } from "react-router-dom";

const Side = styled.nav`
  position: fixed;
  top: 70px;
  right: 0;
  width: 260px;
  height: 100vh;
  background-color: ${({ theme }) => theme.containerBackground};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-top: 20px;
  backdrop-filter: blur(5px);
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  align-content: center;
  margin: 10px;
  padding: 10px;
  transition: all 0.3s ease-in-out;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  &:hover {
    img {
      visibility: visible;
    }

    span {
      color: ${({ theme }) => theme.orangeText};
    }
  }

  img {
    width: 18px;
    margin: 0px 10px 0px 25px;
    visibility: hidden;
  }

  span {
    color: #c56c3a;
    font-weight: bold;
    font-size: 18px;
    margin-left: 20px;
  }
`;

function SideBar() {
  return (
    <Side>
      <StyledLink to="/">
        <img src={carrot_hover} className="carrot" alt="할 일 보기" />
        <span>할 일 보기</span>
      </StyledLink>
      <StyledLink to="/diary">
        <img src={carrot_hover} className="carrot" alt="내 일기장" />
        <span>내 일기장</span>
      </StyledLink>
      <StyledLink to="/schedule">
        <img src={carrot_hover} className="carrot" alt="달력 보기" />
        <span>달력 보기</span>
      </StyledLink>
      <StyledLink to="/madeby">
        <img src={carrot_hover} className="carrot" alt="만든 사람" />
        <span>만든 사람</span>
      </StyledLink>
    </Side>
  );
}

export default SideBar;
