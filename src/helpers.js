export const className = (...classNames) => {
  return {
    className: classNames.filter(Boolean).join(" "),
  };
};

export const sliceArray = (images, length) => {
  const columns = [];
  if (length !== 0) {
    for (let i = 0; i < images.length; i = i + length) {
      const column = images.slice(i, i + length);
      columns.push(column);
    }
    return columns;
  }
};
