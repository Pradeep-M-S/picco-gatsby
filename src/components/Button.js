import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#a7be38" : "#077BF1")};
  white-space: no-wrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s all ease;
  border-radius: ${({ round }) => (round ? "50px" : "none")};

  &:hover {
    background: ${({ primary }) => (primary ? "#a7be12" : "#077bd3")};
    transform: translateY(-2px);
    transition: all 0.3s ease;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  }
`
