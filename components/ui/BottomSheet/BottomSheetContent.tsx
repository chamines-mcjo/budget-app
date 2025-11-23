import React from "react";
import { StyleSheet, View } from "react-native";

import { type ReactNode } from "react";
import { type ViewProps } from "react-native";

type BaseViewProps = Pick<ViewProps, "testID" | "nativeID">;
export interface BottomSheetContentProps extends BaseViewProps {
  children?: ReactNode;
}

export function BottomSheetContent({
  children,
  ...props
}: BottomSheetContentProps) {
  return (
    <View style={styles.container} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
