import styled from 'styled-components'
import React from 'react';
import { ToolbarButtonItem, IToolbarButtonItemProps } from './AdaptingBasedOnProps'
import { Line } from './Line';

const ToolbarButtonItemWithBorder = styled(ToolbarButtonItem)`
  border: 1px solid red;
`

export const ExtendingStyles = () => (
  <div>
    <div>
      <ToolbarButtonItemWithBorder
        disabled={false}
        active={false}
        popLabel='字体'
        fixedWidth={70}
      >
        微软雅黑
      </ToolbarButtonItemWithBorder>
    </div>
    <Line />
    <div>
      <ToolbarButtonItemWithBorder
        as="a"
        href="https://www.163.com/"
        disabled={false}
        active={false}
        popLabel='163.com'
        fixedWidth={100}
      >
        www.163.com
      </ToolbarButtonItemWithBorder>
    </div>
  </div>
)