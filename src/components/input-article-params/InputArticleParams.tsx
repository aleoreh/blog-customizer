import {
	OptionType,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { ArticleStyle } from 'src/types';
import { Select } from '../select';
import { Text } from '../text';
import { RadioGroup } from '../radio-group';

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
		</>
	);
};
