import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React Compiler verified compatible with Framer Motion here (entrance
  // animations complete correctly). Disable this if you ever see components
  // stuck at their initial animation state.
  reactCompiler: true,

  // Allow loading /_next dev resources when testing from other devices on the
  // LAN (e.g. a phone hitting http://172.16.2.42:3000). Without this, Next 16
  // blocks cross-origin dev assets and the page renders blank.
  allowedDevOrigins: ["172.16.2.42", "172.16.2.0/24", "localhost"],
};

export default nextConfig;
