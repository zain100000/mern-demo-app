const express = require("express");
const router = express.Router();

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },

    creator: "u1",
  },
];

router.get("/:pid", (req, res, next) => {
  const placeId = req.params.pid; // {pid: p1}
  const places = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!places) {
    const error = new Error("Could not find a place for the provided id.");
    error.code = 404;
    throw error;
  }

  res.json({ places }); // => { places } => { place: place }
});

router.get("/users/:uid", (req, res, next) => {
  const userId = req.params.uid; // {uid: u1}
  const places = DUMMY_PLACES.find((p) => {
    return p.creator === userId;
  });

  if (!places) {
    const error = new Error("Could not find a user for the provided user id.");
    error.code = 404;
    throw error;
  }

  res.json({ places }); // => { places } => { place: place }
});

module.exports = router;
