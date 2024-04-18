import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

type ArrowButtonProps = {
	willCloseOnClick: boolean;
	onClick: OnClick;
};

export const ArrowButton = (props: ArrowButtonProps) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(
				styles.container,
				props.willCloseOnClick && styles.container_open
			)}
			onClick={props.onClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(
					styles.arrow,
					props.willCloseOnClick && styles.arrow_open
				)}
			/>
		</div>
	);
};
