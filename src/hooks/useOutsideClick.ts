import { useEffect } from 'react';

type UseOutsideClick = {
	onClick?: () => void;
	rootRefs: React.RefObject<HTMLElement> | Array<React.RefObject<HTMLElement>>;
};

export const useOutsideClick = ({ rootRefs, onClick }: UseOutsideClick) => {
	useEffect(() => {
		const normalizedRootRefs = Array.isArray(rootRefs) ? rootRefs : [rootRefs];
		const handleClick = (event: MouseEvent) => {
			const { target } = event;
			if (
				target instanceof Node &&
				!normalizedRootRefs.some((rootRef) => rootRef.current?.contains(target))
			) {
				onClick?.();
			}
		};

		window.addEventListener('click', handleClick);

		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, [onClick]);
};
