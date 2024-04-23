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
import { useModalClose } from 'src/hooks/useModalClose';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import { Separator } from '../separator';
import { Text } from '../text';

type ArticleParamsForm = (props: {
	submit: (articleState: ArticleStateType) => void;
	reset: () => void;
}) => JSX.Element;

export const ArticleParamsForm: ArticleParamsForm = ({ submit, reset }) => {
	// стиль, который вводится пользователем
	const [inputArticleStyleState, setInputArticleStyleState] =
		useState<ArticleStateType>(defaultArticleState);

	// видимость этой формы
	const [isOpened, setIsOpened] = useState<boolean>(false);

	// ссылка на элемент контейнера для формы
	const containerRef = useRef<HTMLDivElement | null>(null);

	useModalClose({
		isOpened,
		setClosed: () => setIsOpened(false),
		selfRefs: containerRef,
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
		(selected: OptionType): void => {
			setInputArticleStyleState({
				...inputArticleStyleState,
				[optionName]: selected,
			});
		};

	return (
		<div ref={containerRef} className='form-container'>
			<ArrowButton
				willCloseOnClick={isOpened}
				onClick={() => setIsOpened(!isOpened)}
			/>
			<aside
				className={clsx(styles.container, isOpened && styles.container_open)}>
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
		</div>
	);
};
