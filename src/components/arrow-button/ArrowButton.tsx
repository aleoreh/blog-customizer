import arrow from 'src/images/arrow.svg';

import clsx from 'clsx';
import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

type ArrowButtonProps = {
	willCloseOnClick: boolean;
	onClick: OnClick;
};

export const ArrowButton = (props: ArrowButtonProps) => {
	const clickHandler = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		evt.stopPropagation();
		props.onClick();
	};

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
			onClick={clickHandler}>
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

ArrowButton.displayName = 'ArrowButton';
