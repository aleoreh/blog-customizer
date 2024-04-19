// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DebugLog = (...data: any) => <T>(value: T) => T;

const log: DebugLog = (...data) => {
	return <T>(value: T) => {
		console.log(...data);
		return value;
	};
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

export default Debug;
