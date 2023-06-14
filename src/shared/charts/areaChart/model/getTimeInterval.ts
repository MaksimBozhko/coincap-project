export function getCurrentTimeinterval(day: number) {
  const currentTime = Date.now();
  const timeHoursAgo = currentTime - day * 24 * 60 * 60 * 1000; // 24 часа в миллисекундах

  return {
    currentTime,
    timeHoursAgo
  };
}