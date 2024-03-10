export type TTableColumn = {
    id: string,
    align?: 'right' | 'left' | 'center',
    minWidth?: number,
    label: string,
    type?: string,
    format?: (value: number) => string
}
