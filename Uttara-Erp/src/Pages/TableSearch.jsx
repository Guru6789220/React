import { useState,useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../Hooks/api.js";

const TableSearch = () => {
  const [page, setPage] = useState(1);
  const [search, SetSearch] = useState("");
  const pageSize = 30;
  const[filteredData, setFilteredData] = useState([]);

  const { data, isFetching } = useQuery({
    queryKey: ["users", page],
    queryFn: async () => {
      const res = await api.get(
        `https://localhost:7181/api/Todo/V1/UserDtails?Page=${page}&PageSize=${pageSize}`
      );
      console.log(res.data.data);
      setFilteredData(res.data.data);
      return res.data;
    },
    placeholderData: (prev) => prev,
    staleTime: 5000 * 60,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
  setFilteredData(data?.data || []);
}, [data]);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    SetSearch(value);
    if(value === ""){
      setFilteredData(data?.data || []);
    }
    else{
        const filter=filteredData.filter((i)=>
            i.name.toLowerCase().includes(value) ||
            i.userName.toLowerCase().includes(value) ||
            i.email.toLowerCase().includes(value) ||
            i.mobileNo.toLowerCase().includes(value)
        );
        setFilteredData(filter);
 }
  };

  return (
    <>
      <div className="card" style={{ width: "90%", margin: "2.5%" }}>
        <div className="card-header d-flex justify-content-center">
          <p>Table Search</p>
        </div>
        <div className="card-body">
          <div className="row mt-2 mb-2 d-flex justify-content-end">
            <div className="col-lg-4 ">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                style={{ height: "auto", maxHeight: "400px", overflow: "auto" }}
              >
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>User Name</th>
                      <th>Email</th>
                      <th>Mobile No</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(filteredData) &&
                      filteredData.map((u) => (
                        <tr key={u.sL_NO}>
                          <td>{u.name}</td>
                          <td>{u.userName}</td>
                          <td>{u.email}</td>
                          <td>{u.mobileNo}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-end gap-2">
          <button
            className="btn btn-secondary"
             disabled={page === 1 || isFetching}
            onClick={() => setPage((p) => p - 1)}
          >
            Previous
          </button>
          <button
            className="btn btn-secondary"
            onClick={(e) => setPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default TableSearch;
