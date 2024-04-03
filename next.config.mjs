/** @type {import('next').NextConfig} */
const nextConfig = {
    api: {
        bodyParser: true,
        externalResolver: true,
        paths: 'app/api',
      },
};

export default nextConfig;
