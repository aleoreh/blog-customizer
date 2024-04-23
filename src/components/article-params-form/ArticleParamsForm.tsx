import clsx from 'clsx';
import { useRef, useState } from 'react';

import styles from './ArticleParamsForm.module.scss';

import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import {
	ArticleStateType,
	OptionType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { useOutsideClick } from 'src/hooks/useOutsideClick';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import { Separator } from '../separator';
import { Text } from '../text';

export type SetOpen = (value: boolean) => void;
export type Submit = (articleState: ArticleStateType) => void;
export type Reset = () => void;

type ArticleParamsFormProps = {
	open: boolean;
	setOpen: SetOpen;
	submit: Submit;
	reset: Reset;
};

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	// стиль, который вводится пользователем
	const [inputArticleStyleState, setInputArticleStyleState] =
		useState<ArticleStateType>(defaultArticleState);

	// ссылка на элемент контейнера для формы
	const containerRef = useRef<HTMLElement>(null);

	// ссылка на кнопку переключения видимости формы
	const buttonRef = useRef<HTMLDivElement>(null);

	useOutsideClick({
		rootRefs: [containerRef, buttonRef],
		onClick: () => props.setOpen(false),
	});

	const toggleOpen = () => {
		props.setOpen(!props.open);
	};

	const submitForm = (evt: React.FormEvent) => {
		evt.preventDefault();
		props.submit(inputArticleStyleState);
	};

	const resetForm = (evt: React.FormEvent) => {
		evt.preventDefault();
		setInputArticleStyleState(defaultArticleState);
		props.reset();
	};

	const onOptionSelected =
		(optionName: keyof ArticleStateType) =>
		(option: OptionType): void => {
			setInputArticleStyleState({
				...inputArticleStyleState,
				[optionName]: option,
			});
		};

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
				<form className={styles.form} onSubmit={submitForm} onReset={resetForm}>
					<Text size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						title='Шрифт'
						options={fontFamilyOptions}
						selected={inputArticleStyleState.fontFamilyOption}
						onChange={onOptionSelected('fontFamilyOption')}
					/>
					<RadioGroup
						key='font-size-group'
						title='Размер шрифта'
						name='fontSize'
						options={fontSizeOptions}
						selected={inputArticleStyleState.fontSizeOption}
						onChange={onOptionSelected('fontSizeOption')}
					/>
					<Select
						title='Цвет шрифта'
						options={fontColors}
						selected={inputArticleStyleState.fontColor}
						onChange={onOptionSelected('fontColor')}
					/>
					<Separator />
					<Select
						title='Цвет фона'
						options={backgroundColors}
						selected={inputArticleStyleState.backgroundColor}
						onChange={onOptionSelected('backgroundColor')}
					/>
					<Select
						title='Ширина контента'
						options={contentWidthArr}
						selected={inputArticleStyleState.contentWidth}
						onChange={onOptionSelected('contentWidth')}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
