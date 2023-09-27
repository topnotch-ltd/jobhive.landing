import React from "react";
import {clsx} from "@nextui-org/shared-utils";

import {IconSvgProps} from "@/types";
import {dataAttr} from "@/utils";
export interface LogoProps extends IconSvgProps {
  auto?: boolean;
  small?: boolean;
  fill?: string;
  className?: string;
}

export const SmallLogo: React.FC<LogoProps> = ({
  auto,
  size,
  width,
  height,
  className,
  ...props
}) => (
  <svg
    className={clsx("data-[auto=true]:sm:hidden block text-foreground", className)}
    data-auto={dataAttr(auto)}
    fill="currentColor"
    height={height || size || 25}
    viewBox="0 0 43 43"
    width={width || size || 25}
    {...props}
  >
    <path d="M32 43H11a10.928 10.928 0 01-7.778-3.222A10.928 10.928 0 010 32V11a10.928 10.928 0 013.222-7.778A10.928 10.928 0 0111 0h21a10.929 10.929 0 017.779 3.222A10.927 10.927 0 0143 11v21a10.927 10.927 0 01-3.222 7.778A10.929 10.929 0 0132 43zM11.314 12.293v12.033a6.35 6.35 0 00.87 3.31 6.243 6.243 0 002.422 2.3 7.458 7.458 0 003.595.843 7.474 7.474 0 003.6-.839 6.2 6.2 0 002.418-2.3 6.381 6.381 0 00.869-3.315V12.292h-1.659V24.21a5.149 5.149 0 01-.643 2.578 4.6 4.6 0 01-1.824 1.779 5.668 5.668 0 01-2.759.648 5.646 5.646 0 01-2.756-.648 4.64 4.64 0 01-1.823-1.779 5.116 5.116 0 01-.648-2.578V12.292zm18.6 0v18.175h1.66V12.293z" />
  </svg>
);

export const LargeLogo: React.FC<LogoProps> = ({auto, className, ...props}) => (
  <svg
    className={clsx(
      "data-[auto=true]:hidden data-[auto=true]:sm:block block text-foreground",
      className,
    )}
    data-auto={dataAttr(auto)}
    fill="currentColor"
    viewBox="0 0 100 24.48"
    {...props}
  >
    <path 
    d="M18.745 0v24.069h-2.139L2.386 3.914h-.188v20.155H0V0h2.127l14.267 20.179h.188V0zm13.256 24.445a7.934 7.934 0 01-4.371-1.181 7.79 7.79 0 01-2.85-3.279 11.069 11.069 0 01-1-4.836 11.2 11.2 0 011-4.848 8.1 8.1 0 012.785-3.326 7.175 7.175 0 014.119-1.2 7.689 7.689 0 012.832.535 7.042 7.042 0 012.45 1.634 7.836 7.836 0 011.722 2.756 11.015 11.015 0 01.635 3.931v1.034h-12.1V13.82h9.963a6.882 6.882 0 00-.7-3.132 5.55 5.55 0 00-1.939-2.2 5.11 5.11 0 00-2.862-.811 5.121 5.121 0 00-3.02.917 6.251 6.251 0 00-2.039 2.421 7.513 7.513 0 00-.746 3.291v1.1a8.822 8.822 0 00.746 3.755 5.751 5.751 0 002.124 2.487 5.9 5.9 0 003.255.881 5.873 5.873 0 002.251-.4 4.843 4.843 0 001.634-1.075 4.729 4.729 0 001-1.487l1.986.646a5.885 5.885 0 01-1.346 2.1 6.889 6.889 0 01-2.327 1.545 8.251 8.251 0 01-3.202.587zm12.74-18.428l4.654 7.7 4.654-7.7h2.433l-5.806 9.026 5.806 9.026H54.05l-4.654-7.451-4.655 7.451H42.32l5.735-9.026-5.735-9.026zm23.246 0v1.822h-8.615V6.017zm-5.923-4.325h2.1v17.664a3.414 3.414 0 00.388 1.769 2.159 2.159 0 001.011.9 3.363 3.363 0 001.328.264 4.045 4.045 0 00.705-.053q.294-.053.517-.112l.447 1.892a5.433 5.433 0 01-.752.217 5.162 5.162 0 01-1.1.1 5.1 5.1 0 01-2.215-.505 4.337 4.337 0 01-1.743-1.499 4.3 4.3 0 01-.682-2.48zM89.211 0h2.2v15.936a8.411 8.411 0 01-1.152 4.389 8.18 8.18 0 01-3.2 3.044 9.854 9.854 0 01-4.77 1.111 9.82 9.82 0 01-4.76-1.116 8.225 8.225 0 01-3.208-3.044 8.379 8.379 0 01-1.152-4.384V0h2.2v15.783a6.747 6.747 0 00.858 3.414 6.13 6.13 0 002.415 2.356 7.444 7.444 0 003.649.858 7.478 7.478 0 003.655-.858 6.08 6.08 0 002.413-2.353 6.784 6.784 0 00.852-3.414zM100 0v24.069h-2.2V0z" 
    />
  </svg>
);

export const NextUILogo: React.FC<LogoProps> = ({auto, small, ...props}) => {
  if (auto) {
    return (
      <div>
        <SmallLogo auto={auto} {...props} />
        <LargeLogo auto={auto} {...props} />
      </div>
    );
  }

  if (small) {
    return <SmallLogo {...props} />;
  }

  return <LargeLogo auto={auto} {...props} />;
};
