import { useEffect, useState } from "react";

const colorPicker = () => {
  const [color, setcolor] = useState("");
const[posts,setPosts]=useState([]);
  useEffect(() => {
    const FetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw Error("did not revived Data");
        } else {
          const res = await response.json();
          console.log(res);
          setPosts(res);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    FetchPosts();
  }, []);

  return (
    <>
      <div className="card" style={{ backgroundColor: color }}>
        <div className="card-body">
          <p>{color == "" ? "Enter Value" : color}</p>
        </div>
      </div>

      <br></br>
      <div className="row">
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Value"
            value={color}
            onChange={(e) => setcolor(e.target.value)}
          />
        </div>
        <div className="col-lg-2">
          <input
            type="color"
            className="form-control p-0 m-0"
            placeholder="Select Color"
            value={color}
            onChange={(e) => setcolor(e.target.value)}
          />
        </div>
      </div>

      <br />
      <hr />
      <div>
        <h3>Posts</h3>
        {
            posts.length===0?<p>Loadding....</p>:(
                <ul>
                {
                    posts.map((item)=>(
                        <li key={item.id}>{item.title}</li>
                    ))
                }
                </ul>
            )
        }
      </div>
    </>
  );
};

export default colorPicker;
