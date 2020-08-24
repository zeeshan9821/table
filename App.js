import React,{useState,useEffect} from 'react';
import { ButtonGroup} from 'react-bootstrap';
import { Button,Navbar} from 'react-bootstrap';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DropdownButton from 'react-bootstrap/DropdownButton'
import axios from "axios";
 const App=()=>{
  const[roots,setRoots]=useState([]);
  const[childs,setChilds]=useState([]);

  const fetchData=()=>{
    const rootAPI="http://localhost:4000/maths"
    const childAPI="http://localhost:4001/4443990"

    const getrootA= axios.get(rootAPI)
    const getchildA= axios.get(childAPI)
    axios.all([getrootA,getchildA]).then(
     axios.spread((...allData)=>{
          const allDataroot=allData[0].data
          const getchildAp= allData[1].data

          setChilds(allDataroot);
          setRoots(getchildAp);
     })
    )
  }

  useEffect(()=>{
    fetchData()
  },[])

  return(
 
 <div>
<Navbar style={{backgroundColor:"blue"}} >
    <Navbar.Brand   ><h4 style={{ color: 'white', marginLeft:"600px"  }}>MATHS INDEX</h4></Navbar.Brand>
    
   
  </Navbar>

  {childs.map(item => (
    <div style={{textAlign:"center" }}>
      <br/><br/>
  <h4>ID:
  <DropdownButton id="dropdown-basic-button"  title={item.id}></DropdownButton>
</h4>
<h4>SEQUENCE NO:
  <DropdownButton id="dropdown-basic-button"  title={item.sequenceNO}></DropdownButton>
</h4>
<h4>TITLE:
  <DropdownButton id="dropdown-basic-button"  title={item.title}></DropdownButton>
</h4>
<h4>TYPE:
  <DropdownButton id="dropdown-basic-button"  title={item.type}>
{roots.map(items=>(
  <div style={{backgroundColor:"#fb641b", textAlign:"center"}}>
    <br/><br/>
  <h4 style={{color:"white"}}>ID:{items.id}</h4>
  <br/>
  <h4 style={{color:"white"}}>SEQUENCE NO:{items.sequenceNO}</h4>
  <br/>
  <h4 style={{color:"white"}} >TITLE:{items.title}</h4>
  <br/>
  <h4 style={{color:"white"}}>TYPE:{items.type}</h4>
  <br/>
  <h4 style={{color:"white"}}>STATUS:{items.status}</h4>
  </div>
  ))}
  </DropdownButton>
</h4>
<h4>CHILDREN COUNT:
  <DropdownButton id="dropdown-basic-button" title={item.childrenCount}></DropdownButton>
</h4>
<h4>COMPLETE COUNT:
  <DropdownButton id="dropdown-basic-button"  title={item.completeCount}></DropdownButton>
</h4>
</div>


  ))}




    </div>
    
  )
}
  
export default App;

