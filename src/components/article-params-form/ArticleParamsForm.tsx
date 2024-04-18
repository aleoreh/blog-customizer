import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';

export type SetOpen = (value: boolean) => void;

type ArticleParamsFormProps = {
	open: boolean;
	setOpen: SetOpen;
};

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const formClickHandler = (evt: React.MouseEvent) => {
		// событие клика не должно всплыть дальше, чтобы не попасть в корневой элемент,
		// и он бы не отработал закрытие этой формы;
		// todo: хотя нужно рассмотреть вариант с перехватом этого события там, где оно
		// не должно отработать (в корневом элементе)
		evt.stopPropagation();
	};
	const toggleOpen = () => {
		props.setOpen(!props.open);
	};
	return (
		<>
			<ArrowButton willCloseOnClick={props.open} onClick={toggleOpen} />
			<aside
				className={clsx(styles.container, props.open && styles.container_open)}>
				<form className={styles.form} onClick={formClickHandler}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
