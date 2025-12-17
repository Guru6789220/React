import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../Hooks/api.js";

const Pagination = () => {
  const [page, setPage] = useState(1);
  const pageSize = 30;

  const { data, isFetching } = useQuery({
    queryKey: ["users", page],
    queryFn: async () => {
      const res = await api.get(
        `https://localhost:7181/api/Todo/V1/UserDtails?Page=${page}&PageSize=${pageSize}`
      );
      return res.data;
    },
    placeholderData: (prev) => prev, // 🔥 KEY FIX
    staleTime: 5000 * 60,
    refetchOnWindowFocus: false
  });

  const users = data?.data || [];

  return (
    <div className="card" style={{ width: "90%", margin: "2.5%" }}>
      <div className="card-header d-flex justify-content-center">
        <p>Pagination</p>
        {isFetching && <small>Fetching...</small>}
      </div>

      <div className="card-body">
        <div style={{height:"auto",maxHeight:"400px",overflow:"auto"}}>
           <table className="table table-bordered table-striped text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Mobile No</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.sL_NO}>
                <td>{u.name}</td>
                <td>{u.userName}</td>
                <td>{u.email}</td>
                <td>{u.mobileNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        
      </div>

      <div className="card-footer d-flex justify-content-end gap-2 pe-2">
        <button className="rounded-1"
          disabled={page === 1 || isFetching}
          onClick={() => setPage((p) => p - 1)}
        >
          Prev
        </button>
        <button className="rounded-1"
          disabled={users.length < pageSize || isFetching}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
