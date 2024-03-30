import './FileBrowser.css';

import { DirEntryTable, FileViewer } from '../components';
import { useGetEntryChildrenQuery } from '../features/api/apiSlice';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
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

  if (isError) {
    return 'error';
  }

  let disabled = false;
  if (isLoading || isFetching || children === undefined) {
    disabled = true;
  }

  console.log(children);

  const handleOnEntryClick = (e: EntryMetadata) => {
    if (e.kind === 'file') {
      navigate(`?file=${e.basename}`);
      return;
    }

    if (e.kind === 'dir') {
      navigate(`${path}${e.basename}/`, { relative: 'path' });
      return;
    }
  };

  let fileViewer: React.ReactElement | null = null;

  const [searchParams, setSearchParams] = useSearchParams();
  const fileParam = searchParams.get('file');

  if (fileParam !== null) {
    const url = `/api/entries/${path}${fileParam}?alt=raw`;
    console.log(url);
    fileViewer = (
      <FileViewer
        url={url}
        onCloseClick={() => setSearchParams('')}
      />
    );
  }

  return (
    <div className='file-browser'>
      <DirEntryTable
        disabled={disabled}
        entries={children?.children}
        onEntryClick={handleOnEntryClick}
      />
      {fileViewer}
    </div>
  );
};

export default FileBrowser;
