import React from "react";
import { ButtonBorderRadiusTypes } from "components/constants";
import Dropdown from "components/ads/Dropdown";

function ThemeShadowControl() {
  return (
    <Dropdown
      className="px-0"
      options={[
        {
          label: "Default",
          value: "shadow-none",
        },
        {
          label: "md",
          value: "shadow-md",
        },
        {
          label: "lg",
          value: "shadow-lg",
        },
      ]}
      renderOption={({ isSelectedNode, option }) => (
        <div
          className={`flex py-2 space-x-2 w-full ${
            isSelectedNode ? "" : "px-2 hover:bg-gray-100 cursor-pointer"
          }`}
        >
          <div
            className={`flex items-center justify-center w-6 h-6 bg-trueGray-100 ${option.value}`}
          />
          <div>{option.label}</div>
        </div>
      )}
      selected={{
        label: "Default",
        value: ButtonBorderRadiusTypes.SHARP,
      }}
      showLabelOnly
      width="100%"
    />
  );
}

export default ThemeShadowControl;
