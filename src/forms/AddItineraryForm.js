import React, { useState } from "react";

const AddItineraryForm = props => {
  const initialFormState = { id: null, name: "", time: "" };
  const [Itinerary, setItinerary] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setItinerary({ ...Itinerary, [name]: value });
  };

  return (
    <div className="flex-large">
      <form
        onSubmit={event => {
          event.preventDefault();
          if (!Itinerary.name) return;
          props.addItinerary(Itinerary);
          setItinerary(initialFormState);
        }}
      >
        <table style={{ maxWidth: "100%" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "none" }}> ITINERARY </th>
              <th style={{ borderBottom: "none" }}> TIME </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ borderBottom: "none" }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Add itinerary here.."
                  value={Itinerary.name}
                  onChange={handleInputChange}
                />
              </td>
              <td style={{ borderBottom: "none" }}>
                <input
                  type="text"
                  name="time"
                  placeholder="Add time here.."
                  value={Itinerary.time}
                  onChange={handleInputChange}
                />
              </td>
              <td style={{ borderBottom: "none" }}>
                <button> ADD </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default AddItineraryForm;
