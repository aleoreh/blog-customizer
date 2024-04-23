import clsx from 'clsx';
import { CSSProperties, useState } from 'react';

import styles from './App.module.scss';

import {
	ArticleStateType,
	defaultArticleState,
} from 'src/constants/articleProps';
import { Article } from '../article';
import { ArticleParamsForm } from '../article-params-form';

const articleStateToStyle = (articleState: ArticleStateType) => ({
	'--font-family': articleState.fontFamilyOption.value,
	'--font-size': articleState.fontSizeOption.value,
	'--font-color': articleState.fontColor.value,
	'--container-width': articleState.contentWidth.value,
	'--bg-color': articleState.backgroundColor.value,
});

export const App = () => {
	// стиль, который применяется к статье
	const [articleStyleState, setArticleStyleState] =
		useState<ArticleStateType>(defaultArticleState);

	// видимость формы параметров
	const [articleParamsFormOpened, setArticleParamsFormOpened] =
		useState<boolean>(false);

	// при утверждении формы ввода параметров устанавливаем их в стили статьи
	const submitArticleParamsForm = (articleState: ArticleStateType) => {
		setArticleStyleState(articleState);
		setArticleParamsFormOpened(false);
	};

	const onArticleParamsFormReset = () => {
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
				reset={onArticleParamsFormReset}></ArticleParamsForm>
			<Article />
		</div>
	);
};
