import React, { useRef } from "react";
import { StyleSheet, View, ViewProps, TouchableOpacity } from "react-native";

import { BottomSheet } from "@/components/ui/BottomSheet/BottomSheet";
import { Text } from "@/components/ui/Text";
import { Label } from "@/components/ui/Label/Label";

import {
  defaultRenderValue,
  defaultKeyExtractor,
} from "@/components/ui/Select/utils";
import { colors } from "@/theme/colors";

import type { ReactNode } from "react";
import type { BottomSheetModalRef } from "@/components/ui/BottomSheet/BottomSheetModal";

export type RenderItemOptions<TOption> = {
  index: number;
  item: TOption;
  isSelected?: boolean;
  isPressed?: boolean;
};

export type RenderValueOptions<TOption> = {
  value: TOption | undefined;
};

export type RenderChildrenProps<TOption> = {
  value: TOption | undefined;
  options: Array<TOption>;
  onSelectValue: (value: TOption) => void;
  keyExtractor: (item: TOption, index: number) => string;
  renderItem: (opts: RenderItemOptions<TOption>) => ReactNode;
};

export interface SelectTriggerProps<TOption>
  extends Pick<ViewProps, "style" | "testID" | "nativeID"> {
  /**
   * The label of the select input
   */
  label: string;

  /**
   * The value of the select input
   */
  value?: TOption;
  /**
   * The options list of the select input
   */
  options: Array<TOption>;
  /**
   * Determine if input value is in error state or not. Default to false.
   */
  hasError?: boolean;
  /**
   * The placeholder of the select input
   */
  placeholder?: string;
  /**
   * The render function for the select input selected value
   * @param opts - The options to render the selected value
   * @returns The selected value component
   */
  renderValue?: (opts: RenderValueOptions<TOption>) => ReactNode;
  /**
   * The render function for the select input selected value
   * @param opts - The options to render the selected value
   * @returns The selected value component
   */
  renderItem: (opts: RenderItemOptions<TOption>) => ReactNode;
  /**
   * Callback fired when an option is selected
   * @param value - The selected option
   * @returns void
   */
  onSelectValue?: (value: TOption) => void;
  /**
   * The render function for the select input children.
   * This is the content of the bottom sheet with the options.
   * @param opts
   * @returns ReactNode
   */
  children: (opts: RenderChildrenProps<TOption>) => ReactNode;
  /**
   * Callback to extract key for each item. Uses index as key if not provided.
   * @param item
   * @param index
   * @returns string
   */
  keyExtractor?: (item: TOption, index: number) => string;
}

export function SelectTrigger<TOption>({
  label,
  placeholder,
  value,
  renderValue,
  renderItem,
  options,
  hasError = false,
  onSelectValue,
  children,
  keyExtractor = defaultKeyExtractor,
  ...rest
}: SelectTriggerProps<TOption>) {
  const bottomSheetRef = useRef<BottomSheetModalRef>(null);
  const openBottomSheet = () => {
    bottomSheetRef.current?.present();
  };

  const handleValueSelected = (item: TOption) => {
    onSelectValue?.(item);
    bottomSheetRef.current?.dismiss();
  };

  const shouldShowPlaceholder = !Boolean(value) && placeholder;

  return (
    <>
      <TouchableOpacity
        style={[styles.selectContainer]}
        onPress={openBottomSheet}
        {...rest}
      >
        <View style={styles.selectContent}>
          <View style={styles.labelArea}>
            <Label>{label}</Label>
          </View>
          <View style={styles.valueArea}>
            {shouldShowPlaceholder ? (
              <Text size="md" style={styles.selectedValue}>
                {placeholder}
              </Text>
            ) : renderValue ? (
              renderValue({ value })
            ) : (
              defaultRenderValue({ value })
            )}
          </View>
        </View>
      </TouchableOpacity>
      <BottomSheet.Modal ref={bottomSheetRef}>
        <BottomSheet.Header title={label} />
        <BottomSheet.Content>
          {children({
            value,
            onSelectValue: handleValueSelected,
            renderItem,
            options,
            keyExtractor,
          })}
        </BottomSheet.Content>
      </BottomSheet.Modal>
    </>
  );
}

const styles = StyleSheet.create({
  selectContainer: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 16,
    backgroundColor: colors.grey[100],
    borderColor: colors.grey[100],
  },
  labelArea: {
    flex: 1,
  },
  valueArea: {
    flex: 1,
    alignItems: "flex-end",
  },
  selectContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedValue: {
    color: colors.neutral[600],
  },
  selectLabel: {
    color: colors.neutral[900],
  },
  contentContainer: {
    flex: 1,
    flexGrow: 1,
  },
});
