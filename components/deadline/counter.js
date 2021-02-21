import React, { useEffect, useRef, useState} from 'react';
const Counter = (props) =>{
    //console.log(props.deadline);
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTImerSeconds] = useState('00');

    let interval = useRef();

    const starTimer = () =>{
        const countDownDate = new Date(props.deadline*1000).getTime();
        interval = setInterval( ()=>{
            const now = new Date().getTime();
            const difference = countDownDate - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((difference % (1000 * 60 * 60) / (1000 * 60 )));
            const seconds = Math.floor((difference % (1000 * 60))/1000);

            if(difference < 0){
                clearInterval(interval.current)
            }else{
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTImerSeconds(seconds);
            }
        },1000)
    }
    useEffect( () =>{
        starTimer();
        return () =>{
            clearInterval(interval.current)
        }
    })
    return (
        <> 
            <div className="wrapper-deadline-counter">
                <h2>¡Prepárate!</h2>
                <p>Lo bueno está por venir</p>
                <div className="wrapper-deadline">
                    <div className="wrapper-deadline_timer">
                        <p>{timerDays}</p>
                        <small>Días</small>
                    </div>
                    <span>:</span>
                    <div className="wrapper-deadline_timer">
                        <p>{timerHours}</p>
                        <small>Horas</small>
                    </div>
                    <span>:</span>
                    <div className="wrapper-deadline_timer">
                        <p>{timerMinutes}</p>
                        <small>Minutos</small>
                    </div>
                    <span>:</span>
                    <div className="wrapper-deadline_timer">
                        <p>{timerSeconds}</p>
                        <small>Segundos</small>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .wrapper-deadline-counter{
                    display: flex;
                    flex-direction: column;
                    margin-bottom:1rem;
                }
                .wrapper-deadline-counter h2{
                    font-size:2rem;
                    color:white;
                    margin-bottom:1rem;
                }
                .wrapper-deadline-counter>p{
                    margin-bottom:1rem;
                }
                .wrapper-deadline {
                    border-radius:7px;
                    border:1px solid rgb(255 255 255 / 30%);
                    display:flex;
                    align-items: center;
                    padding:1rem;
                    width:100%;
                    justify-content:center;                    
                    color:white;
                }
                .wrapper-deadline span{
                    font-size:2rem;
                }
                .wrapper-deadline_timer{
                    padding:0px 0.85rem;
                }
                .wrapper-deadline_timer p {
                    font-weight:bold;
                    font-size:2rem;
                }
            `}</style>
        </>
        
    )
}

export default Counter;