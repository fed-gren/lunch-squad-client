import React, { useContext } from "react";
import Styled from "./styles";
import ButtonView from "../../SharedComponents/ButtonView";
import { styles } from "../../../../config";
import { RestaurantContext } from "../../../contexts/RestaurantContext";
import { foodType } from "../../../constants";

const toggleButtonStyles = {
  width: "3rem",
  fontSize: "1rem",
  color: "#fff",
  bgColor: styles.filteredItemColor
};

export default () => {
  const { foodTypeCategories, setFoodTypeCategories } = useContext(
    RestaurantContext
  );

  const clickHandler = ({ foodType }) => {
    const tempObj = { ...foodTypeCategories[foodType] };
    const onNum = Object.values(foodTypeCategories).reduce(
      (acc, cur) => (cur.isOn ? acc + 1 : acc),
      0
    );
    if (onNum <= 1 && tempObj.isOn) return;

    tempObj.isOn = !tempObj.isOn;
    setFoodTypeCategories({
      ...foodTypeCategories,
      [foodType]: { ...tempObj }
    });
  };

  return (
    <Styled.FilterButtons>
      <ButtonView
        name={foodTypeCategories[foodType.KO_FOOD].name}
        isOff={!foodTypeCategories[foodType.KO_FOOD].isOn}
        onClick={() =>
          clickHandler({ foodType: foodTypeCategories[foodType.KO_FOOD].name })
        }
        {...toggleButtonStyles}
      ></ButtonView>
      <ButtonView
        name={foodTypeCategories[foodType.JP_FOOD].name}
        isOff={!foodTypeCategories[foodType.JP_FOOD].isOn}
        onClick={() =>
          clickHandler({ foodType: foodTypeCategories[foodType.JP_FOOD].name })
        }
        {...toggleButtonStyles}
      ></ButtonView>
      <ButtonView
        name={foodTypeCategories[foodType.WS_FOOD].name}
        isOff={!foodTypeCategories[foodType.WS_FOOD].isOn}
        onClick={() =>
          clickHandler({ foodType: foodTypeCategories[foodType.WS_FOOD].name })
        }
        {...toggleButtonStyles}
      ></ButtonView>
      <ButtonView
        name={foodTypeCategories[foodType.CH_FOOD].name}
        isOff={!foodTypeCategories[foodType.CH_FOOD].isOn}
        onClick={() =>
          clickHandler({ foodType: foodTypeCategories[foodType.CH_FOOD].name })
        }
        {...toggleButtonStyles}
      ></ButtonView>
    </Styled.FilterButtons>
  );
};
