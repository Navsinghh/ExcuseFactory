const excuses_all = require("./Excuses_eng");

module.exports = {
  // for all json
  getAll() {
    return excuses_all;
  },

  //random from all(not in use on webapp)
  getRandom(numberOfExcuses) {
    const excuses = excuses_all;
    const limit =
      numberOfExcuses > excuses.length ? excuses.length : numberOfExcuses;
    const out = new Array(limit);
    let excuse;

    for (let i = 0; i < limit; i++) {
      do {
        excuse = excuses[Math.floor(Math.random() * excuses.length)];
      } while (out.indexOf(excuse) > -1);
      out[i] = excuse;
    }
    return out;
  },

  //select a specific by id (not in use on webapp)
  getByID(id) {
    const excuses = excuses_all;
    for (let i = 0; i < excuses.length; i++) {
      if (excuses[i].id === id) {
        return excuses[i];
      }
    }
    return null;
  },

  getByCategory(category, numberOfExcuses) {
    const excuses = excuses_all;
    const catStart = getIdByCategory(category);
    console.log(getIdByCategory(category));
    const catEnd = catStart + 99;
    const categoryExcuses = excuses.filter(
      (excuse) => excuse.id >= catStart && excuse.id < catEnd
    );

    const limit =
      numberOfExcuses > categoryExcuses.length
        ? categoryExcuses.length
        : numberOfExcuses;
    const out = new Array(limit);
    let excuse;

    for (let i = 0; i < limit; i++) {
      do {
        excuse =
          categoryExcuses[Math.floor(Math.random() * categoryExcuses.length)];
      } while (out.indexOf(excuse) > -1);
      out[i] = excuse;
    }
    return out;
  },
};

function getIdByCategory(category) {
  switch (category) {
    case "Family":
      return 1;
    case "Office":
      return 101;
    case "College":
      return 201;
    case "Party":
      return 301;
    case "Funny":
      return 401;
    case "Unbelievable":
      return 501;
    case "Developer":
      return 601;
    default:
      return 701;
  }
}
