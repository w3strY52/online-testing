export type TProfileInputProps = {
    id: string,
    label: string,
    type?: string
    value: string | number | boolean,
    handleChange: (e: any) => void
};