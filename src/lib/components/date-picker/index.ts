import { DatePicker as DatePickerPrimitive } from "bits-ui";
import Content from "./date-picker-content.svelte";

const Root = DatePickerPrimitive.Root;
const Trigger = DatePickerPrimitive.Trigger;
const Input = DatePickerPrimitive.Input;
const Label = DatePickerPrimitive.Label;
const Segment = DatePickerPrimitive.Segment;
const Calendar = DatePickerPrimitive.Calendar;
const Header = DatePickerPrimitive.Header;
const Heading = DatePickerPrimitive.Heading;
const PrevButton = DatePickerPrimitive.PrevButton;
const NextButton = DatePickerPrimitive.NextButton;
const Grid = DatePickerPrimitive.Grid;
const GridHead = DatePickerPrimitive.GridHead;
const GridRow = DatePickerPrimitive.GridRow;
const GridBody = DatePickerPrimitive.GridBody;
const HeadCell = DatePickerPrimitive.HeadCell;
const Cell = DatePickerPrimitive.Cell;
const Day = DatePickerPrimitive.Day;
const Portal = DatePickerPrimitive.Portal;

export {
	Root,
	Trigger,
	Input,
	Label,
	Segment,
	Calendar,
	Header,
	Heading,
	PrevButton,
	NextButton,
	Grid,
	GridHead,
	GridRow,
	GridBody,
	HeadCell,
	Cell,
	Day,
	Portal,
	Content,
	//
	Root as DatePicker,
	Trigger as DatePickerTrigger,
	Input as DatePickerInput,
	Content as DatePickerContent,
};
