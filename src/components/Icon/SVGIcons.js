import {Submit, Heart} from '.';
import React from 'react';

const icon = {
  submit: Submit,
  heart: Heart,
};

export default function SVGIcons(props) {
  const SvgIcon = icon[props.name];
  return (
    <SvgIcon
      width={props.width}
      height={props.height}
      stroke={props.stroke}
      fill={props.fill}
      onPress={props.onPress}
    />
  );
}
