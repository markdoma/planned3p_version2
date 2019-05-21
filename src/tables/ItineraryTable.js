import React from "react";

const ItineraryTable = props => (
  <table>
    <thead>
      <tr>
        <th>Itinerary</th>
        <th>Time</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.Itineraries.length > 0 ? (
        props.Itineraries.map(Itinerary => (
          <tr key={Itinerary.id}>
            <td>{Itinerary.name}</td>
            <td>{Itinerary.time}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(Itinerary);
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteItinerary(Itinerary.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Itineraries</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default ItineraryTable;
