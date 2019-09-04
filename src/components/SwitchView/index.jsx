import React, { useState } from "react";
import Styled from "./styles";
import Switch from "react-switch";
import { styles } from "../../../config";

export default function SwitchView({ onMessage, offMessage }) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <Styled.Switch>
      <label>
        <Switch
          onChange={handleChange}
          checked={checked}
          className="react-switch"
          onColor="#888"
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 12,
                color: "#000",
                paddingRight: 2
              }}
            >
              {offMessage}
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 12,
                color: "#000",
                paddingRight: 2
              }}
            >
              {onMessage}
            </div>
          }
        />
      </label>
    </Styled.Switch>
  );
}
