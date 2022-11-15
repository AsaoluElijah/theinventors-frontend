export const sectionVariant = {
	offscreen: {
		y: 300,
		opacity: 0,
	},
	onscreen: {
		y: 0,
		opacity: 1,
		transition: {
            type: 'spring',
            stiffness: 100,
			duration: 0.5,
            ease: 'easeIn',
		},
	},
};

export const childrenVariant = {
	offscreen: {
		y: 300,
		opacity: 0,
	},
	onscreen: {
		y: 0,
		opacity: 1,
		transition: {
			type: 'Inertia',
			delay: 0.1,
		},
	},
};