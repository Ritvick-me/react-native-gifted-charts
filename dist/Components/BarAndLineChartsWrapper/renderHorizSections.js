import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Text, View } from 'react-native';
import Rule from '../lineSvg';
import { styles } from '../../LineChart/styles';
import { getHorizSectionVals, yAxisSides, chartTypes, } from 'gifted-charts-core';
export var renderHorizSections = function (props) {
    var _a, _b, _c, _d;
    var chartType = props.chartType, width = props.width, noOfSectionsBelowXAxis = props.noOfSectionsBelowXAxis, totalWidth = props.totalWidth, endSpacing = props.endSpacing, yAxisSide = props.yAxisSide, horizontalRulesStyle = props.horizontalRulesStyle, noOfSections = props.noOfSections, sectionColors = props.sectionColors, stepHeight = props.stepHeight, negativeStepHeight = props.negativeStepHeight, yAxisLabelWidth = props.yAxisLabelWidth, yAxisLabelContainerStyle = props.yAxisLabelContainerStyle, yAxisThickness = props.yAxisThickness, yAxisColor = props.yAxisColor, xAxisThickness = props.xAxisThickness, xAxisColor = props.xAxisColor, xAxisLength = props.xAxisLength, xAxisType = props.xAxisType, dashWidth = props.dashWidth, dashGap = props.dashGap, backgroundColor = props.backgroundColor, hideRules = props.hideRules, rulesLength = props.rulesLength, rulesType = props.rulesType, rulesThickness = props.rulesThickness, rulesColor = props.rulesColor, rulesConfigArray = props.rulesConfigArray, spacing = props.spacing, showYAxisIndices = props.showYAxisIndices, yAxisIndicesHeight = props.yAxisIndicesHeight, yAxisIndicesWidth = props.yAxisIndicesWidth, yAxisIndicesColor = props.yAxisIndicesColor, hideOrigin = props.hideOrigin, hideYAxisText = props.hideYAxisText, yAxisTextNumberOfLines = props.yAxisTextNumberOfLines, yAxisTextStyle = props.yAxisTextStyle, rotateYAxisTexts = props.rotateYAxisTexts, rtl = props.rtl, containerHeight = props.containerHeight, maxValue = props.maxValue, yAxisOffset = props.yAxisOffset, horizontal = props.horizontal, yAxisAtTop = props.yAxisAtTop, secondaryYAxis = props.secondaryYAxis, onlyReferenceLines = props.onlyReferenceLines, renderReferenceLines = props.renderReferenceLines, secondaryXAxis = props.secondaryXAxis;
    var _e = getHorizSectionVals(props), secondaryYAxisConfig = _e.secondaryYAxisConfig, horizSections = _e.horizSections, yAxisExtraHeightAtTop = _e.yAxisExtraHeightAtTop, secondaryHorizSections = _e.secondaryHorizSections, showReferenceLine1 = _e.showReferenceLine1, referenceLine1Config = _e.referenceLine1Config, referenceLine1Position = _e.referenceLine1Position, showReferenceLine2 = _e.showReferenceLine2, referenceLine2Config = _e.referenceLine2Config, referenceLine2Position = _e.referenceLine2Position, showReferenceLine3 = _e.showReferenceLine3, referenceLine3Config = _e.referenceLine3Config, referenceLine3Position = _e.referenceLine3Position, horizSectionsBelow = _e.horizSectionsBelow, secondaryHorizSectionsBelow = _e.secondaryHorizSectionsBelow, getLabelTexts = _e.getLabelTexts, getLabelTextsForSecondaryYAxis = _e.getLabelTextsForSecondaryYAxis;
    var secondaryYAxisExtraHeightAtBottom = 10;
    var renderAxesAndRules = function (index) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var invertedIndex = horizSections.length - index - 1;
        return (_jsxs(View, { style: [
                index === noOfSections
                    ? styles.lastLeftPart
                    : !index
                        ? { justifyContent: 'flex-start' }
                        : styles.leftPart,
                {
                    borderColor: yAxisColor,
                    backgroundColor: (_a = sectionColors === null || sectionColors === void 0 ? void 0 : sectionColors[invertedIndex]) !== null && _a !== void 0 ? _a : backgroundColor,
                    width: (props.width || totalWidth - spacing) + endSpacing,
                },
                !index ? { height: stepHeight / 2, marginTop: stepHeight / 2 } : null,
                yAxisSide === yAxisSides.RIGHT
                    ? { borderRightWidth: yAxisThickness }
                    : { borderLeftWidth: yAxisThickness },
            ], children: [index === noOfSections ? (_jsx(Rule, { config: {
                        thickness: xAxisThickness,
                        color: xAxisColor,
                        width: xAxisLength ||
                            (props.width || totalWidth - spacing) + endSpacing,
                        dashWidth: dashWidth,
                        dashGap: dashGap,
                        type: xAxisType,
                    } })) : hideRules ? null : (_jsx(Rule, { config: {
                        thickness: (_c = (_b = rulesConfigArray[invertedIndex]) === null || _b === void 0 ? void 0 : _b.rulesThickness) !== null && _c !== void 0 ? _c : rulesThickness,
                        color: (_e = (_d = rulesConfigArray[invertedIndex]) === null || _d === void 0 ? void 0 : _d.rulesColor) !== null && _e !== void 0 ? _e : rulesColor,
                        width: (_h = (_g = (_f = rulesConfigArray[invertedIndex]) === null || _f === void 0 ? void 0 : _f.rulesLength) !== null && _g !== void 0 ? _g : rulesLength) !== null && _h !== void 0 ? _h : (props.width || totalWidth - spacing) + endSpacing,
                        dashWidth: (_k = (_j = rulesConfigArray[invertedIndex]) === null || _j === void 0 ? void 0 : _j.dashWidth) !== null && _k !== void 0 ? _k : dashWidth,
                        dashGap: (_m = (_l = rulesConfigArray[invertedIndex]) === null || _l === void 0 ? void 0 : _l.dashGap) !== null && _m !== void 0 ? _m : dashGap,
                        type: (_p = (_o = rulesConfigArray[invertedIndex]) === null || _o === void 0 ? void 0 : _o.rulesType) !== null && _p !== void 0 ? _p : rulesType,
                    } })), props.showBackgroundRange && index === noOfSections && (_jsx(View, { style: {
                        backgroundColor: props.normalRangeColor,
                        opacity: props.normalRangeColorOpacity,
                        height: props.normaRangeBackgroundHeight,
                        width: props.normaRangeBackgroundWidth,
                        position: 'absolute',
                        bottom: props.normaRangeBottomPosition,
                    } })), showYAxisIndices && index !== noOfSections ? (_jsx(View, { style: {
                        position: 'absolute',
                        height: yAxisIndicesHeight,
                        width: yAxisIndicesWidth,
                        left: yAxisIndicesWidth / -2 +
                            (yAxisSide === yAxisSides.RIGHT
                                ? (width !== null && width !== void 0 ? width : totalWidth) +
                                    yAxisLabelWidth / 2 +
                                    yAxisIndicesWidth / 4
                                : 0),
                        backgroundColor: yAxisIndicesColor,
                    } })) : null] }));
    };
    var renderExtraHeightOfYAxisAtTop = function () {
        var _a, _b;
        return (_jsxs(View, { style: [
                styles.horizBar,
                {
                    width: (width !== null && width !== void 0 ? width : totalWidth) + endSpacing,
                    top: stepHeight / 2,
                },
                horizontal &&
                    !yAxisAtTop && {
                    transform: [{ rotateY: '180deg' }],
                },
                horizontalRulesStyle,
            ], children: [_jsx(View, { style: [
                        styles.leftLabel,
                        {
                            height: yAxisExtraHeightAtTop,
                            width: yAxisSide === yAxisSides.RIGHT ? 0 : yAxisLabelWidth,
                        },
                        yAxisLabelContainerStyle,
                    ] }), _jsx(View, { style: [
                        styles.leftPart,
                        {
                            borderLeftColor: yAxisColor,
                            borderRightColor: yAxisColor,
                            borderTopColor: (_a = secondaryXAxis === null || secondaryXAxis === void 0 ? void 0 : secondaryXAxis.color) !== null && _a !== void 0 ? _a : xAxisColor,
                            borderTopWidth: secondaryXAxis
                                ? (_b = secondaryXAxis.thickness) !== null && _b !== void 0 ? _b : xAxisThickness
                                : 0,
                            backgroundColor: backgroundColor,
                            width: (props.width || totalWidth - spacing) + endSpacing,
                        },
                        yAxisSide === yAxisSides.RIGHT
                            ? { borderRightWidth: yAxisThickness }
                            : { borderLeftWidth: yAxisThickness },
                    ] })] }));
    };
    var renderSecondaryYaxisLabels = function (horizSections, isBelow) {
        return horizSections.map(function (sectionItems, index) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            var label = getLabelTextsForSecondaryYAxis(sectionItems.value, index);
            if (secondaryYAxisConfig.hideOrigin && index === 0) {
                label = '';
            }
            return (_jsxs(View, { style: [
                    styles.horizBar,
                    styles.leftLabel,
                    {
                        position: 'absolute',
                        zIndex: 1,
                        bottom: (index - 0.5) *
                            (isBelow
                                ? (_b = (_a = secondaryYAxisConfig.negativeStepHeight) !== null && _a !== void 0 ? _a : secondaryYAxisConfig.stepHeight) !== null && _b !== void 0 ? _b : 0
                                : (_c = secondaryYAxisConfig.stepHeight) !== null && _c !== void 0 ? _c : 0) +
                            (isBelow ? secondaryYAxisExtraHeightAtBottom : 0),
                        width: secondaryYAxisConfig.yAxisLabelWidth,
                        height: isBelow
                            ? (_e = (_d = secondaryYAxisConfig.negativeStepHeight) !== null && _d !== void 0 ? _d : secondaryYAxisConfig.stepHeight) !== null && _e !== void 0 ? _e : 0
                            : (_f = secondaryYAxisConfig.stepHeight) !== null && _f !== void 0 ? _f : 0,
                    },
                    (_g = secondaryYAxisConfig.yAxisLabelContainerStyle) !== null && _g !== void 0 ? _g : yAxisLabelContainerStyle,
                ], children: [secondaryYAxisConfig.showYAxisIndices && (index !== 0 || isBelow) ? (_jsx(View, { style: {
                            height: secondaryYAxisConfig.yAxisIndicesHeight,
                            width: secondaryYAxisConfig.yAxisIndicesWidth,
                            position: 'absolute',
                            left: ((_h = secondaryYAxisConfig.yAxisIndicesWidth) !== null && _h !== void 0 ? _h : 0) / -2,
                            backgroundColor: secondaryYAxisConfig.yAxisIndicesColor,
                        } })) : null, _jsx(Text, { numberOfLines: secondaryYAxisConfig.yAxisTextNumberOfLines, ellipsizeMode: 'clip', style: [
                            {
                                textAlign: 'left',
                                width: (_k = (_j = secondaryYAxisConfig.yAxisLabelContainerStyle) === null || _j === void 0 ? void 0 : _j.width) !== null && _k !== void 0 ? _k : secondaryYAxisConfig.yAxisLabelWidth,
                                marginLeft: 10,
                            },
                            secondaryYAxisConfig.yAxisTextStyle,
                        ], children: label })] }, index));
        });
    };
    var referenceLines = function () {
        return (_jsxs(_Fragment, { children: [showReferenceLine1 ? (_jsxs(View, { style: {
                        position: 'absolute',
                        zIndex: referenceLine1Config.zIndex,
                        bottom: ((referenceLine1Position - (yAxisOffset !== null && yAxisOffset !== void 0 ? yAxisOffset : 0)) *
                            containerHeight) /
                            maxValue,
                        left: yAxisSide === yAxisSides.RIGHT
                            ? 0
                            : yAxisLabelWidth + yAxisThickness,
                    }, children: [_jsx(Rule, { config: referenceLine1Config }), referenceLine1Config.labelText ? (_jsx(Text, { style: [
                                { position: 'absolute' },
                                referenceLine1Config.labelTextStyle,
                            ], children: referenceLine1Config.labelText })) : null] })) : null, showReferenceLine2 ? (_jsxs(View, { style: {
                        position: 'absolute',
                        zIndex: referenceLine2Config.zIndex,
                        bottom: ((referenceLine2Position - (yAxisOffset !== null && yAxisOffset !== void 0 ? yAxisOffset : 0)) *
                            containerHeight) /
                            maxValue,
                        left: yAxisSide === yAxisSides.RIGHT
                            ? 0
                            : yAxisLabelWidth + yAxisThickness,
                    }, children: [_jsx(Rule, { config: referenceLine2Config }), referenceLine2Config.labelText ? (_jsx(Text, { style: [
                                { position: 'absolute' },
                                referenceLine2Config.labelTextStyle,
                            ], children: referenceLine2Config.labelText })) : null] })) : null, showReferenceLine3 ? (_jsxs(View, { style: {
                        position: 'absolute',
                        zIndex: referenceLine3Config.zIndex,
                        bottom: ((referenceLine3Position - (yAxisOffset !== null && yAxisOffset !== void 0 ? yAxisOffset : 0)) *
                            containerHeight) /
                            maxValue,
                        left: yAxisSide === yAxisSides.RIGHT
                            ? 0
                            : yAxisLabelWidth + yAxisThickness,
                    }, children: [_jsx(Rule, { config: referenceLine3Config }), referenceLine3Config.labelText ? (_jsx(Text, { style: [
                                { position: 'absolute' },
                                referenceLine3Config.labelTextStyle,
                            ], children: referenceLine3Config.labelText })) : null] })) : null] }));
    };
    var leftShiftForRIghtYaxis = (width ? width + 20 : totalWidth) +
        yAxisLabelWidth / 2 +
        endSpacing -
        (chartType === chartTypes.BAR ? 40 : 60);
    return (_jsx(_Fragment, { children: onlyReferenceLines ? (_jsx(View, { style: {
                flexDirection: 'row',
                backgroundColor: 'green',
            }, children: _jsx(View, { style: { width: (width !== null && width !== void 0 ? width : totalWidth) + endSpacing }, children: referenceLines() }) })) : (_jsxs(View, { pointerEvents: "none", style: {
                flexDirection: 'row',
                marginTop: stepHeight / -2,
            }, children: [_jsxs(View, { style: { width: (width !== null && width !== void 0 ? width : totalWidth) + endSpacing }, children: [yAxisExtraHeightAtTop ? renderExtraHeightOfYAxisAtTop() : null, horizSections.map(function (sectionItems, index) {
                            return (_jsxs(View, { style: [
                                    styles.horizBar,
                                    {
                                        width: (width !== null && width !== void 0 ? width : totalWidth) + endSpacing,
                                    },
                                    horizontal &&
                                        !yAxisAtTop && {
                                        transform: [{ rotateY: '180deg' }],
                                    },
                                    horizontalRulesStyle,
                                ], children: [_jsx(View, { style: [
                                            styles.leftLabel,
                                            {
                                                height: index === noOfSections ? stepHeight / 2 : stepHeight,
                                                width: yAxisSide === yAxisSides.RIGHT ? 0 : yAxisLabelWidth,
                                            },
                                            yAxisLabelContainerStyle,
                                        ] }), renderAxesAndRules(index)] }, index));
                        }), 
                        /***********************************************************************************************/
                        /**************************      Render the y axis labels separately      **********************/
                        /***********************************************************************************************/
                        !hideYAxisText &&
                            horizSections.map(function (sectionItems, index) {
                                var label = getLabelTexts(sectionItems.value, index);
                                if (hideOrigin && index === horizSections.length - 1) {
                                    label = '';
                                }
                                return (_jsx(View, { style: [
                                        styles.horizBar,
                                        styles.leftLabel,
                                        {
                                            position: 'absolute',
                                            zIndex: 1,
                                            top: stepHeight * index + yAxisExtraHeightAtTop,
                                            width: yAxisLabelWidth,
                                            height: index === noOfSections
                                                ? stepHeight / 2
                                                : stepHeight,
                                        },
                                        yAxisSide === yAxisSides.RIGHT && {
                                            left: leftShiftForRIghtYaxis,
                                        },
                                        horizontal &&
                                            !yAxisAtTop && {
                                            transform: [
                                                {
                                                    translateX: (width !== null && width !== void 0 ? width : totalWidth) - 30 + endSpacing,
                                                },
                                            ],
                                        },
                                        yAxisLabelContainerStyle,
                                    ], children: _jsx(Text, { numberOfLines: yAxisTextNumberOfLines, ellipsizeMode: 'clip', style: [
                                            yAxisTextStyle,
                                            horizontal && {
                                                transform: [
                                                    {
                                                        rotate: "".concat(rotateYAxisTexts !== null && rotateYAxisTexts !== void 0 ? rotateYAxisTexts : (rtl ? 90 : -90), "deg"),
                                                    },
                                                ],
                                            },
                                            index === noOfSections && {
                                                marginBottom: stepHeight / -2,
                                            },
                                        ], children: label }) }, index));
                            })
                        /***********************************************************************************************/
                        /***********************************************************************************************/
                        , horizSectionsBelow.map(function (sectionItems, index) {
                            return (_jsxs(View, { style: [
                                    styles.horizBar,
                                    {
                                        width: (width !== null && width !== void 0 ? width : totalWidth) + 15,
                                    },
                                    index === 0 && { marginTop: negativeStepHeight / 2 },
                                ], children: [_jsx(View, { style: [
                                            styles.leftLabel,
                                            {
                                                borderRightWidth: yAxisThickness,
                                                borderColor: yAxisColor,
                                                marginLeft: yAxisThickness,
                                            },
                                            {
                                                height: index === 0
                                                    ? negativeStepHeight * 1.5
                                                    : negativeStepHeight,
                                                width: yAxisSide === yAxisSides.RIGHT ? 0 : yAxisLabelWidth,
                                            },
                                            index === 0 && { marginTop: -negativeStepHeight / 2 },
                                        ] }), _jsx(View, { style: [
                                            styles.leftPart,
                                            { backgroundColor: backgroundColor },
                                        ], children: hideRules ? null : (_jsx(Rule, { config: {
                                                thickness: rulesThickness,
                                                color: rulesColor,
                                                width: rulesLength ||
                                                    (props.width || totalWidth - spacing) + endSpacing,
                                                dashWidth: dashWidth,
                                                dashGap: dashGap,
                                                type: rulesType,
                                            } })) })] }, index));
                        }), 
                        /***********************************************************************************************/
                        /*************************      Render the y axis labels below origin      *********************/
                        /***********************************************************************************************/
                        !hideYAxisText &&
                            horizSectionsBelow.map(function (sectionItems, index) {
                                var label = getLabelTexts(horizSectionsBelow[horizSectionsBelow.length - 1 - index]
                                    .value, index);
                                return (_jsx(View, { style: [
                                        styles.horizBar,
                                        styles.leftLabel,
                                        {
                                            position: 'absolute',
                                            zIndex: 1,
                                            bottom: negativeStepHeight * index,
                                            width: yAxisLabelWidth,
                                            height: index === noOfSectionsBelowXAxis
                                                ? negativeStepHeight / 2
                                                : negativeStepHeight,
                                        },
                                        yAxisSide === yAxisSides.RIGHT && {
                                            left: (width !== null && width !== void 0 ? width : totalWidth) + yAxisLabelWidth,
                                        },
                                        yAxisLabelContainerStyle,
                                    ], children: _jsx(Text, { numberOfLines: yAxisTextNumberOfLines, ellipsizeMode: 'clip', style: [
                                            yAxisTextStyle,
                                            index === noOfSectionsBelowXAxis && {
                                                marginBottom: negativeStepHeight / -2,
                                            },
                                        ], children: label }) }, index));
                            })
                        /***********************************************************************************************/
                        /***********************************************************************************************/
                        , renderReferenceLines ? referenceLines() : null] }), 
                /***********************************************************************************************/
                /*************************      Render the secondary Y Axis                *********************/
                /***********************************************************************************************/
                secondaryYAxis ? (_jsx(View, { style: {
                        width: secondaryYAxisConfig.yAxisLabelWidth,
                        left: width ? yAxisLabelWidth : yAxisLabelWidth - spacing,
                        borderColor: secondaryYAxisConfig.yAxisColor,
                        borderLeftWidth: secondaryYAxisConfig.yAxisThickness,
                        height: containerHeight + yAxisExtraHeightAtTop,
                        bottom: stepHeight / -2,
                    }, children: !secondaryYAxisConfig.hideYAxisText
                        ? renderSecondaryYaxisLabels(secondaryHorizSections, false)
                        : null })) : null, 
                /***********************************************************************************************/
                /*************************      Render the secondary Y Axis below origin   *********************/
                /***********************************************************************************************/
                secondaryYAxisConfig.noOfSectionsBelowXAxis ? (_jsx(View, { style: {
                        width: (_a = secondaryYAxisConfig.yAxisLabelWidth) !== null && _a !== void 0 ? _a : yAxisLabelWidth,
                        left: (width ? yAxisLabelWidth : yAxisLabelWidth - spacing) -
                            ((_b = secondaryYAxisConfig.yAxisLabelWidth) !== null && _b !== void 0 ? _b : yAxisLabelWidth),
                        borderColor: secondaryYAxisConfig.yAxisColor,
                        borderLeftWidth: secondaryYAxisConfig.yAxisThickness,
                        height: ((_d = (_c = secondaryYAxisConfig.negativeStepHeight) !== null && _c !== void 0 ? _c : secondaryYAxisConfig.stepHeight) !== null && _d !== void 0 ? _d : stepHeight) *
                            secondaryHorizSectionsBelow.length +
                            secondaryYAxisExtraHeightAtBottom,
                        bottom: -containerHeight - stepHeight / 2 - yAxisExtraHeightAtTop,
                    }, children: !secondaryYAxisConfig.hideYAxisText
                        ? renderSecondaryYaxisLabels(secondaryHorizSectionsBelow, true)
                        : null })) : null] })) }));
};
