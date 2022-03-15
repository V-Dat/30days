import "./index.css";
import "../../assets/css/grid.css";
import { useState, useEffect } from "react";
import data from "../data";

function Day7() {
  // todo list 
  const [jobs,setJobs] = useState([])
  const [job,setJob] = useState('')
  const [checked,setChecked] = useState([])
  const [countLi,setCountLi] = useState(0)
  // event hover remove todo list

  //xử lý enter input:
  const handleEnter = (e) =>{ if(e.key==='Enter' && job !== ''){    
    let countLiChecked = document.querySelectorAll('input:checked').length;
    setJobs( (prev) => [...prev,job])
    setCountLi(jobs.length - countLiChecked + 1)
    setJob('') } 
  }  

  const handleInputJob = (e) => {
    setJob( e.target.value)
    console.log('JOB: ',job)
  }
  
  const handleAddJobs = () => {
    let countLiChecked = document.querySelectorAll('input:checked').length;
      setCountLi( () => {
      return (jobs.length - countLiChecked)})

    if(job !== ''){ 
    setJobs( (prev) => [...prev,job])
    setCountLi(jobs.length -countLiChecked +1)
    setJob('') } }

  const handleDelJob = ({e, eJob}) => {
    
    console.log('JOB: ',eJob ,'-- del');
    setJobs ( (prev) => [ ...prev].filter(ele => {return ele !== eJob}))
    setJobs ( (prev) => [ ...prev].filter(ele => {return ele}))
    
    console.log('JOB: ',jobs);
    // console.log('e: ',e.target);

    if(e.target.previousElementSibling.previousElementSibling.hasAttribute('checked')){
      //  trường hợp nếu input checked bị xóa   
      setCountLi( () =>  {
        const countLiChecked = document.querySelectorAll('input:checked').length -1;
        return jobs.length -1  - countLiChecked}
        )}

      else{
        //  trường hợp nếu input unchecked bị xóa   

      setCountLi( () =>  {
        const countLiChecked = document.querySelectorAll('input:checked').length;
        return jobs.length -1  - countLiChecked})
    }
    }

  const handleCheckBox = (eJob) => {
    setChecked((prev) =>
    prev.includes(eJob) ?  checked.filter(e => (e !== eJob)) : [...prev,eJob] )
    console.log('JOB- Checked: ' + checked);

    //xu li check => pending - di so lan check
    let countLiChecked = document.querySelectorAll('input:checked').length;
    setCountLi( () => {
      return (jobs.length - countLiChecked)
    })

  }

  const handleRemoveAllTask = () =>{
    setJobs([])
    setCountLi(0)
    setJob('')
  }

  return (
    <div className="day7 grid wide">
      <div className="row">
        <div className="col l-12 m-12 c-12">
          <div className="todo">
          <h1 className="todo__title"><i className="fa-solid fa-list-check"></i>  TODO LIST</h1>
          <div className="todo__add">
            <input className="todo-add__input"type="text" value={job} onChange={(e) => handleInputJob(e)} onKeyDown={(e) => handleEnter(e)}/>
            <button className="todo-add__button" onClick = {handleAddJobs}> <i className="fa-solid fa-plus"></i> </button>
          </div>
          <ol className="todo__lists" >
              {jobs.map( (eJob ) => (
                <li key={ Math.random()*0.193 }  className='todo__list'>
                    <input type="checkbox" checked={checked.includes(eJob)} onChange = { () => handleCheckBox(eJob)}/>
                    <div className="job-in-list" onChange={ (e) =>handleCheckBox(e) } value= {eJob} >
                        <div >{`${jobs.indexOf(eJob) + 1}: `}</div>
                      <div >
                        {eJob || '---Hãy nhập todo list của bạn!---'} 
                        </div>
                    </div>
                    <button className="btn-del-job" onClick={(e) => handleDelJob({e, eJob})}>X</button>
                </li>
              ))}
              <div className="todo__clearAll" >
                <div>{ countLi === 0 ? `No task pending !`:`You have ${countLi} tasks pending` }</div>
                <button onClick={handleRemoveAllTask}> Clear All </button>
              </div>
          </ol>

        </div>
        </div>
      </div>
      </div>
  );
}

export default Day7;
