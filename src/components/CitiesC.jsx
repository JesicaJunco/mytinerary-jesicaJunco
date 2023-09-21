import { Link as LinkRouter } from "react-router-dom";
import { Card } from "./Card.jsx";
import { useEffect, useRef } from "react";
import NotFound from "./NotFound.jsx";
import Search from "../components/svgs/Search.jsx";
import { useDispatch, useSelector } from "react-redux";
import { filter_cities, get_cities } from "../store/actions/cityActions.js";
import GoBackButton from "./GoBackButton.jsx";

// fetch, consulta con los bases de datos,// usuario redux.
export default function Cities() {
  const cities = useSelector((store) => store.cityReducer.cities);
  let inputSearch = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_cities());
  }, []);
  const handleInputSearch = () => {
    dispatch(
      filter_cities({
        city: inputSearch.current.value,
      })
    );
  };
  

  return (
    <>
      <div className="bg-white flex flex-col justify-center items-center">
        <div className="relative flex items-center">
          <input
            ref={inputSearch}
            type="text"
            className="rounded-md pl-10 h-8 self-center my-3"
            placeholder="Search your city"
          />
          <button
            onClick={handleInputSearch}
            className="border rounded-lg border-lime-500  mx-1 my-2 bg-teal-100 hover:bg-teal-600 hover:border-lime-400"
          >
            <Search />
          </button>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {cities?.length > 0 ? 
            cities?.map((city) => {
              return (
                <LinkRouter key={city._id} to={`/cities/${city._id}`}>
                  <Card
                    city={city.city}
                    country={city.country}
                    image={city.image}
                  />
                </LinkRouter>
              )
            })
           : 
            <NotFound />
          }
        </div>
        <div><GoBackButton /></div>
      </div>
    </>
  );
}
