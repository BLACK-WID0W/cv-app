import Field from "./Field";
import "../styles/Educational.css"

export default function EducationalField({eduID, uni, course, uniFrom, uniTo, updateEduHandler}){
    return(
        <section className="edu-block">
            <Field label="University:" id={eduID + "uni"} type="text" value={uni} handler={(e) => updateEduHandler(eduID, e.target.value, 'uni')}/>
            <Field label="Course:" id={eduID + "course"} type="text" value={course} handler={(e) => updateEduHandler(eduID, e.target.value, 'course')}/>
            <Field label="From:" id={eduID + "uniFrom"} type="date" value={uniFrom} handler={(e) => updateEduHandler(eduID, e.target.value, 'uniFrom')}/>
            <Field label="To:" id={eduID + "uniTo"} type="date" value={uniTo} handler={(e) => updateEduHandler(eduID, e.target.value, 'uniTo')}/>
        </section>
    )
}