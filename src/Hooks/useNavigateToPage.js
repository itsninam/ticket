import { useNavigate } from "react-router";

const useNavigateToPage = () => {
  const navigate = useNavigate();

  const navigateToPage = (route) => {
    navigate(route);
  };

  return { navigateToPage };
};

export default useNavigateToPage;
