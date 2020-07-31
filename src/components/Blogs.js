import React from 'react';
import Background from '../imgs/pattern1.jpeg';
import {Row,Col} from 'reactstrap';
import NavbarNew from './Navbar';




const Blogs = (props) => {
 
   var  newStyle ={
   	backgroundImage: `url(${Background})`,
   	width: "100%",
  height: "100%",
  margin:"0",
   };
  return (
    <div>
  	<NavbarNew/>
   <div className="bg-dark text-white ">

      <h2 className="text-danger">Python</h2>
      <Row>
      <Col md={6}>
      <h3 className="text-danger">What does Course Cover?</h3>
     <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. It is a long established fact that a reader will be Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. It is a long establ
      </p>
      <h3 className="text-danger">What is the level of course?</h3>
      <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
      </p>
      <h3 className="text-danger">Benefit Of Course</h3>
      <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                 amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
      </p>
      <h3 className="text-danger">Who are The Trainers?</h3>
      <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
      </p>
      <br/>
      </Col>
      <Col md={6}>
      <div style={newStyle}>
      </div> 
      </Col>      
      </Row>
 
      
     </div>
     </div>

   )
}

export default Blogs;