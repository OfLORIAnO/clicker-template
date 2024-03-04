import React from 'react';
import { InitData } from './InitData/InitData';

interface IProps {
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
    children: React.ReactNode;
}

export const Init = ({ setIsLoading, isLoading, children }: IProps) => {
    return (
        <InitData setIsLoading={setIsLoading} isLoading={isLoading}>
            {children}
        </InitData>
    );
};
