import React, { useState, useEffect } from "react";

const EditItineraryForm = props => {
  const [Itinerary, setItinerary] = useState(props.currentItinerary);

  useEffect(() => {
    setItinerary(props.currentItinerary);
  }, [props]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setItinerary({ ...Itinerary, [name]: value });
  };

  return (
    <div className="flex-large">
      <form
        onSubmit={event => {
          event.preventDefault();
          props.updateItinerary(Itinerary.id, Itinerary);
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
                  value={Itinerary.name}
                  onChange={handleInputChange}
                />
              </td>
              <td style={{ borderBottom: "none" }}>
                <input
                  type="text"
                  name="time"
                  value={Itinerary.time}
                  onChange={handleInputChange}
                />
              </td>
              <td style={{ borderBottom: "none" }}>
                <button> UPDATE </button>
                <button
                  onClick={() => props.setEditing(false)}
                  className="button muted-button"
                >
                  Cancel
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default EditItineraryForm;
