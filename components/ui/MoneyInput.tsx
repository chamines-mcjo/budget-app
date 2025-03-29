import type { ReactNode } from "react";
import { StyleSheet, View, TextInput } from "react-native";

import { FontFamilies } from "@/constants/Fonts";
import { colors } from "@/theme/colors";
import {
  sanitizeFormattedMoneyValue,
  sanitizeAndFormatMoney,
} from "@/helpers/numbers";
import { useFormattedInputProps } from "@/hooks/useFormattedInputProps";
import { Text } from "@/components/ui/Text";

import type { TextInputProps } from "react-native";

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
  | "nativeID"
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
  nativeID,
  ...inputProps
}: MoneyInputProps) {
  const isDark = variant === "dark";
  const { value: inputValue, onChangeText: handleChangeText } =
    useFormattedInputProps({
      formatFn: sanitizeAndFormatMoney,
      removeFormatFn: sanitizeFormattedMoneyValue,
      onChangeText,
      value: value,
    });

  return (
    <View style={[styles.container, style]}>
      {Boolean(label) && (
        <Text
          size="md"
          weight="semiBold"
          nativeID={nativeID ? `${nativeID}-label` : undefined}
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
          accessibilityLabelledBy={nativeID ? `${nativeID}-label` : undefined}
          style={[
            styles.input,
            !isDark && styles.textColorLight,
            hasError && styles.textColorError,
          ]}
          placeholderTextColor={getPlaceholderColor({ isDark, hasError })}
          selectionColor={isDark ? colors.neutral[900] : colors.neutral[100]}
          autoComplete="off"
          inputMode="decimal"
          keyboardType="decimal-pad"
          textAlign="right"
          onChangeText={handleChangeText}
          value={inputValue}
          {...inputProps}
        />
      </View>
    </View>
  );
}

function getPlaceholderColor({
  isDark,
  hasError,
}: {
  isDark: boolean;
  hasError: boolean;
}) {
  if (hasError) {
    return colors.red[400];
  }
  if (isDark) {
    return colors.neutral[700];
  }
  return colors.neutral[200];
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
