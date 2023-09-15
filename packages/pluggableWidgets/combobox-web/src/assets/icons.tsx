import classNames from "classnames";
import { createElement, ReactElement } from "react";

export function ClearButton({ size = 14 }): ReactElement {
    return (
        <span className="widget-combobox-icon-container">
            <svg width={size} height={size} viewBox="0 0 32 32" className="widget-combobox-clear-button-icon">
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="currentColor"
                    d="M27.71 5.71004L26.29 4.29004L16 14.59L5.71004 4.29004L4.29004 5.71004L14.59 16L4.29004 26.29L5.71004 27.71L16 17.41L26.29 27.71L27.71 26.29L17.41 16L27.71 5.71004Z"
                />
            </svg>
        </span>
    );
}

export function DownArrow({ isOpen }: { isOpen?: boolean }): ReactElement {
    return (
        <span className="widget-combobox-icon-container">
            <svg
                className={classNames("widget-combobox-down-arrow-icon", "mx-icon-lined", "mx-icon-chevron-down", {
                    active: isOpen
                })}
                width="16"
                height="16"
                viewBox="0 0 32 32"
            >
                <path d="M16 23.41L4.29004 11.71L5.71004 10.29L16 20.59L26.29 10.29L27.71 11.71L16 23.41Z" />
            </svg>
        </span>
    );
}

export function Checkbox({ checked }: { checked: boolean | undefined }): ReactElement {
    return (
        <span className="widget-combobox-icon-container">
            <svg
                className={classNames("widget-combobox-down-checkbox-icon", {
                    checked
                })}
                width="24"
                height="20"
                viewBox="0 0 24 20"
            >
                {checked ? (
                    <rect x="2" width="20" height="20" rx="5" />
                ) : (
                    <rect x="2.5" y="0.5" width="19" height="19" rx="4.5" />
                )}
                <path d="M7 10.3077L10.6923 14L17.4615 6" />
            </svg>
        </span>
    );
}