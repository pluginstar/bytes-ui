import { TimeRangeField as TimeRangeFieldPrimitive } from "bits-ui";
import Root from "./time-range-field.svelte";

const Input = TimeRangeFieldPrimitive.Input;
const Label = TimeRangeFieldPrimitive.Label;
const Segment = TimeRangeFieldPrimitive.Segment;

export {
	Root,
	Input,
	Label,
	Segment,
	//
	Root as TimeRangeField,
	Input as TimeRangeFieldInput,
	Label as TimeRangeFieldLabel,
	Segment as TimeRangeFieldSegment,
};
