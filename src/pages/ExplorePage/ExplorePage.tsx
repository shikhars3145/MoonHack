import React, { useState } from 'react';
import Globe, { ImageData } from "../../components/Globe/Globe";

const dummy_image_data: ImageData[] = [
  {
    url: "",
    timestamp: 0,
    latitude: 37,
    longitude: 127
  },
  {
    url: "",
    timestamp: 0,
    latitude: 40,
    longitude: -74
  },
  {
    url: "",
    timestamp: 0,
    latitude: 43,
    longitude: -79
  },
  {
    url: "",
    timestamp: 0,
    latitude: 51,
    longitude: 0
  },
  {
    url: "",
    timestamp: 0,
    latitude: 30,
    longitude: 31
  },
  {
    url: "",
    timestamp: 0,
    latitude: -34,
    longitude: 151
  },
];

function ExplorePage() {
  const [images, setImages] = useState<ImageData[]>(dummy_image_data);
  return (
    <div className="explore-page">
      <Globe images={images} />
    </div>
  );
}

export default ExplorePage;