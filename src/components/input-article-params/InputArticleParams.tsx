import {
	OptionType,
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { ArticleStyle } from 'src/types';
import { Select } from '../select';
import { Text } from '../text';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

type InputArticleParams = (props: {
	input: ArticleStyle;
	setInput: (articleStyle: ArticleStyle) => void;
}) => JSX.Element;

export const InputArticleParams: InputArticleParams = ({ input, setInput }) => {
	// семейство шрифтов
	const defaultFont =
		fontFamilyOptions.find((x) => x.value === input['--font-family']) ||
		fontFamilyOptions[0];

	const onFontSelected = (font: OptionType) => {
		setInput({ ...input, '--font-family': font.value });
	};

	// размер шрифта
	const defaultFontSize =
		fontSizeOptions.find((x) => x.value === input['--font-size']) ||
		fontSizeOptions[0];

	const onFontSizeSelected = (fontSize: OptionType) => {
		setInput({ ...input, '--font-size': fontSize.value });
	};

	// цвет текста
	const defaultFontColor =
		fontColors.find((x) => x.value === input['--font-color']) || fontColors[0];

	const onFontColorSelected = (fontColor: OptionType) => {
		setInput({ ...input, '--font-color': fontColor.value });
	};

	// цвет фона
	const defaultBackgroundColor =
		backgroundColors.find((x) => x.value === input['--bg-color']) ||
		backgroundColors[0];

	const onBackgroundColorSelected = (bgColor: OptionType) => {
		setInput({ ...input, '--bg-color': bgColor.value });
	};

	// ширина контента
	const defaultContentWidth =
		contentWidthArr.find((x) => x.value === input['--container-width']) ||
		contentWidthArr[0];

	const onContentWidthSelected = (contentWidth: OptionType) => {
		setInput({ ...input, '--container-width': contentWidth.value });
	};

	return (
		<>
			<Text size={31} weight={800} uppercase>
				Задайте параметры
			</Text>
			<Select
				title='Шрифт'
				options={fontFamilyOptions}
				selected={defaultFont}
				onChange={onFontSelected}
			/>
			<RadioGroup
				title='Размер шрифта'
				name='fontSize'
				options={fontSizeOptions}
				selected={defaultFontSize}
				onChange={onFontSizeSelected}
			/>
			<Select
				title='Цвет шрифта'
				options={fontColors}
				selected={defaultFontColor}
				onChange={onFontColorSelected}
			/>
			<Separator />
			<Select
				title='Цвет фона'
				options={backgroundColors}
				selected={defaultBackgroundColor}
				onChange={onBackgroundColorSelected}
			/>
			<Select
				title='Ширина контента'
				options={contentWidthArr}
				selected={defaultContentWidth}
				onChange={onContentWidthSelected}
			/>
		</>
	);
};
