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
   * Whether the input should be multiline
   */
  multiline?: boolean;
  /**
   * Determine if input value is in error state or not
   */
  hasError?: boolean;
  /**
   * Style for the container View
   */
  containerStyle?: ViewStyle;
} & Pick<
  RNTextInputProps,
  | "value"
  | "onChangeText"
  | "placeholder"
  | "testID"
  | "nativeID"
  | "style"
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
  containerStyle,
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
    hasError && (isDark ? styles.labelError : styles.labelErrorLight),
  ];
  return (
    <View style={[styles.container, containerStyle]}>
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
        placeholderTextColor={colors.neutral["400"]}
        multiline={multiline}
        textAlignVertical={multiline ? "top" : "center"}
        style={useInputStyles({ isDark, hasError, multiline, style })}
        {...props}
      />
    </View>
  );
}

function useInputStyles({
  isDark,
  hasError,
  multiline,
  style,
}: {
  isDark: boolean;
  hasError: boolean;
  multiline: boolean;
  style?: any;
}) {
  const baseBackground = isDark ? styles.baseDark : styles.baseLight;

  let baseBorder = {};
  if (hasError) {
    baseBorder = isDark ? styles.baseError : styles.baseErrorLight;
  }

  return [
    styles.baseCore,
    baseBackground,
    baseBorder,
    multiline && styles.multiline,
    style,
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
  labelErrorLight: {
    color: colors.red[900],
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
  },
  baseErrorLight: {
    borderWidth: 1,
    borderColor: colors.red[900],
  },
  multiline: {
    minHeight: 100,
    paddingTop: 16,
    paddingBottom: 16,
  },
});
