import React, { useEffect, useState } from "react";
import { supabase } from "../../createClinte"; // Import Supabase client
import "../stay.css";
import Footer from "../../layout/footer/footer";
import donate from "../../assets/donation.svg";
import contact from "../../assets/Contact.svg";
import rsvp from "../../assets/rsvp.svg";
import { useLocation } from "react-router-dom";

export default function ResultPage() {
  const [events, setEvents] = useState([]); // Store events data
  const [loading, setLoading] = useState(true); // Loading state
  const [visibleCount, setVisibleCount] = useState(3); // Number of visible rows
  const [expandedEventId, setExpandedEventId] = useState(null); // Track expanded event ID

   const location = useLocation();

  useEffect(() => {
      if (location.hash) {
          const section = document.querySelector(location.hash);
          if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
          }
      }
  }, [location]);

  // Fetch events from Supabase on component load
  useEffect(() => {
    async function fetchEvents() {
      setLoading(true); // Set loading to true
      const { data, error } = await supabase.from("events").select("*");
      if (error) {
        console.error("Error fetching events:", error.message);
      } else {
        setEvents(data || []); // Ensure events is an array
      }
      setLoading(false); // Set loading to false after data is fetched
    }

    fetchEvents();
  }, []);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Show 3 more rows
  };

  const toggleExpand = (id) => {
    setExpandedEventId(expandedEventId === id ? null : id); // Toggle expanded card
  };

  return (
    <div className="">
      <div className="eventbg h-[200px] w-[100%] flex flex-col items-end gap-3 pt-24 md:px-[180px] px-[20px] mb-6">
        <h1 className="text-2xl text-[white] font-climate font-bold">EVENTS</h1>
        <hr className="md:w-[400px] w-[300px]" />
        <p className="font-inter font-normal text-[10px] md:text-[19px] text-white">
          FEMALE NETWORK FOUNDATION FOR EMPOWERMENT AND EQUITY
        </p>
      </div>

      {loading ? (
        // Loader
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-[20px] gap-6 overflow-hidden">
            {events.slice(0, visibleCount).map((event) => (
              <div
                key={event.id}
                className="border rounded-lg p-4 shadow-md hover:shadow-lg transition cursor-pointer"
                onClick={() => toggleExpand(event.id)}
              >
                {/* Event Image */}
                {event.event_image ? (
                  <img
                    src={event.event_image}
                    alt={event.event_name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg mb-4">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
                {/* Event Details */}
                <h2 className="text-xl font-semibold mb-2">
                  {event.event_name}
                </h2>
                <div className="flex flex-row justify-between">
                  <p className="text-gray-600 mb-1">
                    <strong>Date:</strong> {event.event_date}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <strong>Time:</strong> {event.event_time}
                  </p>
                </div>
                <p className="text-gray-600 mb-1">
                  <strong>Type:</strong> {event.event_type}
                </p>
                              {/* <p
                className={`text-gray-800 mt-2 w-[400px]  ${
                  expandedEventId === event.id ? "h-auto" : "h-[50px]"
                }`}
              >
                {expandedEventId === event.id
                  ? event.event_details
                  : event.event_details.length > 50
                  ? `${event.event_details.substring(0, 40)}...`
                  : event.event_details}
              </p> */}
            <p style={{
    wordWrap: "break-word",
    whiteSpace: "normal",
    overflowWrap: "break-word",
  }} className="max-w-[350px] md:max-w-[500px] text-gray-800 mt-2">
              {event.event_details}
            </p>
              </div>
            ))}
          </div>

          {/* See More Button */}
          {visibleCount < events.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleSeeMore}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                See More
              </button>


             
            </div>
          )}
           <div className="pt-[30px] flex flex-col justify-center items-center px-[20px] md:px-[40px] gap-10  py-14 overflow-hidden">
                <div className="flex flex-col items-center gap-4 px-5 md:px-0 ">
                  <p className="w-[100%] md:w-[1070px] font-inter font-normal text-[16px] ">We’d love to hear from you! whether you have questions, idea, comments, or suggestion please fill out and summit the contact form below
                  for more information about the Female Network Foundation And Equity</p>
                  <p className="w-[100%] md:w-[1070px] font-inter font-normal text-[16px] ">call: +2349024208159</p>
                  <p className="w-[100%] md:w-[1070px] font-inter font-normal text-[16px] ">Email: fnfeefoundation001@yahoo.com</p>
                </div>


                <form action="" className='flex flex-col justify-center items-center md:items-start gap-7'>
            <label htmlFor="">
               
                <input type="text" id="fname" name="fname" placeholder="Full Name" className='md:w-[971px] border-[2px] border-black w-[300px] h-[52px] px-3'/>
            </label>

            <label htmlFor="">
               
                <input type="email" id="fname" name="fname" placeholder="Email Address" className='md:w-[971px] border-[2px] border-black w-[300px] h-[52px] px-3'/>
            </label>


            <label htmlFor="">
                
                <input type="number" id="fname" name="fname" placeholder="Phone Number" className='md:w-[971px] border-[2px] border-black w-[300px] h-[52px] px-3 '/>
            </label>

            <label htmlFor="">
                
                <textarea type="text" id="fname" name="fname" placeholder="Your Message" className='md:w-[971px] border-[2px] border-black w-[300px] h-[182px] px-3 '/>
            </label>

           

            <button className='bg-[#FF004F] w-[231px] h-[44px] text-white font-roboto font-light text-[23px] rounded-[17px] '>SUBMIT</button>
         </form>
              </div>


              <section id="donatee"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-[20px] py-10 gap-6 overflow-hidden">
             <div
               
                className="border rounded-lg p-4 shadow-md hover:shadow-lg transition cursor-pointer flex flex-col justify-center items-center">
                  <img
                    src={donate}
                    alt={donate}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />

                  '<h2 className="text-xl text-center font-climate font-bold mb-2">DONATE</h2>
                  <a href="https://wa.me/9024208159" className="text-xl text-center font-semibold font-roboto text-[#FF004F] mb-2">Support Our Activites</a>
                </div>

                <div
               
               className="border rounded-lg p-4 shadow-md hover:shadow-lg transition cursor-pointer flex flex-col justify-center items-center">
                 <img
                   src={contact}
                   alt={contact}
                   className="w-full h-48 object-cover rounded-lg mb-4"
                 />

                 <h2 className="text-xl text-center font-climate font-bold mb-2">CONTACT US</h2>
                 <a href="https://wa.me/9024208159" className="text-xl text-center font-semibold font-roboto text-[#FF004F] mb-2">Get In Touch Today!</a>
               </div>


               <div
               
               className="border rounded-lg p-4 shadow-md hover:shadow-lg transition cursor-pointer flex flex-col justify-center items-center">
                 <img
                   src={rsvp}
                   alt={rsvp}
                   className="w-full h-48 object-cover rounded-lg mb-4"
                 />

                 <h2 className="text-xl text-center font-climate font-bold mb-2">RSVP</h2>
                 <a href="https://wa.me/9024208159" className="text-xl text-center font-semibold font-roboto text-[#FF004F] mb-2">Register For Events & Program</a>
               </div>
              </div></section>



              <div className="stayss flex flex-col justify-center items-center px-[20px] md:px-[40px]  overflow-hidden">
                  <div className="flex flex-col justify-center items-center pt-5 md:pt-0 md:pb-10 pb-5 md:py-20 gap-5 md:gap-8">  
                    <h2 className="text-[24px] font-inter font-medium pt-10  text-white ">PARTNER WITH US</h2>
                    <p className="text-[20px] font-inter font-normal text-white w-[100%] md:w-[900px] text-center md:text-[start] ">Join us in this exciting journey as we change the African narrative through empowering African Females and contributing to its development space.</p>
                    <button className="bg-[#5D1C51] text-white  w-[200px] h-[50px] rounded-[10px]">BECOME A PARTNER</button>
                  </div>
              </div>

          <Footer />
        </>
      )}
    </div>
  );
}