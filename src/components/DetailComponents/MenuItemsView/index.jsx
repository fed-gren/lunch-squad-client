import React from "react";
import Styled from "./styles";

export default function index() {
  const dummyMenus = [
    {
      name: "ㅁㄴㅇ찌개",
      price: "123원"
    },
    {
      name: "ㅁㄴㅇ찌개",
      price: "123원"
    },
    {
      name: "ㅁㄴㅇ찌개",
      price: "123원"
    }
  ];
  return dummyMenus ? (
    dummyMenus.map((c, idx) => {
      return (
        <Styled.MenuItem key={idx}>
          <p>{c.name}</p>
          <div></div>
          <p>{c.price}</p>
        </Styled.MenuItem>
      );
    })
  ) : (
    <div />
  );
}
