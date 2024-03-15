/// Uses Base 10 International Electrotechnical Commission (IEC) definition.
const formatBytes = (bytes: number): string => {
  function formatBytesInner(
    bytes: number,
    unitPow: number,
    unit: string,
  ): string {
    const c = (bytes / (1000 ** unitPow)).toFixed(1);
    return `${c} ${unit}`;
  }

  if (bytes == 1) {
    return '1 byte';
  }

  if (bytes < 1_000) {
    return `${bytes} bytes`;
  }

  if (bytes < 1_000 ** 2) {
    return formatBytesInner(bytes, 1, 'kB');
  }

  if (bytes < 1_000 ** 3) {
    return formatBytesInner(bytes, 2, 'MB');
  }

  if (bytes < 1_000 ** 4) {
    return formatBytesInner(bytes, 3, 'GB');
  }

  if (bytes < 1_000 ** 5) {
    return formatBytesInner(bytes, 4, 'TB');
  }

  if (bytes < 1_000 ** 6) {
    return formatBytesInner(bytes, 5, 'PB');
  }

  if (bytes < 1_000 ** 7) {
    return formatBytesInner(bytes, 6, 'EB');
  }

  if (bytes < 1_000 ** 8) {
    return formatBytesInner(bytes, 7, 'ZB');
  }

  if (bytes < 1_000 ** 9) {
    return formatBytesInner(bytes, 8, 'YB');
  }

  if (bytes < 1_000 ** 10) {
    return formatBytesInner(bytes, 9, 'RB');
  }

  if (bytes < 1_000 ** 11) {
    return formatBytesInner(bytes, 10, 'QB');
  }

  return formatBytesInner(bytes, 10, 'QB');
};

export { formatBytes };
