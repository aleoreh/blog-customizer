import { ArticleStyle } from 'src/types';
import { Text } from '../text';

type InputArticleParams = (props: {
	input: ArticleStyle;
	setInput: (articleStyle: ArticleStyle) => void;
}) => JSX.Element;

export const InputArticleParams: InputArticleParams = () => {
	return (
		<>
			<Text size={31} weight={800} uppercase>
				Задайте параметры
			</Text>
		</>
	);
};
