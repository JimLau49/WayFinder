import React from "react";
import { StyleSheet, Text, View, Linking } from "react-native";
import { LinkItem } from "../../types/main";

interface IProps {
  linkItem: LinkItem;
}

const ListItem = ({ linkItem }: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.normalText}>{"\u2022  "}</Text>
      <Text
        testID={linkItem.title}
        nativeID="services"
        style={styles.linkText}
        onPress={() => {
          if (linkItem.link) {
            Linking.openURL(linkItem.link);
          }
        }}
      >
        {linkItem.title}
      </Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 10,
  },
  normalText: {
    fontSize: 16,
  },
  linkText: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
  },
});
