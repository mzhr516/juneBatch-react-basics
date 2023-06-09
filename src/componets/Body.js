function Body() {
  return (
    <div className="body">
      <LeftBody></LeftBody>
      <RightBody></RightBody>
    </div>
  );
}

export default Body;

function LeftBody() {
  return <div className="leftBody"></div>;
}

function RightBody() {
  return <div className="rightBody"></div>;
}


