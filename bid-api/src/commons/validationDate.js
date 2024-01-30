const isValidDateFormat = (dateString) => {
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;

  return regex.test(dateString);
};

module.exports = isValidDateFormat;