import React, { useState, useEffect } from "react";
import { supabase } from "../createClinte";

export default function AdminPanel() {
  const [events, setEvents] = useState([]);
  const [eventToEdit, setEventToEdit] = useState(null);
  const [newEvent, setNewEvent] = useState({
    event_name: "",
    event_date: "",
    event_time: "",
    event_details: "",
    event_type: "",
    event_image: null,
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    const { data, error } = await supabase.from("events").select("*");
    if (error) {
      console.error("Error fetching events:", error.message);
    } else {
      setEvents(data || []);
    }
  }

  function handleChange(event) {
    const { name, value, files } = event.target;
    setNewEvent((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  }

  async function uploadImage(file) {
    const fileName = `${Date.now()}_${file.name}`;
    const { data, error } = await supabase.storage
      .from("user-bucket")
      .upload(fileName, file);

    if (error) {
      console.error("Error uploading image:", error.message);
      return null;
    }

    const { publicUrl } = supabase.storage
      .from("user-bucket")
      .getPublicUrl(fileName);

    return publicUrl;
  }

  async function createEvent(event) {
    event.preventDefault();

    const imageUrl = newEvent.event_image
      ? await uploadImage(newEvent.event_image)
      : null;

    const { error } = await supabase.from("events").insert({
      event_name: newEvent.event_name,
      event_date: newEvent.event_date,
      event_time: newEvent.event_time,
      event_details: newEvent.event_details,
      event_type: newEvent.event_type,
      event_image: imageUrl,
    });

    if (error) {
      console.error("Error creating event:", error.message);
    } else {
      fetchEvents();
    }
  }

  async function deleteEvent(eventId) {
    const { error } = await supabase.from("events").delete().eq("id", eventId);

    if (error) {
      console.error("Error deleting event:", error.message);
    } else {
      fetchEvents();
    }
  }

  async function saveEvent(event) {
    event.preventDefault();

    const imageUrl =
      eventToEdit.event_image instanceof File
        ? await uploadImage(eventToEdit.event_image)
        : eventToEdit.event_image;

    const { error } = await supabase
      .from("events")
      .update({
        event_name: eventToEdit.event_name,
        event_date: eventToEdit.event_date,
        event_time: eventToEdit.event_time,
        event_details: eventToEdit.event_details,
        event_type: eventToEdit.event_type,
        event_image: imageUrl,
      })
      .eq("id", eventToEdit.id);

    if (error) {
      console.error("Error saving event:", error.message);
    } else {
      fetchEvents();
      setEventToEdit(null);
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

      {/* Add Event Form */}
      <form
        onSubmit={createEvent}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-md mb-8"
      >
        <input
          type="text"
          placeholder="Event Name"
          name="event_name"
          className="border p-2 rounded"
          onChange={handleChange}
          required
        />
        <input
          type="date"
          placeholder="Event Date"
          name="event_date"
          className="border p-2 rounded"
          onChange={handleChange}
          required
        />
        <input
          type="time"
          placeholder="Event Time"
          name="event_time"
          className="border p-2 rounded"
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="Event Details"
          name="event_details"
          className="border p-2 rounded col-span-2"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Event Type"
          name="event_type"
          className="border p-2 rounded"
          onChange={handleChange}
          required
        />
        <input
          type="file"
          accept="image/*"
          name="event_image"
          className="border p-2 rounded"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded col-span-2 hover:bg-blue-700"
        >
          Add Event
        </button>
      </form>

      {/* Edit Event Form */}
      {eventToEdit && (
        <form
          onSubmit={saveEvent}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-yellow-100 p-4 rounded-md mb-8"
        >
          <h2 className="text-xl font-bold col-span-2">Edit Event</h2>
          <input
            type="text"
            value={eventToEdit.event_name}
            name="event_name"
            className="border p-2 rounded"
            onChange={(e) =>
              setEventToEdit({ ...eventToEdit, event_name: e.target.value })
            }
            required
          />
          <input
            type="date"
            value={eventToEdit.event_date}
            name="event_date"
            className="border p-2 rounded"
            onChange={(e) =>
              setEventToEdit({ ...eventToEdit, event_date: e.target.value })
            }
            required
          />
          <input
            type="time"
            value={eventToEdit.event_time}
            name="event_time"
            className="border p-2 rounded"
            onChange={(e) =>
              setEventToEdit({ ...eventToEdit, event_time: e.target.value })
            }
            required
          />
          <textarea
            value={eventToEdit.event_details}
            name="event_details"
            className="border p-2 rounded col-span-2"
            onChange={(e) =>
              setEventToEdit({
                ...eventToEdit,
                event_details: e.target.value,
              })
            }
            required
          />
          <input
            type="text"
            value={eventToEdit.event_type}
            name="event_type"
            className="border p-2 rounded"
            onChange={(e) =>
              setEventToEdit({ ...eventToEdit, event_type: e.target.value })
            }
            required
          />
          <input
            type="file"
            accept="image/*"
            name="event_image"
            className="border p-2 rounded"
            onChange={(e) =>
              setEventToEdit({ ...eventToEdit, event_image: e.target.files[0] })
            }
          />
          <button
            type="submit"
            className="bg-green-600 text-white p-2 rounded col-span-2 hover:bg-green-700"
          >
            Save Changes
          </button>
        </form>
      )}

      {/* Events Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Event Name</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Details</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-t">
                <td className="px-4 py-2">{event.event_name}</td>
                <td className="px-4 py-2">{event.event_date}</td>
                <td className="px-4 py-2">{event.event_time}</td>
                <td className="px-4 py-2">{event.event_type}</td>
                <td
                  style={{
                    maxWidth: "200px",
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                  }}
                  className="px-4 py-2"
                >
                  {event.event_details}
                </td>
                <td className="px-4 py-2">
                  {event.event_image && (
                    <img
                      src={event.event_image}
                      alt={event.event_name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  )}
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => deleteEvent(event.id)}
                    className="bg-red-600 text-white p-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setEventToEdit(event)}
                    className="bg-blue-600 text-white p-1 rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
