global.window = global;
global.assert = require('chai').assert;
require('../src/data/steam/steam');
require('../src/data');
require('./data.spec.js');


describe('window.filterData', () => {
  it('debería ser un objeto', () => {
    assert.equal(typeof window.filterData, 'object');
  })
})

describe('window.filterData.filter', () => {
  const takeData = [
    {
      "title": "Operation Canteen Crasher!",
      "feedlabel": "TF2 Blog"
    },
    {
      "title": "Team Fortress 2 Update Released",
      "feedlabel": "Product Update"
    },
    {
      "title": "Team Fortress 2008 throwback mod Steam page removed (Updated)",
      "feedlabel": "PC Gamer"
    }
  ]
 
  it('debería ser una función', () => {
    assert.equal(typeof window.filterData.filter, 'function');
  }),
  
  it('debería filtrar por valor del objeto feedlabel "PC Gamer"', () => {
    assert.deepEqual(window.filterData.filter(takeData, "PC Gamer"), [{
      "title": "Team Fortress 2008 throwback mod Steam page removed (Updated)",
      "feedlabel": "PC Gamer"
    }])
  })

  it('debería retornar todo lo que tenga el atributo "feedlabel"', () => {
    assert.deepEqual(window.filterData.filter(takeData, "feedlabel"), [{
      
        "title": "Operation Canteen Crasher!",
        "feedlabel": "TF2 Blog"
      },
      {
        "title": "Team Fortress 2 Update Released",
        "feedlabel": "Product Update"
      },
      {
        "title": "Team Fortress 2008 throwback mod Steam page removed (Updated)",
        "feedlabel": "PC Gamer"
      
        
      }])
  })
  
})
describe('window.filterData.sortByDate', () => {
  const sortDate = [{
    "title": "Operation Canteen Crasher!",
    "date": 1542738000
  },
  {
    "title": "Team Fortress 2 Update Released",
    "date": 1540923360
  },
  {
    "title": "Team Fortress 2 Update Released",
    "date": 1540494720
  }]
  it('debería ser una función', () => {
    assert.equal(typeof window.filterData.sortByDate, 'function');
  })
  it('debería ordenar por valor del objeto "recent"', () => {
    assert.deepEqual(window.filterData.sortByDate(sortDate, "recent"), [{
      "title": "Operation Canteen Crasher!",
      "date": 1542738000
    },
    {
      "title": "Team Fortress 2 Update Released",
      "date": 1540923360
    },
    {
      "title": "Team Fortress 2 Update Released",
      "date": 1540494720
    }])
  })
  it('debería ordenar por valor del objeto "older"', () => {
    assert.deepEqual(window.filterData.sortByDate(sortDate, "older"), [{
      "title": "Team Fortress 2 Update Released",
      "date": 1540494720
    },
    {
      "title": "Team Fortress 2 Update Released",
      "date": 1540923360
    },
    {
      "title": "Operation Canteen Crasher!",
      "date": 1542738000
    }])
  })
})

describe('window.filterData.statistics', () => {
  let statisticsResult = [{
    "title": "Operation Canteen Crasher!",
    "feedlabel": "TF2 Blog"
  },
  {
    "title": "Team Fortress 2 Update Released",
    "feedlabel": "Product Update",
  }]
  it('debería ser una función', () => {
    assert.equal(typeof window.filterData.statistics, 'function');
  })
  it('debería retornar resultado fórmula de "statistics"', () => {
    assert.deepEqual(window.filterData.statistics("TF2 Blog", statisticsResult, "TF2 Blog"), 50)
  })
})

//describe(la función q yo hice)
//variable nombrevariable = [
//  {crear mini takeData de filtros}
//]

// por cada función es un describe
// por cada if es un it

//coverage test js = lo que cubre tus test en tu código. Ver cómo se instala.
