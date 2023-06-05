import React ,{useState}from 'react'

import {ArrowDown} from 'react-feather'
import Editor from './Editor';

import styles from './Body.module.css';
function Body() {
const sections={
basicInfo:"Basic Info",
workInfo:"Work Experience",
project:"Project",
education:"Education",
achivement:"Achivement",
summary:"Summary",
other:"Other",
};

const [resumeInformation,setResumeInformation]=useState({
[sections.basicInfo]:{
    id:sections.basicInfo,
    sectionTitle:sections.basicInfo,
    details:{},
},
[sections.workExp]:{
    id:sections.workExp,
    sectionTitle:sections.workExp,
    details:[],
},
[sections.project]:{
    id:sections.project,
    sectionTitle:sections.project,
    details:[],
},
[sections.education]:{
    id:sections.education,
    sectionTitle:sections.education,
    details:[],
},
[sections.achivement]:{
    id:sections.achivement,
    sectionTitle:sections.achivement,
    points:[],
},
[sections.summary]:{
    id:sections.summary,
    sectionTitle:sections.summary,
    details:"",
},
[sections.other]:{
    id:sections.other,
    sectionTitle:sections.workExp,
    details:"",
},



});











  return (
    <>
    <div className={styles.container}>
      <p className={styles.heading}>Resume Builder</p>
      <div className={styles.toolbar}>

       
        <button>Download <ArrowDown/></button>
      </div>
    </div>
    <div className={styles.main}>
<Editor sections={sections} information={resumeInformation}
setInformation ={setResumeInformation}/>
    </div>
    </>
  )
}

export default Body
