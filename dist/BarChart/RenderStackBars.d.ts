import { StackedBarChartPropsType } from 'gifted-charts-core';
interface StackedBarChartProps extends StackedBarChartPropsType {
    topLabelComponentZIndex?: number;
}
declare const RenderStackBars: (props: StackedBarChartProps) => import("react/jsx-runtime").JSX.Element;
export default RenderStackBars;
