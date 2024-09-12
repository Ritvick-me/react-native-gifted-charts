import { horizSectionPropTypes } from 'gifted-charts-core';
interface horizSectionPropInterface extends horizSectionPropTypes {
    showBackgroundRange?: boolean;
    normalRangeColor?: string;
    normalRangeColorOpacity?: number;
    normaRangeBackgroundHeight?: number;
    normaRangeBackgroundWidth?: number;
    normaRangeBottomPosition?: number;
}
export declare const renderHorizSections: (props: horizSectionPropInterface) => import("react/jsx-runtime").JSX.Element;
export {};
