export const formatTimeDifference = (timestamp) => {
  const now = new Date();
  const targetDate = new Date(timestamp);
  const diffInMilliseconds = now - targetDate;

  const minutes = Math.floor(diffInMilliseconds / (60 * 1000));
  const hours = Math.floor(diffInMilliseconds / (60 * 60 * 1000));
  const days = Math.floor(diffInMilliseconds / (24 * 60 * 60 * 1000));
  const months = Math.floor(diffInMilliseconds / (30 * 24 * 60 * 60 * 1000));
  const years = Math.floor(diffInMilliseconds / (365 * 24 * 60 * 60 * 1000));

  if (minutes < 60) {
    return `${minutes} min${minutes !== 1 ? 's' : ''} ago`;
  } else if (hours < 24) {
    return `${hours} h ago`;
  } else if (days < 30) {
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  } else if (months < 12) {
    return `${months} month${months !== 1 ? 's' : ''} ago`;
  } else {
    return `${years} year${years !== 1 ? 's' : ''} ago`;
  }
};