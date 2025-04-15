import type { ReactNode } from "react";
import { fontFamilies, fontSizes } from "@/theme/fonts";
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { Text } from "@/components/ui/Text";
import { colors } from "@/theme/colors";

export type TextInputProps = {
  /**
   * Color variant for input. Defaults to 'dark'
   */
  variant?: "dark" | "light";
  /**
   * Label for input. If provided, will be displayed above the input
   */
  label?: ReactNode;
  /**
   * Whether the input should be multiline. Default to false.
   */
  multiline?: boolean;
  /**
   * Determine if input value is in error state or not. Default to false.
   */
  hasError?: boolean;
  /**
   * Style for the container View
   */
  style?: ViewStyle;
} & Pick<
  RNTextInputProps,
  | "value"
  | "onChangeText"
  | "placeholder"
  | "testID"
  | "nativeID"
  | "onFocus"
  | "onBlur"
  | "maxLength"
  | "enterKeyHint"
  | "returnKeyType"
  | "autoFocus"
>;

export function TextInput({
  variant = "dark",
  label,
  style,
  value,
  placeholder,
  onChangeText,
  multiline = false,
  hasError = false,
  nativeID,
  ...props
}: TextInputProps) {
  const isDark = variant === "dark";
  const labelId = nativeID ? `${nativeID}-label` : undefined;
  const labelStyle = [
    isDark ? styles.label : styles.labelLight,
    hasError && styles.labelError,
  ];
  return (
    <View style={[styles.container, style]}>
      {Boolean(label) && (
        <Text size="md" weight="semiBold" nativeID={labelId} style={labelStyle}>
          {label}
        </Text>
      )}
      <RNTextInput
        accessibilityLabelledBy={labelId}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={
          hasError ? colors.red[400] : colors.neutral["400"]
        }
        multiline={multiline}
        textAlignVertical={multiline ? "top" : "center"}
        style={useInputStyles({ isDark, hasError, multiline })}
        {...props}
      />
    </View>
  );
}

function useInputStyles({
  isDark,
  hasError,
  multiline,
}: {
  isDark: boolean;
  hasError: boolean;
  multiline: boolean;
}) {
  const baseBackground = isDark ? styles.baseDark : styles.baseLight;

  return [
    styles.baseCore,
    baseBackground,
    multiline && styles.multiline,
    hasError && styles.baseError,
  ].filter(Boolean);
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  label: {
    color: colors.neutral[900],
  },
  labelLight: {
    color: colors.neutral[100],
  },
  labelError: {
    color: colors.red[600],
  },
  baseCore: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 16,
    fontSize: fontSizes["md"],
    fontFamily: fontFamilies.InterRegular,
    color: colors.neutral[900],
  },
  baseDark: {
    borderColor: colors.grey[100],
    backgroundColor: colors.grey[100],
  },
  baseLight: {
    borderColor: colors.neutral[0],
    backgroundColor: colors.neutral[0],
  },
  baseError: {
    borderWidth: 1,
    borderColor: colors.red[600],
    color: colors.red[600],
  },
  multiline: {
    minHeight: 100,
    paddingTop: 16,
    paddingBottom: 16,
  },
});
