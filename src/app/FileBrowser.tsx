import './FileBrowser.css';

import { DirEntryTable, FileViewer } from '../components';
import { useGetEntryChildrenQuery } from '../features/api/apiSlice';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { EntryMetadata } from '../types';

const FileBrowser = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

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
      setSearchParams({ file: e.basename });
      return;
    }

    if (e.kind === 'dir') {
      navigate(`${path}${e.basename}/`, { relative: 'path' });
      return;
    }
  };

  let fileViewer: React.ReactElement | null = null;

  const fileParam = searchParams.get('file');
  if (fileParam !== null) {
    const url = `/api/entries/${path}${fileParam}?alt=raw`;
    const coverUrl = `/api/entries/${path}${fileParam}?alt=cover`;
    console.log(url);
    fileViewer = (
      <FileViewer
        url={url}
        coverUrl={coverUrl}
        onCloseRequested={() => navigate(-1)}
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
