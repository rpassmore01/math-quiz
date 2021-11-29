import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Question(props) {
    
    const oppers = ['+', '-', '*', '/'];
    const [firstNum, setFirstNum] = useState(Math.floor(Math.random() * 10));
    const [secondNum, setSecondNum] = useState(Math.floor(Math.random() * 10));
    const [opper, setopper] = useState(oppers[Math.floor(Math.random() * 4)]);
    const [userAnswer, setUserAnswer] = useState("");
    const [questionBox, setQuestionBox] = useState(styles.normalBackground);

    useEffect(() => {
        if (props.submited && Math.round(eval(firstNum + opper + secondNum)) == userAnswer && userAnswer != "") {
            setQuestionBox(styles.correctBackground);
            props.onCorrectAnswer();
        } else if(props.submited && Math.round(eval(firstNum + opper + secondNum)) != userAnswer || userAnswer == "" && props.submited) {
            setQuestionBox(styles.wrongBackground);
        }
    }, [props.submited])

    return (
        <div className={`${styles.questionContainer} ${questionBox}`}>
            <p>{firstNum} {opper} {secondNum} = </p>
            <input type="text" onChange={(e)=>setUserAnswer(e.target.value)} placeholder="Type answer here" className={styles.answerInput}></input>
            {props.submited && eval(firstNum + opper + secondNum) != userAnswer ? <p>Answer was {Math.round(eval(firstNum + opper + secondNum))}</p> : <p></p>}
        </div>
    )
}
