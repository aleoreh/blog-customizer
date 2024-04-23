import arrow from 'src/images/arrow.svg';

import clsx from 'clsx';
import styles from './ArrowButton.module.scss';

type ArrowButton = (props: {
	willCloseOnClick: boolean;
	onClick: () => void;
}) => JSX.Element;

export const ArrowButton: ArrowButton = ({ willCloseOnClick, onClick }) => {
	const clickHandler = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		evt.stopPropagation();
		onClick();
	};

	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(
				styles.container,
				willCloseOnClick && styles.container_open
			)}
			onClick={clickHandler}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, willCloseOnClick && styles.arrow_open)}
			/>
		</div>
	);
};
