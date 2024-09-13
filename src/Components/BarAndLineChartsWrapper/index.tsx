import React, {Fragment, useEffect} from 'react';
import {View, ScrollView, StyleSheet, I18nManager} from 'react-native';
import {renderHorizSections} from './renderHorizSections';
import RenderLineInBarChart from './renderLineInBarChart';
import RenderVerticalLines from './renderVerticalLines';
import {
  chartTypes,
  yAxisSides,
  BarAndLineChartsWrapperTypes,
  useBarAndLineChartsWrapper,
} from 'gifted-charts-core';

interface BarAndLineChartsWrapperInterface
  extends BarAndLineChartsWrapperTypes {
  verticalInterval?: number;
  scrollViewContainerStyles?: any;
  showBackgroundRange?: boolean;
  normalRangeColor?: string;
  normalRangeColorOpacity?: number;
  normaRangeBackgroundHeight?: number;
  normaRangeBackgroundWidth?: number;
  normaRangeBottomPosition?: number;
  CustomScrollViewComponent?: React.FC;
  scrollViewContentStyles?: any;
}

const BarAndLineChartsWrapper = (props: BarAndLineChartsWrapperInterface) => {
  const {
    chartType,
    containerHeight,
    noOfSectionsBelowXAxis,
    stepHeight,
    labelsExtraHeight,
    yAxisLabelWidth,
    horizontal,
    scrollRef,
    initialSpacing,
    data,
    barWidth,
    xAxisThickness,
    totalWidth,
    disableScroll,
    showScrollIndicator,
    scrollToEnd,
    scrollToIndex,
    scrollAnimation,
    indicatorColor,
    spacing,
    showLine,
    points2,
    renderChartContent,
    remainingScrollViewProps,
    endSpacing,
    hideAxesAndRules,

    showXAxisIndices,
    xAxisIndicesHeight,
    xAxisIndicesWidth,
    xAxisIndicesColor,

    pointerConfig,
    getPointerProps,
    pointerIndex,
    pointerX,
    pointerY,

    onEndReached,
    onStartReached,
    onMomentumScrollEnd,
    nestedScrollEnabled,
    extraWidthDueToDataPoint = 0, // extraWidthDueToDataPoint will be receved from props onlhy in case of LineCharts, for other charts it will be undefined and will default to 0
    verticalInterval,
  } = props;

  const {
    containerHeightIncludingBelowXAxis,
    xAxisLabelsVerticalShift,
    trimYAxisAtTop,
    yAxisExtraHeight,
    overflowTop,
    xAxisLabelsHeight,
    xAxisTextNumberOfLines,
    actualContainerWidth,
    transformForHorizontal,
    horizSectionProps,
    referenceLinesOverChartContent,
    setCanMomentum,
    isCloseToStart,
    isCloseToEnd,
    canMomentum,
    yAxisAtTop,
    yAxisThickness,
    yAxisSide,
    showVerticalLines,
    verticalLinesProps,
    lineInBarChartProps,
    lineInBarChartProps2,
  } = useBarAndLineChartsWrapper({...props, isRTL: I18nManager.isRTL});

  useEffect(() => {
    if (pointerConfig && getPointerProps) {
      getPointerProps({pointerIndex, pointerX, pointerY});
    }
  }, [pointerIndex, pointerX, pointerY]);

  /*******************************************************************************************************************************************/
  /*******************************************************************************************************************************************/

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height:
        containerHeightIncludingBelowXAxis +
        labelsExtraHeight +
        xAxisLabelsVerticalShift +
        (trimYAxisAtTop ? 0 : yAxisExtraHeight) +
        50 -
        overflowTop,
      marginTop: trimYAxisAtTop ? containerHeight / 20 : 0,
      marginBottom: (xAxisLabelsHeight ?? xAxisTextNumberOfLines * 18) - 55, //This is to not let the Things that should be rendered below the chart overlap with it
    },
  });

  const ScrollViewComp = !!props.CustomScrollViewComponent
    ? props.CustomScrollViewComponent
    : ScrollView;

  return (
    <View
      style={[
        styles.container,
        horizontal && {
          width: actualContainerWidth,
          transform: transformForHorizontal,
        },
      ]}>
      {hideAxesAndRules !== true
        ? renderHorizSections({
            ...horizSectionProps,
            onlyReferenceLines: false,
            renderReferenceLines: !referenceLinesOverChartContent,
            showBackgroundRange: props.showBackgroundRange,
            normalRangeColor: props.normalRangeColor,
            normalRangeColorOpacity: props.normalRangeColorOpacity,
            normaRangeBackgroundHeight: props.normaRangeBackgroundHeight,
            normaRangeBackgroundWidth: props.normaRangeBackgroundWidth,
            normaRangeBottomPosition: props.normaRangeBottomPosition,
          })
        : null}
      <ScrollViewComp
        {...props.scrollViewContainerStyles}
        onScrollBeginDrag={() => {
          setCanMomentum(true);
        }}
        nestedScrollEnabled={nestedScrollEnabled}
        onMomentumScrollEnd={({nativeEvent}) => {
          if (onMomentumScrollEnd) {
            onMomentumScrollEnd();
          }
          if (isCloseToEnd(nativeEvent) && canMomentum) {
            onEndReached ? onEndReached() : null;
            setCanMomentum(false);
          }
          if (isCloseToStart(nativeEvent) && canMomentum) {
            onStartReached ? onStartReached() : null;
            setCanMomentum(false);
          }
        }}
        scrollEventThrottle={
          props.scrollEventThrottle ? props.scrollEventThrottle : 16
        }
        horizontal
        ref={scrollRef}
        style={[
          {
            marginLeft:
              horizontal && !yAxisAtTop
                ? -yAxisThickness -
                  (props.width ? 20 : 0) -
                  (data[data.length - 1]?.barWidth ?? barWidth ?? 0) / 2
                : yAxisSide === yAxisSides.RIGHT
                ? 0
                : yAxisLabelWidth + yAxisThickness,
            position: 'absolute',
            bottom: chartType === chartTypes.LINE_BI_COLOR ? 0 : xAxisThickness,
          },
          !!props.width && {width: props.width + extraWidthDueToDataPoint},
          horizontal && {
            width:
              (props.width ?? totalWidth) + (props.width ? endSpacing : -20),
          },
          {...props.scrollViewContentStyles},
        ]}
        contentContainerStyle={[
          {
            height:
              containerHeightIncludingBelowXAxis +
              yAxisExtraHeight +
              labelsExtraHeight +
              (50 + xAxisLabelsVerticalShift),
            width:
              Math.max(props.width ?? 0, totalWidth - spacing + endSpacing) +
              extraWidthDueToDataPoint,
            paddingLeft: initialSpacing,
            paddingBottom:
              noOfSectionsBelowXAxis * stepHeight + labelsExtraHeight,
            alignItems: 'flex-end',
          },
          !props.width && {width: totalWidth},
        ]}
        scrollEnabled={!disableScroll}
        showsHorizontalScrollIndicator={showScrollIndicator}
        indicatorStyle={indicatorColor}
        onContentSizeChange={() => {
          if (scrollRef.current && scrollToEnd) {
            scrollRef.current.scrollToEnd({animated: scrollAnimation});
          } else if (scrollRef.current && scrollToIndex) {
            scrollRef.current.scrollTo({
              x:
                initialSpacing +
                ((barWidth ?? 0) + spacing) * scrollToIndex -
                spacing,
            });
          }
        }}
        {...remainingScrollViewProps}>
        <Fragment>
          {showVerticalLines ? (
            <RenderVerticalLines
              {...verticalLinesProps}
              verticalInterval={verticalInterval}
            />
          ) : null}
          {
            // Only For Bar Charts-
            showLine ? <RenderLineInBarChart {...lineInBarChartProps} /> : null
          }
          {
            // Only For Bar Charts-
            showLine && points2?.length ? (
              <RenderLineInBarChart {...lineInBarChartProps2} />
            ) : null
          }
          {
            // Only For Line Charts-
            chartType === chartTypes.LINE &&
              data.map((item: any, index: number) => {
                return showXAxisIndices || item.showXAxisIndex ? (
                  <View
                    key={index + '' + item.value}
                    style={{
                      position: 'absolute',
                      height: xAxisIndicesHeight,
                      width: xAxisIndicesWidth,
                      backgroundColor: xAxisIndicesColor,
                      bottom: 60 - xAxisIndicesHeight / 2,
                      left:
                        index * spacing +
                        (initialSpacing - xAxisIndicesWidth / 2) -
                        3,
                    }}
                  />
                ) : null;
              })
          }
          {renderChartContent(containerHeightIncludingBelowXAxis)}
        </Fragment>
      </ScrollViewComp>
      {referenceLinesOverChartContent
        ? renderHorizSections({...horizSectionProps, onlyReferenceLines: true})
        : null}
    </View>
  );
};

export default BarAndLineChartsWrapper;
