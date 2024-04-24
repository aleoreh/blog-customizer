import clsx from 'clsx';
import { CSSProperties, useState } from 'react';

import styles from './App.module.scss';

import {
	ArticleStateType,
	defaultArticleState,
} from 'src/constants/articleProps';
import { Article } from '../article';
import { ArticleParamsForm } from '../article-params-form';

// вынесем в отдельную функцию для улучшения читаемости JSX в компоненте
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

	return (
		<div
			className={clsx(styles.main)}
			style={articleStateToStyle(articleStyleState) as CSSProperties}>
			<ArticleParamsForm
				setArticleStyleState={setArticleStyleState}></ArticleParamsForm>
			<Article />
		</div>
	);
};
