import { backgroundColors } from 'src/constants/articleProps';
import { ArticleStyle } from 'src/types';

type InputArticleParamsProps = {
	input: ArticleStyle;
	setInput: (articleStyle: ArticleStyle) => void;
};

export const InputArticleParams = (
	props: InputArticleParamsProps
): JSX.Element => {
	const dummyClickHandler = () => {
		props.setInput({
			...props.input,
			'--bg-color': backgroundColors[1].value,
		});
	};
	return <h2 onClick={dummyClickHandler}>InputArticleParams!</h2>;
};
