import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import clsx from 'clsx';
import { useRef } from 'react';
import { useOutsideClick } from 'src/hooks/useOutsideClick';
import styles from './ArticleParamsForm.module.scss';

export type SetOpen = (value: boolean) => void;
export type Submit = () => void;
export type Reset = () => void;

type ArticleParamsFormProps = {
	open: boolean;
	setOpen: SetOpen;
	submit: Submit;
	reset: Reset;
	children: JSX.Element;
};

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const containerRef = useRef<HTMLElement>(null);
	const buttonRef = useRef<HTMLDivElement>(null);
	const toggleOpen = () => {
		props.setOpen(!props.open);
	};
	const formSubmit = (evt: React.FormEvent) => {
		evt.preventDefault();
		props.submit();
	};
	const formReset = (evt: React.FormEvent) => {
		evt.preventDefault();
		props.reset();
	};
	useOutsideClick({
		rootRefs: [containerRef, buttonRef],
		onClick: () => props.setOpen(false),
	});
	return (
		<>
			<ArrowButton
				ref={buttonRef}
				willCloseOnClick={props.open}
				onClick={toggleOpen}
			/>
			<aside
				ref={containerRef}
				className={clsx(styles.container, props.open && styles.container_open)}
				onClick={(ev) => {
					ev.stopPropagation();
				}}>
				<form
					className={clsx(styles.form, styles.form_spacing)}
					onSubmit={formSubmit}
					onReset={formReset}>
					{props.children}
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
