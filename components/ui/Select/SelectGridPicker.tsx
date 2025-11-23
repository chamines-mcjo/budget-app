import { SelectTrigger } from "@/components/ui/Select/SelectTrigger";
import { SelectGridItem } from "@/components/ui/Select/SelectGridItem";
import { SelectGridList } from "@/components/ui/Select/SelectGridList";

import type { SelectTriggerProps } from "@/components/ui/Select/SelectTrigger";
import { getLabelFromOption } from "@/components/ui/Select/utils";

type BaseProps<TOption> = Omit<
  SelectTriggerProps<TOption>,
  "children" | "renderItem" | "renderValue"
>;

export interface SelectGridPickerProps<TOption> extends BaseProps<TOption> {
  extractItemLabel?: (item: TOption) => string;
}

export function SelectGridPicker<TOption>({
  extractItemLabel = getLabelFromOption,
  ...props
}: SelectGridPickerProps<TOption>) {
  return (
    <SelectTrigger
      {...props}
      renderItem={({ item, isSelected, isPressed }) => (
        <SelectGridItem
          isPressed={isPressed}
          isSelected={isSelected}
          label={extractItemLabel(item)}
        />
      )}
    >
      {({ renderItem, keyExtractor, options, value, onSelectValue }) => (
        <SelectGridList
          value={value}
          options={options}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          onSelect={onSelectValue}
        />
      )}
    </SelectTrigger>
  );
}
