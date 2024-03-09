class DirEntry {
    id: number;
    name: string;
    size: number;

    constructor(id: number, name: string, size: number) {
        this.id = id;
        this.name = name;
        this.size = size;
    }
}

function getTestEntries(count: number): DirEntry[] {
    const entries: DirEntry[] = [];

    for (let i = 0; i < count; i++) {
        const entry = new DirEntry(i, `entry ${i}`, 2 ** i);
        entries.push(entry)
    }

    return entries
}

export { DirEntry, getTestEntries }
export default DirEntry
