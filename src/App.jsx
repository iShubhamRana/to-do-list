import react,{ useState } from 'react';
import './App.css';
import Item from './item';



function App( ) {
  
   let [itemName , setName]= useState();
   let [showListItems , setItems] = useState([]);
    function AddIt( event ){
      setName( event.target.value );
      // console.log(event.target.value);
    }
  function UpdateIt(e){
      e.preventDefault();
     
      setItems( (e)=>{
        return (
          
          [ ...showListItems  ,itemName]
        );
        
      });

      setName('');
        
    }
 const deleteItems = (event)=>{
  console.log(event);
  setItems( (e)=>{
      return e.filter( (element,index)=>{
              if(event===index) return false;
              else return true;
      }  );
  });

 }
 const showItems =
  showListItems.map(
    (element , index)=>{
      return ( <Item listItem={element} key={index} id={index} onSelect={deleteItems}/>);
    }
  )   
 


  return (
   <div className='container'>
       <div className='center_div'>
       <br/>
         <h1>ToDo List</h1>
       <br/>
           <div className='inputArea'>           
             <input name='AddItem' type='text' placeholder='Add Item' onChange={AddIt} value={itemName}/>
             <button className='btn' onClick={UpdateIt}>+</button>            
           </div>
       
         <div className='showArea'>
            {showItems}   
         </div>
     </div>
     </div>

  );
}

export default App;

