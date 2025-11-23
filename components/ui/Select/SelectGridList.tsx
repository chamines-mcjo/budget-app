import { FlatList, StyleSheet } from "react-native";
import { SelectItemTrigger } from "@/components/ui/Select/SelectItemTrigger";

import type { SelectTriggerProps } from "@/components/ui/Select/SelectTrigger";

export type SelectGridListProps<TOption> = Pick<
  SelectTriggerProps<TOption>,
  "options" | "renderItem"
> & {
  keyExtractor?: (item: TOption, index: number) => string;
  onSelect?: (item: TOption) => void;
  value: TOption | undefined;
};

export function SelectGridList<TOption>({
  options,
  renderItem,
  value,
  keyExtractor,
  onSelect,
}: SelectGridListProps<TOption>) {
  return (
    <FlatList
      contentContainerStyle={styles.listContent}
      data={options}
      renderItem={({ item, index }) => (
        <SelectItemTrigger
          onPress={() => {
            onSelect?.(item);
          }}
        >
          {({ pressed }) =>
            renderItem({
              item,
              index,
              isPressed: pressed,
              isSelected: JSON.stringify(value) === JSON.stringify(item),
            })
          }
        </SelectItemTrigger>
      )}
      keyExtractor={keyExtractor}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    columnGap: 8,
    rowGap: 16,
  },
});
