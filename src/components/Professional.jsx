import Field from "./Field";
import "../styles/Professional.css"

export default function ProfessionalField({proID, comp, position, respo, proFrom, proTo, updateProHandler}){
    return(
        <section className="prof-block">
            <div className="prof-sub-block">
                <Field label="Company:" id={proID + "comp"} type="text" value={comp} handler={(e) => updateProHandler(proID, e.target.value, 'comp')}/>
                <Field label="Position:" id={proID + "position"} type="text" value={position} handler={(e) => updateProHandler(proID, e.target.value, 'position')}/>
                <Field label="From:" id={proID + "proFrom"} type="date" value={proFrom} handler={(e) => updateProHandler(proID, e.target.value, 'proFrom')}/>
                <Field label="To:" id={proID + "proTo"} type="date" value={proTo} handler={(e) => updateProHandler(proID, e.target.value, 'proTo')}/>
            </div>
            <Field label="Responsibilities:" id={proID + "respo"} type="textarea" value={respo} handler={(e) => updateProHandler(proID, e.target.value, 'respo')}/>
        </section>
    )
}