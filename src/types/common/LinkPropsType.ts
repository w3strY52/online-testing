import {TColSpan} from "./CenteredButtonPropsType";

export type TLinkProps = {
    href: string;
    label: string,
    colSpan?: TColSpan
    offset?: TColSpan
};