import { useFont, useValue } from "@shopify/react-native-skia";
import React from "react";
import { PixelRatio, StyleSheet, View } from "react-native";
import { DonutChart } from "./DonutChart";

const radius = PixelRatio.roundToNearestPixel(130);
const STROKE_WIDTH = 12;

interface Props {
  value: number;
}

export const DonutChartContainer = ({ value }: Props) => {
  const targetPercentage = value / 620;
  const animationState = useValue(targetPercentage);

  const font = useFont(require("../Roboto-Light.ttf"), 60);
  const smallerFont = useFont(require("../Roboto-Light.ttf"), 25);

  if (!font || !smallerFont) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.ringChartContainer}>
        <DonutChart
          backgroundColor="white"
          radius={radius}
          strokeWidth={STROKE_WIDTH}
          percentageComplete={animationState}
          targetPercentage={targetPercentage}
          font={font}
          smallerFont={smallerFont}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ringChartContainer: {
    width: radius * 2,
    height: radius * 2,
  },
  button: {
    marginTop: 40,
    backgroundColor: "orange",
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});

export default DonutChartContainer;
