import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const AttendeeIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg className={classes.svg} viewBox="2 2 16 16" role="presentation" focusable="false">
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M7 7C8.10457 7 9 6.10457 9 5C9 3.89543 8.10457 3 7 3C5.89543 3 5 3.89543 5 5C5 6.10457 5.89543 7 7 7ZM7 6C6.44772 6 6 5.55228 6 5C6 4.44772 6.44772 4 7 4C7.55228 4 8 4.44772 8 5C8 5.55228 7.55228 6 7 6Z" />
        <path d="M5 12C6.10457 12 7 11.1046 7 10C7 8.89543 6.10457 8 5 8C3.89543 8 3 8.89543 3 10C3 11.1046 3.89543 12 5 12ZM5 11C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9C5.55228 9 6 9.44772 6 10C6 10.5523 5.55228 11 5 11Z" />
        <path d="M15 12C16.1046 12 17 11.1046 17 10C17 8.89543 16.1046 8 15 8C13.8954 8 13 8.89543 13 10C13 11.1046 13.8954 12 15 12ZM15 11C14.4477 11 14 10.5523 14 10C14 9.44772 14.4477 9 15 9C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11Z" />
        <path d="M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10ZM11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10Z" />
        <path d="M2.5 13H6.08535C6.03008 13.1564 6 13.3247 6 13.5V14H3C3 15.1046 3.89543 16 5 16C5.43306 16 5.83398 15.8624 6.16138 15.6284C6.25803 15.9577 6.3959 16.2694 6.56903 16.5575C6.11253 16.8381 5.57517 17 5 17C3.34315 17 2 15.6569 2 14V13.5C2 13.2239 2.22386 13 2.5 13Z" />
        <path d="M15 17C14.4248 17 13.8875 16.8381 13.431 16.5575C13.6041 16.2694 13.742 15.9577 13.8386 15.6284C14.166 15.8624 14.5669 16 15 16C16.1046 16 17 15.1046 17 14H14V13.5C14 13.3247 13.9699 13.1564 13.9146 13H17.5C17.7761 13 18 13.2239 18 13.5V14C18 15.6569 16.6569 17 15 17Z" />
        <path d="M15 5C15 6.10457 14.1046 7 13 7C11.8954 7 11 6.10457 11 5C11 3.89543 11.8954 3 13 3C14.1046 3 15 3.89543 15 5ZM14 5C14 4.44772 13.5523 4 13 4C12.4477 4 12 4.44772 12 5C12 5.55228 12.4477 6 13 6C13.5523 6 14 5.55228 14 5Z" />
        <path d="M7.5 13C7.22386 13 7 13.2239 7 13.5V14.5C7 16.1569 8.34315 17.5 10 17.5C11.6569 17.5 13 16.1569 13 14.5V13.5C13 13.2239 12.7761 13 12.5 13H7.5ZM8 14H12V14.5C12 15.6046 11.1046 16.5 10 16.5C8.89543 16.5 8 15.6046 8 14.5V14Z" />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M7 7C8.10457 7 9 6.10457 9 5C9 3.89543 8.10457 3 7 3C5.89543 3 5 3.89543 5 5C5 6.10457 5.89543 7 7 7Z" />
        <path d="M7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" />
        <path d="M15 12C16.1046 12 17 11.1046 17 10C17 8.89543 16.1046 8 15 8C13.8954 8 13 8.89543 13 10C13 11.1046 13.8954 12 15 12Z" />
        <path d="M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12Z" />
        <path d="M6.08535 13H2.5C2.22386 13 2 13.2239 2 13.5V14C2 15.6569 3.34315 17 5 17C5.57517 17 6.11253 16.8381 6.56903 16.5575C6.20776 15.9563 6 15.2524 6 14.5V13.5C6 13.3247 6.03008 13.1564 6.08535 13Z" />
        <path d="M13.431 16.5575C13.7922 15.9563 14 15.2524 14 14.5V13.5C14 13.3247 13.9699 13.1564 13.9146 13H17.5C17.7761 13 18 13.2239 18 13.5V14C18 15.6569 16.6569 17 15 17C14.4248 17 13.8875 16.8381 13.431 16.5575Z" />
        <path d="M13 7C14.1046 7 15 6.10457 15 5C15 3.89543 14.1046 3 13 3C11.8954 3 11 3.89543 11 5C11 6.10457 11.8954 7 13 7Z" />
        <path d="M7.5 13C7.22386 13 7 13.2239 7 13.5V14.5C7 16.1569 8.34315 17.5 10 17.5C11.6569 17.5 13 16.1569 13 14.5V13.5C13 13.2239 12.7761 13 12.5 13H7.5Z" />
      </g>
    </svg>
  ),
  displayName: 'AttendeeIcon',
});
