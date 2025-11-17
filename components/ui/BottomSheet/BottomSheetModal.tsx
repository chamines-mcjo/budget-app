import React, { useImperativeHandle, useRef } from "react";
import { StyleSheet } from "react-native";
import {
  BottomSheetModal as BSM,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { BottomSheetBackdrop } from "@/components/ui/BottomSheet/BottomSheetBackdrop";

import { type ReactNode } from "react";
import type { BottomSheetModalProps as BMSProps } from "@gorhom/bottom-sheet";

export interface BottomSheetModalProps
  extends Pick<BMSProps, "name" | "style" | "snapPoints" | "keyboardBehavior"> {
  children: ReactNode;
}

export type BottomSheetModalRef = BSM;

export const BottomSheetModal = React.forwardRef<BSM, BottomSheetModalProps>(
  function BottomSheetModalComponent(props, ref) {
    const { snapPoints = ["50%"], children, ...rest } = props;
    const bottomSheetRef = useRef<BSM>(null);

    useImperativeHandle(ref, () => bottomSheetRef.current!, []);

    return (
      <BSM
        index={1}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        backdropComponent={BottomSheetBackdrop}
        {...rest}
      >
        <BottomSheetScrollView contentContainerStyle={styles.scrollViewContent}>
          {children}
        </BottomSheetScrollView>
      </BSM>
    );
  },
);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    flexShrink: 1,
  },
});
