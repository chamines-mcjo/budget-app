import { View } from "react-native";
import { Text } from "@/components/ui/Text";

export function getLabelFromOption<TOption>(option: TOption): string {
  if (typeof option === "string") {
    return option;
  }

  if (typeof option === "object" && option !== null) {
    if ("label" in option && typeof option.label === "string") {
      return option.label;
    }

    if ("name" in option && typeof option.name === "string") {
      return option.name;
    }
  }

  return String(option);
}

interface DefaultRenderValueProps<TOption> {
  value: TOption | undefined;
}

export function defaultRenderValue<TOption>({
  value,
}: DefaultRenderValueProps<TOption>) {
  return (
    <View>
      <Text>{value ? getLabelFromOption(value) : ""}</Text>
    </View>
  );
}

export function defaultKeyExtractor<TOption>(item: TOption, index: number) {
  if (
    item &&
    typeof item === "object" &&
    "id" in item &&
    typeof item.id === "string"
  ) {
    return item.id;
  }

  if (
    item &&
    typeof item === "object" &&
    "key" in item &&
    typeof item.key === "string"
  ) {
    return item.key;
  }

  if (item && typeof item === "object" && "value" in item) {
    return String(item.value);
  }

  return String(index);
}
