import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Form, FloatingLabel, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

const TrainingSchedule = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [muscleToTrain, setMuscleToTrain] = useState("");
  const [typeOfTrain, setTypeOfTrain] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [trainingData, setTrainingData] = useState();

  // useEffect(() => {

  // }, [muscleToTrain, typeOfTrain, difficulty])

  async function fetchTrainingData(e) {
    try {
      console.log("fetching data....");

      // console.log(muscleToTrain, difficulty, typeOfTrain);

      const params = {
        difficulty: difficulty,
        type: typeOfTrain,
      };

      const res = await axios.get(
        `https://api.api-ninjas.com/v1/exercises?muscle=${muscleToTrain}`,
        {
          params: params,
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "chysMYGtUuAbyLCz1DAA5g==F7SZF06qyM7gUCDs",
          },
        }
      );

      console.log("fetched data successfully!", res.data);
      // setTrainingData(res.data);
      if (res.data === null || res.data.length === 0) {
        setTrainingData(null);
        console.log("No Data to Show");
      } else {
        setTrainingData(res.data);
      }
    } catch (error) {
      console.log("error fetching data", error.message);
    }
  }

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    fetchTrainingData();
  };

  return (
    <div>
      {
        <div className="bgimg">
          <div className="main-trainingPage-container container-fluid d-flex justify-content-center align-items-center">
            <div className="home-container container-fluid row">
              <div className="col-md-4 ">
                <div className="text-center trainingForm">
                  <form className="row">
                    <div className="text-center text-warning fs-5 fw-semibold mb-3 mt-2">
                      Train according to your choice
                    </div>
                    <div className="col-md-12 text-start">
                      <label
                        for="fname"
                        className="form-label text-light fw-semibold"
                      >
                        Select a muscle to train
                      </label>
                      <select
                        className="form-select bg-dark text-warning"
                        aria-label="Default select example"
                        onChange={(e) => setMuscleToTrain(e.target.value)}
                        style={{ borderColor: "goldenrod" }}
                      >
                        <option value="">select a muscle</option>
                        <option value="abdominals">abdominals</option>
                        <option value="abductors">abductors</option>
                        <option value="biceps">biceps</option>
                        <option value="calves">calves</option>
                        <option value="chest">chest</option>
                        <option value="forearms">forearms</option>
                        <option value="glutes">glutes</option>
                        <option value="hamstrings">hamstrings</option>
                        <option value="lats">lats</option>
                        <option value="lower_back">lower_back</option>
                        <option value="middle_back">middle_back</option>
                        <option value="neck">neck</option>
                        <option value="quadriceps">quadriceps</option>
                        <option value="traps">traps</option>
                        <option value="triceps">triceps</option>
                      </select>
                    </div>

                    <div className="col-md-12 text-start mt-3">
                      <label
                        for="phoneNumber"
                        className="form-label text-light fw-semibold"
                      >
                        Select an exercise type
                      </label>
                      <select
                        className="form-select bg-dark text-warning"
                        aria-label="Default select example"
                        onChange={(e) => setTypeOfTrain(e.target.value)}
                        style={{ borderColor: "goldenrod" }}
                      >
                        <option value="">select a type</option>
                        <option value="cardio">cardio</option>
                        <option value="olympic_weightlifting">
                          olympic_weightlifting
                        </option>
                        <option value="plyometrics">plyometrics</option>
                        <option value="powerlifting">powerlifting</option>
                        <option value="strength">strength</option>
                        <option value="stretching">stretching</option>
                      </select>
                    </div>
                    <div className="col-md-12 text-start mt-3">
                      <label
                        for="phoneNumber"
                        className="form-label text-light fw-semibold"
                      >
                        Select a difficulty
                      </label>
                      <select
                        className="form-select bg-dark text-warning"
                        aria-label="Default select example"
                        onChange={(e) => setDifficulty(e.target.value)}
                        style={{ borderColor: "goldenrod" }}
                      >
                        <option value="">select a difficulty</option>
                        <option value="beginner">beginner</option>
                        <option value="intermediate">intermediate</option>
                        <option value="expert">expert</option>
                      </select>
                    </div>
                    <div className="col-md-12 text-center mt-4 mb-1">
                      <button
                        type="button"
                        className="contact-submit-btn ps-3 pe-3 fw-semibold fs-4"
                        onClick={handleSubmitBtn}
                      >
                        Find
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-8 main-training-load-container text-center justify-content-center row overflow-auto">
                {!trainingData ? (
                  <div className="text-light fs-5 text-center">
                    Sorry
                    <br />
                    Couldn't find any training data.
                  </div>
                ) : (
                  trainingData.map((item, index) => (
                    <div
                      key={index}
                      className="training-data-items col-md-11 trainingData-fade-in"
                    >
                      <h4>
                        <span>{index + 1}. </span>
                        {item.name}
                      </h4>
                      <h5>Equipment: {item.equipment}</h5>
                      <h5>Muscle: {item.muscle}</h5>
                      <h5>Difficulty: {item.difficulty}</h5>
                      <h5>Type: {item.type}</h5>
                      <p>Instructions: {item.instructions}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default TrainingSchedule;



// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Container from "react-bootstrap/Container";


// const TrainingSchedule = () => {
//     const usenavigate = useNavigate();
//     const [customerlist, listupdate] = useState(null);
   
//     useEffect(() => {
       

//         // let jwttoken = sessionStorage.getItem('jwttoken');
//         // fetch("https://localhost:44308/Customer", {
//         //     headers: {
//         //         'Authorization': 'bearer ' + jwttoken
//         //     }
//         // }).then((res) => {
//         //     return res.json();
//         // }).then((resp) => {
//         //     listupdate(resp);
//         // }).catch((err) => {
//         //     console.log(err.messsage)
//         // });

//     }, []);

//     return (
//         <div>
//             <div className="bgimg">
//         <Container className = "content">
//             <h1 className="text-center text-light">Welcome to Training Schedule</h1>
//             <button type="button" className="btn btn-primary">Training Schedule</button>
            
//         </Container>

           
//         </div>
//         </div>
        
//     );
// }

// export default TrainingSchedule;