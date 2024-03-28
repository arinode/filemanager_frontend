export type EntryMetadata = {
  basename: string;
  size: number;
  isSymlink: boolean;
  kind: 'file' | 'dir' | 'other';
  created: number;
  modified: number;
};
