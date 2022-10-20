import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitch, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {

  const {providerLogin} = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();


  const handleGoogleSignIn = () =>{
    providerLogin(googleProvider)
    .then( result =>{
      const user = result.user;
      console.log(user);
    })
    .catch(error => console.error(error));

  }

 
    return (
      <div>
        <ButtonGroup vertical>
          <Button onClick={handleGoogleSignIn} className="mb-2" variant="outline-primary">
            <FaGoogle></FaGoogle> Log in with Google
          </Button>
          <Button variant="outline-dark">
            <FaGithub></FaGithub> Log in with Github
          </Button>
        </ButtonGroup>
        <div className='mt-4'>
          <h5>Find us on</h5>
          <ListGroup>
            <ListGroup.Item className='mb-2'> <FaFacebook></FaFacebook> Facebook </ListGroup.Item>
            <ListGroup.Item className='mb-2'> <FaTwitter/> Twittwer </ListGroup.Item>
            <ListGroup.Item className='mb-2'> <FaWhatsapp/> Whatsapp </ListGroup.Item>
            <ListGroup.Item className='mb-2'> <FaTwitch/> Twitch </ListGroup.Item>
          </ListGroup>
        </div>
        <div>
            <BrandCarousel></BrandCarousel>
        </div>
      </div>
    );
};

export default RightSideNav;