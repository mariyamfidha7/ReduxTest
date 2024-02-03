import React, { useContext, useEffect, useState, useRef } from "react";
import { Auth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
 
const DataTablePage = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const ref = useRef(null);
 
  const { loggedIn } = useContext(Auth);

  const navigate = useNavigate();

  const handleSearch=(e)=>{
    navigate(`/:${e.target.value}`)
  }
 
  useEffect(() => {
    if (!ref.current) {
      const dummyData = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        name: `item ${index + 1}`,
      }));
 
      setData(dummyData);
      ref.current = true;
    } else if (!searchTerm) {
      const dummyData = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        name: `item ${index + 1}`,
      }));
 
      setData(dummyData);
    } else {
      setData((prev) => prev.filter((item) => item.name.includes(searchTerm)));
    }
  }, [searchTerm]);
 
  return (
    <div>
      {loggedIn && <h3> You are loggedIn</h3>}
 
      <h1>Data Table Page</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => handleSearch(e)
            // setSearchTerm(e.target.value)
        }
      />
      {/* <button onClick={handleSearch}>Search</button> */}
 
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
 
export default DataTablePage;
 