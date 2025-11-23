import { BottomSheet } from "../BottomSheet";
import { BottomSheetModal } from "../BottomSheetModal";
import { BottomSheetBackdrop } from "../BottomSheetBackdrop";
import { BottomSheetHeader } from "../BottomSheetHeader";
import { BottomSheetFooter } from "../BottomSheetFooter";
import { BottomSheetContent } from "../BottomSheetContent";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

describe("BottomSheet", () => {
  it("exports Modal component", () => {
    expect(BottomSheet.Modal).toBe(BottomSheetModal);
  });

  it("exports Backdrop component", () => {
    expect(BottomSheet.Backdrop).toBe(BottomSheetBackdrop);
  });

  it("exports Header component", () => {
    expect(BottomSheet.Header).toBe(BottomSheetHeader);
  });

  it("exports Footer component", () => {
    expect(BottomSheet.Footer).toBe(BottomSheetFooter);
  });

  it("exports Content component", () => {
    expect(BottomSheet.Content).toBe(BottomSheetContent);
  });

  it("exports ModalProvider", () => {
    expect(BottomSheet.ModalProvider).toBe(BottomSheetModalProvider);
  });
});
