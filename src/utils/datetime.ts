// "YYYY-MM-DD HH:MM"
export const formatDate = (d: Date) => {
  const hours = padZero(d.getHours(), 2);
  const minutes = padZero(d.getMinutes(), 2);

  const current = new Date();
  if (current.toDateString() === d.toDateString()) {
    return `${hours}:${minutes}`;
  }

  const year = d.getFullYear();
  const month = padZero(d.getMonth(), 2);
  const day = padZero(d.getDay(), 2);

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

const padZero = (num: number, length: number) => {
  return String(num).padStart(length, '0');
};

export const formatUnixTimestamp = (seconds: number) => {
  const d = new Date(seconds * 1000);
  return formatDate(d);
};
