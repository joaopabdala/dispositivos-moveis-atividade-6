import { View, Text, StyleSheet } from "react-native";
import React from "react";

type PriceTagProps = {
  price: number;
};

export default function PriceTag({ price }: PriceTagProps) {
  return(
    <View style={styles.container}>

      <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
      <Text style={styles.oldPrice}> R$40,83</Text>
    </View>
);
}

const styles = StyleSheet.create({
  container:{
    flexDirection: "row" as const,
    alignItems: "center" as const,
  },
  price: {
    fontWeight: "bold",
    fontSize: 20,
    color: "orange",
  },
  oldPrice:{
    color: "grey",
    textDecorationLine: "line-through",
  }
});
