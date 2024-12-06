import React,{useState} from 'react'
import Navbar from './navbar/Navbar'
import { routes } from "../../constant"
import Drawer from './Drawer/Drawer'
import GalleryDrawer from './GalleryDrawer/GalleryDrawer'

const Navigation = ({homeMarque}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenGallery, setIsOpenGallery] = useState(false);


  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const toggleGalleryDrawer = () => {
    setIsOpenGallery(!isOpenGallery);
  };
    
  return (

    <>
    <Drawer routes={routes} isOpen={isOpen} toggleDrawer={toggleDrawer}     />
    <Navbar toggleDrawer={toggleDrawer} toggleGalleryDrawer={toggleGalleryDrawer} routes={routes}  homeMarque= {homeMarque}  />
    <GalleryDrawer isOpenGallery={isOpenGallery} toggleGalleryDrawer={toggleGalleryDrawer} />
    </>
  )
}

export default Navigation