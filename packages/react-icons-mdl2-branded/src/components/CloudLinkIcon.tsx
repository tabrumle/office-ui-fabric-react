import * as React from 'react';
import createSvgIcon from '@fluentui/react-icons-mdl2/lib/utils/createSvgIcon';

const CloudLinkIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" width="2048" height="2048">
      <path d="M1088 512q-63 0-121 17t-109 48-93 76-72 99l-25 46q-38-13-76-21t-80-9q-80 0-149 30t-122 82-83 123-30 149q0 80 30 149t82 122 122 83 150 30h108q9 65 35 128H512q-106 0-199-40t-162-110-110-163-41-199q0-106 40-199t110-162 163-110 199-41q46 0 93 9 40-62 92-111t115-83 132-53 144-18q110 0 208 39t176 108 127 162 62 203q80 0 150 30t123 81 83 122 31 151q0 41-9 80-26-23-57-41t-63-33v-3q0-1 1-3 0-53-20-99t-55-82-81-55-100-20h-128v-64q0-93-35-174t-96-142-142-96-175-36zm3 768q-40 0-75 15t-60 41-40 61-15 75q0 32 9 60t28 53 42 42 55 28q-3 18-5 36t-2 37q0 15 1 29t4 29q-57-10-104-39t-82-71-54-94-19-110q0-66 25-124t67-101 101-69 124-26h254q65 0 123 25t101 70 68 102 25 123q0 57-18 108t-53 94-80 71-103 40v-133q28-10 51-28t41-41 26-52 9-59q0-40-15-75t-40-61-60-41-75-15h-254zm695 129q57 11 105 40t83 71 54 94 20 111q0 66-25 124t-68 103-102 70-125 26h-256q-66 0-124-25t-102-70-69-103-25-125q0-57 19-109t53-95 81-71 103-41v133q-29 10-52 28t-40 43-26 53-10 59q0 39 15 74t41 63 61 42 75 16h256q40 0 75-15t61-42 41-62 15-76q0-31-10-60t-28-54-42-43-55-28q3-17 5-34t2-36q0-15-2-30t-4-31z" />
    </svg>
  ),
  displayName: 'CloudLinkIcon',
});

export default CloudLinkIcon;
