import { availabilityAssets } from '@/assets';import { buttonConfig, vectorConfig } from '@/config';export type LevelButtonKey = keyof typeof buttonConfig;export type VectorConfigKey = keyof typeof vectorConfig;export type VectorAssetKey =    keyof (typeof availabilityAssets.img)['shadow-vectors'];export type Level = {    lvl: number;    isActive: boolean;    key: string;};