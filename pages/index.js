import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Question from '../components/question'
import { useState } from 'react'

export default function Home() {
  const [submited, setSubmited] = useState(false);

  function handleSubmitTest() {
    setSubmited(true);
  }

  return (
    <div>
      {[...Array(10)].map(() => (
    <Question submited={submited}></Question>
  ))}
      <button onClick={handleSubmitTest}>Submit</button>
    </div>
  )
}
