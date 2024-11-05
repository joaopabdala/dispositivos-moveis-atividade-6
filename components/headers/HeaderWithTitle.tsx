import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

type HeaderWithTitleProps = {
  title: string;
};

export default function HeaderWithTitle({ title }: HeaderWithTitleProps) {
  return (
    <Stack.Screen
      options={{
        title,
        headerRight: () => (
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editText}>Editar</Text>
            <AntDesign name="message1" size={24} color="orange" />
          </TouchableOpacity>
        ),
      }}
    />
  );
}

const styles = {
  editButton: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    marginRight: 15,
    gap: 6,
  },
  editText: {
    color: "#007bff",
    fontSize: 16,
  },
};
