import styled from 'styled-components'
import React from 'react';
import { ToolbarButtonItem, IToolbarButtonItemProps } from './AdaptingBasedOnProps'

const FixedWidthButtonWithBorder0 = styled(ToolbarButtonItem).attrs(
  { 
    height: '100px' 
  }
)`
  border: 2px solid red;
`

const FixedWidthButtonWithBorder1 = styled(ToolbarButtonItem).attrs(
  {
    style: {
      height: '100px',
      border:'2px solid blue'
    }
  }
)`
  border: 2px solid red;
`

const FixedWidthButtonWithBorder2 = styled(ToolbarButtonItem).attrs((props: IToolbarButtonItemProps) => ({
  style: {
    height: props.fixedWidth * 0.618 + 'px'
  }
}))`
  border: 2px solid red;
`

export const AttachingAdditionalProps = () => (
  <div>
    <div>
      <FixedWidthButtonWithBorder0
        disabled={false}
        active={false}
        popLabel='字体'
        fixedWidth={100}
      >
        固定高度
      </FixedWidthButtonWithBorder0>
    </div>
    <br />
    <div>
      <FixedWidthButtonWithBorder1
        disabled={false}
        active={false}
        popLabel='字体'
        fixedWidth={100}
      >
        固定高度
      </FixedWidthButtonWithBorder1>
    </div>
    <br />
    <div>
      <FixedWidthButtonWithBorder2
        disabled={false}
        active={false}
        popLabel='字体'
        fixedWidth={100}
      >
        固定高度
      </FixedWidthButtonWithBorder2>
    </div>
  </div>
)