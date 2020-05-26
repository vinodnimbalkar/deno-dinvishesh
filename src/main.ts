const response = await fetch(
  "https://github.com/vinodnimbalkar/dinvishesh/raw/master/data/dinvishesh.json",
);
export const dinVisheshData = await response.json();
/**
 * A constant variable called 'monthNames'
 * @constant {Array} - The name of months
 */
const monthNames: Array<string> = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

/**
 * A constant variable called 'categoryList'
 * @constant {Array}
 */
const categoryList: Array<string> = ["janm", "mrutyu", "ghatana"];

/**
 * A constant variable called 'date'
 * @constant {Date}
 */
const date: Date = new Date();

/**
 * A constant variable called 'currentday'
 * @constant {number}
 */
const currentDay = date.getDate();

/**
 * A constant variable called 'monthNames'
 * @constant {String}
 */
const currentMonth = monthNames[date.getMonth()];

/**
 * Retrives dinvishesh of current date
 * @returns {Object}
 */
export const dinVisheshToday = () => {
  let dataToday = categoryList.map(
    (cat) => dinVisheshData.category[cat][currentMonth][currentDay],
  );
  let responseData = {
    janm: dataToday[0],
    mrutyu: dataToday[1],
    ghatana: dataToday[2],
  };
  return responseData;
};

/**
 * Retrives a dinvishesh by category, month, day
 * @function
 * @param {String} category
 * @param {String} month
 * @param {String} day
 * @returns {Array}
 */
export const dinVishesh = (category: string, month: string, day: string) => {
  return dinVisheshData.category[category][month][day];
};

/**
   * Get all dinvishesh
   * @returns {Object} - The dinvishesh contaning category
   */
export const dinVisheshAll = () => {
  return dinVisheshData;
};

/**
   * Retrives dinvishesh by category
   * @param {String} category - The Category of dinvishesh e.g. janm, mrutyu, ghatana
   * @returns {Object}
   */
export const dinVisheshByCategory = (category: string) => {
  return dinVisheshData.category[category];
};
