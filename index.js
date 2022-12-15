// Problema: Se requiere escribir un algoritmo que pueda leer y escribir valores en un cierto path determinado de un objeto cuya estructura es desconocida.

// Tareas:
// Definir e implementar unit tests
// Escribir el algoritmo

// Signature:
// deepGet(object, path) : any


// Ejemplo:
// deepGet(object, ‘sons[1].grandsons[0].name’)

const sons = [{
    name: 'primer hijo',
    grandsons: [
        {
            name: 'primer nieto'
        },
        {
            name: 'segundo nieto'
        }
    ]},
    {
        name: 'primer hijo',
        grandsons: [
            {
                name: 'primer nieto'
            },
            {
                name: 'segundo nieto'
            }
        ]},
];


const deepGet = (object, path) => {
    const paths = path.split('.');

    paths.forEach(path => {
        var position = path.match(/\[(.*)\]/)[1];
        console.log(position);
    });

    for (const [key, value] of Object.entries(object)) {
        console.log(`${key}: ${value}`);
    }
};

const deepGet2 = (object, sonPosition, grandsonPosition) => {
    const sonsQuantity = object.length - 1;
    if (sonPosition > sonsQuantity) return 'The position for the son element is not valid';

    const grandSons = object[sonPosition].grandsons;
    const grandSonsQuantity = grandSons.length - 1;
    if (grandsonPosition > grandSonsQuantity) {
        return "The position for the grandson is not valid."
    }

    return grandSons[grandsonPosition].name;
};


console.log (deepGet2(sons, 0, 1));
