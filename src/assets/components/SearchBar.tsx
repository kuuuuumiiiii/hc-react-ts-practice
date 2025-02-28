type Props = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

const SearchBar = ({ searchQuery, setSearchQuery }: Props) => {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="検索..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchBar;