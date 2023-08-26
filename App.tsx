import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DonutChartContainer from "./DonutChart";
import { BarChart } from "./BarChart";

export default function App() {
  const samples = [200, 300, 400, 500, 400, 350, 400, 500, 600, 450, 300, 500];

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <View style={styles.donutChart}>
        <DonutChartContainer value={samples.at(-3)!} />
      </View>
      <View style={styles.barChart}>
        <BarChart samples={samples} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  donutChart: {
    paddingTop: 50,
    flex: 50,
  },
  barChart: {
    flex: 50,
  },
});
