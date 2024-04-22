import clsx from 'clsx';
import { CSSProperties, StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { Article } from './components/article/Article';
import { InputArticleParams } from './components/input-article-params';
import { defaultArticleState } from './constants/articleProps';
import styles from './styles/index.module.scss';
import './styles/index.scss';
import { ArticleStyle } from './types';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const defaultStyle: ArticleStyle = {
	'--font-family': defaultArticleState.fontFamilyOption.value,
	'--font-size': defaultArticleState.fontSizeOption.value,
	'--font-color': defaultArticleState.fontColor.value,
	'--container-width': defaultArticleState.contentWidth.value,
	'--bg-color': defaultArticleState.backgroundColor.value,
};

const App = () => {
	const [articleStyle, setArticeStyle] = useState<ArticleStyle>(defaultStyle);
	const [inputArticleStyle, setInputArticleStyle] =
		useState<ArticleStyle>(articleStyle);

	// видимость формы параметорв
	const [articleParamsFormOpened, setArticleParamsFormOpened] =
		useState<boolean>(false);

	const submitArticleParamsForm = () => {
		setArticeStyle(inputArticleStyle);
		setArticleParamsFormOpened(false);
	};

	const resetArticleParamsForm = () => {
		setInputArticleStyle(defaultStyle);
	};

	return (
		<div className={clsx(styles.main)} style={articleStyle as CSSProperties}>
			<ArticleParamsForm
				open={articleParamsFormOpened}
				setOpen={setArticleParamsFormOpened}
				submit={submitArticleParamsForm}
				reset={resetArticleParamsForm}>
				<InputArticleParams
					input={inputArticleStyle}
					setInput={setInputArticleStyle}
				/>
			</ArticleParamsForm>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
