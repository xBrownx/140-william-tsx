import React from 'react';

type InitialLoadContextProviderProps = {
    children: React.ReactNode;
};

type InitialLoadContextProps = {
    isLoadComplete: boolean;
    setLoadComplete: (loadComplete: boolean) => void;
};

const InitialLoadContext = React.createContext<InitialLoadContextProps | null>(
    null,
);

export const useInitialLoadContext = () => {
    const initialLoadContext = React.useContext(InitialLoadContext);
    if (!initialLoadContext) {
        throw new Error(
            'initialLoadContext has to be used within <InitialLoadContext.Provider>',
        );
    }

    return initialLoadContext;
};

export const InitialLoadContextProvider: React.FC<
    InitialLoadContextProviderProps
> = ({ children }) => {
    const [isLoadComplete, setLoadComplete] = React.useState(false);

    return (
        <InitialLoadContext.Provider
            value={{
                isLoadComplete,
                setLoadComplete,
            }}
        >
            {children}
        </InitialLoadContext.Provider>
    );
};
