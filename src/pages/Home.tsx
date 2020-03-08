import React, { useState } from "react";
// import { Map, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
// import { brisbaneCoords } from "../constants";
import courses from "../data/recipes.json";
import Carousel from "../components/Carousel";

interface IHomeProps {}

interface IChoices {
  [key: string]: IRecipe;
}

interface IRecipe {
  name: string;
  link: string;
  images: string[];
}

const Home = (props: IHomeProps) => {
  const [selection, setSelection] = useState<IChoices>({});

  const setCourseChoice = (course: string, recipe: IRecipe) => {
    setSelection({ ...selection, [course]: recipe });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-8">
          {courses.map(x => (
            <div key={x.type} className="row">
              <div className="col-12">
                <h2>{x.type}</h2>
                <div className="row">
                  {x.recipes.map(recipe => (
                    <div key={recipe.name} className="col">
                      <p onClick={setCourseChoice.bind(null, x.type, recipe)}>
                        {recipe.name}
                      </p>
                      <Carousel images={recipe.images} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-4">
          <h2>Your order</h2>
          {Object.entries(selection).map(([course, recipe]) => (
            <div key={recipe.name}>
              <p>
                Course: {course}, choice: {recipe.name}
              </p>
              <Carousel images={recipe.images} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
