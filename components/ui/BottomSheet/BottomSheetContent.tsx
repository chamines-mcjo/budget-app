import React from "react";
import { StyleSheet, View } from "react-native";

import { type ReactNode } from "react";

export interface BottomSheetContentProps {
  children?: ReactNode;
}

export function BottomSheetContent({ children }: BottomSheetContentProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
