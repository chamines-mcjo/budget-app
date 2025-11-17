import React from "react";
import { View, StyleSheet, ViewProps } from "react-native";

export interface BottomSheetFooterProps
  extends Pick<ViewProps, "style" | "testID" | "nativeID"> {
  children?: React.ReactNode;
}

export function BottomSheetFooter({
  children,
  style,
  ...props
}: BottomSheetFooterProps) {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 8,
    paddingBottom: 24,
  },
});
