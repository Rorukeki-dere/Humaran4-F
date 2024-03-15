import useState from 'react'; // Importa el hook useState desde la biblioteca 'react'.

export default function Form() { // Exporta por defecto una función de componente llamada Form.
    const {firstName, setFirstName} = useState(''); // Declara un estado para el primer nombre utilizando el hook useState. firstName es el estado actual y setFirstName es la función para actualizar ese estado, inicializado con una cadena vacía.
    const {lastName, setLastName} = useState(''); // Declara un estado para el apellido utilizando el hook useState. lastName es el estado actual y setLastName es la función para actualizar ese estado, inicializado con una cadena vacía.

    const fullName = firstName + " " + lastName; // Concatena el primer nombre y el apellido para obtener el nombre completo.

    function handleFirstNameChange(e) { // Define una función que maneja el cambio en el primer nombre.
        setFirstName(e.target.value); // Actualiza el estado del primer nombre con el valor ingresado en el campo de entrada.
    }

    function handleLastNameChange(e) { // Define una función que maneja el cambio en el apellido.
        setLastName(e.target.value); // Actualiza el estado del apellido con el valor ingresado en el campo de entrada.
    }
    return(
<>
<h2>SignUp</h2> 
<label htmlFor="firstName">First Name</label>
<input type="text" value={firstName} onChange={handleFirstNameChange} />
<label htmlFor="lastName">Last Name</label>
<input type="text" value={lastName} onChange={handleLastNameChange} />

<p>Bienvenido: <strong>(fullname)</strong></p>
</>
    )
}