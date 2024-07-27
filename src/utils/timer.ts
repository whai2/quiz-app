export const timer = (start: Date | null, end: Date | null) => {
  if (start === null || end === null) {
    throw new Error('Start date and end date must be provided.');
  }

  const diffInMilliseconds = Math.abs(end.getTime() - start.getTime());
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  
  const hours = diffInHours;
  const minutes = diffInMinutes % 60;
  const seconds = diffInSeconds % 60;
  
  return { hours, minutes, seconds };
}