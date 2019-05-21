import React, { useState } from "react";
import ItineraryTable from "./tables/ItineraryTable";
import AddItineraryForm from "./forms/AddItineraryForm";
import EditItineraryForm from "./forms/EditItineraryForm";

const App = () => {
  const ItinerariesData = [
    { id: 1, name: "Arrival", time: "8:00 AM" },
    { id: 2, name: "Meet the Local", time: "9:00 AM" },
    { id: 3, name: "Scuba Diving", time: "10:00 AM" },
    { id: 4, name: "Eat Lunch", time: "11:00 AM" }
  ];

  const [Itineraries, setItineraries] = useState(ItinerariesData);

  const addItinerary = Itinerary => {
    Itinerary.id = Itineraries.length + 1;
    setItineraries([...Itineraries, Itinerary]);
  };

  const deleteItinerary = id => {
    setItineraries(Itineraries.filter(Itinerary => Itinerary.id !== id));
  };

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", time: "" };

  const [currentItinerary, setCurrentItinerary] = useState(initialFormState);

  const editRow = Itinerary => {
    setEditing(true);
    setCurrentItinerary({
      id: Itinerary.id,
      name: Itinerary.name,
      time: Itinerary.time
    });
  };

  const updateItinerary = (id, updateItinerary) => {
    setEditing(false);

    setItineraries(
      Itineraries.map(Itinerary =>
        Itinerary.id === id ? updateItinerary : Itinerary
      )
    );
  };

  return (
    <div className="container">
      <h1> plannedTrip.com</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2> EDIT ITINERARY</h2>
              <EditItineraryForm
                editing={editing}
                setEditing={setEditing}
                currentItinerary={currentItinerary}
                updateItinerary={updateItinerary}
              />
            </div>
          ) : (
            <div>
              <h2> ADD ITINERARY </h2>
              <AddItineraryForm addItinerary={addItinerary} />
            </div>
          )}
        </div>
      </div>

      <h2> ITINERARIES </h2>
      <div className="flex-large">
        <ItineraryTable
          Itineraries={Itineraries}
          editRow={editRow}
          deleteItinerary={deleteItinerary}
        />
      </div>
    </div>
  );
};

export default App;
