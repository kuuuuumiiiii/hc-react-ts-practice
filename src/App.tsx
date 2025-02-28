import { useState } from 'react'
import './App.css'
import ToggleButtons from './assets/components/ToggleButtons';
import SearchBar from './assets/components/SearchBar';
import UserTable from './assets/components/UserTable';
import PostTable from './assets/components/PostTable';


function App() {
  const [view, setView] = useState<"users" | "posts">("users"); // 表示切り替え
  const [searchQuery, setSearchQuery] = useState(""); // 検索クエリ

  return (
    <div className="container mt-4">
      <h1 className="mb-3">データ一覧</h1>
      <ToggleButtons view={view} setView={setView} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {view === "users" ? <UserTable searchQuery={searchQuery} /> : <PostTable searchQuery={searchQuery} />}
    </div>
  );
}
export default App;
