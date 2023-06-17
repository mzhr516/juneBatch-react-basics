import React from "react";
import { Child1 } from "./Child1";
import Greeting from "./Greeting";
import { Child2 } from "./Child2";
import { CityCard } from "./Card";
import { UserTable } from "./table";

export const ReactProperties = () => {
  const registerUserData = [
    { firstName: "juned", lastName: "khan", location: "mumbai", age: 26 },
    { firstName: "umed", lastName: "uddin", location: "mumbai", age: 28 },
    { firstName: "aamer", lastName: "khan", location: "chennai", age: 30 },
    { firstName: "mazz", lastName: "chaush", location: "kolkata", age: 35 },
    {
      firstName: "ahmed",
      lastName: "mohiuddin",
      location: "srinagar",
      age: 40,
    },

    { firstName: "juned", lastName: "khan", location: "mumbai", age: 26 },
    { firstName: "umed", lastName: "uddin", location: "mumbai", age: 28 },
    { firstName: "aamer", lastName: "khan", location: "chennai", age: 30 },
    { firstName: "mazz", lastName: "chaush", location: "kolkata", age: 35 },
    {
      firstName: "ahmed",
      lastName: "mohiuddin",
      location: "srinagar",
      age: 40,
    },{ firstName: "juned", lastName: "khan", location: "mumbai", age: 26 },
    { firstName: "umed", lastName: "uddin", location: "mumbai", age: 28 },
    { firstName: "aamer", lastName: "khan", location: "chennai", age: 30 },
    { firstName: "mazz", lastName: "chaush", location: "kolkata", age: 35 },
    {
      firstName: "ahmed",
      lastName: "mohiuddin",
      location: "srinagar",
      age: 40,
    },
    {
      firstName: "ahmed",
      lastName: "mohiuddin",
      location: "srinagar",
      age: 40,
    },{ firstName: "juned", lastName: "khan", location: "mumbai", age: 26 },
    { firstName: "umed", lastName: "uddin", location: "mumbai", age: 28 },
    { firstName: "aamer", lastName: "khan", location: "chennai", age: 30 },
    { firstName: "mazz", lastName: "chaush", location: "kolkata", age: 35 },
    {
      firstName: "ahmed",
      lastName: "mohiuddin",
      location: "srinagar",
      age: 40,
    },
    
  
  ];

  const unRagisterUserData = [
    { firstName: "mohammad", lastName: "khan", location: "mumbai", age: 26 },
    { firstName: "uzer", lastName: "uddin", location: "mumbai", age: 28 },
    { firstName: "khizer", lastName: "khan", location: "chennai", age: 30 },
    { firstName: "soham", lastName: "gayakwad", location: "banglore", age: 25 },
    { firstName: "madhav", lastName: "naidu", location: "jaipur", age: 23 },
  ];
  return (
    <div>
      {/* <Child1 a="hello" b="good morning" c={100} />
      <Greeting name="umair" day="day" />
      <Child2 num1={10} num2={20} bgColor="red" txtColor="white" />
      <Child2 num1={550} num2={250} bgColor="blue" txtColor="white" />
      <Child2 num1={55} num2={20} bgColor="green" txtColor="black" />
      <Child2 num1={555} num2={200} bgColor="pink" txtColor="white" />
      <Child2 num1={559} num2={120} bgColor="yellow" txtColor="black" />
      <Child2 num1={585} num2={220} bgColor="white" txtColor="black" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CityCard
          pinCode={431605}
          cityName="Nanded"
          state="Mahartra"
          src="img-3.jpg"
        />
        <CityCard
          pinCode={503001}
          cityName="hyderabad"
          state="telangana"
          src="img-1.jpg"
        />
        <CityCard cityName="mumbai" src="img-1.jpg" />
        <CityCard cityName="kolkata" state="bjhmndc" />
        <CityCard state="bengol" /> */}
        <div>
          <h1>ragister user Table</h1>
        <UserTable userData={registerUserData} />
        <h1>un register user Table</h1>
        <UserTable userData={unRagisterUserData}/>
        </div>
      </div>
    // </div>
  );
};
