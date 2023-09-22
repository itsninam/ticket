const useFormatTime = () => {
  const formatTime = (time) => {
    const newTime = new Date(time).toLocaleTimeString("en-us", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return newTime;
  };

  return { formatTime };
};

export default useFormatTime;
