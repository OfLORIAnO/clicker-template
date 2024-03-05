export interface PopupProps {
    isOpened: boolean;
    close?: () => void;
    children: React.ReactNode;
    className?: string;
    classNameContent?: string;
}
