import { DateField as DateFieldPrimitive } from "bits-ui";
import Input from "./date-field-input.svelte";

const Root = DateFieldPrimitive.Root;
const Label = DateFieldPrimitive.Label;
const Segment = DateFieldPrimitive.Segment;

export {
	Root,
	Input,
	Label,
	Segment,
	//
	Root as DateField,
	Input as DateFieldInput,
	Label as DateFieldLabel,
	Segment as DateFieldSegment,
};
