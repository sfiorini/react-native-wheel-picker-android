import WheelPicker from "../wheel-picker.android";
import React from "react";

export const titles = array => array.map(item => item.title);

export default ({ list, ...props }) => (
    <WheelPicker
        data={titles(list)}
        isAtmospheric
        isCurved
        {...props}
        itemTextSize={180}
        itemTextFontFamily="Roboto-Bold"
        backgroundColor="white"
        minuteInterval={15}
        isCurved={true}
        selectedItemTextColor="#B9CA00"
        visibleItemCount={3}
        //renderIndicator={true}
        indicatorColor="#B9CA00"
    />
);
