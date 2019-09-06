import React from "react";
import Styled from "./styles";

export default function index() {
  const menus = [
    { name: "aa피자", price: "12000원" },
    { name: "bb버거", price: "8000원" },
    { name: "cc스파게티", price: "9000원" },
    { name: "dd리조또", price: "10000원" },
    { name: "eee그라탕", price: "9000원" },
    { name: "ff그라탕", price: "6000원" },
    { name: "zz샐러드", price: "8000원" }
  ];
  return (
    <Styled.DetailMenuList>
      <ul>
        {menus.map(menu => {
          return (
            <li>
              <span>{menu.name}</span>
              <span>{menu.price}</span>
            </li>
          );
        })}
      </ul>
    </Styled.DetailMenuList>
  );
}
