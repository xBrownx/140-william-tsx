import * as React from 'react';import { Input } from '@/components/ui/input';import { ParallaxTitle } from '@/components/ui/parallax';import { TextArea } from '@/components/ui/text-area';import { Title } from '@/components/ui/title';import { enquireConfig } from '@/config/enquire-config';import { useNavigationContext } from '@/context/navigation-context';import { cn } from '@/utils/cn';type Inputs = {    firstName: string;    lastName: string;    email: string;    phone: string;    message: string;};const initInputs: Inputs = {    firstName: '',    lastName: '',    email: '',    phone: '',    message: '',};export const EnquireRoute: React.FC = () => {    const { pageRefs } = useNavigationContext();    const [inputs, setInputs] = React.useState<Inputs>(initInputs);    const handleChange = (event: { target: { name: any; value: any } }) => {        const name = event.target.name;        const value = event.target.value;        setInputs((values) => ({ ...values, [name]: value }));    };    const handleSubmit = (event: { preventDefault: () => void }) => {        event.preventDefault();    };    const { navigateToPage } = useNavigationContext();    return (        <section            className={`relative h-fit w-screen bg-background-secondary`}            ref={pageRefs.enquire}        >            <div                className={`box-border flex size-full  flex-col items-center justify-center overflow-hidden p-4 md:px-40 md:py-[139px]`}            >                <div                    className={                        'flex flex-col items-center justify-center gap-8 md:w-[576px]'                    }                >                    <div className={`w-full md:w-fit`}>                        <ParallaxTitle>                            <Title titleVariant={'light'} padding={'none'}>                                Enquiry                            </Title>                        </ParallaxTitle>                    </div>                    <div                        className={                            'flex w-full flex-col items-center justify-center gap-4 md:w-[576px]'                        }                    >                        <div                            className={`flex w-full flex-row gap-4 md:w-[576px]`}                        >                            <Input                                name={'lastName'}                                value={inputs.lastName || ''}                                placeholder={enquireConfig.lastName}                                onChange={handleChange}                            />                            <Input                                name={'firstName'}                                value={inputs.firstName || ''}                                placeholder={enquireConfig.firstName}                                onChange={handleChange}                            />                        </div>                        <Input                            name={'email'}                            value={inputs.email || ''}                            placeholder={enquireConfig.email}                            onChange={handleChange}                        />                        <Input                            name={'phone'}                            value={inputs.phone || ''}                            placeholder={enquireConfig.phone}                            onChange={handleChange}                        />                        <TextArea                            className={`flex h-[109px] w-full rounded-lg border border-white bg-transparent pl-[20px] pt-[15px] font-secondaryLight text-white placeholder:text-white/70`}                            name={'message'}                            value={inputs.message || ''}                            placeholder={enquireConfig.msg}                            onChange={handleChange}                            rows={4}                        />                        <button                            className={cn(                                `inline-flex h-[55px] w-full flex-col items-center justify-center gap-2 rounded-lg bg-white py-4 border border-white z-10`,                                "group relative flex overflow-hidden rounded-lg border px-8 py-4 after:absolute after:inset-x-0 after:-top-full after:bottom-full after:-z-9 after:block after:bg-button-primary after:px-2 after:py-6 after:transition-all after:duration-300 after:content-[''] hover:after:inset-x-0 after:hover:bottom-0 hover:after:top-0",                            )}                        >                            <p                                className={`z-10 font-secondaryLight text-lg font-normal text-[#162425] transition-all duration-300 group-hover:text-white`}                            >                                Submit                            </p>                        </button>                    </div>                </div>            </div>            <div                className={`absolute bottom-0 right-0 hidden pb-[139px] pr-16 md:flex`}            >                <div className={`relative`}>                    <button                        onClick={() => navigateToPage('landing')}                        className={cn(                            `group h-[55px] w-[55px] relative flex overflow-hidden rounded-lg border border-white bg-transparent after:absolute after:inset-x-0 after:-top-full after:bottom-full after:z-[0] after:block after:bg-button-primary after:px-2 after:py-4 after:transition-all after:duration-300 after:content-[''] hover:bg-transparent hover:after:inset-x-0 after:hover:bottom-0 hover:after:top-0`,                        )}                    >                        <img                            src={                                'https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/down-arrow.svg'                            }                            alt="down-arrow"                            className={`z-10 rotate-180`}                        />                    </button>                </div>            </div>        </section>    );};