import React, { useEffect, useState } from "react";
import styles from "./Editor.module.css";
import InputControl from "./InputControl.js";
import CloseIcon from '@mui/icons-material/Close';
import feather from "react-feather";
function Editor(props) {
  const sections = props.sections;
  const information = props.information;

  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );






  const [activeInformation,setActiveInformation]=useState(
    information[sections[Object.keys(sections)[0]]]
  );

const [sectionTitle,setSectionTitle]=useState(
    sections[Object.keys(sections)[0]]  
);

const [values,setValues]=useState({
name:activeInformation?.detail?.name ||"",
title:activeInformation?.detail?.title ||"",
linkedIn:activeInformation?.detail?.linkedIn ||"",
phone:activeInformation?.detail?.phone ||"",
email:activeInformation?.detail?.email ||"",
github:activeInformation?.detail?.github ||""
});

const handlePointUpdate=(value,index)=>{
    const tempValues={...values};
    tempValues.points[index]=value;
    setValues(tempValues);
}


  const workExpBody = (
    <div className={styles.detail}>
        
      <div className={styles.row}>
        
        <InputControl
        
          label="title"
          placeholder="Enter title: Frontend Developer"
          defaultValue={values.title}
          onChange={(event)=>setValues(prev=>({...prev,title:event.target.value}))}
        />
        <InputControl
          label="Compant Name"
          placeholder="Enter company name: amazone "
          defaultValue={values.companyName}
          onChange={(event)=>setValues(prev=>({...prev,companyName:event.target.value}))}
        />
      </div>

      <div className={styles.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Enter certificate link"
          defaultValue={values.certificationlink}
          onChange={(event)=>setValues(prev=>({...prev,certificationlink:event.target.value}))}
        />
        <InputControl label="Location" placeholder="Enter Location : Remote " 
        defaultValue={values.location}
        onChange={(event)=>setValues(prev=>({...prev,location:event.target.value}))}
        />
        
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
          defaultValue={values.startDate}
          onChange={(event)=>setValues(prev=>({...prev,startDate:event.target.value}))}
        />
        <InputControl label="End Date" placeholder="Enter end date of work" 
        defaultValue={values.endDate}
        onChange={(event)=>setValues(prev=>({...prev,endDate:event.target.value}))}
        />
      </div>
      <div className={styles.column}>
        <label>enter work description</label>
        <InputControl placeholder="Line 1" 
        defaultValue={values.points ? values.points[0]:""}
        onChange={(event)=>handlePointUpdate(event.target.value,0)}





        />
        <InputControl placeholder="Line 2" 
        defaultValue={values.points ? values.points[1]:""}
        onChange={(event)=>handlePointUpdate(event.target.value,1)}
    />
        <InputControl placeholder="Line 3" 
        defaultValue={values.points ? values.points[2]:""}
        onChange={(event)=>handlePointUpdate(event.target.value,2)}
        />
      </div>
    </div>
  );

  const projectBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl label="Title" placeholder="Enter title: chat app" 
        defaultValue={values.title}
        onChange={(event)=>setValues(prev=>({...prev,title:event.target.value}))}
        />
      </div>
      <InputControl
        label="Overview"
        placeholder="Enter basic overview of project"
        defaultValue={values.overview}
        onChange={(event)=>setValues(prev=>({...prev,overview:event.target.value}))}
      />
      <div className={styles.row}>
        <InputControl
          label="Deployed link"
          placeholder="Enter deployed link of project"
          defaultValue={values.link}
          onChange={(event)=>setValues(prev=>({...prev,link:event.target.value}))}
        />
        <InputControl
          label="Github Link"
          placeholder="Enter github link of project"
          defaultValue={values.github}
          onChange={(event)=>setValues(prev=>({...prev,github:event.target.value}))}
        />
      </div>
      <div className={styles.column}>
        <label>Enter project description</label>
        <InputControl placeholder="Line 1" 
        defaultValue={values.points ? values.points[0]:""}
        onChange={(event)=>handlePointUpdate(event.target.value,0)}
        />
        <InputControl placeholder="Line 2" 
        defaultValue={values.points ? values.points[1]:""}/>
        onChange={(event)=>handlePointUpdate(event.target.value,1)}
        <InputControl placeholder="Line 3" 
        defaultValue={values.points ? values.points[2]:""}
        onChange={(event)=>handlePointUpdate(event.target.value,2)}/>
        <InputControl placeholder="Line 4" 
        defaultValue={values.points ? values.points[3]:""}/>
        onChange={(event)=>handlePointUpdate(event.target.value,3)}
      </div>
    </div>
  );

  const educationBody = (
    <div className={styles.details}>
      <div className={styles.row}>
        <InputControl label="Title" placeholder="Enter title :B-tech" 
         onChange={(event)=>setValues(prev=>({...prev,title:event.target.value}))}
         defaultValue={values.title}/>
      </div>
      <InputControl
        label="College/School name"
        placeholder="Enter name of your college/school"
        defaultValue={values.college}
        onChange={(event)=>setValues(prev=>({...prev,college:event.target.value}))}
      />
      <div className={styles.row}>
        <InputControl
          label="start Date"
          type="date"
          placeholder="Enter start date of this education"
          defaultValue={values.startDate}
          onChange={(event)=>setValues(prev=>({...prev,startDate:event.target.value}))}
          
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
          defaultValue={values.endDate}
          onChange={(event)=>setValues(prev=>({...prev,endDate:event.target.value}))}
        />
      </div>
    </div>
  );

  const basicInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl label="Name" placeholder="Enter your full name : pooja"
         defaultValue={values.name} 
         onChange={(event)=>setValues(prev=>({...prev,name:event.target.value}))}/>
         
        <InputControl
          label="Title"
          placeholder="Enter your title :Frontend developer"
          defaultValue={values.title}
          onChange={(event)=>setValues(prev=>({...prev,title:event.target.value}))}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Linkedin Link"
          placeholder="Enter your linkedin profile link"
          defaultValue={values.linkedin}
          onChange={(event)=>setValues(prev=>({...prev,linkedin:event.target.value}))}
        />
        <InputControl
          label="Github Link"
          placeholder="Enter your github profile link"
          defaultValue={values.github}
          onChange={(event)=>setValues(prev=>({...prev,github:event.target.value}))}
        />
      </div>
      <div className={styles.row}>
        <InputControl label="Email" placeholder="Enter your email" 
         defaultValue={values.email}
         onChange={(event)=>setValues(prev=>({...prev,email:event.target.value}))}/>
        <InputControl
          label="Enter phone"
          placeholder="Enter your phone number"
          defaultValue={values.phone}
          onChange={(event)=>setValues(prev=>({...prev,phone:event.target.value}))}
        />
      </div>
    </div>
  );

  const achivementBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List your achivements</label>
        <InputControl placeholder="Line 1"
         defaultValue={values.points ? values.points[0]:""} 
         
         onChange={(event)=>handlePointUpdate(event.target.value,0)}/>
        <InputControl placeholder="Line 2" 
         defaultValue={values.points ? values.points[1]:""}
         onChange={(event)=>handlePointUpdate(event.target.value,1)}/>
        <InputControl placeholder="Line 3" 
         defaultValue={values.points ? values.points[2]:""}
         onChange={(event)=>handlePointUpdate(event.target.value,2)}/>
        <InputControl placeholder="Line 4" 
         defaultValue={values.points ? values.points[3]:""}
         onChange={(event)=>handlePointUpdate(event.target.value,3)}/>
      </div>
    </div>
  );

  const summaryBody = (
    <div className={styles.detail}>
      <InputControl
        label="summary"
        placeholder="Enter your objective/summary"
        defaultValue={values.summary}
        onChange={(event)=>setValues(prev=>({...prev,summary:event.target.value}))}
      />
    </div>
  );

  const otherBody = (
    <div className={styles.detail}>
      <InputControl label="Other" placeholder=" Enter Something" 
      defaultValue={values.other}
      onChange={(event)=>setValues(prev=>({...prev,other:event.target.value}))}/>
    </div>
  );

  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return basicInfoBody;
    
      case sections.workExp:
        return workExpBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achivement:
        return achivementBody;
      

        case sections.summary:
        return summaryBody;
        case sections.other:
        return otherBody;
        default:return null;
    }
  };



useEffect(()=>{

    const activeInfo=information[sections[activeSectionKey]]
    },[activeSectionKey]);
    
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map((key) => (
          <div
            className={`${styles.section} ${
              activeSectionKey === key ? styles.active : ""
            }
`}
            key={key}
            onClick={() => setActiveSectionKey(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>
      <div className={styles.Body}>
        <InputControl label="Title" placeholder="Enter section title" 
        value={sectionTitle}
        onChange={(event)=>setSectionTitle(event.target.value)}
        />
<div className={styles.chips}>

    {
activeInformation?.detail?
activeInformation?.detail?.map((item,index)=>(
<div className={styles.chip} key={item.title+index}>
<p>{sections[activeSectionKey]} {index+1}</p><p><CloseIcon/></p>
</div>
))
:""}
   

 </div>
        {generateBody()}
        <button onClick={styles.Body}>Save</button>
      </div>
    </div>
  );
}
export default Editor;
