import './index.css';

const Total = (props) => {
    console.log(props)
    return(
        <div className="total">
        
        <h2>Total number of exercises : {props.total} </h2>
            
        </div>
    )
}

export default Total
