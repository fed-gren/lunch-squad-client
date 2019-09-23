import React, { useEffect } from "react";
import Styled from "./styles";
import { useFetch } from "../../../hooks";
import { data } from "../../../../config";

export default function index({ id }) {
  const { loading, data: restaurantData } = useFetch({
    url: `${data.restaurantApiUrl}${id}`
  });
  //TODO: create Loading component
  return (
    !loading && <Styled.DetailInfo>{restaurantData.name}</Styled.DetailInfo>
  );
}
