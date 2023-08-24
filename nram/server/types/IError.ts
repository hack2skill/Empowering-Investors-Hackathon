export class IError extends Error {
	code: number;
	text: string;
	constructor(text: string, code: number) {
		super();
		this.text = text;
		this.code = code;
	}
}
