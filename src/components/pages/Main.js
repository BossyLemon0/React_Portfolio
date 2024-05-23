import React, {lazy, Suspense} from "react";
import '../../styles/App.css'
const HomeComponent = lazy(()=> import('../Home'))
const SkillsComponent = lazy(()=> import('../Skills'))
const ProjectsComponent = lazy(()=> import('../Projects'))
const FooterComponent = lazy(()=> import('../Footer'))
const ContactComponent = lazy(()=> import('../Contact'))

const renderLoader = () => <p>Loading</p>


export default function Main(props){
return( 
    <Suspense fallback = {renderLoader()}>
        <HomeComponent />
        <SkillsComponent />
        <ProjectsComponent />
        <ContactComponent  />
        <FooterComponent />
    </Suspense>
);
}