import { useState, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import type { DummyDocument } from '../utils/generateDummyPDF';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

interface PDFViewerProps {
  document: DummyDocument | null;
}

export default function PDFViewer({ document: doc }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [isLoading, setIsLoading] = useState(false);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
    setIsLoading(false);
  }, []);

  const onDocumentLoadStart = useCallback(() => {
    setIsLoading(true);
  }, []);

  const goToPrevPage = () => setPageNumber((p) => Math.max(1, p - 1));
  const goToNextPage = () => setPageNumber((p) => Math.min(numPages, p + 1));
  const zoomIn = () => setScale((s) => Math.min(2.0, +(s + 0.1).toFixed(1)));
  const zoomOut = () => setScale((s) => Math.max(0.5, +(s - 0.1).toFixed(1)));
  const resetZoom = () => setScale(1.0);

  if (!doc) {
    return (
      <div className="viewer-empty">
        <div className="viewer-empty-icon">📄</div>
        <p>Select a document from the sidebar to view it</p>
      </div>
    );
  }

  return (
    <div className="pdf-viewer">
      <div className="pdf-controls">
        <div className="controls-left">
          <button onClick={goToPrevPage} disabled={pageNumber <= 1} title="Previous page">
            ‹ Prev
          </button>
          <span className="page-indicator">
            Page <strong>{pageNumber}</strong> of <strong>{numPages}</strong>
          </span>
          <button onClick={goToNextPage} disabled={pageNumber >= numPages} title="Next page">
            Next ›
          </button>
        </div>
        <div className="controls-right">
          <button onClick={zoomOut} disabled={scale <= 0.5} title="Zoom out">
            −
          </button>
          <button onClick={resetZoom} className="zoom-label" title="Reset zoom">
            {Math.round(scale * 100)}%
          </button>
          <button onClick={zoomIn} disabled={scale >= 2.0} title="Zoom in">
            +
          </button>
        </div>
      </div>

      <div className="pdf-canvas-area">
        {isLoading && (
          <div className="loading-overlay">
            <div className="spinner" />
            <p>Loading document…</p>
          </div>
        )}
        <Document
          file={doc.blob}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadStart={onDocumentLoadStart}
          loading=""
          error={
            <div className="pdf-error">
              <p>Failed to load document.</p>
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={true}
            renderAnnotationLayer={true}
          />
        </Document>
      </div>
    </div>
  );
}
