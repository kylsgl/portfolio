/** @type {import('next').NextConfig} */
const nextConfig = {
	compress: true,
	eslint: {
		dirs: ['src'],
		ignoreDuringBuilds: true,
	},
	images: {
		domains: ['cdn.sanity.io'],
	},
	optimizeFonts: true,
	poweredByHeader: false,
	reactStrictMode: true,
	swcMinify: true,
	typescript: {
		ignoreBuildErrors: true,
	},
};

module.exports = nextConfig;
