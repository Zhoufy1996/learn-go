/** @format */
export interface ListData<T> {
    key: string;
    render: (
        data: ListData<T>,
        isOpen: boolean,
        isSelected: boolean
    ) => JSX.Element | null;
    children?: ListData<T>[] | null;
    data: T;
}
