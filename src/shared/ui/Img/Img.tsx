import React from 'react';

interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
}

export const Img = ({ className, ...props }: IProps) => {
    return <img draggable={false} className={className} {...props} />;
};
