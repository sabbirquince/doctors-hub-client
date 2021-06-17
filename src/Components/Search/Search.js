import React, { useEffect } from "react";
import Card from "./Cards/Card";
import styles from "./Search.module.css";
import { useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const Search = () => {
  const [search, setSearch] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [doctors, setDoctors] = useState(null);

  useEffect(() => {
    setSpinner(true);
    axios.get("https://doctorshub.herokuapp.com/doctors").then((data) => {
      setDoctors(data.data);
      setSpinner(false);
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSpinner(true);

    const query = e.target.search.value;
    axios
      .get(`https://doctorshub.herokuapp.com/search?specialty=${query}`)
      .then((data) => {
        setDoctors(data.data);
        setSpinner(false);
      });
  };

  return (
    <div className={`${styles.search} `}>
      <section className="box container px-5">
        <h2 className="p-4 text-center ">
          Search for Doctors to get appointment
        </h2>
        <form onSubmit={handleSearch} className="d-flex my-4">
          <input
            type="text"
            className="form-control"
            name="search"
            placeholder="Search Doctors by Specialty, Name"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button
            type="submit"
            className={`btn text-light shadow px-5 ml-2 ${styles.myBtn}`}
          >
            Search
          </button>
        </form>
      </section>

      {spinner ? (
        <div className="text-center mt-5 pt-5">
          <Spinner className="p-5" animation="grow" variant="danger" />
        </div>
      ) : (
        <section className={`${styles.searchResult}`}>
          <div className={`${styles.result} container`}>
            {doctors?.map((doctor) => (
              <Card doctor={doctor} />
            ))}
          </div>
        </section>
      )}

      {!doctors ||
        (doctors.length === 0 && (
          <div className="text-center text-dark p-5">
            <p>No result found.</p>
          </div>
        ))}
    </div>
  );
};

export default Search;
