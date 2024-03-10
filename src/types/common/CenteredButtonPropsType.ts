export type TColSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type TCenteredButtonProps = {
    colLg: TColSpan,
    colMd: TColSpan,
    colSm: TColSpan,
    colXs: TColSpan,
    label: string,
    type: string,
    disabled?: boolean,
    onClick?: (e: any) => void,
    loading?: boolean
};