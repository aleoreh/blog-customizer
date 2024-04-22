import { backgroundColors } from 'src/constants/articleProps';
import { ArticleStyle } from 'src/types';

type InputArticleParams = (props: {
	input: ArticleStyle;
	setInput: (articleStyle: ArticleStyle) => void;
}) => JSX.Element;

export const InputArticleParams: InputArticleParams = ({ input, setInput }) => {
	const dummyClickHandler = () => {
		setInput({
			...input,
			'--bg-color': backgroundColors[1].value,
		});
	};
	return <h2 onClick={dummyClickHandler}>InputArticleParams!</h2>;
};
