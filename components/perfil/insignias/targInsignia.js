import Image from 'next/image'

const TargInsignia = (props) =>{
    return(
        <div className="containerTargInsignia">
           <Image className="insigniaImg" src={props.url} alt='Insignia' width='130' height='130'/>
        </div>
    )
}

export default TargInsignia