type DirEntry = {
  id: number;
  name: string;
  size: number;
};

const getTestEntries = (count: number): DirEntry[] => {
  const entries: DirEntry[] = [];

  for (let i = 0; i < count; i++) {
    const entry = { id: i, name: `entry ${i}`, size: 2 ** i };
    entries.push(entry);
  }

  return entries;
};

export { getTestEntries };
