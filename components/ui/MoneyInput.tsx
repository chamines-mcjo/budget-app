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
  /**
   * Determine if input value is in error state or not
   */
  hasError?: boolean;
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
  variant = "dark",
  label,
  style,
  value,
  onChangeText,
  hasError = false,
  ...inputProps
}: MoneyInputProps) {
  const isDark = variant === "dark";
  const handleChangeText = (text: string) => {
    onChangeText?.(text);
    return text;
  };

  return (
    <View style={[styles.container, style]}>
      {Boolean(label) && (
        <Text
          size="md"
          weight="semiBold"
          style={[
            isDark ? styles.label : styles.labelLight,
            hasError && styles.textColorError,
          ]}
        >
          {label}
        </Text>
      )}
      <View
        style={[
          styles.inputWrapper,
          !isDark && styles.inputWrapperLight,
          hasError && styles.inputWrapperWithError,
        ]}
      >
        <Text
          size="4xl"
          style={[
            styles.unit,
            !isDark && styles.textColorLight,
            hasError && styles.textColorError,
          ]}
        >
          $
        </Text>
        <TextInput
          style={[
            styles.input,
            !isDark && styles.textColorLight,
            hasError && styles.textColorError,
          ]}
          placeholderTextColor={
            hasError
              ? colors.red[400]
              : isDark
                ? colors.neutral[700]
                : colors.neutral[300]
          }
          selectionColor={isDark ? colors.neutral[900] : colors.neutral[100]}
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
  inputWrapperWithError: {
    borderBlockColor: colors.red[600],
  },
  inputWrapperLight: {
    borderBottomColor: colors.neutral[100],
  },
  label: {
    color: colors.neutral[900],
  },
  labelLight: {
    color: colors.neutral[100],
  },
  unit: {
    flexGrow: 0,
    flexShrink: 1,
  },
  placeholder: {
    color: colors.neutral[600],
  },
  placeholderLight: {
    color: colors.neutral[200],
  },
  input: {
    color: colors.neutral[900],
    fontSize: 35,
    flex: 1,
    fontFamily: FontFamilies.InterSemiBold,
    textAlign: "right",
    paddingLeft: 18,
  },
  textColorError: {
    color: colors.red[600],
  },
  textColorLight: {
    color: colors.neutral[100],
  },
});
