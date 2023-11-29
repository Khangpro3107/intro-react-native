import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, ChevronLeftIcon, ChevronRightIcon } from "native-base";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

type WelcomeScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.OB1
>;

const Welcome = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  return (
    <View style={styles.container}>
      <Text> Welcome to our App</Text>
      <StatusBar style="auto" />
      <Button onPress={() => props.onNavigate(RootScreens.OB1)}>
        Prev
        {/* <FontAwesomeIcon icon="chevron-right" size={30} /> */}
      </Button>
      <Button onPress={() => props.onNavigate(RootScreens.OB2)}>
        Next
        {/* <FontAwesomeIcon icon="chevron-left" size={30} /> */}
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

export const WelcomeContainer_1 = ({
  navigation,
}: WelcomeScreenNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return <Welcome onNavigate={onNavigate} />;
};
