import { DateRangeField as DateRangeFieldPrimitive } from "bits-ui";
import Root from "./date-range-field.svelte";

const Input = DateRangeFieldPrimitive.Input;
const Label = DateRangeFieldPrimitive.Label;
const Segment = DateRangeFieldPrimitive.Segment;

export {
	Root,
	Input,
	Label,
	Segment,
	//
	Root as DateRangeField,
	Input as DateRangeFieldInput,
	Label as DateRangeFieldLabel,
	Segment as DateRangeFieldSegment,
};
