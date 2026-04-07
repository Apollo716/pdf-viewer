import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import PDFViewer from './components/PDFViewer';
import { generateDummyDocuments } from './utils/generateDummyPDF';
import type { DummyDocument } from './utils/generateDummyPDF';
import './App.css';

export default function App() {
  const [documents, setDocuments] = useState<DummyDocument[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<DummyDocument | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    generateDummyDocuments().then((docs) => {
      setDocuments(docs);
      setSelectedDoc(docs[0] ?? null);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-brand">
          <span className="header-icon">📑</span>
          <h1>PDF Viewer</h1>
        </div>
        {selectedDoc && (
          <div className="header-doc-info">
            <span className="header-doc-title">{selectedDoc.title}</span>
            <span className="header-doc-author">by {selectedDoc.author}</span>
          </div>
        )}
      </header>

      <div className="app-body">
        <Sidebar
          documents={documents}
          selectedId={selectedDoc?.id ?? null}
          onSelect={setSelectedDoc}
          isLoading={isLoading}
        />
        <main className="main-content">
          <PDFViewer document={isLoading ? null : selectedDoc} />
        </main>
      </div>
    </div>
  );
}
