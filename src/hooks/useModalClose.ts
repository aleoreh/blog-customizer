import { useEffect } from 'react';

type UseModalClose = (params: {
	selfRefs: React.RefObject<HTMLElement> | Array<React.RefObject<HTMLElement>>;
	isOpened: boolean;
	setClosed: () => void;
}) => void;

export const useModalClose: UseModalClose = ({
	selfRefs,
	isOpened,
	setClosed,
}) => {
	useEffect(() => {
		if (!isOpened) return;

		const normalizedSelfRefs = Array.isArray(selfRefs) ? selfRefs : [selfRefs];

		// отлавливается на элементах, НЕ включенных в selfRefs
		const handleMousedown = (evt: MouseEvent) => {
			const { target } = evt;
			if (
				target instanceof Node &&
				!normalizedSelfRefs.some((ref) => ref.current?.contains(target))
			) {
				setClosed();
			}
		};

		const handleEscape = (evt: KeyboardEvent) => {
			if (evt.key === 'Escape') {
				setClosed();
			}
		};

		window.addEventListener('mousedown', handleMousedown);
		window.addEventListener('keydown', handleEscape);

		return () => {
			window.removeEventListener('mousedown', handleMousedown);
			window.removeEventListener('keydown', handleEscape);
		};
	}, [selfRefs, isOpened, setClosed]);
};
