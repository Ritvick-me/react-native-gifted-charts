import { BarAndLineChartsWrapperTypes } from 'gifted-charts-core';
interface BarAndLineChartsWrapperInterface extends BarAndLineChartsWrapperTypes {
    verticalInterval?: number;
    scrollViewContainerStyles?: any;
    showBackgroundRange?: boolean;
    normalRangeColor?: string;
    normalRangeColorOpacity?: number;
    normaRangeBackgroundHeight?: number;
    normaRangeBackgroundWidth?: number;
    normaRangeBottomPosition?: number;
}
declare const BarAndLineChartsWrapper: (props: BarAndLineChartsWrapperInterface) => import("react/jsx-runtime").JSX.Element;
export default BarAndLineChartsWrapper;
