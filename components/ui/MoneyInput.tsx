import type { ReactNode } from "react";
import { StyleSheet, View, TextInput } from "react-native";

import { Text } from "@/components/ui/Text";

import type { TextInputProps } from "react-native";
import { FontFamilies } from "@/constants/Fonts";
import { colors } from "@/theme/colors";
import { moneyFormat } from "@/helpers/numbers";

export type MoneyInputProps = {
  /**
   * Color variant for input. Defaults to 'light'
   */
  variant?: "dark" | "light";
  /**
   * Label for input. If provided, will be displayed above the input
   */
  label?: ReactNode;
} & Pick<
  TextInputProps,
  | "value"
  | "onChangeText"
  | "placeholder"
  | "style"
  | "onFocus"
  | "onBlur"
  | "maxLength"
  | "testID"
  | "enterKeyHint"
  | "returnKeyType"
  | "autoFocus"
>;

export function MoneyInput({
  variant = "light",
  label,
  style,
  value,
  onChangeText,
  ...inputProps
}: MoneyInputProps) {
  const handleChangeText = (text: string) => {
    onChangeText?.(moneyFormat(text));
    return moneyFormat(text);
  };
  return (
    <View style={[styles.container, style]}>
      {Boolean(label) && (
        <Text size="md" weight="semiBold">
          {label}
        </Text>
      )}
      <View style={styles.inputWrapper}>
        <Text size="4xl">$</Text>
        <TextInput
          style={styles.input}
          autoComplete="off"
          inputMode="decimal"
          keyboardType="decimal-pad"
          textAlign="right"
          onChangeText={handleChangeText}
          value={value ? moneyFormat(value) : undefined}
          {...inputProps}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  inputWrapper: {
    borderBottomColor: colors.neutral[900],
    borderBottomWidth: 1,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  unit: {
    flexGrow: 0,
    flexShrink: 1,
  },
  placeholder: {
    color: colors.neutral[600],
  },
  input: {
    color: colors.neutral[900],
    fontSize: 35,
    flex: 1,
    fontFamily: FontFamilies.InterSemiBold,
    textAlign: "right",
    paddingLeft: 18,
  },
});
