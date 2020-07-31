import React from 'react';
import Background from '../imgs/pattern1.jpeg';
import AddComment from '../components/AddComment'


const Comment1 = (props) => {
var  newStyle ={
   	width:"90%",
    margin:"5%",
   };
   
   return (
  <div className="bg-dark text-white">
  <h2 className="text-danger">Whats New</h2>
<div>
 <img src={Background} style={newStyle} alt="image" />

      </div> 
  <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Et, itaque quam!</p>
  

  </div>


)};

export default Comment1;	