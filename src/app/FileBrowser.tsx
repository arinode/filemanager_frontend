import './FileBrowser.css';

import { DirEntryTable } from '../components';
import { useGetEntryChildrenQuery } from '../features/api/apiSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { EntryMetadata } from '../types';

const FileBrowser = () => {
  const navigate = useNavigate();

  const params = useParams();
  let path = params['*'] ?? '';
  if (path != '' && !path.endsWith('/')) {
    path += '/';
  }

  const { data: children, isLoading, isFetching, isError } =
    useGetEntryChildrenQuery(path);

  if (isLoading || isFetching) {
    return 'loading';
  }

  if (isError || children === undefined) {
    return 'error';
  }

  console.log(children);

  const handleOnEntryClick = (e: EntryMetadata) => {
    navigate(`${path}${e.basename}/`, { relative: 'path' });
  };

  return (
    <div className='file-browser'>
      <DirEntryTable
        entries={children.children}
        onEntryClick={handleOnEntryClick}
      />
    </div>
  );
};

export default FileBrowser;
