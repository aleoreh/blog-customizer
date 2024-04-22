import { useEffect } from 'react';

type UseOutsideClick = (params: {
	onClick?: () => void;
	rootRefs: React.RefObject<HTMLElement> | Array<React.RefObject<HTMLElement>>;
}) => void;

export const useOutsideClick: UseOutsideClick = ({ rootRefs, onClick }) => {
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
