function Body() {
  return (
    <div className="body">
      <LeftBody/>
      <RightBody/>
    </div>
  );
}

export default Body;

function LeftBody() {
  return <div className="leftBody"></div>;
}

function RightBody() {
  return <div className="rightBody">
    <RightTop/>
    <RightBottom/>
  </div>;
}

function RightTop(){
  return <div className="righttop">
    {/* <TopRight/>
    <TopLeft/> */}
  </div>
}
function RightBottom(){
  return <div className="rightbottom"></div>
}


