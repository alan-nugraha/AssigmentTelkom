import React from 'react';
import {Text as TextNative} from 'react-native';

const Text = props => {
  const {
    children = '',
    style = null,
    size = 12,
    testID = 'Text',
    decoration = 'none',
    color,
    numberOfLines,
    fontWeight,
  } = props;

  return (
    <TextNative
      testID={testID}
      numberOfLines={numberOfLines}
      style={[
        {
          color,
          fontSize: size,
          textDecorationLine: decoration,
          fontWeight,
        },
        style,
      ]}>
      {children}
    </TextNative>
  );
};

export default React.memo(Text);
