import React, { useState, useEffect } from 'react';
import './Hw3.css';

const ExhibitionDataGrid = () => {
  const [exhibits, setExhibits] = useState([]);
  const [filteredExhibits, setFilteredExhibits] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6"
        );
        const data = await response.json();
        setExhibits(data);
        setFilteredExhibits(data);
      } catch (error) {
        console.error("資料擷取錯誤:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    if (exhibits.length > 0) {
      const filtered = exhibits.filter((item) =>
        item.title.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      setFilteredExhibits(filtered);
      setCurrentPage(1); 
    }
  }, [searchKeyword, exhibits]);

  const nextPage = () => {
    const totalPages = Math.ceil(filteredExhibits.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const totalPages = Math.ceil(filteredExhibits.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredExhibits.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="container">
      <div className="header">
        <h1>景點觀光展覽資訊</h1>
        <input
          type="text"
          className="search-input"
          placeholder="請輸入關鍵字"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </div>

      <div className="table-container">
        <table className="exhibition-table">
          <thead>
            <tr>
              <th>名稱</th>
              <th>地點</th>
              <th>票價</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => {
              const location = item.showInfo && item.showInfo[0] ? item.showInfo[0].location : 'N/A';
              const price = item.showInfo && item.showInfo[0] ? item.showInfo[0].price : 'N/A';
              
              return (
                <tr 
                  key={index} 
                  className={index % 2 === 0 ? 'even-row' : ''}
                >
                  <td>{item.title}</td>
                  <td>{location}</td>
                  <td>{price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button 
          className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          上一頁
        </button>
        <span className="page-info">{currentPage} / {totalPages} 頁</span>
        <button 
          className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          下一頁
        </button>
      </div>
    </div>
  );
};

export default ExhibitionDataGrid;