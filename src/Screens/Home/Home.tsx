import { i18n, LocalizationKey } from "@/Localization";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading, ScrollView } from "native-base";
import { User } from "@/Services";
import { Image } from "react-native";
import { Button } from "react-native";

export interface IHomeProps {
  data: User | undefined;
  isLoading: boolean;
}

export const Home = (props: IHomeProps) => {
  const { data, isLoading } = props;

  const recentDummy = [
    "Ho Chi Minh University of Technology",
    "Ho Chi Minh City International University",
    "Ho Chi Minh City University of Science",
    "Ho Chi Minh City University of Social Sciences and Humanities",
    "University of Economics and Law",
  ];
  const outstandingDummy = [
    {
      name: "Ho Chi Minh University of Technology",
      image: require("../../../assets/hcmut-outstanding.png"),
    },
    {
      name: "Ho Chi Minh City International University",
      image: require("../../../assets/iu-outstanding.png"),
    },
    {
      name: "Ho Chi Minh City University of Science",
      image: require("../../../assets/hcmus-outstanding.png"),
    },
  ];

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <ScrollView style={styles.scrollContainer}>
        <View style={{ marginBottom: 30 }}>
          {/* <View>
            <Text>Home</Text>
          </View> */}
          <View style={styles.topContainer}>
            <Image
              source={require("../../../assets/app-icon.png")}
              style={{ width: 80, height: 80 }}
            />
            <View>
              <Text>Quick Location Info Scanning</Text>
              <Text>Unlock Locations, Uncover Stories!</Text>
              <View>
                <Button title="Scan now!" />
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 30 }}>
          <Text>Recently scanned locations</Text>
          <>
            {recentDummy.map((item, index) => (
              <View key={index}>
                <Text>{item}</Text>
              </View>
            ))}
          </>
        </View>
        <View>
          <Text>Outstanding locations</Text>
          <View style={styles.outstandingContainer}>
            {outstandingDummy.map((item, index) => (
              <View key={index} style={{ width: 120 }}>
                <Image source={item.image} />
                <Text>{item.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
  },
  topContainer: {
    display: "flex",
    flexDirection: "row",
  },
  outstandingContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
