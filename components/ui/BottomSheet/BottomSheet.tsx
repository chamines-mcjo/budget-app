import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { BottomSheetModal } from "@/components/ui/BottomSheet/BottomSheetModal";
import { BottomSheetBackdrop } from "@/components/ui/BottomSheet/BottomSheetBackdrop";
import { BottomSheetHeader } from "@/components/ui/BottomSheet/BottomSheetHeader";
import { BottomSheetFooter } from "@/components/ui/BottomSheet/BottomSheetFooter";
import { BottomSheetContent } from "@/components/ui/BottomSheet/BottomSheetContent";

export type {
  BottomSheetModalRef,
  BottomSheetModalProps,
} from "@/components/ui/BottomSheet/BottomSheetModal";
export type { BottomSheetBackdropProps } from "@/components/ui/BottomSheet/BottomSheetBackdrop";
export type { BottomSheetHeaderProps } from "@/components/ui/BottomSheet/BottomSheetHeader";
export type { BottomSheetFooterProps } from "@/components/ui/BottomSheet/BottomSheetFooter";
export type { BottomSheetContentProps } from "@/components/ui/BottomSheet/BottomSheetContent";

export const BottomSheet = {
  Modal: BottomSheetModal,
  Backdrop: BottomSheetBackdrop,
  Header: BottomSheetHeader,
  Footer: BottomSheetFooter,
  Content: BottomSheetContent,
  ModalProvider: BottomSheetModalProvider,
};
