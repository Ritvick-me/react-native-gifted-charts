import React from 'react';
import {Text, View} from 'react-native';
import Rule from '../lineSvg';
import {styles} from '../../LineChart/styles';
import {
  getHorizSectionVals,
  yAxisSides,
  HorizSectionsType,
  horizSectionPropTypes,
  chartTypes,
} from 'gifted-charts-core';

interface horizSectionPropInterface extends horizSectionPropTypes {
  showBackgroundRange?: boolean;
  normalRangeColor?: string;
  normalRangeColorOpacity?: number;
  normaRangeBackgroundHeight?: number;
  normaRangeBackgroundWidth?: number;
  normaRangeBottomPosition?: number;
}

export const renderHorizSections = (props: horizSectionPropInterface) => {
  const {
    chartType,
    width,
    noOfSectionsBelowXAxis,
    totalWidth,
    endSpacing,
    yAxisSide,
    horizontalRulesStyle,
    noOfSections,
    sectionColors,
    stepHeight,
    negativeStepHeight,
    yAxisLabelWidth,
    yAxisLabelContainerStyle,
    yAxisThickness,
    yAxisColor,
    xAxisThickness,
    xAxisColor,
    xAxisLength,
    xAxisType,
    dashWidth,
    dashGap,
    backgroundColor,
    hideRules,
    rulesLength,
    rulesType,
    rulesThickness,
    rulesColor,
    rulesConfigArray,
    spacing,
    showYAxisIndices,
    yAxisIndicesHeight,
    yAxisIndicesWidth,
    yAxisIndicesColor,

    hideOrigin,
    hideYAxisText,
    yAxisTextNumberOfLines,
    yAxisTextStyle,
    rotateYAxisTexts,
    rtl,

    containerHeight,
    maxValue,
    yAxisOffset,

    horizontal,
    yAxisAtTop,
    secondaryYAxis,
    onlyReferenceLines,
    renderReferenceLines,
    secondaryXAxis,
  } = props;

  const {
    secondaryYAxisConfig,
    horizSections,
    yAxisExtraHeightAtTop,
    secondaryHorizSections,
    showReferenceLine1,
    referenceLine1Config,
    referenceLine1Position,
    showReferenceLine2,
    referenceLine2Config,
    referenceLine2Position,
    showReferenceLine3,
    referenceLine3Config,
    referenceLine3Position,
    horizSectionsBelow,
    secondaryHorizSectionsBelow,
    getLabelTexts,
    getLabelTextsForSecondaryYAxis,
  } = getHorizSectionVals(props);

  const secondaryYAxisExtraHeightAtBottom = 10;

  const renderAxesAndRules = (index: number) => {
    const invertedIndex = horizSections.length - index - 1;
    return (
      <View
        style={[
          index === noOfSections
            ? styles.lastLeftPart
            : !index
            ? {justifyContent: 'flex-start'}
            : styles.leftPart,
          {
            borderColor: yAxisColor,
            backgroundColor: sectionColors?.[invertedIndex] ?? backgroundColor,
            width: (props.width || totalWidth - spacing) + endSpacing,
          },
          !index ? {height: stepHeight / 2, marginTop: stepHeight / 2} : null,
          yAxisSide === yAxisSides.RIGHT
            ? {borderRightWidth: yAxisThickness}
            : {borderLeftWidth: yAxisThickness},
        ]}>
        {index === noOfSections ? (
          <Rule
            config={{
              thickness: xAxisThickness,
              color: xAxisColor,
              width:
                xAxisLength ||
                (props.width || totalWidth - spacing) + endSpacing,
              dashWidth: dashWidth,
              dashGap: dashGap,
              type: xAxisType,
            }}
          />
        ) : hideRules ? null : (
          <Rule
            config={{
              thickness:
                rulesConfigArray[invertedIndex]?.rulesThickness ??
                rulesThickness,
              color: rulesConfigArray[invertedIndex]?.rulesColor ?? rulesColor,
              width:
                rulesConfigArray[invertedIndex]?.rulesLength ??
                rulesLength ??
                (props.width || totalWidth - spacing) + endSpacing,
              dashWidth:
                rulesConfigArray[invertedIndex]?.dashWidth ?? dashWidth,
              dashGap: rulesConfigArray[invertedIndex]?.dashGap ?? dashGap,
              type: rulesConfigArray[invertedIndex]?.rulesType ?? rulesType,
            }}
          />
        )}
        {/* Normal Range Background */}
        {props.showBackgroundRange && index === noOfSections && (
          <View
            style={{
              backgroundColor: props.normalRangeColor,
              opacity: props.normalRangeColorOpacity,

              height: props.normaRangeBackgroundHeight,
              width: props.normaRangeBackgroundWidth,
              position: 'absolute',
              bottom: props.normaRangeBottomPosition,
            }}
          />
        )}
        {showYAxisIndices && index !== noOfSections ? (
          <View
            style={{
              position: 'absolute',
              height: yAxisIndicesHeight,
              width: yAxisIndicesWidth,
              left:
                yAxisIndicesWidth / -2 +
                (yAxisSide === yAxisSides.RIGHT
                  ? (width ?? totalWidth) +
                    yAxisLabelWidth / 2 +
                    yAxisIndicesWidth / 4
                  : 0),
              backgroundColor: yAxisIndicesColor,
            }}
          />
        ) : null}
      </View>
    );
  };

  const renderExtraHeightOfYAxisAtTop = () => (
    <View
      style={[
        styles.horizBar,
        {
          width: (width ?? totalWidth) + endSpacing,
          top: stepHeight / 2,
        },
        horizontal &&
          !yAxisAtTop && {
            transform: [{rotateY: '180deg'}],
          },
        horizontalRulesStyle,
      ]}>
      <View
        style={[
          styles.leftLabel,
          {
            height: yAxisExtraHeightAtTop,
            width: yAxisSide === yAxisSides.RIGHT ? 0 : yAxisLabelWidth,
          },
          yAxisLabelContainerStyle,
        ]}
      />
      <View
        style={[
          styles.leftPart,
          {
            borderLeftColor: yAxisColor,
            borderRightColor: yAxisColor,
            borderTopColor: secondaryXAxis?.color ?? xAxisColor,
            borderTopWidth: secondaryXAxis
              ? secondaryXAxis.thickness ?? xAxisThickness
              : 0,
            backgroundColor: backgroundColor,
            width: (props.width || totalWidth - spacing) + endSpacing,
          },
          yAxisSide === yAxisSides.RIGHT
            ? {borderRightWidth: yAxisThickness}
            : {borderLeftWidth: yAxisThickness},
        ]}
      />
    </View>
  );

  const renderSecondaryYaxisLabels = (
    horizSections: HorizSectionsType,
    isBelow: boolean,
  ) => {
    return horizSections.map((sectionItems, index) => {
      let label = getLabelTextsForSecondaryYAxis(sectionItems.value, index);
      if (secondaryYAxisConfig.hideOrigin && index === 0) {
        label = '';
      }
      return (
        <View
          key={index}
          style={[
            styles.horizBar,
            styles.leftLabel,
            {
              position: 'absolute',
              zIndex: 1,
              bottom:
                (index - 0.5) *
                  (isBelow
                    ? secondaryYAxisConfig.negativeStepHeight ??
                      secondaryYAxisConfig.stepHeight ??
                      0
                    : secondaryYAxisConfig.stepHeight ?? 0) +
                (isBelow ? secondaryYAxisExtraHeightAtBottom : 0),
              width: secondaryYAxisConfig.yAxisLabelWidth,
              height: isBelow
                ? secondaryYAxisConfig.negativeStepHeight ??
                  secondaryYAxisConfig.stepHeight ??
                  0
                : secondaryYAxisConfig.stepHeight ?? 0,
            },
            secondaryYAxisConfig.yAxisLabelContainerStyle ??
              yAxisLabelContainerStyle,
          ]}>
          {secondaryYAxisConfig.showYAxisIndices && (index !== 0 || isBelow) ? (
            <View
              style={{
                height: secondaryYAxisConfig.yAxisIndicesHeight,
                width: secondaryYAxisConfig.yAxisIndicesWidth,
                position: 'absolute',
                left: (secondaryYAxisConfig.yAxisIndicesWidth ?? 0) / -2,
                backgroundColor: secondaryYAxisConfig.yAxisIndicesColor,
              }}
            />
          ) : null}
          <Text
            numberOfLines={secondaryYAxisConfig.yAxisTextNumberOfLines}
            ellipsizeMode={'clip'}
            style={[
              {
                textAlign: 'left',
                width:
                  secondaryYAxisConfig.yAxisLabelContainerStyle?.width ??
                  secondaryYAxisConfig.yAxisLabelWidth,
                marginLeft: 10,
              },
              secondaryYAxisConfig.yAxisTextStyle,
            ]}>
            {label}
          </Text>
        </View>
      );
    });
  };

  const referenceLines = () => {
    return (
      <>
        {showReferenceLine1 ? (
          <View
            style={{
              position: 'absolute',
              zIndex: referenceLine1Config.zIndex,
              bottom:
                ((referenceLine1Position - (yAxisOffset ?? 0)) *
                  containerHeight) /
                maxValue,
              left:
                yAxisSide === yAxisSides.RIGHT
                  ? 0
                  : yAxisLabelWidth + yAxisThickness,
            }}>
            <Rule config={referenceLine1Config} />
            {referenceLine1Config.labelText ? (
              <Text
                style={[
                  {position: 'absolute'},
                  referenceLine1Config.labelTextStyle,
                ]}>
                {referenceLine1Config.labelText}
              </Text>
            ) : null}
          </View>
        ) : null}
        {showReferenceLine2 ? (
          <View
            style={{
              position: 'absolute',
              zIndex: referenceLine2Config.zIndex,
              bottom:
                ((referenceLine2Position - (yAxisOffset ?? 0)) *
                  containerHeight) /
                maxValue,
              left:
                yAxisSide === yAxisSides.RIGHT
                  ? 0
                  : yAxisLabelWidth + yAxisThickness,
            }}>
            <Rule config={referenceLine2Config} />
            {referenceLine2Config.labelText ? (
              <Text
                style={[
                  {position: 'absolute'},
                  referenceLine2Config.labelTextStyle,
                ]}>
                {referenceLine2Config.labelText}
              </Text>
            ) : null}
          </View>
        ) : null}
        {showReferenceLine3 ? (
          <View
            style={{
              position: 'absolute',
              zIndex: referenceLine3Config.zIndex,
              bottom:
                ((referenceLine3Position - (yAxisOffset ?? 0)) *
                  containerHeight) /
                maxValue,
              left:
                yAxisSide === yAxisSides.RIGHT
                  ? 0
                  : yAxisLabelWidth + yAxisThickness,
            }}>
            <Rule config={referenceLine3Config} />
            {referenceLine3Config.labelText ? (
              <Text
                style={[
                  {position: 'absolute'},
                  referenceLine3Config.labelTextStyle,
                ]}>
                {referenceLine3Config.labelText}
              </Text>
            ) : null}
          </View>
        ) : null}
      </>
    );
  };

  const leftShiftForRIghtYaxis =
    (width ? width + 20 : totalWidth) +
    yAxisLabelWidth / 2 +
    endSpacing -
    (chartType === chartTypes.BAR ? 40 : 60);

  return (
    <>
      {onlyReferenceLines ? (
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'green',
          }}>
          <View style={{width: (width ?? totalWidth) + endSpacing}}>
            {referenceLines()}
          </View>
        </View>
      ) : (
        <View
          pointerEvents="none"
          style={{
            flexDirection: 'row',
            marginTop: stepHeight / -2,
          }}>
          <View style={{width: (width ?? totalWidth) + endSpacing}}>
            {yAxisExtraHeightAtTop ? renderExtraHeightOfYAxisAtTop() : null}
            {horizSections.map((sectionItems, index) => {
              return (
                <View
                  key={index}
                  style={[
                    styles.horizBar,
                    {
                      width: (width ?? totalWidth) + endSpacing,
                    },
                    horizontal &&
                      !yAxisAtTop && {
                        transform: [{rotateY: '180deg'}],
                      },
                    horizontalRulesStyle,
                  ]}>
                  <View
                    style={[
                      styles.leftLabel,
                      {
                        height:
                          index === noOfSections ? stepHeight / 2 : stepHeight,
                        width:
                          yAxisSide === yAxisSides.RIGHT ? 0 : yAxisLabelWidth,
                      },
                      yAxisLabelContainerStyle,
                    ]}
                  />
                  {renderAxesAndRules(index)}
                </View>
              );
            })}

            {
              /***********************************************************************************************/
              /**************************      Render the y axis labels separately      **********************/
              /***********************************************************************************************/

              !hideYAxisText &&
                horizSections.map((sectionItems, index) => {
                  let label = getLabelTexts(sectionItems.value, index);
                  if (hideOrigin && index === horizSections.length - 1) {
                    label = '';
                  }
                  return (
                    <View
                      key={index}
                      style={[
                        styles.horizBar,
                        styles.leftLabel,
                        {
                          position: 'absolute',
                          zIndex: 1,
                          top: stepHeight * index + yAxisExtraHeightAtTop,
                          width: yAxisLabelWidth,
                          height:
                            index === noOfSections
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
                                translateX:
                                  (width ?? totalWidth) - 30 + endSpacing,
                              },
                            ],
                          },
                        yAxisLabelContainerStyle,
                      ]}>
                      <Text
                        numberOfLines={yAxisTextNumberOfLines}
                        ellipsizeMode={'clip'}
                        style={[
                          yAxisTextStyle,
                          horizontal && {
                            transform: [
                              {
                                rotate: `${
                                  rotateYAxisTexts ?? (rtl ? 90 : -90)
                                }deg`,
                              },
                            ],
                          },
                          index === noOfSections && {
                            marginBottom: stepHeight / -2,
                          },
                        ]}>
                        {label}
                      </Text>
                    </View>
                  );
                })
              /***********************************************************************************************/
              /***********************************************************************************************/
            }

            {horizSectionsBelow.map((sectionItems, index) => {
              return (
                <View
                  key={index}
                  style={[
                    styles.horizBar,
                    {
                      width: (width ?? totalWidth) + 15,
                    },
                    index === 0 && {marginTop: negativeStepHeight / 2},
                  ]}>
                  <View
                    style={[
                      styles.leftLabel,
                      {
                        borderRightWidth: yAxisThickness,
                        borderColor: yAxisColor,
                        marginLeft: yAxisThickness,
                      },
                      {
                        height:
                          index === 0
                            ? negativeStepHeight * 1.5
                            : negativeStepHeight,
                        width:
                          yAxisSide === yAxisSides.RIGHT ? 0 : yAxisLabelWidth,
                      },
                      index === 0 && {marginTop: -negativeStepHeight / 2},
                    ]}
                  />
                  <View
                    style={[
                      styles.leftPart,
                      {backgroundColor: backgroundColor},
                    ]}>
                    {hideRules ? null : (
                      <Rule
                        config={{
                          thickness: rulesThickness,
                          color: rulesColor,
                          width:
                            rulesLength ||
                            (props.width || totalWidth - spacing) + endSpacing,
                          dashWidth: dashWidth,
                          dashGap: dashGap,
                          type: rulesType,
                        }}
                      />
                    )}
                  </View>
                </View>
              );
            })}

            {
              /***********************************************************************************************/
              /*************************      Render the y axis labels below origin      *********************/
              /***********************************************************************************************/

              !hideYAxisText &&
                horizSectionsBelow.map((sectionItems, index) => {
                  let label = getLabelTexts(
                    horizSectionsBelow[horizSectionsBelow.length - 1 - index]
                      .value,
                    index,
                  );
                  return (
                    <View
                      key={index}
                      style={[
                        styles.horizBar,
                        styles.leftLabel,
                        {
                          position: 'absolute',
                          zIndex: 1,
                          bottom: negativeStepHeight * index,
                          width: yAxisLabelWidth,
                          height:
                            index === noOfSectionsBelowXAxis
                              ? negativeStepHeight / 2
                              : negativeStepHeight,
                        },
                        yAxisSide === yAxisSides.RIGHT && {
                          left: (width ?? totalWidth) + yAxisLabelWidth,
                        },
                        yAxisLabelContainerStyle,
                      ]}>
                      <Text
                        numberOfLines={yAxisTextNumberOfLines}
                        ellipsizeMode={'clip'}
                        style={[
                          yAxisTextStyle,
                          index === noOfSectionsBelowXAxis && {
                            marginBottom: negativeStepHeight / -2,
                          },
                        ]}>
                        {label}
                      </Text>
                    </View>
                  );
                })
              /***********************************************************************************************/
              /***********************************************************************************************/
            }

            {/***********************************************************************************************/
            /*************************      Render the reference lines separately      *********************/
            /***********************************************************************************************/}

            {renderReferenceLines ? referenceLines() : null}
          </View>
          {
            /***********************************************************************************************/
            /*************************      Render the secondary Y Axis                *********************/
            /***********************************************************************************************/
            secondaryYAxis ? (
              <View
                style={{
                  width: secondaryYAxisConfig.yAxisLabelWidth,
                  left: width ? yAxisLabelWidth : yAxisLabelWidth - spacing,
                  borderColor: secondaryYAxisConfig.yAxisColor,
                  borderLeftWidth: secondaryYAxisConfig.yAxisThickness,
                  height: containerHeight + yAxisExtraHeightAtTop,
                  bottom: stepHeight / -2,
                }}>
                {!secondaryYAxisConfig.hideYAxisText
                  ? renderSecondaryYaxisLabels(secondaryHorizSections, false)
                  : null}
              </View>
            ) : null
          }

          {
            /***********************************************************************************************/
            /*************************      Render the secondary Y Axis below origin   *********************/
            /***********************************************************************************************/

            secondaryYAxisConfig.noOfSectionsBelowXAxis ? (
              <View
                style={{
                  width:
                    secondaryYAxisConfig.yAxisLabelWidth ?? yAxisLabelWidth,
                  left:
                    (width ? yAxisLabelWidth : yAxisLabelWidth - spacing) -
                    (secondaryYAxisConfig.yAxisLabelWidth ?? yAxisLabelWidth),
                  borderColor: secondaryYAxisConfig.yAxisColor,
                  borderLeftWidth: secondaryYAxisConfig.yAxisThickness,
                  height:
                    (secondaryYAxisConfig.negativeStepHeight ??
                      secondaryYAxisConfig.stepHeight ??
                      stepHeight) *
                      secondaryHorizSectionsBelow.length +
                    secondaryYAxisExtraHeightAtBottom,
                  bottom:
                    -containerHeight - stepHeight / 2 - yAxisExtraHeightAtTop,
                }}>
                {!secondaryYAxisConfig.hideYAxisText
                  ? renderSecondaryYaxisLabels(
                      secondaryHorizSectionsBelow,
                      true,
                    )
                  : null}
              </View>
            ) : null
          }
        </View>
      )}
    </>
  );
};
