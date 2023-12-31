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
    "Nguyen Khuyen High School for the gifted",
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
          <View>
            <View>
              <Text style={homeTitle.text}>Home</Text>
            </View>
          </View>
          <View style={styles.topContainer}>
            <Image
              source={require("../../../assets/app-icon.png")}
              style={{ width: 120, height: 120 }}
            />
            <View>
              <Text style={homeTitle.slogan}>Quick Location Info Scanning</Text>
              <Text>Unlock Locations, Uncover Stories!</Text>
              <Button title="Scan now!" color="#15803d" />
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 30 }}>
          <Text style={locationStyle.title}>Recently scanned locations</Text>
          <View style={locationStyle.container}>
            {recentDummy.map((item, index) => (
              <View key={index} style={locationItemStyle.container}>
                <Text style={locationItemStyle.text}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
        <View>
          <Text style={locationStyle.title}>Outstanding locations</Text>
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

const locationItemStyle = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    width: "100%",
    height: 34,
    borderColor: "#15803D",
  },
  text: {
    fontSize: 12,
    paddingLeft: 16,
    paddingTop: 8,
  },
});
const locationStyle = StyleSheet.create({
  container: {
    display: "flex",
    gap: 10,
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 10,
  },
});

const homeTitle = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  slogan: {
    fontWeight: "bold",
  },
});
const buttonStyle = StyleSheet.create({
  scanButton: {
    borderRadius: 30,
    width: 120,
    height: 50,
    backgroundColor: "#15803D",
  },
  scanText: {
    fontWeight: "bold",
    color: "white",
  },
});
