export const createPeopleSchema = {
    dni: {
        notEmpty: {
            errorMessage: 'Ingrese el DNI'
        }
    },
    name: {
        notEmpty: {
            errorMessage: 'Ingrese el nombre'
        }
    },
    last_name: {
        notEmpty: {
            errorMessage: 'Ingrese el apellido'
        }
    }
};

