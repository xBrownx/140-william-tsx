import React from 'react';

type HeaderProps = {
    pageRefs: any;
    navigateTo: (pageRef: any) => void;
};

export const HeaderLayout: React.FC<HeaderProps> = ({
    pageRefs,
    navigateTo,
}) => {
    const landing = pageRefs.landing;
    return (
        <div className="absolute z-40 box-border h-24 w-full overflow-hidden bg-background-primary">
            <div className="box-border flex size-full flex-row items-center justify-between overflow-hidden">
                <div className="box-border size-full">
                    <p className="box-border">hello</p>
                </div>

                <div className="box-border flex size-full items-center justify-end">
                    <p className="box-border justify-center">is it me</p>
                    <p className="box-border">is it me</p>
                    <p className="box-border">is it me</p>
                    <p className="box-border">is it me</p>
                    <p className="box-border">is it me</p>
                </div>
            </div>
        </div>
    );
};
