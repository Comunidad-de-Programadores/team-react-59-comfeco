import Image from 'next/image'

const RecentActivities = () =>{
    return(
        <div className="containerRecentActivities">
            <h4>Actividad Reciente</h4>
            <div className="contentRecentActivities">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <Image src='/perfil/recentActivities.svg' width='100' height='100'/>
            </div>
        </div>
    )   
}

export default RecentActivities