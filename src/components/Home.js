import React from 'react';
import { Row,Button, Card,Col,CardImg,CardBody,CardTitle,CardText} from 'reactstrap';
import Background from '../imgs/education.jpg';
import bgimage2 from '../homeimg/ImgPrg2.jpg';
import bgimage3 from '../homeimg/ImgPrg3.png';

import  './Home.css';


const Home = (props) => {
	var sectionStyle = {
  width: "100%",
  height: "100%",
  margin:"0",
  backgroundColor: "#FFFFFF",
  backgroundImage: `url(${Background})`,
};
   var  newStyle ={
   	
   };

  return ( 

     <div className="bg-dark">
     
   <br/>
   <Row>
   <Col>
   <h1 className="text-white mainhd " style={{marginLeft:"40%"}} >Different Courses</h1>
   </Col>
   <Col>
   <h1 className="text-white mainhd " style={{marginLeft:"50%"}}>News And Announcements</h1>
   </Col>
   </Row>
   <br className="bg-light"/>
    <Row className="text-dark">
  
                <Col mr={3} p={5} >
                    <Card mr={5} p={5}className="bg-dark text-white">
                        <CardImg src={bgimage2} alt=" ef" />
                        <CardBody>
                            <CardTitle>C++</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum fac</CardText>
                            
                        </CardBody>
                        <Button href="/C++" color="primary">Explore Here!</Button>
                    </Card><br/>
                    <Card mr={5} p={5}className="bg-dark text-white">
                        <CardImg src={bgimage2} alt=" ef" />
                        <CardBody>
                            <CardTitle>PYTHON</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum fac</CardText>
                           
                        </CardBody>
                         <Button href="/Python" color="primary">Explore Here!</Button>
                    </Card>

                </Col>

                
            <Col ml={3} p={5}>
                     <Card mr={3} p={5}className="bg-dark text-white">
                        <CardImg src={bgimage3} alt=" ef" />
                        <CardBody>
                            <CardTitle>JAVASCRIPT</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum fac</CardText>
                                 </CardBody> 
                                 <Button href="/Javascript" color="primary">Explore Here!</Button>
                    </Card><br/>
                   <Card mr={3} p={5}className="bg-dark text-white">
                        <CardImg src={bgimage3} alt=" ef" />
                        <CardBody>
                            <CardTitle>MACHINE LEARNING</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum fac</CardText>
                                 </CardBody>
                                 <Button href="/Machinel" color="primary">Explore Here!</Button>
                    </Card>
                </Col>
                
                <Col mr={3}>
               <Card mr={3} p={5}className="bg-dark text-white">
                        <CardImg src={bgimage3} alt=" ef" />
                        <CardBody>
                            <CardTitle>FRONTEND DEVELOPMENT</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum fac</CardText>
                                 </CardBody>
                                 <Button href="/Frontend" color="primary">Explore Here!</Button>
                    </Card><br/>
               <Card mr={3} p={5}className="bg-dark text-white">
                        <CardImg src={bgimage3} alt=" ef" />
                        <CardBody>
                            <CardTitle>BACKEND DEVELOPMENT</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum fac</CardText>
                                 </CardBody>
                                 <Button href="/backend"color="primary">Explore Here!</Button>
                    </Card>
              </Col>
               <Col mr={3} p={5} >
                    <Card mr={5} p={5}className="bg-secondary text-white">
                        <CardImg src={bgimage3} alt=" ef" />
                        <CardBody>
                            <CardTitle>JAVASCRIPT</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</CardText>
    
                            
                        </CardBody>
                    </Card>
                </Col>
            </Row>
         <br/>
    </div>

   )
}

export default Home;