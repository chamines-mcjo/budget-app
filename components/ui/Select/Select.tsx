import { SelectTrigger } from "@/components/ui/Select/SelectTrigger";
import { SelectGridList } from "@/components/ui/Select/SelectGridList";
import { SelectItemTrigger } from "@/components/ui/Select/SelectItemTrigger";
import { SelectGridItem } from "@/components/ui/Select/SelectGridItem";
import { SelectGridPicker } from "@/components/ui/Select/SelectGridPicker";

export type {
  SelectTriggerProps,
  RenderItemOptions,
  RenderValueOptions,
  RenderChildrenProps,
} from "@/components/ui/Select/SelectTrigger";
export type { SelectGridListProps } from "@/components/ui/Select/SelectGridList";
export type { SelectGridItemProps } from "@/components/ui/Select/SelectGridItem";
export type { SelectItemTriggerProps } from "@/components/ui/Select/SelectItemTrigger";
export type { SelectGridPickerProps } from "@/components/ui/Select/SelectGridPicker";

export const Select = {
  Trigger: SelectTrigger,
  GridList: SelectGridList,
  GridItemItem: SelectGridItem,
  ItemTrigger: SelectItemTrigger,
  GridPicker: SelectGridPicker,
};
