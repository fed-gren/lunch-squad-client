import React, { useState } from "react";
import Styled from "./styles";
import Switch from "react-switch";
import { styles } from "../../../../config";

export default function SwitchView({ onMessage, offMessage, changeFunc }) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    changeFunc();
  };

  return (
    <Styled.Switch>
      <label>
        <Switch
          onChange={handleChange}
          checked={checked}
          className="react-switch"
          onColor={styles.filteredItemColor}
          offColor={styles.filteredItemColor}
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 12,
                color: "#fff",
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
                color: "#fff",
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
