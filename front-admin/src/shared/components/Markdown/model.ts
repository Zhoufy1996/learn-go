/** @format */

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
