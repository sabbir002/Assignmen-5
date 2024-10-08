export const getPublishingDate = (fromDate) => {
  const dateObject = new Date(fromDate);

  const date = dateObject.toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return date;
};

export const getFirstLetterOfName = (firstName) => {
  return firstName.charAt(0).toUpperCase();
};
