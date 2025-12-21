import { useState } from "react"
import Field from "./Field.jsx"
import Output from "./Output.jsx";
import Header from "./Header.jsx"
import EducationalField from "./Educational.jsx";
import ProfessionalField from "./Professional.jsx";
import "../styles/Form.css"
import deleteLogo from "../assets/delete.png"
import addLogo from "../assets/add.png"
import backLogo from "../assets/back.png"
import showLogo from "../assets/show.png"
import hideLogo from "../assets/hide.png"


export default function Form(){ 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [activeIndex, setActiveIndex] = useState(0);

    function nameHandler(e){
        setName(e.target.value);
    }

    function emailHandler(e){
        setEmail(e.target.value);
    }

    function phoneHandler(e){
        setPhone(e.target.value);
    }

    const [eduList, setEduList] = useState([]);
    const [proList, setProList] = useState([]);

    function updateEduHandler(eduID, value, prop){
        const updatedList = eduList.map((edu) => {
            if(edu.eduID === eduID){
                return {...edu, [prop]: value}
            }
            return edu;
        })
        setEduList(updatedList);
    }

    function updateProHandler(proID, value, prop){
        const updatedList = proList.map((pro) => {
            if(pro.proID === proID){
                return {...pro, [prop]: value}
            }
            return pro;
        })
        setProList(updatedList);
    }
    
    return(
        <div>
            <Header resetHandler={() => {
                setEduList([])
                setProList([])
                setName('')
                setPhone('')
                setEmail('')
            }}/>
            {activeIndex === 0 ? 
                <form>
                    <section>
                        <h1 className="thick-font">General Information</h1>
                        <div className="form-block">
                            <Field 
                                label="Name:" 
                                id="name" 
                                type="text" 
                                value={name} 
                                handler={nameHandler}
                            />
                            <Field 
                                label="Email:" 
                                id="email" 
                                type="email" 
                                value={email} 
                                handler={emailHandler}
                            />
                            <Field 
                                label="Phone:" 
                                id="phone" 
                                type="number" 
                                value={phone} 
                                handler={phoneHandler}
                            />
                        </div>
                    </section>

                    <section>
                        <h1 className="thick-font">Educational Information</h1>
                        {eduList.map((edu) => {
                            return(
                                <div className="form-block">
                                    <div className="btn-block">
                                        <img src={edu.isShown === true ? hideLogo : showLogo} className="delete-btn" onClick={() => {                    
                                            const updatedList = eduList.map((item) => {
                                                if(item.eduID === edu.eduID){
                                                    return {...item, isShown: item.isShown === true ? false : true};
                                                }
                                                return item
                                            })
                                            setEduList(updatedList);
                                        }}/>
                                        <img src={deleteLogo} className="delete-btn" onClick={() => {
                                            const updatedList = eduList.filter((eduItem) => eduItem.eduID !== edu.eduID);
                                            setEduList(updatedList);
                                        }}/>
                                    </div>
                                    {
                                        edu.isShown === true &&
                                    <EducationalField 
                                        eduID={edu.eduID} 
                                        uni={edu.uni} 
                                        course={edu.course} 
                                        uniFrom={edu.uniFrom} 
                                        uniTo={edu.uniTo} 
                                        updateEduHandler={updateEduHandler}
                                    />
                                    }
                                </div>

                            )
                        })}
                        <img src={addLogo} className="add-btn" onClick={() => {
                            const currList = [...eduList];
                            currList.push({
                                "eduID": crypto.randomUUID(), 
                                "uni": '',
                                "course": '', 
                                "uniFrom": '',
                                "uniTo": '',
                                "updateEduHandler": updateEduHandler,
                                "isShown": true,
                            })
                            setEduList(currList);
                        }}/>
                    </section>

                    <section>
                        <h1 className="thick-font">Professional Information</h1>
                        {proList.map((pro) => {
                            return(
                                <div className="form-block">
                                    <div className="btn-block">
                                        <img src={pro.isShown === true ? hideLogo : showLogo} className="delete-btn" onClick={() => {                    
                                            const updatedList = proList.map((item) => {
                                                if(item.proID === pro.proID){
                                                    return {...item, isShown: item.isShown === true ? false : true};
                                                }
                                                return item
                                            })
                                            setProList(updatedList);
                                        }}/>
                                        <img src={deleteLogo} className="delete-btn" onClick={() => {
                                            const updatedList = proList.filter((proItem) => proItem.proID !== pro.proID);
                                            setProList(updatedList);
                                        }}/>
                                    </div>
                                    {pro.isShown === true &&
                                        <ProfessionalField 
                                            proID={pro.proID} 
                                            comp={pro.comp} 
                                            position={pro.position} 
                                            respo={pro.respo} 
                                            proFrom={pro.proFrom} 
                                            proTo={pro.proTo} 
                                            updateProHandler={updateProHandler}
                                        />
                                    }
                                </div>

                            )
                        })}
                        <img src={addLogo} className="add-btn" onClick={() => {
                            const currList = [...proList];
                            currList.push({
                                "proID": crypto.randomUUID(), 
                                "comp": '',
                                "position": '', 
                                "respo": '', 
                                "proFrom": '',
                                "proTo": '',
                                "updateProHandler": updateProHandler,
                                "isShown": true,
                            })
                            setProList(currList);
                        }}/>
                    </section>

                    <button className="submit-btn thick-font" type="submit" onClick={() => setActiveIndex(1)}>Submit</button>
                </form> 
                : 
                <div>
                    <img src={backLogo} className="edit-btn" onClick={() => setActiveIndex(0)}/>
                    <Output 
                        name={name} 
                        email={email} 
                        phone={phone} 
                        eduList={eduList} 
                        proList={proList}
                    />
                </div>
            }
        </div>
    )
}

