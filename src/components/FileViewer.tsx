import { useEffect, useState } from 'react';
import './FileViewer.css';
import { Button } from './Button';

export interface FileViewerProps {
  url: string;
  coverUrl?: string;
  onCloseClick: () => void;
}

export const FileViewer = (
  { url, onCloseClick, coverUrl }: FileViewerProps,
) => {
  const { registry, error } = useGetRegistry(url);

  const content = (() => {
    if (error !== undefined) {
      return <h3>{error}</h3>;
    }

    if (registry === undefined) {
      return <h3>loading...</h3>;
    }

    return <MediaComponent url={url} registry={registry} coverUrl={coverUrl} />;
  })();

  return (
    <div className='file-viewer'>
      <header>
        <Button onClick={onCloseClick}>Close</Button>
      </header>
      <div className='media-container'>
        {content}
      </div>
    </div>
  );
};

interface MediaComponentProps {
  registry: string;
  url: string;
  coverUrl?: string;
}

const MediaComponent = (
  { registry, url, coverUrl = '/cover.jpg' }: MediaComponentProps,
) => {
  if (registry === 'video') {
    return <video autoPlay controls src={url} />;
  }

  // const ref = ;

  if (registry === 'audio') {
    return (
      <>
        <img
          src={coverUrl}
          onError={({ currentTarget }) => {
            if (!currentTarget.src.endsWith('/cover.jpg')) {
              currentTarget.src = '/cover.jpg';
            }
          }}
        />
        <audio autoPlay controls src={url} />
      </>
    );
  }

  if (registry === 'image') {
    return <img src={url} />;
  }

  return <h3>{`registry "${registry}" is not supported`}</h3>;
};

const useGetRegistry = (url: string) => {
  const [registry, setRegistry] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    const controller = new AbortController();

    const timeoutId = setTimeout(
      () => controller.abort(new Error('timed out')),
      2500,
    );

    fetch(url, { method: 'HEAD', signal: controller.signal })
      .then((r) => {
        if (r.status === 404) {
          throw new Error('not found');
        }

        if (r.status !== 200) {
          throw new Error('response status is not 200');
        }

        const contentType = r.headers.get('Content-Type');

        if (contentType === null) {
          throw new Error('server did not respond with Content-Type header');
        }

        const responseRegistry = contentType.split('/')[0];

        if (
          responseRegistry !== 'video' && responseRegistry !== 'audio' &&
          responseRegistry !== 'image'
        ) {
          throw new Error('Content-Type is not supported');
        }

        setRegistry(responseRegistry);
      })
      .catch((e: Error) => {
        if (e.message === 'useEffect clear') {
          return;
        }

        setError(`Error: ${e.message}`);
      });

    return () => {
      clearTimeout(timeoutId);
      controller.abort(new Error('useEffect clear'));
    };
  }, [url]);

  return { registry, error };
};

// export const FileViewer = ({ url }: FileViewerProps) => {
//   const [registry, setRegistry] = useState<string | undefined>();
//   const [error, setError] = useState<string | undefined>();

//   if (url === undefined) {
//     setError('url is undefined');
//     return;
//   }

//   useEffect(() => {
//     const controller = new AbortController();

//     const timeoutId = setTimeout(
//       () => controller.abort(new Error('timed out')),
//       2500,
//     );

//     fetch(url, { method: 'HEAD', signal: controller.signal })
//       .then((r) => {
//         if (r.status === 404) {
//           throw new Error('not found');
//         }

//         if (r.status !== 200) {
//           throw new Error('response status is not 200');
//         }

//         const contentType = r.headers.get('Content-Type');

//         if (contentType === null) {
//           throw new Error('server did not respond with Content-Type header');
//         }

//         const responseRegistry = contentType.split('/')[0];

//         if (
//           responseRegistry !== 'video' && responseRegistry !== 'audio' &&
//           responseRegistry !== 'image'
//         ) {
//           throw new Error('Content-Type is not supported');
//         }

//         setRegistry(responseRegistry);
//       })
//       .catch((e: Error) => {
//         if (e.message === 'useEffect clear') {
//           return;
//         }

//         setError(`Error: ${e.message}`);
//       });

//     return () => {
//       clearTimeout(timeoutId);
//       controller.abort(new Error('useEffect clear'));
//     };
//   }, [url]);

//   const content = (() => {
//     if (error !== undefined) {
//       console.log('error is not undefined');
//       return <h3>{error}</h3>;
//     }

//     if (registry === undefined) {
//       return <h3>loading...</h3>;
//     }

//     return <MediaComponent url={url} registry={registry} />;
//   })();

//   return (
//     <div className='file-viewer'>
//       {content}
//     </div>
//   );
// };
