import { useState } from "react";
import { Pressable, StyleSheet, View, ViewProps } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
  interpolateColor,
} from "react-native-reanimated";

import { fontFamilies } from "@/theme/fonts";

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
   * Vertical alignment of the content
   */
  alignItems?: "top" | "center" | "bottom";
  /**
   * Function that executes when the switch is toggled.
   */
  onToggle?: (value: boolean) => void;
} & Pick<ViewProps, "style" | "testID" | "nativeID">;

const getFlexAlignItems = (
  align: "top" | "center" | "bottom",
): "flex-start" | "center" | "flex-end" => {
  switch (align) {
    case "top":
      return "flex-start";
    case "bottom":
      return "flex-end";
    default:
      return "center";
  }
};

export function Switch({
  variant = "dark",
  label = "",
  description = "",
  initialValue = true,
  onToggle,
  style,
  alignItems = "center",
  nativeID,
  ...props
}: SwitchProps) {
  const isDark = variant === "dark";

  const [isOn, setIsOn] = useState<boolean>(initialValue);
  const progress = useSharedValue(initialValue ? 1 : 0);

  const toggle = () => {
    const toValue = isOn ? 0 : 1;
    progress.value = withTiming(toValue, { duration: 300 });

    const newValue = !isOn;
    setIsOn(newValue);
    onToggle?.(newValue);
  };

  const thumbStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: progress.value * 24 + 1 }],
    };
  });

  const trackStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        isDark
          ? [colors.neutral[300], colors.green[400]]
          : [colors.neutral[700], colors.green[500]],
      ),
    };
  });

  return (
    <View
      style={[
        styles.wrapper,
        style,
        { alignItems: getFlexAlignItems(alignItems) },
      ]}
    >
      <View style={styles.textContainer}>
        {!!label && (
          <Text
            style={[styles.label, !isDark && styles.labelLight]}
            size="md"
            nativeID={nativeID ? `${nativeID}-label` : undefined}
          >
            {label}
          </Text>
        )}
        {!!description && (
          <Text
            style={[styles.description, !isDark && styles.descriptionLight]}
            size="sm"
          >
            {description}
          </Text>
        )}
      </View>
      <Pressable
        onPress={toggle}
        accessibilityLabelledBy={nativeID ? `${nativeID}-label` : undefined}
        {...props}
      >
        <Animated.View style={[styles.track, trackStyle]}>
          <Animated.View
            style={[styles.thumb, isOn && styles.thumbActive, thumbStyle]}
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
  },
  labelLight: {
    color: colors.neutral[100],
  },
  description: {
    color: colors.neutral[900],
    fontFamily: fontFamilies.InterRegular,
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
