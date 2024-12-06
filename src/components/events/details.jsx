import React, { useState, useEffect } from "react";
import { supabase } from "../../createClinte";

export default function Details() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    name: "",
    age: "",
    image: null, // For storing the uploaded image
  });
  const [user2, setUser2] = useState({
    id: "",
    name: "",
    age: "",
    image_url: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const { data } = await supabase.from("users").select("*");
    setUsers(data);
  }

  function handleChange(event) {
    const { name, value, files } = event.target;
    setUser((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value, // Handle file input
    }));
  }

  function handleChange2(event) {
    const { name, value } = event.target;
    setUser2((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function uploadImage(file) {
    const fileName = `${Date.now()}_${file.name}`;
    const { data, error } = await supabase.storage
      .from("user-bucket") // Bucket name updated
      .upload(fileName, file);

    if (error) {
      console.error("Error uploading image:", error.message);
      return null;
    }

    const { publicUrl } = supabase.storage
      .from("user-bucket") // Bucket name updated
      .getPublicUrl(fileName);

    return publicUrl;
  }

  async function createUser(event) {
    event.preventDefault();

    // Upload image and get URL
    const imageUrl = await uploadImage(user.image);

    // Save user with image URL
    await supabase
      .from("users")
      .insert({ name: user.name, age: user.age, image_url: imageUrl });

    fetchUsers();
  }

  async function deleteUser(userId) {
    const { error } = await supabase.from("users").delete().eq("id", userId);
    if (error) console.error(error.message);
    fetchUsers();
  }

  function displayUser(userId) {
    const selectedUser = users.find((user) => user.id === userId);
    if (selectedUser) setUser2(selectedUser);
  }

  async function updateUser(event) {
    event.preventDefault();
    await supabase
      .from("users")
      .update({
        name: user2.name,
        age: user2.age,
        image_url: user2.image_url,
      })
      .eq("id", user2.id);

    fetchUsers();
  }

  return (
    <div>
      {/* FORM 1 */}
      <form onSubmit={createUser}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Age"
          name="age"
          onChange={handleChange}
        />
        <input
          type="file"
          accept="image/*"
          name="image"
          onChange={handleChange}
        />
        <button type="submit">Create</button>
      </form>

      {/* FORM 2 */}
      <form onSubmit={updateUser}>
        <input
          type="text"
          name="name"
          value={user2.name}
          onChange={handleChange2}
        />
        <input
          type="number"
          name="age"
          value={user2.age}
          onChange={handleChange2}
        />
        <button type="submit">Save Changes</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>
                {user.image_url && (
                  <img
                    src={user.image_url}
                    alt={`${user.name}'s avatar`}
                    style={{ width: "150px", height: "150px" }}
                  />
                )}
              </td>
              <td>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
                <button onClick={() => displayUser(user.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

