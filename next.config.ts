import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
    images: {
        remotePatterns: [
            new URL("https://php.leone.it/**")
        ]
    }
}

export default withFlowbiteReact(nextConfig);