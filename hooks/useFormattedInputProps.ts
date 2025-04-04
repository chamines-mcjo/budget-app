import { useCallback, useMemo, useState } from "react";

import type { TextInputProps } from "react-native";

type UseMaskedInputOptions = {
  isFormatted?: boolean;
  formatFn: (text: string) => string;
  removeFormatFn: (text: string) => string;
  value?: string;
} & Pick<TextInputProps, "onChangeText">;

export function useFormattedInputProps({
  isFormatted = true,
  formatFn,
  removeFormatFn,
  onChangeText,
  value: externalValue,
}: UseMaskedInputOptions) {
  const [internalValue, setInternalValue] = useState("");
  const handleChangeText = useCallback(
    (text: string) => {
      setInternalValue(text);
      if (isFormatted) {
        onChangeText && onChangeText(formatFn(text));
        return;
      }
      onChangeText && onChangeText(removeFormatFn(text));
    },
    [formatFn, removeFormatFn, isFormatted, onChangeText],
  );
  const value = useMemo(() => {
    if (externalValue !== undefined) {
      return isFormatted ? formatFn(externalValue) : externalValue;
    }
    return isFormatted ? formatFn(internalValue) : internalValue;
  }, [externalValue, formatFn, internalValue, isFormatted]);

  return {
    value,
    onChangeText: handleChangeText,
  };
}
