import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "native-base";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

type WelcomeScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.OB3
>;

const Welcome = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  return (
    <View style={styles.container}>
      <Text> And find out about your location</Text>
      <StatusBar style="auto" />
      <Button onPress={() => props.onNavigate(RootScreens.OB2)}>
        Prev
        {/* <FontAwesomeIcon icon="fa-chevron-right" size={30} /> */}
      </Button>
      <Button onPress={() => props.onNavigate(RootScreens.MAIN)}>
        Next
        {/* <FontAwesomeIcon icon="fa-chevron-left" size={30} /> */}
      </Button>
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
});

export const WelcomeContainer_3 = ({
  navigation,
}: WelcomeScreenNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return <Welcome onNavigate={onNavigate} />;
};
