export type EntryMetadata = {
  basename: string;
  size: number;
  isSymlink: boolean;
  kind: EntryKind;
  created: number;
  modified: number;
};

export type EntryKind = 'file' | 'dir' | 'other';

export type EntryChildren = {
  prefix: string;
  children: EntryMetadata[];
};
