import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@/components/ui/Text";

import { type ReactNode } from "react";

export interface BottomSheetHeaderProps {
  title: ReactNode;
  subtitle?: ReactNode;
}

export function BottomSheetHeader({ title, subtitle }: BottomSheetHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {typeof title === "string" ? (
          <Text size="md" weight="semiBold">
            {title}
          </Text>
        ) : (
          <>{title}</>
        )}
        <Text>{subtitle}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  titleContainer: {
    flex: 3,
    alignItems: "center",
  },
});
