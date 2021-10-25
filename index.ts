const array = [
  {
    id: 1,
    name: 'bla',
    children: [
      {
        id: 23,
        name: 'bla',
        children: [
          { id: 88, name: 'bla' },
          { id: 99, name: 'bla' },
        ],
      },
      { id: 43, name: 'bla' },
      {
        id: 45,
        name: 'bla',
        children: [
          { id: 43, name: 'bla' },
          { id: 46, name: 'bla' },
        ],
      },
    ],
  },
  {
    id: 12,
    name: 'bla',
    children: [
      {
        id: 232,
        name: 'bla',
        children: [
          { id: 848, name: 'bla' },
          { id: 959, name: 'bla' },
        ],
      },
      { id: 433, name: 'bla' },
      {
        id: 445,
        name: 'bla',
        children: [
          { id: 443, name: 'bla' },
          {
            id: 456,
            name: 'bla',
            children: [
              { id: 97, name: 'bla' },
              { id: 56, name: 'bla' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 15,
    name: 'bla',
    children: [
      {
        id: 263,
        name: 'bla',
        children: [
          { id: 868, name: 'bla' },
          { id: 979, name: 'bla' },
        ],
      },
      { id: 483, name: 'bla' },
      {
        id: 445,
        name: 'bla',
        children: [
          { id: 423, name: 'bla' },
          { id: 436, name: 'bla' },
        ],
      },
    ],
  },
];

const array2 = [
  [
    {
      ticketCampoId: 889649,
      procesoCampoId: 244,
      tipoCampoId: 4,
      nombre: 'Unidad operativa*',
      valor: [774, 776],
      usuarioModifica: '',
      fechaModificacion: '',
      valorInit: null,
      validate: [
        {
          show: false,
          required: false,
          value: '{{param_244}} >= 772 &&{{param_244}} <= 782',
          activity: '({{activity}} == 152 || {{activity}} == 153)',
          procesocampoid: ['245'],
          tipoaccion: 6,
          valorespecifico: '{{param_244}}',
          autocompletadoid: 101,
          objetivoTabla: null,
          webService: null,
        },
        {
          show: false,
          required: false,
          value: '{{param_244}} >= 772 &&{{param_244}} <= 782',
          activity: '({{activity}} == 152 || {{activity}} == 153)',
          procesocampoid: ['247'],
          tipoaccion: 6,
          valorespecifico: '{{param_244}}',
          autocompletadoid: 102,
          objetivoTabla: null,
          webService: null,
        },
        {
          show: false,
          required: false,
          value:
            '{{param_244}} == "" || {{param_244}} == "undefined" || {{param_244}} == "null"',
          activity: '{{activity}} == 152',
          procesocampoid: ['247'],
          tipoaccion: 5,
          valorespecifico: null,
          autocompletadoid: null,
          objetivoTabla: null,
          webService: null,
        },
        {
          show: false,
          required: false,
          value:
            '{{param_244}} == "" || {{param_244}} == "undefined" || {{param_244}} == "null"',
          activity: '{{activity}} == 153 &&{{rule}} == 2',
          procesocampoid: ['247'],
          tipoaccion: 5,
          valorespecifico: null,
          autocompletadoid: null,
          objetivoTabla: null,
          webService: null,
        },
      ],
      class: null,
      columns: 6,
      columnasinternas: null,
      longitudMax: null,
      type: null,
      pattern: null,
      preview: null,
      width: 250,
      conservarData: null,
    },
    {
      ticketCampoId: 889650,
      procesoCampoId: 245,
      tipoCampoId: 1,
      nombre: 'NIT*',
      valor: ['549810-4', '7019465-3'],
      usuarioModifica: '',
      fechaModificacion: '',
      valorInit: null,
      validate: null,
      class: null,
      columns: 6,
      columnasinternas: null,
      longitudMax: null,
      type: null,
      pattern: null,
      preview: null,
      width: 250,
      conservarData: null,
    },
    {
      ticketCampoId: 889651,
      procesoCampoId: 246,
      tipoCampoId: 1,
      nombre: 'Formulario*',
      valor: ['7898', '56765'],
      usuarioModifica: '',
      fechaModificacion: '',
      valorInit: null,
      validate: null,
      class: null,
      columns: 6,
      columnasinternas: null,
      longitudMax: null,
      type: null,
      pattern: '[0-9]{1,11}',
      preview: null,
      width: 250,
      conservarData: null,
    },
    {
      ticketCampoId: 889652,
      procesoCampoId: 247,
      tipoCampoId: 4,
      nombre: 'Moneda*',
      valor: [251, 251],
      usuarioModifica: '',
      fechaModificacion: '',
      valorInit: null,
      validate: null,
      class: null,
      columns: 6,
      columnasinternas: null,
      longitudMax: null,
      type: null,
      pattern: null,
      preview: null,
      width: 250,
      conservarData: null,
    },
    {
      ticketCampoId: 889653,
      procesoCampoId: 248,
      tipoCampoId: 1,
      nombre: 'Total*',
      valor: ['87678', '8767'],
      usuarioModifica: '',
      fechaModificacion: '',
      valorInit: null,
      validate: null,
      class: null,
      columns: 6,
      columnasinternas: null,
      longitudMax: null,
      type: null,
      pattern: '[0-9]+.[0-9]{1,15}',
      preview: null,
      width: 250,
      conservarData: null,
    },
  ],
  [
    {
      ticketCampoId: 889655,
      procesoCampoId: 331,
      tipoCampoId: 4,
      nombre: 'Unidad operativa*',
      valor: [],
      usuarioModifica: '',
      fechaModificacion: '',
      valorInit: '{{param_244}}',
      validate: null,
      class: null,
      columns: 6,
      columnasinternas: null,
      longitudMax: 0,
      type: null,
      pattern: null,
      preview: null,
      width: null,
      conservarData: null,
    },
    {
      ticketCampoId: 889656,
      procesoCampoId: 332,
      tipoCampoId: 1,
      nombre: 'NIT*',
      valor: [],
      usuarioModifica: '',
      fechaModificacion: '',
      valorInit: '{{param_245}}',
      validate: null,
      class: null,
      columns: 6,
      columnasinternas: null,
      longitudMax: 0,
      type: null,
      pattern: null,
      preview: null,
      width: null,
      conservarData: null,
    },
    {
      ticketCampoId: 889657,
      procesoCampoId: 333,
      tipoCampoId: 1,
      nombre: 'Formulario*',
      valor: [],
      usuarioModifica: '',
      fechaModificacion: '',
      valorInit: '{{param_246}}',
      validate: null,
      class: null,
      columns: 6,
      columnasinternas: null,
      longitudMax: 0,
      type: null,
      pattern: '[0-9]{1,11}',
      preview: null,
      width: null,
      conservarData: null,
    },
    {
      ticketCampoId: 889658,
      procesoCampoId: 334,
      tipoCampoId: 1,
      nombre: 'Otra Moneda',
      valor: [],
      usuarioModifica: '',
      fechaModificacion: '',
      valorInit: null,
      validate: null,
      class: null,
      columns: 6,
      columnasinternas: null,
      longitudMax: 0,
      type: null,
      pattern: null,
      preview: null,
      width: null,
      conservarData: null,
    },
  ],
];

function findById(arr, id, nestingKey) {
  // if empty array then return
  if (arr.length == 0) return;

  // return element if found else collect all children(or other nestedKey) array and run this function
  return (
    arr.find((d) => d.id == id) ||
    findById(
      arr.flatMap((d) => d[nestingKey] || []),
      id
    ) ||
    'Not found'
  );
}

// console.log(array);
// console.log(findById(array2, 244, 'procesoCampoId'));

// console.log(findById(array, 12, 'children'));

// console.log(findById(array, 483, 'children'));

// console.log(findById(array, 1200, 'children'));
const checkValue = array2.flat().find((x) => x.procesoCampoId == 244).valor;
console.log(checkValue);

console.log(Array.isArray(checkValue));
