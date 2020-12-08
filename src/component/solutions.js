const Solutions = (props) => {
    return (
       
        <div className="solution">
            <img src={props.src}/><br/>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
       
     );
}
 
export default Solutions;