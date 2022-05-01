const os = ["Android","Blackberry","iPhone","Windows Phone"];
const manufaturers = ["Samsung", "HTC", "Micromax", "Apple"];

function App() {
  return (
    <div>
      <div><b>Mobile Operating System</b>
        <ul>
          {os.map((e)=>
          {
            return <Skill skill={e}/>;
          })}
        </ul>
      </div>
      <div><b>Mobile Manufacturers</b>
        <ul>
          {manufaturers.map((e)=> {
            return <Skill skill={e}/>;
          })}
        </ul>
      </div>
    </div>
  );
}

function Skill({skill})
{
  return <li>{skill}</li>
}

export default App;
