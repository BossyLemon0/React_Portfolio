import React, {lazy, Suspense} from "react";
import '../../styles/App.css'
const HomeComponent = lazy(()=> import('../Home'))
const AboutComponent = lazy(()=> import('../About'))
const ProjectsComponent = lazy(()=> import('../Projects'))
const FooterComponent = lazy(()=> import('../Footer'))
const ContactComponent = lazy(()=> import('../Contact'))

const renderLoader = () => <p>Loading</p>


export default function Main(props){
return( 
    <Suspense fallback = {renderLoader()}>
        <HomeComponent />
        <AboutComponent />
        <ProjectsComponent />
        <ContactComponent  />
        <FooterComponent />
    </Suspense>
);
}