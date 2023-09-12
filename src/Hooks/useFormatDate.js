const useFormatDate = () => {
  const formatDate = (date) => {
    let month = new Date(date).toLocaleString("default", { month: "short" });
    let day = new Date(date).getDate();

    return `${month} ${day}`;
  };

  return { formatDate };
};

export default useFormatDate;
