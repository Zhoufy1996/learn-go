/** @format */

import { SvgIconTypeMap } from '@material-ui/core';
/** @format */

import { OverridableComponent } from '@material-ui/core/OverridableComponent';

export interface CustomMarkdownProps {
    defaultValue: string;
    onChange: (value: string) => void;
}

export interface CustomDivideProps {
    className?: string;
    style?: React.CSSProperties;
    onMove?: (offsetX: number, offsetY: number) => void;
}

export interface Position {
    x: number;
    y: number;
}

export interface Tool {
    Component: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
    title: string;
    value: string;
}
export interface ToolTeam {
    name: string;
    tools: Tool[];
}

export interface ToolBarProps {
    tools: ToolTeam[];
}
