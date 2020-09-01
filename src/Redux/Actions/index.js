// Las acciones siempre tienen la estructura { type, payload }
export const funcion = (palabra) => {
	return {
		type: "MODIFY",
		payload: palabra,
	};
};
