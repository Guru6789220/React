import { useState, useEffect, useTransition, useDeferredValue } from "react";
import axios from "axios";

// Custom debounce hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

const Search = () => {
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const debouncedInput = useDebounce(input, 1000); // wait 500ms after typing stops
  const deferredValue = useDeferredValue(input); // smooth rendering
  const [isPending, startTransition] = useTransition();

  // Fetch users
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3500/user");
      setUsers(response.data);
      setList(response.data);
    };
    fetchData();
  }, []);

  // Filter users when debounced input changes
  useEffect(() => {
    startTransition(() => {
        console.log(deferredValue);
      const filteredData = users.filter(item =>
        item.name.toLowerCase().includes(deferredValue.toLowerCase()) ||
        item.username.toLowerCase().includes(deferredValue.toLowerCase()) ||
        item.email.toLowerCase().includes(deferredValue.toLowerCase()) ||
        item.phone.toLowerCase().includes(deferredValue.toLowerCase())
      );
      setList(filteredData);
    });
  }, [deferredValue, users]);

  const handleChange = (e) => setInput(e.target.value);

  return (
    <div className="card mt-2" style={{ width: "90%" }}>
      <div className="card-body">
        <div className="row mt-1 mb-2">
          <div className="col-lg-4 d-flex justify-content-end">
            <input
              type="text"
              id="Search"
              className="form-control"
              onChange={handleChange}
              placeholder="Search users..."
            />
          </div>
        </div>
        <br />
        <div className="row mt-1 mb-2">
          <div className="col-lg-12">
            <div style={{height:"auto",maxHeight:"300px",overflow:"auto"}}>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(list) &&
                  list.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {isPending && <p>Updating results...</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;