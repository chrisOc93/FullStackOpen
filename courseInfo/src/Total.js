import './index.css';
const Total = (props) => {
    return(
        <div className="total">
        
            <h2>Total number of exercises : {props.exercises1 + props.exercises2 + props.exercises3}</h2>
            
        </div>
    )
}

export default Total
