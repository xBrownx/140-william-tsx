import * as React from 'react';import { buttonConfig, ButtonConfigKey } from '@/config';import { useAvailabilityContext } from '@/context/availability-context';import { cn } from '@/utils/cn';type LevelButtonProps = {    lvlKey: string;    children: React.ReactNode;};const LevelButton: React.FC<LevelButtonProps> = ({ lvlKey, children }) => {    const { onLevelHover, onLevelClick } = useAvailabilityContext();    return (        <button            onMouseEnter={() => onLevelHover(lvlKey)}            onMouseLeave={() => onLevelHover(null)}            onClick={() => onLevelClick(lvlKey)}            className={cn(                `size-[2vw] rounded-lg`,                buttonConfig[lvlKey as ButtonConfigKey].isActive                    ? 'bg-button-primary hover:cursor-pointer'                    : 'bg-[rgba(0,0,0,0.15)] hover:cursor-auto',            )}        >            <p className={`font-primaryLight text-white`}>{children}</p>        </button>    );};export const LevelButtons = () => {    const buttonsArray = Object.keys(buttonConfig)        .map((key) => ({            key: key,            ...buttonConfig[key as ButtonConfigKey],        }))        .reverse();    const topButtons = buttonsArray.slice(0, 17);    const bottomButtons = buttonsArray.slice(17);    return (        <div            className={`absolute z-10 ml-[69%] flex flex-col gap-[5vw] pt-[35.55%]`}        >            <div className={`box-border flex w-fit flex-col gap-[0.43vw]`}>                {topButtons.map((button) => (                    <LevelButton key={button.key} lvlKey={button.key}>                        {button.lvl ? button.lvl : null}                    </LevelButton>                ))}            </div>            <div className={`box-border flex w-fit flex-col gap-[0.45vw]`}>                {bottomButtons.map((button) => (                    <LevelButton key={button.key} lvlKey={button.key}>                        {button.lvl}                    </LevelButton>                ))}            </div>        </div>    );};