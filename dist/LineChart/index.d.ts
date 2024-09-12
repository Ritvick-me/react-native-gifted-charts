import { LineChartPropsType } from 'gifted-charts-core';
interface LineChartProps extends LineChartPropsType {
    highlightedSection?: HighlightedSectionInterface;
    selectedStripIndex?: number;
}
export interface HighlightedSectionInterface {
    showBackgroundRange: boolean;
    backgroundColor: string;
    height: number;
    width: number;
    leftPos: number;
    bottomPos: number;
    opacity: number;
}
export declare const LineChart: (props: LineChartProps) => import("react/jsx-runtime").JSX.Element;
export {};
