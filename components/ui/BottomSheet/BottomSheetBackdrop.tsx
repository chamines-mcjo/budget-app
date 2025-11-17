import React from "react";
import { BottomSheetBackdrop as BMSBackdrop } from "@gorhom/bottom-sheet";
import type { BottomSheetBackdropProps as BMSBackdropProps } from "@gorhom/bottom-sheet";

export type BottomSheetBackdropProps = BMSBackdropProps;

export function BottomSheetBackdrop(props: BottomSheetBackdropProps) {
  return (
    <BMSBackdrop
      appearsOnIndex={1}
      opacity={0.65}
      pressBehavior="close"
      {...props}
    />
  );
}
