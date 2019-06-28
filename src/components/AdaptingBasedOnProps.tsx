import React from 'react';
import styled, { IStyledComponentsProps } from 'styled-components'
export interface IToolbarButtonItemProps extends IStyledComponentsProps{
    fixedWidth: number
    disabled: boolean
    active: boolean
    popLabel: string
}

export const ToolbarButtonItem = styled.div<IToolbarButtonItemProps>`
    display: flex;
    position: relative;
    justify-content: center;
    font-size: 12px;
    height: 28px;
    line-height: 28px;
    width: ${props => (props.fixedWidth ? `${props.fixedWidth}px` : '28px')};
    opacity: ${props => props.disabled && '.5'};
    background-color: ${props => props.active && '#f1f3f6'};
    pointer-events: ${props => props.disabled && 'none'};

    ::after {
        content: '${props => props.popLabel}';
        display: block;
        position: absolute;
        z-index:999;
        bottom: -35px;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        text-align: center;
        border-radius: 4px;
        padding: 4px 7px;
        white-space: nowrap;
        font-size: 12px;
        line-height: 21px;
        background: rgba(0, 0, 0, 0.7);
        visibility: hidden;
        transition: visibility 0s step-end 0.2s;
    }

    ::before {
        content: '';
        position: absolute;
        z-index:999;
        bottom: -10px;
        left: 50%;
        border-top: 8px solid rgba(0, 0, 0, 0.7);
        border-left: 8px solid transparent;
        width: 0;
        height: 0;
        transform: translateX(-50%) rotate(-45deg);
        visibility: hidden;
        transition: visibility 0s step-end 0.2s;
    }

    &:hover {
        cursor: ${props => !props.disabled && 'pointer'};
        background: ${props => !props.disabled && '#f1f3f6'};

        ::after,
        ::before {
            transition: visibility 0s step-end 0.8s;
            visibility: visible;
        }
    }
`;

export const AdaptingBasedOnProps = () => (
    <ToolbarButtonItem
        disabled={false}
        active={false}
        popLabel='字体'
        fixedWidth={70}
    >
        微软雅黑
    </ToolbarButtonItem>
)

