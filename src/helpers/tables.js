const units = [
  {
    name: "DLE",
    values: [
      {
        name: "DLE",
        value: 1,
      },
      {
        name: "m3 Gasoil",
        value: 0.00099,
      },
      {
        name: "liter Gasoil",
        value: 0.99409,
      },
      {
        name: "GLE",
        value: 1.136,
      },
      {
        name: "Ton LNG",
        value: 0.00063,
      },
      {
        name: "m3 LNG",
        value: 0.00155,
      },
      {
        name: "gal LNG",
        value: 0.40898,
      },
      {
        name: "Sm3 gas",
        value: 1.00014,
      },
      {
        name: "mmft3 gas",
        value: 0.00003,
      },
      {
        name: "GJ",
        value: 0.03566,
      },
      {
        name: "mmBTU",
        value: 0.0338,
      },
    ],
  },
  {
    name: "m3 Gasoil",
    values: [
      {
        name: "m3 Gasoil",
        value: 1,
      },
      {
        name: "DLE",
        value: 264.27061,
      },
      {
        name: "liter Gasoil",
        value: 1000.0,
      },
      {
        name: "GLE",
        value: 300.21142,
      },
      {
        name: "Ton LNG",
        value: 0.63696,
      },
      {
        name: "m3 LNG",
        value: 1.55738,
      },
      {
        name: "gal LNG",
        value: 411.41523,
      },
      {
        name: "Sm3 gas",
        value: 1006.08959,
      },
      {
        name: "mmft3 gas",
        value: 0.034,
      },
      {
        name: "GJ",
        value: 35.87296,
      },
      {
        name: "mmBTU",
        value: 34.001,
      },
    ],
  },
  {
    name: "liter Gasoil",
    values: [
      {
        name: "liter Gasoil",
        value: 1,
      },
      {
        name: "DLE",
        value: 0.26427,
      },
      {
        name: "m3 Gasoil",
        value: 0.001,
      },
      {
        name: "GLE",
        value: 1.14276,
      },
      {
        name: "Ton LNG",
        value: 0.00064,
      },
      {
        name: "m3 LNG",
        value: 0.00156,
      },
      {
        name: "gal LNG",
        value: 0.41142,
      },
      {
        name: "Sm3 gas",
        value: 1.00609,
      },
      {
        name: "mmft3 gas",
        value: 0.00003,
      },
      {
        name: "GJ",
        value: 0.03587,
      },
      {
        name: "mmBTU",
        value: 0.034,
      },
    ],
  },
  {
    name: "GLE",
    values: [
      {
        name: "GLE",
        value: 1,
      },
      {
        name: "DLE",
        value: 0.88028,
      },
      {
        name: "m3 Gasoil",
        value: 0.00088,
      },
      {
        name: "liter Gasoil",
        value: 0.87508,
      },
      {
        name: "Ton LNG",
        value: 0.00056,
      },
      {
        name: "m3 LNG",
        value: 0.00136,
      },
      {
        name: "gal LNG",
        value: 0.36002,
      },
      {
        name: "Sm3 gas",
        value: 0.89214,
      },
      {
        name: "mmft3 gas",
        value: 0.00003,
      },
      {
        name: "GJ",
        value: 0.03139,
      },
      {
        name: "mmBTU",
        value: 0.02975,
      },
    ],
  },
  {
    name: "Ton LNG",
    values: [
      {
        name: "Ton LNG",
        value: 1,
      },
      {
        name: "DLE",
        value: 1579.28994,
      },
      {
        name: "m3 Gasoil",
        value: 1.56995,
      },
      {
        name: "liter Gasoil",
        value: 1569.95382,
      },
      {
        name: "GLE",
        value: 1794.07337,
      },
      {
        name: "m3 LNG",
        value: 2.44501,
      },
      {
        name: "gal LNG",
        value: 645.90291,
      },
      {
        name: "Sm3 gas",
        value: 1579.5142,
      },
      {
        name: "mmft3 gas",
        value: 0.05338,
      },
      {
        name: "GJ",
        value: 56.31889,
      },
      {
        name: "mmBTU",
        value: 53.38,
      },
    ],
  },
  {
    name: "m3 LNG",
    values: [
      {
        name: "m3 LNG",
        value: 1,
      },
      {
        name: "DLE",
        value: 645.92399,
      },
      {
        name: "m3 Gasoil",
        value: 0.64211,
      },
      {
        name: "liter Gasoil",
        value: 642.10555,
      },
      {
        name: "GLE",
        value: 733.76965,
      },
      {
        name: "Ton LNG",
        value: 0.409,
      },
      {
        name: "gal LNG",
        value: 264.172,
      },
      {
        name: "Sm3 gas",
        value: 646.01571,
      },
      {
        name: "mmft3 gas",
        value: 0.02183,
      },
      {
        name: "GJ",
        value: 23.03423,
      },
      {
        name: "mmBTU",
        value: 21.83223,
      },
    ],
  },
  {
    name: "gal LNG",
    values: [
      {
        name: "gal LNG",
        value: 1,
      },
      {
        name: "DLE",
        value: 2.44509,
      },
      {
        name: "m3 Gasoil",
        value: 0.00243,
      },
      {
        name: "liter Gasoil",
        value: 2.43063,
      },
      {
        name: "GLE",
        value: 2.77762,
      },
      {
        name: "Ton LNG",
        value: 0.00155,
      },
      {
        name: "m3 LNG",
        value: 0.00379,
      },
      {
        name: "Sm3 gas",
        value: 2.44544,
      },
      {
        name: "mmft3 gas",
        value: 0.00008,
      },
      {
        name: "GJ",
        value: 0.08719,
      },
      {
        name: "mmBTU",
        value: 0.08264,
      },
    ],
  },
  {
    name: "Sm3 gas",
    values: [
      {
        name: "Sm3 gas",
        value: 1,
      },
      {
        name: "DLE",
        value: 0.99986,
      },
      {
        name: "m3 Gasoil",
        value: 0.00099,
      },
      {
        name: "liter Gasoil",
        value: 0.99395,
      },
      {
        name: "GLE",
        value: 1.1209,
      },
      {
        name: "Ton LNG",
        value: 0.00063,
      },
      {
        name: "m3 LNG",
        value: 0.00155,
      },
      {
        name: "gal LNG",
        value: 0.40893,
      },
      {
        name: "mmft3 gas",
        value: 0.00003,
      },
      {
        name: "GJ",
        value: 0.03566,
      },
      {
        name: "mmBTU",
        value: 0.0338,
      },
    ],
  },
  {
    name: "mmft3 gas",
    values: [
      {
        name: "mmft3 gas",
        value: 1,
      },
      {
        name: "DLE",
        value: 29585.79882,
      },
      {
        name: "m3 Gasoil",
        value: 29.4109,
      },
      {
        name: "liter Gasoil",
        value: 29410.89968,
      },
      {
        name: "GLE",
        value: 33609.46746,
      },
      {
        name: "Ton LNG",
        value: 18.73361,
      },
      {
        name: "m3 LNG",
        value: 45.80384,
      },
      {
        name: "gal LNG",
        value: 12100.09196,
      },
      {
        name: "Sm3 gas",
        value: 29590.0,
      },
      {
        name: "GJ",
        value: 1055.05599,
      },
      {
        name: "mmBTU",
        value: 1000.0,
      },
    ],
  },
  {
    name: "GJ",
    values: [
      {
        name: "GJ",
        value: 1,
      },
      {
        name: "DLE",
        value: 28.04192,
      },
      {
        name: "m3 Gasoil",
        value: 0.02788,
      },
      {
        name: "liter Gasoil",
        value: 27.87615,
      },
      {
        name: "GLE",
        value: 31.85562,
      },
      {
        name: "Ton LNG",
        value: 0.01776,
      },
      {
        name: "m3 LNG",
        value: 0.04341,
      },
      {
        name: "gal LNG",
        value: 11.46867,
      },
      {
        name: "Sm3 gas",
        value: 28.04591,
      },
      {
        name: "mmft3 gas",
        value: 0.00095,
      },
      {
        name: "mmBTU",
        value: 0.94782,
      },
    ],
  },
  {
    name: "mmBTU",
    values: [
      {
        name: "mmBTU",
        value: 1
      },
      {
        name: "DLE",
        value: 29.5858,
      },
      {
        name: "m3 Gasoil",
        value: 0.02941,
      },
      {
        name: "liter Gasoil",
        value: 29.4109,
      },
      {
        name: "GLE",
        value: 33.60947,
      },
      {
        name: "Ton LNG",
        value: 0.01873,
      },
      {
        name: "m3 LNG",
        value: 0.0458,
      },
      {
        name: "gal LNG",
        value: 12.10009,
      },
      {
        name: "Sm3 gas",
        value: 29.59,
      },
      {
        name: "mmft3 gas",
        value: 0.001,
      },
      {
        name: "GJ",
        value: 1.05506,
      },
    ],
  },
];

export const divisas = ["USD", "EUR", "GBP", "ARS", "INR", "MXN"];

export const publicUnits = () => {
  let unitsArray = units.map((unit) => unit.name);
  return unitsArray;
};

export const getUnitConvert = (mainUnit, unitToConvert) => {
  const value = units
    .find((unit) => unit.name == mainUnit)
    .values.find((val) => val.name == unitToConvert);
  console.log(value);
  return value.value;
};
