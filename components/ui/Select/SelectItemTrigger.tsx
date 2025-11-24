import { Pressable } from "react-native";

import type { PressableProps } from "react-native";

export type SelectItemTriggerProps = Pick<
  PressableProps,
  "onPress" | "children" | "testID" | "nativeID" | "style"
>;

export function SelectItemTrigger({
  onPress,
  children,
  ...props
}: SelectItemTriggerProps) {
  return (
    <Pressable onPress={onPress} {...props}>
      {typeof children === "function" ? (state) => children(state) : children}
    </Pressable>
  );
}
