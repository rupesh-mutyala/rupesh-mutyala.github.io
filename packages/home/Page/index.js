import styles from './styles.module.css';

function Page({ className = '' }) {
	return (
		<div className={`${styles.page} ${styles[className]}`} />
	);
}

export default Page;
