import { Oval } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <Oval
      ariaLabel="loading-indicator"
      height={50}
      width={50}
      strokeWidth={4}
      strokeWidthSecondary={3}
      color="#6c757d"
      secondaryColor="#adb5bd"
    />
  );
};

export default LoadingSpinner;
