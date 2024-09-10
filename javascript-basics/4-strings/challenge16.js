// convert pascal case to camel case: niraj_kumar_dangi -> nirajKumarDangi

function toCamelCase(str) {
  return str
    .split(' ')
    .map((phrase) =>
      phrase
        .split('_')
        .map((word, index) =>
          index === 0
            ? word.toLowerCase()
            : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('')
    )
    .join(' ');
}
const result = toCamelCase(
  'niraj_kumar_dangi      hello_world        raushan_kumar_saw     raja_ram_mohan_Ray'
);
console.log(result);

// OUTPUT::: niraj_kumar_dangi helloWorld raushanKumarSaw rajaRamMohanRay
