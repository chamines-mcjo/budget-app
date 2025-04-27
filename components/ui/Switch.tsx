import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Pressable,
  StyleSheet,
  View,
  type ViewStyle,
  type TextStyle,
} from "react-native";

import { fontFamilies, fontSizes } from "@/theme/fonts";

import { Text } from "@/components/ui/Text";
import { colors } from "@/theme/colors";

export type SwitchProps = {
  /**
   * Color variant for input. Defaults to 'dark'
   */
  variant?: "dark" | "light";
  /**
   * Label for input. If provided, will be displayed on the left.
   */
  label?: string;
  /**
   * Description for input. If provided, will be displayed on the left below the label
   */
  description?: string;
  /**
   * Initial value for the switch. Defaults to true.
   */
  initialValue?: boolean;
  /**
   * External style for the wrapper
   */
  style?: ViewStyle;
  /**
   * External style for the label
   */
  labelStyle?: TextStyle;
  /**
   * External style for the description
   */
  descriptionStyle?: TextStyle;
  /**
   * Vertical alignment of the content
   */
  alignItems?: "flex-start" | "center" | "flex-end";
  /**
   * Function that executes when the switch is toggled.
   */
  onToggle?: (value: boolean) => void;
};

export function Switch({
  variant = "dark",
  label = "",
  description = "",
  initialValue = true,
  onToggle,
  style,
  labelStyle,
  descriptionStyle,
  alignItems = "center",
}: SwitchProps) {
  const isDark = variant === "dark";

  const [isOn, setIsOn] = useState<boolean>(initialValue);
  const animation = useRef(new Animated.Value(initialValue ? 1 : 0)).current;

  const toggle = () => {
    const toValue = isOn ? 0 : 1;

    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();

    const newValue = !isOn;
    setIsOn(newValue);
    onToggle?.(newValue);
  };

  useEffect(() => {
    setIsOn(initialValue);
    animation.setValue(initialValue ? 1 : 0);
  }, [initialValue, animation]);

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 25],
  });

  const backgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: getTrackColor(isDark),
  });

  function getTrackColor(isDark: boolean) {
    if (isDark) {
      return [colors.neutral[300], colors.green[400]];
    }
    return [colors.neutral[700], colors.green[500]];
  }

  return (
    <View style={[styles.wrapper, style, { alignItems }]}>
      <View style={styles.textContainer}>
        {!!label && (
          <Text
            style={[styles.label, labelStyle, !isDark && styles.labelLight]}
            size="md"
          >
            {label}
          </Text>
        )}
        {!!description && (
          <Text
            style={[
              styles.description,
              descriptionStyle,
              !isDark && styles.descriptionLight,
            ]}
            size="sm"
          >
            {description}
          </Text>
        )}
      </View>
      <Pressable onPress={toggle} testID="animated-toggle">
        <Animated.View style={[styles.track, { backgroundColor }]}>
          <Animated.View
            style={[
              styles.thumb,
              isOn && styles.thumbActive,
              { transform: [{ translateX }] },
            ]}
          />
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    gap: 32,
    padding: 16,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 2,
    flex: 1,
  },
  label: {
    color: colors.neutral[900],
    fontFamily: fontFamilies.InterSemiBold,
    fontSize: fontSizes.md,
  },
  labelLight: {
    color: colors.neutral[100],
  },
  description: {
    color: colors.neutral[900],
    fontFamily: fontFamilies.InterRegular,
    fontSize: fontSizes.sm,
  },
  descriptionLight: {
    color: colors.neutral[100],
  },
  track: {
    width: 56,
    height: 32,
    borderRadius: 16,
    padding: 2,
    justifyContent: "center",
  },
  thumb: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.neutral[100],

    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2.75,
    // Android shadow
    elevation: 5,
  },
  thumbActive: {
    shadowOpacity: 0.45,
  },
});
