import styles from "./Loader.module.css";
import { LoaderProps } from "./Loader.props";

function Loader({ children }: LoaderProps): JSX.Element {
	return (
		<div className={styles.loader}>
			<div className={styles.spinner}></div>
			{children}
		</div>
	);
}

export default Loader;
