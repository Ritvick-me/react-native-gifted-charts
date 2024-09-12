import { BarChartPropsType } from 'gifted-charts-core';
interface BarChartProps extends BarChartPropsType {
    verticalLineInterval?: number;
    topLabelComponentZIndex?: number;
    scrollViewContainerStyles?: any;
    showBackgroundRange?: boolean;
    normalRangeColor?: string;
    normalRangeColorOpacity?: number;
    normaRangeBackgroundHeight?: number;
    normaRangeBackgroundWidth?: number;
    normaRangeBottomPosition?: number;
}
export declare const BarChart: (props: BarChartProps) => import("react/jsx-runtime").JSX.Element;
export {};
