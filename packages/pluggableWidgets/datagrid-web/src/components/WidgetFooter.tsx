import { createElement, ReactNode, ReactElement } from "react";
import { PagingPositionEnum, PaginationEnum } from "../../typings/DatagridProps";
import { ObjectItem } from "mendix";

type WidgetFooterProps = {
    pagingPosition: PagingPositionEnum;
    pagination: ReactNode;
    paginationType: PaginationEnum;
    data: ObjectItem[];
    loadMoreButtonCaption?: string;
    hasMoreItems: boolean;
    setPage?: (computePage: (prevPage: number) => number) => void;
} & JSX.IntrinsicElements["div"];

export function WidgetFooter(props: WidgetFooterProps): ReactElement | null {
    const {
        pagingPosition,
        pagination,
        paginationType,
        loadMoreButtonCaption,
        data: rows,
        hasMoreItems,
        setPage,
        ...rest
    } = props;
    return (
        <div {...rest} className="widget-datagrid-footer table-footer">
            {(pagingPosition === "bottom" || pagingPosition === "both") && pagination}
            {rows.length !== 0 && hasMoreItems && paginationType === "loadMore" && (
                <button
                    className="btn btn-primary widget-datagrid-load-more"
                    onClick={() => setPage && setPage(prev => prev + 1)}
                    tabIndex={0}
                >
                    {loadMoreButtonCaption}
                </button>
            )}
        </div>
    );
}
