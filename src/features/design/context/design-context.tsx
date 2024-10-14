import * as React from 'react';type DesignContextProviderProps = {    children: React.ReactNode;};type DesignContextProps = {    activeSource: string;    setActiveSource: (activeSource: string) => void;};const DesignContext = React.createContext<DesignContextProps | null>(null);export const useDesignContext = () => {    const designContext = React.useContext(DesignContext);    if (!designContext) {        throw new Error(            'designContext has to be used within <DesignContext.Provider>',        );    }    return designContext;};export const DesignContextProvider: React.FC<DesignContextProviderProps> = ({    children,}) => {    const [activeSource, setActiveSource] = React.useState('tour');    return (        <DesignContext.Provider value={{ activeSource, setActiveSource }}>            {children}        </DesignContext.Provider>    );};