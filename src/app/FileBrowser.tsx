import './FileBrowser.css';

import { DirEntryTable } from '../components';
import { useGetEntryChildrenQuery } from '../features/api/apiSlice';
import { useParams } from 'react-router-dom';

const FileBrowser = () => {
  const params = useParams();
  const path = params['*'] ?? '';

  const { data: children, isLoading, isFetching, isError } =
    useGetEntryChildrenQuery(path);

  console.log(children);

  if (isLoading || isFetching) {
    return 'loading';
  }

  if (isError || children === undefined) {
    return 'error';
  }

  return (
    <div className='file-browser'>
      <DirEntryTable entries={children.children} />
    </div>
  );
};

export default FileBrowser;
