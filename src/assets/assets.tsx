export const storefrontURL = 'https://d3tbbjv3fiiqdd.cloudfront.net';
export const videoCDN = (featurePath: string, file: string) =>
	`${storefrontURL}/videos/${featurePath}/${file}.m3u8`;

export const landingAssets = {
	vid: {
		'background-video': {
			src: videoCDN('landing', 'background-output'),
			autoplay: true,
			controls: false,
			muted: true,
		},
	},
};

export const homeAssets = {
	img: {},
};

export const lifestyleAssets = {
	img: {},
};

export const availabilityConst = {
	img: {},
};
