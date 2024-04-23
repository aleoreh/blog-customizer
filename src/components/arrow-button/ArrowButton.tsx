import arrow from 'src/images/arrow.svg';

import clsx from 'clsx';
import styles from './ArrowButton.module.scss';
import { forwardRef } from 'react';

type ArrowButtonProps = {
	willCloseOnClick: boolean;
	onClick: () => void;
};

export const ArrowButton = forwardRef<HTMLDivElement, ArrowButtonProps>(
	({ willCloseOnClick, onClick }, ref) => {
		return (
			/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
			<div
				ref={ref}
				role='button'
				aria-label='Открыть/Закрыть форму параметров статьи'
				tabIndex={0}
				className={clsx(
					styles.container,
					willCloseOnClick && styles.container_open
				)}
				onClick={() => onClick()}>
				<img
					src={arrow}
					alt='иконка стрелочки'
					className={clsx(styles.arrow, willCloseOnClick && styles.arrow_open)}
				/>
			</div>
		);
	}
);

ArrowButton.displayName = 'ArrowButton';
