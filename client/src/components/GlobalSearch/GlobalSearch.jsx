import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import "./GlobalSearch.css";

function GlobalSearch() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = () => {
    if (query.trim() === "") return;
    console.log("Đang tìm kiếm:", query);
    // TODO: gọi API hoặc điều hướng trang kết quả
  };

  let rightIcon = faAnglesRight;
  if (!isFocused && query.trim() !== "") {
    rightIcon = faMagnifyingGlass;
  }

  const containerClass =
    query.trim() !== "" ? "global-search has-content" : "global-search";

  return (
    <div className={containerClass}>
      <div className="global-search-wrapper">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="search-icon-left"
        />
        <input
          type="text"
          placeholder="Nhập từ khóa cần tìm kiếm"
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <FontAwesomeIcon
          icon={rightIcon}
          className="search-icon-right"
          onClick={handleSearch}
        />
      </div>
    </div>
  );
}

export default GlobalSearch;
