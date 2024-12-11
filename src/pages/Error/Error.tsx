import { NavLink } from 'react-router';
import Paragraph from '../../components/Paragraph/Paragraph';
import Layout from '../../layout/Layout/Layout';
import styles from './Error.module.css';

function Error() {
	return (
		<>
			<Layout>
				<div className={styles.error}>
					<div>Упс! Что-то пошло не так.</div>
					<Paragraph>
						К сожалению, произошла ошибка. <br />
						Попробуйте вернуться на главную страницу.
					</Paragraph>
					<NavLink to='/' className={styles['back-link']}>
						Вернуться на главную
					</NavLink>
					<img
						className={styles['error-icon']}
						src='/public/icon/error-icon.png'
						alt='Error'
					/>
				</div>
			</Layout>
		</>
	);
}

export default Error;
