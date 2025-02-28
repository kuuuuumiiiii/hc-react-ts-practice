type Props = {
  view: "users" | "posts";
  setView: (view: "users" | "posts") => void;
};

const ToggleButtons = ({ view, setView }: Props) => {
  return (
    <div className="btn-group mb-3">
      <button className={`btn btn-primary ${view === "users" ? "active" : ""}`} onClick={() => setView("users")}>
        ユーザー一覧
      </button>
      <button className={`btn btn-primary ${view === "posts" ? "active" : ""}`} onClick={() => setView("posts")}>
        投稿一覧
      </button>
    </div>
  );
};

export default ToggleButtons;