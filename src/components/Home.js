import { useState, useEffect } from "react";
import axios from "axios";
export default function Home(){
     
  const [adduser, setAdduser] = useState(false);
  const [displayuser,setDisplayuser]=useState(false);

  const [formData, setFormData] = useState({
    id:"",
    username: "",
    email: "",
  });
  const [users, setUsers] = useState([]);

useEffect(() => {
  if (displayuser) {
    axios.get("http://localhost:9091/users").then((res) => {
      setUsers(res.data);
    });
  }
}, [displayuser]);


 const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData)
      const response = await axios.post("http://localhost:9091/users", formData);
      
    } catch (e) {
      
    }
  };


  return (
    <div className="landing-container">
      {!adduser && (
        <div className="landing-content">
          <h1>Welcome to our Website</h1>
          <button className="open-login-btn" onClick={() => setAdduser(true)}>
            Adduser
          </button>
        </div>
      )}
      {!displayuser && (
        <div className="landing-content">
          <button className="open-login-btn" onClick={() => setDisplayuser(true)}>
            Displayuser
          </button>
        </div>
      )}

      {adduser && (
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h2>Add user</h2>

            <div className="input-field">
            <input
              type="number"
              id="id"
              name="id"
              placeholder=" "
              onChange={handleChange}
              required
            />
            <label htmlFor="id">Enter Id number</label>
          </div>

            <div className="input-field">
  <input
    type="text"
    id="username"
    name="username"
    placeholder=" "
    onChange={handleChange}
    required
  />
  <label htmlFor="username">Enter your name</label>
</div>
<div className="input-field">
  <input
    type="email"
    id="email"
    name="email"
    placeholder=" "
    onChange={handleChange}
    required
  />
  <label htmlFor="email">Enter your email</label>
</div>


            <button type="submit">Adduser</button>
            <button
              type="button"
              className="close-btn"
              onClick={() => {
                setAdduser(false);
                
              }}
            >
              Cancel
            </button>
          </form>

          
        </div>
      )}


      {displayuser && (
  <div className="wrapper">
    <h2>All Users</h2>
    <button
      className="close-btn"
      onClick={() => setDisplayuser(false)}
    >
      Close
    </button>

    <table className="table table-striped" cellPadding="6" style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr className="table-dark text-white">
                            <th>ID</th><th>userName</th><th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(u => (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.username}</td>
                                <td>{u.email}</td>
            
                            </tr>
                        ))}
                    </tbody>
                </table>
  </div>
)}

    </div>
  );
}

