/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx";
import million from "million/compiler";
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    serverComponentsExternalPackages: ["@rspress/mdx-rs"],
  },
  ...(process.env.OUTPUT_STANDALONE && { output: "standalone" }),
};
const millionConfig = {
  auto: {
    rsc: true,
  },
  rsc: true,
};
const withMDX = createMDX({
  // Add markdown plugins here, as desired
});
export default million.next(withMDX(nextConfig), millionConfig);
