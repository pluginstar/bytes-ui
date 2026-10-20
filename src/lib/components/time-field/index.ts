import { TimeField as TimeFieldPrimitive } from "bits-ui";
import Input from "./time-field-input.svelte";

const Root = TimeFieldPrimitive.Root;
const Label = TimeFieldPrimitive.Label;
const Segment = TimeFieldPrimitive.Segment;

export {
	Root,
	Input,
	Label,
	Segment,
	//
	Root as TimeField,
	Input as TimeFieldInput,
	Label as TimeFieldLabel,
	Segment as TimeFieldSegment,
};
