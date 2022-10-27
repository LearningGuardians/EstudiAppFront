let dataFromFirst = '{ "PlanesOperativos" : [' +
'{ "nombreMateria":"Matemáticas" , "info":"Se revisa todo lo relacionado con el tema de matemáticas","image":""},' +
'{ "nombreMateria":"Español" , "info":"Se revisa todo lo relacionado con el tema de español","image":"" },' +
'{ "nombreMateria":"Ingles" , "info":"Se revisa todo lo relacionado con el tema de ingles","image":""} ]}';
let proof = JSON.parse(dataFromFirst);

let dataFromSecond = '{ "PlanesOperativos" : [' +
'{ "nombreMateria":"Matemáticas" , "info":"Se revisa todo lo relacionado con el tema de matemáticas","image":"" },' +
'{ "nombreMateria":"Español" , "info":"Se revisa todo lo relacionado con el tema de español","image":"" },' +
'{ "nombreMateria":"Naturales" , "info":"Se revisa todo lo relacionado con el tema de naturales","image":"" },' +
'{ "nombreMateria":"Sociales" , "info":"Se revisa todo lo relacionado con el tema de sociales","image":"" },' +
'{ "nombreMateria":"Prueba" , "info":"Se revisa todo lo relacionado con el tema de Prueba","image":"" },' +
'{ "nombreMateria":"Ingles" , "info":"Se revisa todo lo relacionado con el tema de ingles","image":"" } ]}';
let proof2 = JSON.parse(dataFromSecond);


const dataJSON = {proof,proof2};

export default dataJSON;

