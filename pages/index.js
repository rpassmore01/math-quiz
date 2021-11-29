import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Question from '../components/question'
import { useState } from 'react'
import ResultsModal from '../components/resultsModal';

export default function Home() {
  const [submited, setSubmited] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  function handleSubmitTest() {
    setSubmited(true);
    setShowResults(true);
  }

  const value = 0;

  function handleCorrectAnswer() {
    value++;
    setScore(value);
  }

  return (
    <div className={styles.body}>
      <h1>Math Quiz</h1>
      <div className={styles.questions}>
        {[...Array(10)].map((currElement, index) => (
        <Question submited={submited} onCorrectAnswer={handleCorrectAnswer} key={index}></Question>
      ))}
      </div>
      <ResultsModal show={showResults} onClose={() => window.location.reload()} results={score}></ResultsModal>
      <button onClick={handleSubmitTest}>Submit</button>
    </div>
  )
}
