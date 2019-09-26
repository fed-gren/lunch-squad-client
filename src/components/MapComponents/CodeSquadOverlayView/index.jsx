import React from "react";
import { CustomOverlay } from "react-kakao-maps";
import { data, styles } from "../../../../config";

import RestaurantOverlay from "../RestaurantOverlay";

export default () => {
  const { lat, lng } = data.kakaoMapConfig.defaultCenter;

  return (
    <CustomOverlay
      content={
        <RestaurantOverlay
          message="코드스쿼드"
          bgColor={styles.codeSquadColor}
          shadowColor={styles.codeSquadShadowColor}
        />
      }
      {...{ lat, lng }}
      yAnchor={data.codesquadOverlayYAnchor}
      zIndex={data.codesquadOverlayZIndex}
    ></CustomOverlay>
  );
};
