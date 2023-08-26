import React, { FC } from "react";

import {
  Canvas,
  LinearGradient,
  Path,
  SkFont,
  Skia,
  SkiaMutableValue,
  Text,
  vec,
} from "@shopify/react-native-skia";
import { StyleSheet, View } from "react-native";

interface CircularProgressProps {
  strokeWidth: number;
  radius: number;
  backgroundColor: string;
  percentageComplete: SkiaMutableValue<number>;
  font: SkFont;
  smallerFont: SkFont;
  targetPercentage: number;
}

export const DonutChart: FC<CircularProgressProps> = ({
  strokeWidth,
  radius,
  percentageComplete,
  font,
  targetPercentage,
  smallerFont,
}) => {
  const innerRadius = radius - strokeWidth / 2;
  const targetText = `${Math.round(targetPercentage * 100)}%`;

  const path = Skia.Path.Make();
  path.addCircle(radius, radius, innerRadius);

  const width = font.getTextWidth(targetText);
  const titleWidth = smallerFont.getTextWidth("Dry");

  return (
    <View style={styles.container}>
      <Canvas style={styles.container}>
        <Path
          path={path}
          color="orange"
          style="stroke"
          strokeJoin="round"
          strokeWidth={strokeWidth}
          strokeCap="round"
          start={0}
          end={percentageComplete}
        >
          <LinearGradient
            start={vec(100, 100)}
            end={vec(150, 200)}
            colors={["#63C5DA", "#0492C2"]}
          />
        </Path>
        <Text
          x={innerRadius - width / 3}
          y={radius + strokeWidth}
          text={targetText}
          font={font}
          opacity={1}
          color="white"
        />
        <Text
          x={innerRadius - titleWidth / 2}
          y={radius + 45}
          text={"Dry"}
          font={smallerFont}
          opacity={1}
          color="white"
        />
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
