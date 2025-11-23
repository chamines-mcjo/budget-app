import { View, StyleSheet } from "react-native";
import { Text } from "@/components/ui/Text";

import { colors } from "@/theme/colors";

export interface SelectGridItemProps {
  isSelected?: boolean;
  isPressed?: boolean;
  label: string;
}

export function SelectGridItem({
  isSelected,
  isPressed,
  label,
}: SelectGridItemProps) {
  return (
    <View
      style={[
        styles.container,
        isSelected && styles.selected,
        isPressed && isPressed && styles.pressedSelected,
        isPressed && !isSelected && styles.pressed,
      ]}
    >
      <Text weight="semiBold" size="md">
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary["300"],
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
  },
  selected: {
    backgroundColor: colors.grey["300"],
  },
  pressed: {
    backgroundColor: colors.primary["400"],
  },
  pressedSelected: {
    backgroundColor: colors.grey["400"],
  },
});
