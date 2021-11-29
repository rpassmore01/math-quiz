import styles from '../styles/Home.module.css';

export default function ResultsModal(props) {
    if (!props.show) {
        return null
    }

    return (
        <div className={styles.modal}>
            <div className={styles.resultsModal}>
                <h4>You got {props.results} / 10</h4>
                <button className={styles.closeModal} onClick={props.onClose}>New Quiz</button>
            </div>
        </div>
    )
}