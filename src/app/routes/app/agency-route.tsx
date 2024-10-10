import * as React from 'react';import { agencyAssets as ASSETS } from '@/assets';import { ParallaxImage } from '@/components/ui/parallax-image';import { Title } from '@/components/ui/title';import { useNavigationContext } from '@/context/navigation-context';import { agencyConst as CONST } from 'src/constants';const agencies = CONST.agencies;const agentImages = ASSETS.img.agents;type AgencyKey = keyof typeof agencies;type ImageKey = keyof typeof agentImages;type AgentProps = {    id: string;    name: string;    phone: string;    email: string;};const Agent: React.FC<AgentProps> = ({ id, name, phone, email }) => {    return (        <div className={`flex flex-row gap-2`}>            <img                className={``}                src={agentImages[id as ImageKey].src}                alt={agentImages[id as ImageKey].alt}            />            <div className={'flex flex-col gap-2'}>                <h3                    className={`font-primaryLight text-base font-normal uppercase text-white`}                >                    {name}                </h3>                <p                    className={`font-secondaryLight text-sm font-normal text-white/70`}                >                    {phone}                    <br />                    {email}                </p>            </div>        </div>    );};type AgencyProps = {    label: string;    link: string;    agents: AgentProps[];};const Agency: React.FC<AgencyProps> = ({ label, link, agents }) => {    return (        <div className={`flex flex-col gap-4`}>            <a href={link} target="_blank" rel="noopener noreferrer">                <h2                    className={`w-fit border-b border-[#5178e1] py-1 text-center font-secondaryLight text-xl font-normal uppercase leading-tight text-[#5178e1]`}                >                    {label}                </h2>            </a>            {agents.map((agent) => (                <Agent key={agent.id} {...agent} />            ))}        </div>    );};export const AgencyRoute: React.FC = () => {    const { pageRefs } = useNavigationContext();    return (        <section            className={`box-border h-screen w-screen overflow-hidden bg-background-secondary`}            ref={pageRefs.agency}        >            <div                className={`box-border flex size-full flex-row gap-32 overflow-hidden px-40 py-32`}            >                <div className={`box-border flex  flex-1 justify-end`}>                    <ParallaxImage                        src={ASSETS.img.hero.src}                        alt={ASSETS.img.hero.alt}                        className="h-full w-auto rounded-lg"                    />                </div>                <div className={`flex flex-1 flex-col gap-8`}>                    <Title titleVariant={'light'} padding={'none'}>                        {CONST.title}                    </Title>                    <div                        className={`flex flex-col gap-8 border-l border-[#84936E] pl-8`}                    >                        <p                            className={`whitespace-pre-wrap font-secondaryLight text-lg font-normal leading-[27px] text-white/70`}                        >                            {CONST.paragraph}                        </p>                        {Object.keys(agencies).map((key) => (                            <Agency key={key} {...agencies[key as AgencyKey]} />                        ))}                    </div>                </div>            </div>        </section>    );};