import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DonutChartContainer from "./DonutChart";
import { BarChart } from "./BarChart";
import { usePushNotifications } from "./usePushNotifications";
import { useEffect, useState } from "react";

export default function App() {
  const { expoPushToken } = usePushNotifications();
  console.log(expoPushToken);
  const [samples, setSamples] = useState<number[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "http://192.168.2.28:8000/analytics?userId=0000001"
      );
      const json = await response.json();
      const samples = json.previousMoistureLevels.slice(-10);
      setSamples(samples);
    })();
  }, []);

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
