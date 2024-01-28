// 1. Capitalize First Letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // 2. Check if Array contains a value
  function arrayContains(arr, value) {
    return arr.includes(value);
  }
  
  // 3. Get Random Element from Array
  function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // 4. Sort an array of numbers
  function sortNumberArray(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  // 5. Remove Duplicates from an Array
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  // 6. Get Query String Parameters
  function getQueryStringParams(url) {
    const queryString = url.split('?')[1];
    const params = {};
    const queries = queryString.split("&");
    queries.forEach((indexQuery) => {
      let [key, value] = indexQuery.split('=');
      params[key] = decodeURIComponent(value);
    });
    return params;
  }
  
  // 7. Debounce Function (for performance optimization)
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  // 8. Check if Object is Empty
  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  
  // 9. Deep Clone Object
  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  // 10. Convert RGB to Hex
  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  