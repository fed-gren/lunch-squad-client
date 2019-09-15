import React, { useContext } from "react";
import Styled from "./styles";
import { FaRegThumbsUp } from "react-icons/fa";
import { MapPageContext } from "../../../contexts/MapPageContext";
import { RestaurantDataContext } from "../../../contexts/RestaurantDataContext";
//components
import InfoButtonPartView from "../InfoButtonPartView";

export default function index() {
  const { restaurantsShowFlags } = useContext(MapPageContext);
  const {
    koRestaurants,
    jpRestaurants,
    chRestaurants,
    wsRestaurants
  } = useContext(RestaurantDataContext);

  const arr = [
    { foodType: "한식", list: koRestaurants },
    { foodType: "일식", list: jpRestaurants },
    { foodType: "중식", list: chRestaurants },
    { foodType: "양식", list: wsRestaurants }
  ];

  const filteredList = arr
    .filter(({ foodType }) => restaurantsShowFlags[foodType])
    .map(({ list }) => list)
    .reduce((acc, cur) => acc.concat(cur), []);

  return (
    <Styled.Info>
      <ul>
        {filteredList.map(
          ({ _id, name, recommend, recommendedMenu, price }) => (
            <Styled.InfoItem key={_id}>
              <Styled.LikePart>
                <FaRegThumbsUp />
                <p className="like">{recommend}</p>
              </Styled.LikePart>
              <Styled.DescPart>
                <Styled.DescTextPart>
                  <h3>{name}</h3>
                  <div>
                    <span>추천메뉴:{recommendedMenu}</span>
                    <span>가격:{price}원</span>
                  </div>
                </Styled.DescTextPart>
                <InfoButtonPartView id={_id} />
              </Styled.DescPart>
            </Styled.InfoItem>
          )
        )}
      </ul>
    </Styled.Info>
  );
}
