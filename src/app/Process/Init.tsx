import React from 'react';
import { InitYandex } from './InitYandex/InitYandex';
import { InitData } from './InitData/InitData';

interface IProps {
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
    children: React.ReactNode;
}

export const Init = ({ setIsLoading, isLoading, children }: IProps) => {
    return (
        <InitYandex>
            <InitData isLoading={isLoading} setIsLoading={setIsLoading}>
                {children}
            </InitData>
        </InitYandex>
    );
};
