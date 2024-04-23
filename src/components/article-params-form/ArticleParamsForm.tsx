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

type ArticleParamsForm = (props: {
	submit: Submit;
	reset: Reset;
}) => JSX.Element;

export const ArticleParamsForm: ArticleParamsForm = ({ submit, reset }) => {
	// стиль, который вводится пользователем
	const [inputArticleStyleState, setInputArticleStyleState] =
		useState<ArticleStateType>(defaultArticleState);

	// видимость этой формы
	const [isOpened, setIsOpened] = useState<boolean>(false);

	// ссылка на элемент контейнера для формы
	const containerRef = useRef<HTMLElement | null>(null);

	useOutsideClick({
		rootRefs: containerRef,
		onClick: () => setIsOpened(false),
	});

	const submitForm = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		submit(inputArticleStyleState);
		setIsOpened(false);
	};

	const resetForm = (evt: React.FormEvent) => {
		evt.preventDefault();
		setInputArticleStyleState(defaultArticleState);
		reset();
		setIsOpened(false);
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
				willCloseOnClick={isOpened}
				onClick={() => setIsOpened(!isOpened)}
			/>
			<aside
				ref={containerRef}
				className={clsx(styles.container, isOpened && styles.container_open)}
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
