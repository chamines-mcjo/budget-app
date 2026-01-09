import { useLayoutEffect, useRef } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import { Text, TextProps } from "@/components/ui/Text";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withClamp,
  withSpring,
} from "react-native-reanimated";

import { colors } from "@/theme/colors";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

export type PullTabButtonProps = Pick<TextProps, "children"> &
  Pick<PressableProps, "onPress" | "nativeID" | "testID"> & {
    style?: StyleProp<ViewStyle>;
  };

export function PullTabButton({
  children,
  style,
  ...props
}: PullTabButtonProps) {
  const pressableRef = useRef<View>(null);
  const offset = useSharedValue(0);
  const pressed = useSharedValue(false);
  const isOpen = useSharedValue(false);
  const pressableWidth = useSharedValue(0);
  const meaningfulMovement = useDerivedValue(() => pressableWidth.value / 2);

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange((event) => {
      offset.value += event.changeX;
    })
    .onFinalize((event) => {
      if (Math.abs(event.translationX) > meaningfulMovement.value) {
        isOpen.value = !isOpen.value;
      }

      if (isOpen.value) {
        offset.value = 0;
      } else {
        offset.value = pressableWidth.value + 16 * 2;
      }

      pressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    backgroundColor: pressed.value
      ? colors.neutral["500"]
      : colors.neutral["400"],
    transform: [
      {
        translateX: withClamp(
          {
            min: 0,
            max: pressableWidth.value,
          },
          withSpring(offset.value),
        ),
      },
    ],
  }));

  useLayoutEffect(() => {
    pressableRef.current?.measure((_x, _y, width) => {
      pressableWidth.value = width;
      offset.value = isOpen.value ? 0 : width;
    });
  }, [isOpen.value, offset, pressableWidth]);

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[styles.wrapper, animatedStyles, style]}>
        <View style={styles.fakeButton}>
          <Text size="md" weight="semiBold">
            {"<<"}
          </Text>
        </View>
        <Pressable ref={pressableRef} {...props} style={styles.button}>
          <Text size="md" weight="semiBold">
            {children}
          </Text>
        </Pressable>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 16,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    flexDirection: "row",
    shadowColor: colors.neutral["900"],
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  fakeButton: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
