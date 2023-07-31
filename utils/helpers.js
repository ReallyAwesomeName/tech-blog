// helpers.js
// pulled from 14-MVC--20-Stu_Middleware and removed unnessary "new Date" calls

module.exports = {
  format_date: (date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  },
};
