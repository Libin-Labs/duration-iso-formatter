export function formatIsoDuration(totalSeconds: number): string {
  if (!Number.isSafeInteger(totalSeconds) || totalSeconds < 0)
    throw new RangeError('Expected nonnegative safe integer seconds');
  if (totalSeconds === 0) return 'PT0S';
  const days = Math.floor(totalSeconds / 86400);
  let n = totalSeconds % 86400;
  const hours = Math.floor(n / 3600);
  n %= 3600;
  const minutes = Math.floor(n / 60),
    seconds = n % 60;
  return (
    (days ? 'P' + days + 'D' : 'P') +
    (hours || minutes || seconds
      ? 'T' +
        (hours ? hours + 'H' : '') +
        (minutes ? minutes + 'M' : '') +
        (seconds ? seconds + 'S' : '')
      : '')
  );
}
