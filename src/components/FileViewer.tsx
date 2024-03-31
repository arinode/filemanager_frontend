import { forwardRef, useEffect, useRef, useState } from 'react';
import './FileViewer.css';
import { Button } from './Button';

export interface FileViewerProps {
  url: string;
  coverUrl?: string;
  onCloseRequested: () => void;
}

export const FileViewer = (
  { url, onCloseRequested, coverUrl }: FileViewerProps,
) => {
  const { registry, error } = useGetRegistry(url);

  const mediaElementRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    mediaElementRef.current?.focus();
  });

  const content = (() => {
    if (error !== undefined) {
      return <h3>{error}</h3>;
    }

    if (registry === undefined) {
      return <h3>loading...</h3>;
    }

    return (
      <MediaComponent
        ref={mediaElementRef}
        url={url}
        registry={registry}
        coverUrl={coverUrl}
      />
    );
  })();

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(e.key);
    const current = mediaElementRef.current;

    if (current === null) {
      return;
    }

    if (e.key === 'p') {
      current.paused ? current.play() : current.pause();
    }

    if (['q', 'Escape'].includes(e.key)) {
      onCloseRequested();
    }
  };

  const handleOnClick = (_: React.MouseEvent<HTMLDivElement>) => {
    mediaElementRef.current?.focus();
  };

  return (
    <div
      onKeyDown={handleOnKeyDown}
      onClick={handleOnClick}
      tabIndex={-1}
      className='file-viewer'
    >
      <header>
        <Button onClick={onCloseRequested}>Close</Button>
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

const MediaComponent = forwardRef<HTMLVideoElement, MediaComponentProps>((
  { registry, url, coverUrl = '/cover.jpg' },
  ref,
) => {
  if (registry === 'video') {
    return <video ref={ref} autoPlay controls src={url} />;
  }

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
        <audio ref={ref} autoPlay controls src={url} />
      </>
    );
  }

  if (registry === 'image') {
    return <img src={url} />;
  }

  return <h3>{`registry "${registry}" is not supported`}</h3>;
});

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
