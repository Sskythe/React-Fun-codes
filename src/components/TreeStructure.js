import React,{useState} from 'react'


// data
const data = {
    name: "reactjs",
    children: [{
      name: "src",
      children: [{
        name: "components"
      }]
    },
    {
      name: "node_modules",
      children: [{
        name: "files"
      }]
    }]
  }
  //Recursion
  function Nested({ depth, name, children }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const style = {
      paddingLeft: depth * 20
    }
    return (
  
      <div style={style}>
        {children && <button onClick={() => setIsExpanded(!isExpanded)} style={{
          backgroundColor: 'black',
          color: 'white',
        }}> { isExpanded? '-':'+'} </button>}
        {name}
        {isExpanded && <div>{children?.map((val) => <Nested depth={depth + 1}{...val} />)}</div>}
      </div>
    )
  }

  //main function
const TreeStructure = () => {
    const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div>
      {data.children &&  <button onClick={() => setIsExpanded(!isExpanded)} style={{
        backgroundColor: 'black',
        color: 'white',
      }}> { isExpanded? '-':'+'}</button>}
      {data.name}

      {isExpanded && <div>
        {data.children.map((vals, idx) => <Nested depth={1} {...vals} />)}
      </div>}

    </div>
  );
}

export default TreeStructure