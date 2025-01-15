import React from "react";
import LoadingAnimation from "./LoadingAnimation";

interface WithLoadingAnimationProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const WithLoadingAnimation: React.FC<WithLoadingAnimationProps> = ({ children, isLoading }) => {
  return isLoading ? <LoadingAnimation /> : <>{children}</>;
};

export default WithLoadingAnimation;
