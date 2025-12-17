import { useState, useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import api from "../Hooks/api.js";

const InfinatesQuery = () => {
  const loadmoreRef = useRef(null);
  const scrollRef = useRef(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage,isFetching } =
    useInfiniteQuery({
      queryKey: ["User-Infinite"],
      queryFn: async ({ pageParam = 1 }) => {
        const res = await api.get(
          `https://localhost:7181/api/Todo/V1/UserDtails?Page=${pageParam}&PageSize=30`
        );
        return res.data;
      },
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.data.length === 30 ? allPages.length + 1 : undefined;
      },
    });

    console.log(data);

  useEffect(() => {
    if (!hasNextPage) return;
    if (!loadmoreRef.current || !scrollRef.current) return;

    const Observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    });

    Observer.observe(loadmoreRef.current);

    return () => Observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage, data?.pages.length]);

  return (
    <>
      <div className="card" style={{ width: "90%", margin: "2.5%" }}>
        <div className="card-header d-flex justify-content-center">
          <p>Infinite Query</p>
          {isFetchingNextPage && setTimeout(()=>{<small>Fetching...</small>},5000)}
        </div>
        <div
          className="card-body"
          ref={scrollRef}
          style={{ height: "500px", overflow: "auto" }}
        >
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
              {
                data?.pages.map((page,pageIndex) =>(
                  page.data.map((user) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.userName}</td>
                      <td>{user.email}</td>
                      <td>{user.mobileNo}</td>
                    </tr>
                  ))
                ))
              }
            </tbody>
          </table>
          <div ref={loadmoreRef} style={{ height: "20px" }}></div>
          <div>{isFetching && setTimeout(()=>{<span>Loading ....</span>},5000)}</div>
        </div>
      </div>
    </>
  );
};

export default InfinatesQuery;
