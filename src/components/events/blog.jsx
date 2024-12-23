// import React, { useState, useEffect } from "react";
// import { supabase } from "../../createClinte";

// export default function AdminPanel() {
//   const [users, setUsers] = useState([]);
//   const [userToEdit, setUserToEdit] = useState(null);
//   const [newUser, setNewUser] = useState({
//     name: "",
//     age: "",
//     image: null,
//   });

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   async function fetchUsers() {
//     const { data, error } = await supabase.from("users").select("*");
//     if (error) console.error("Error fetching users:", error.message);
//     setUsers(data);
//   }

//   function handleNewUserChange(event) {
//     const { name, value, files } = event.target;
//     setNewUser((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   }

//   function handleEditChange(event) {
//     const { name, value } = event.target;
//     setUserToEdit((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   }

//   async function uploadImage(file) {
//     const fileName = `${Date.now()}_${file.name}`;
//     const { data, error } = await supabase.storage
//       .from("user-bucket")
//       .upload(fileName, file);

//     if (error) {
//       console.error("Error uploading image:", error.message);
//       return null;
//     }

//     const { publicUrl } = supabase.storage
//       .from("user-bucket")
//       .getPublicUrl(fileName);

//     return publicUrl;
//   }

//   async function createUser(event) {
//     event.preventDefault();
//     const imageUrl = await uploadImage(newUser.image);

//     await supabase
//       .from("users")
//       .insert({ name: newUser.name, age: newUser.age, image_url: imageUrl });

//     setNewUser({ name: "", age: "", image: null });
//     fetchUsers();
//   }

//   async function deleteUser(userId) {
//     await supabase.from("users").delete().eq("id", userId);
//     fetchUsers();
//   }

//   async function updateUser(event) {
//     event.preventDefault();

//     await supabase
//       .from("users")
//       .update({
//         name: userToEdit.name,
//         age: userToEdit.age,
//         image_url: userToEdit.image_url,
//       })
//       .eq("id", userToEdit.id);

//     setUserToEdit(null);
//     fetchUsers();
//   }

//   return (
//     <div>
//       <h2>Admin Panel</h2>

//       <form onSubmit={createUser}>
//         <input
//           type="text"
//           placeholder="Name"
//           name="name"
//           value={newUser.name}
//           onChange={handleNewUserChange}
//         />
//         <input
//           type="number"
//           placeholder="Age"
//           name="age"
//           value={newUser.age}
//           onChange={handleNewUserChange}
//         />
//         <input
//           type="file"
//           accept="image/*"
//           name="image"
//           onChange={handleNewUserChange}
//         />
//         <button type="submit">Add User</button>
//       </form>

//       {userToEdit && (
//         <form onSubmit={updateUser}>
//           <input
//             type="text"
//             name="name"
//             value={userToEdit.name}
//             onChange={handleEditChange}
//           />
//           <input
//             type="number"
//             name="age"
//             value={userToEdit.age}
//             onChange={handleEditChange}
//           />
//           <button type="submit">Update</button>
//           <button onClick={() => setUserToEdit(null)}>Cancel</button>
//         </form>
//       )}

//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.age}</td>
//               <td>
//                 {user.image_url && (
//                   <img
//                     src={user.image_url}
//                     alt={user.name}
//                     style={{ width: "100px", height: "100px" }}
//                   />
//                 )}
//               </td>
//               <td>
//                 <button onClick={() => deleteUser(user.id)}>Delete</button>
//                 <button onClick={() => setUserToEdit(user)}>Edit</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }