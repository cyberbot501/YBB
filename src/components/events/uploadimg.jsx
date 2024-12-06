import React, { useEffect, useState } from "react";
import { supabase } from "../../createClinte";

export default function UserView() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const { data, error } = await supabase.from("users").select("name, age, image_url");
    if (error) console.error("Error fetching users:", error.message);
    setUsers(data);
  }

  return (
    <div className='bg-[white] flex flex-col md:flex-row items-center justify-center md:gap-[70px] px-[25px] md:px-[40px] pt-[140px] md:pb-6 md:pt-24 overflow-hidden'>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>
                {user.image_url && (
                  <img
                    src={user.image_url}
                    alt={user.name}
                    style={{ width: "100px", height: "100px" }}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}











