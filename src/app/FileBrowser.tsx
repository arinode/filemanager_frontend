import './FileBrowser.css';

import { DirEntryTable } from '../components';
import { useGetEntryChildrenQuery } from '../features/api/apiSlice';

const FileBrowser = () => {
  const { data: children, isLoading, isFetching, isError } =
    useGetEntryChildrenQuery(
      '/',
    );

  console.log(children);

  if (isLoading || isFetching || children === undefined) {
    return 'loading';
  }

  if (isError) {
    return 'error';
  }

  return (
    <div className='file-browser'>
      <DirEntryTable entries={children.children} />
    </div>
  );
};

export default FileBrowser;
