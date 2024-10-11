import * as React from 'react';import { locationAssets as ASSETS } from '@/assets';import { SectionTitle } from '@/components/layouts';import { useNavigationContext } from '@/context/navigation-context';import { useMobile } from '@/hooks/use-mobile';import { cn } from '@/utils/cn';import { locationConst as CONST } from 'src/constants';const menuIcons = ASSETS.icon;const menuItems = CONST.menuItems;const mapItems = ASSETS.img.desktop;const mobileMapItems = ASSETS.img.mobile;type Key = keyof typeof menuItems;type IconKey = keyof typeof menuIcons;type MapKey = keyof typeof mapItems;type MenuItemProps = {    itemKey: string;    activeKey: string;};const MenuItem: React.FC<MenuItemProps> = ({ itemKey, activeKey }) => {    return (        <div            className={cn(                `flex items-center justify-center md:gap-1`,                itemKey === activeKey ? 'opacity-100' : 'opacity-70',            )}        >            <div                className={cn(                    'flex size-8 items-center justify-center rounded-[100px] p-1',                )}            >                <div className="relative flex size-6 flex-col items-start justify-start">                    <img                        src={menuIcons[itemKey as IconKey].src}                        alt={menuIcons[itemKey as IconKey].alt}                    />                </div>            </div>            <div className="text-center font-secondaryRegular text-base font-normal uppercase leading-tight text-[#164a49]">                {menuItems[itemKey as Key].title}            </div>        </div>    );};export const LocationRoute: React.FC = () => {    const { pageRefs } = useNavigationContext();    const [imgSrc, setImgSrc] = React.useState('fnb');    const [isFade, setIsFade] = React.useState(false);    const isMobile = useMobile();    const mapAssets = isMobile ? mobileMapItems : mapItems;    const onSourceChange = (src: string) => {        setIsFade(true);        setTimeout(() => {            setIsFade(false);            setImgSrc(src);        }, 250);    };    return (        <section            ref={pageRefs.location}            className={`h-fit w-screen bg-background-primary`}        >            <div                className={`box-border flex size-full h-fit flex-row items-center justify-center gap-32 overflow-hidden md:px-40 md:pb-10 md:pt-32`}            >                <SectionTitle                    variant={isMobile ? 'mobile' : 'row'}                    size={isMobile ? 'default' : 'row'}                    indentVariant={isMobile ? 'default' : 'flexEnd'}                    subtitle={CONST.subtitle}                    title={CONST.title}                    paragraph={CONST.paragraph}                />            </div>            <div>                <img                    src={mapAssets[imgSrc as MapKey].src}                    alt=""                    className={cn(                        `w-full transition-opacity duration-200`,                        isFade ? 'opacity-50' : 'opacity-1',                    )}                />                <div                    className={`relative inline-flex h-16 w-full justify-center gap-2 bg-white md:gap-8`}                >                    <button onClick={() => onSourceChange('fnb')}>                        <MenuItem itemKey={'fnb'} activeKey={imgSrc} />                    </button>                    <button onClick={() => onSourceChange('retail')}>                        <MenuItem itemKey={'retail'} activeKey={imgSrc} />                    </button>                    <button onClick={() => onSourceChange('trains')}>                        <MenuItem itemKey={'trains'} activeKey={imgSrc} />                    </button>                    <button onClick={() => onSourceChange('hotels')}>                        <MenuItem itemKey={'hotels'} activeKey={imgSrc} />                    </button>                </div>            </div>        </section>    );};