import React from 'react';
import {View as NativeView} from 'react-native';

const getStyleView = (
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginY,
  marginX,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingY,
  paddingX,
  color,
  height,
  width,
  borderRadius,
) => {
  let style = {};
  if (color) {
    style = {
      ...style,
      ...{
        backgroundColor: color,
      },
    };
  }

  if (margin) {
    style = {
      ...style,
      ...{
        margin,
      },
    };
  }

  if (marginTop) {
    style = {
      ...style,
      ...{
        marginTop,
      },
    };
  }

  if (marginBottom) {
    style = {
      ...style,
      ...{
        marginBottom,
      },
    };
  }

  if (marginLeft) {
    style = {
      ...style,
      ...{
        marginLeft,
      },
    };
  }

  if (marginRight) {
    style = {
      ...style,
      ...{
        marginRight,
      },
    };
  }

  if (marginY) {
    style = {
      ...style,
      ...{
        marginVertical: marginY,
      },
    };
  }

  if (marginX) {
    style = {
      ...style,
      ...{
        marginHorizontal: marginX,
      },
    };
  }

  if (padding) {
    style = {
      ...style,
      ...{
        padding,
      },
    };
  }

  if (paddingTop) {
    style = {
      ...style,
      ...{
        paddingTop,
      },
    };
  }

  if (paddingBottom) {
    style = {
      ...style,
      ...{
        paddingBottom,
      },
    };
  }

  if (paddingLeft) {
    style = {
      ...style,
      ...{
        paddingLeft,
      },
    };
  }

  if (paddingRight) {
    style = {
      ...style,
      ...{
        paddingRight,
      },
    };
  }

  if (paddingY) {
    style = {
      ...style,
      ...{
        paddingVertical: paddingY,
      },
    };
  }

  if (paddingX) {
    style = {
      ...style,
      ...{
        paddingHorizontal: paddingX,
      },
    };
  }

  if (height) {
    style = {
      ...style,
      ...{
        height,
      },
    };
  }

  if (width) {
    style = {
      ...style,
      ...{
        width,
      },
    };
  }

  if (borderRadius) {
    style = {
      ...style,
      ...{
        borderRadius,
      },
    };
  }

  return style;
};

function View({
  children,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginY,
  marginX,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingY,
  paddingX,
  style,
  color,
  testID,
  onLayout,
  height,
  width,
  borderRadius,
}) {
  const styleView = getStyleView(
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginY,
    marginX,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingY,
    paddingX,
    color,
    height,
    width,
    borderRadius,
  );

  return (
    <NativeView onLayout={onLayout} testID={testID} style={[styleView, style]}>
      {children}
    </NativeView>
  );
}

export default React.memo(View);
