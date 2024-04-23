import {
	ArticleStateType,
	OptionType,
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import { Separator } from '../separator';
import { Text } from '../text';

type InputArticleParams = (props: {
	input: ArticleStateType;
	setInput: (articleStyle: ArticleStateType) => void;
}) => JSX.Element;

/**
 * Компонент, отображающий поля ввода настроек
 */
export const InputArticleParams: InputArticleParams = ({ input, setInput }) => {
	const onOptionSelected =
		(optionName: keyof ArticleStateType) =>
		(option: OptionType): void => {
			setInput({ ...input, [optionName]: option });
		};

	return (
		<>
			<Text size={31} weight={800} uppercase>
				Задайте параметры
			</Text>
			<Select
				title='Шрифт'
				options={fontFamilyOptions}
				selected={input.fontFamilyOption}
				onChange={onOptionSelected('fontFamilyOption')}
			/>
			<RadioGroup
				key='font-size-group'
				title='Размер шрифта'
				name='fontSize'
				options={fontSizeOptions}
				selected={input.fontSizeOption}
				onChange={onOptionSelected('fontSizeOption')}
			/>
			<Select
				title='Цвет шрифта'
				options={fontColors}
				selected={input.fontColor}
				onChange={onOptionSelected('fontColor')}
			/>
			<Separator />
			<Select
				title='Цвет фона'
				options={backgroundColors}
				selected={input.backgroundColor}
				onChange={onOptionSelected('backgroundColor')}
			/>
			<Select
				title='Ширина контента'
				options={contentWidthArr}
				selected={input.contentWidth}
				onChange={onOptionSelected('contentWidth')}
			/>
		</>
	);
};
