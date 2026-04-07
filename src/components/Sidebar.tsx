import type { DummyDocument } from '../utils/generateDummyPDF';

interface SidebarProps {
  documents: DummyDocument[];
  selectedId: string | null;
  onSelect: (doc: DummyDocument) => void;
  isLoading: boolean;
}

const ICONS: Record<string, string> = {
  'doc-1': '📊',
  'doc-2': '📋',
  'doc-3': '🗺️',
};

export default function Sidebar({ documents, selectedId, onSelect, isLoading }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Documents</h2>
        <span className="doc-count">{documents.length}</span>
      </div>

      {isLoading ? (
        <div className="sidebar-loading">
          <div className="spinner" />
          <p>Generating documents…</p>
        </div>
      ) : (
        <ul className="doc-list">
          {documents.map((doc) => (
            <li
              key={doc.id}
              className={`doc-item ${selectedId === doc.id ? 'selected' : ''}`}
              onClick={() => onSelect(doc)}
            >
              <span className="doc-icon">{ICONS[doc.id] ?? '📄'}</span>
              <div className="doc-info">
                <span className="doc-title">{doc.title}</span>
                <span className="doc-meta">
                  {doc.author} · {doc.pageCount}p
                </span>
                <span className="doc-date">{doc.date}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
