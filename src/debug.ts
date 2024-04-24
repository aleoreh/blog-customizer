// TODO: вынести в npm package

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const log = (...data: any) => {
	console.log(...data);
	return <T>(x: T) => x;
};

export class Debug {
	/**
	 * Выводит сообщение в консоль и возвращает переданное значение
	 *
	 * ```
	 * // присваивает переменной newValue значение value,
	 * // при этом выводит в консоль сообщение 'Это мое значение'
	 * newValue = debug('Это мое значение')(value)
	 * ```
	 *
	 */

	static log = log;
}
