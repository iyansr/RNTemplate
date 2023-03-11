import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const HomeLine = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      opacity={0.2}
      d="M27 14.443V27h-8v-7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v7H5V14.443a1 1 0 0 1 .327-.74l10-9.443a1 1 0 0 1 1.347 0l10 9.443a.999.999 0 0 1 .326.74Z"
      fill={props.color}
    />
    <Path
      d="M30 26h-2V14.444a2.002 2.002 0 0 0-.646-1.473l-10-9.435a2 2 0 0 0-2.705-.014l-.014.014-9.989 9.435A2 2 0 0 0 4 14.444V26H2a1 1 0 0 0 0 2h28a1 1 0 1 0 0-2ZM6 14.444l.014-.013L16 5l9.988 9.429.013.012V26H20v-6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6H6V14.444ZM18 26h-4v-6h4v6Z"
      fill={props.color}
    />
  </Svg>
);

export default HomeLine;
