import clsx from 'clsx';
import { CSSProperties, StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { Article } from './components/article/Article';
import { InputArticleParams } from './components/input-article-params';
import {
	ArticleStateType,
	defaultArticleState,
} from './constants/articleProps';
import styles from './styles/index.module.scss';
import './styles/index.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const articleStateToStyle = (articleState: ArticleStateType) => ({
	'--font-family': articleState.fontFamilyOption.value,
	'--font-size': articleState.fontSizeOption.value,
	'--font-color': articleState.fontColor.value,
	'--container-width': articleState.contentWidth.value,
	'--bg-color': articleState.backgroundColor.value,
});

const App = () => {
	// стиль, который применяется к статье
	const [articleStyleState, setArticleStyleState] =
		useState<ArticleStateType>(defaultArticleState);

	// стиль, который вводится пользователем
	const [inputArticleStyleState, setInputArticleStyleState] =
		useState<ArticleStateType>(defaultArticleState);

	// видимость формы параметров
	const [articleParamsFormOpened, setArticleParamsFormOpened] =
		useState<boolean>(false);

	// при утверждении формы ввода параметров устанавливаем их в стили статьи
	const submitArticleParamsForm = () => {
		setArticleStyleState(inputArticleStyleState);
		setArticleParamsFormOpened(false);
	};

	const resetArticleParamsForm = () => {
		setInputArticleStyleState(defaultArticleState);
		setArticleStyleState(defaultArticleState);
		setArticleParamsFormOpened(false);
	};

	return (
		<div
			className={clsx(styles.main)}
			style={articleStateToStyle(articleStyleState) as CSSProperties}>
			<ArticleParamsForm
				open={articleParamsFormOpened}
				setOpen={setArticleParamsFormOpened}
				submit={submitArticleParamsForm}
				reset={resetArticleParamsForm}>
				{/* поля ввода параметров передаются как "дети" формы */}
				<InputArticleParams
					input={inputArticleStyleState}
					setInput={setInputArticleStyleState}
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
