import "../styles/Output.css"
import moment from "moment"

export default function Output({name, email, phone, eduList, proList}){
    return(
        <div className="output">
            <section className="general">
                <h1 className="name-output">{name}</h1>
                <p className="detail-output"><span>{email}</span><br></br><span>{phone}</span></p>
            </section>
            
            <section className="edu">
                <h2 className="section-label">Education</h2>
                {eduList.map((edu) => {
                    return(
                        <div className="block-output">
                            <div className="left-side">
                                <h3>{edu.uni}</h3>
                                <p>{edu.course}</p>
                            </div>
                            
                            <p><span>{moment(edu.uniFrom).format('MMMM YYYY')}</span> - <span>{moment(edu.uniTo).format('MMMM YYYY')}</span></p>
                        </div>
                    )
                })}
            </section>

            <section className="pro">
                <h2 className="section-label">Experience</h2>
                {proList.map((pro) => {
                    return(
                        <div className="block-output">
                            <div className="left-side">
                                <h3>{pro.comp}</h3>
                                <p>{pro.position}</p>
                                <p>{pro.respo}</p>
                            </div>
                            
                            <p><span>{moment(pro.proFrom).format('MMMM YYYY')}</span> - <span>{moment(pro.proTo).format('MMMM YYYY')}</span></p>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}