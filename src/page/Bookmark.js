import React from "react";
import { useSelector } from "react-redux";
import CompanyInfo from "../components/employment2/CompanyInfo";
const Bookmark = () => {
  const bookmarks = useSelector((state) => state.bookmark);
  return (
    <>
      <div className="companyCard" style={{ marginTop: 100 }}>
        <h2 className="bookmark_h2">북마크</h2>
        <ul className="companyCard_ul">
          {bookmarks.map((bookmark) => (
            <CompanyInfo
              key={bookmark.id}
              company={bookmark}
              isBookmarked={true}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Bookmark;
