import { OptionType, fontFamilyOptions } from 'src/constants/articleProps';
import { ArticleStyle } from 'src/types';
import { Select } from '../select';
import { Text } from '../text';

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
		</>
	);
};
