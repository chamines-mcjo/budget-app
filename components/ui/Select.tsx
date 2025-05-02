import React from "react";
import { StyleSheet, View, ViewProps, TouchableOpacity } from "react-native";

import { Text } from "@/components/ui/Text";
import { colors } from "@/theme/colors";

import type { ReactNode } from "react";

export interface BaseSelectProps<TOption>
  extends Pick<ViewProps, "style" | "testID" | "nativeID"> {
  /**
   * The label of the select input
   */
  label: ReactNode;
  /**
   * The value of the select input
   */
  value?: TOption;
  /**
   * The options list of the select input
   */
  options: Array<TOption>;
  /**
   * Determine if input value is in error state or not. Default to false.
   */
  hasError?: boolean;
  /**
   * The placeholder of the select input
   */
  placeholder?: string;
}

export interface SelectProps<TOption> extends BaseSelectProps<TOption> {}

export function Select<TOption>({ hasError = false }: SelectProps<TOption>) {
  return (
    <TouchableOpacity style={[styles.selectContainer]}>
      <View style={styles.selectContent}>
        <Text size="md" weight="semiBold">
          Frecuencia de pago
        </Text>
        <Text size="md" style={styles.selectedValue}>
          Por uso
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  selectContainer: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: colors.grey[100],
    borderColor: colors.grey[100],
  },
  selectContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedValue: {
    color: colors.neutral[600],
  },
});
