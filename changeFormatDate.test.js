function isDate(date) {
  const reg = /((([0-9][0-9][0-9][1-9])|([1-9][0-9][0-9][0-9])|([0-9][1-9][0-9][0-9])|([0-9][0-9][1-9][0-9]))-((0[13578])|(1[02]))-((0[1-9])|([12][0-9])|(3[01])))|((([0-9][0-9][0-9][1-9])|([1-9][0-9][0-9][0-9])|([0-9][1-9][0-9][0-9])|([0-9][0-9][1-9][0-9]))-((0[469])|11)-((0[1-9])|([12][0-9])|(30)))|(((000[48])|([0-9]0-9)|([0-9][1-9][02468][048])|([1-9][0-9][02468][048]))-02-((0[1-9])|([12][0-9])))|((([0-9][0-9][0-9][1-9])|([1-9][0-9][0-9][0-9])|([0-9][1-9][0-9][0-9])|([0-9][0-9][1-9][0-9]))-02-((0[1-9])|([1][0-9])|([2][0-8])))/;
  return reg.test(date);
}
function changeFormatDate(dateIn) {
  if (!(isDate(dateIn))) return 'Enter date in format yyyy-mm-dd';
  const dateOut = new Date(dateIn);
  return dateOut.getDate() + '.' + (dateOut.getMonth() + 1) + '.' + dateOut.getFullYear();
}


test('Entering valid values', () => {
  expect(changeFormatDate('2020-11-26')).toBe('26.11.2020');
})

test('Entering not valid values', () => {
  expect(changeFormatDate('2020/11/26')).toBe('Enter date in format yyyy-mm-dd');
  expect(changeFormatDate(undefined)).toBe('Enter date in format yyyy-mm-dd');
  expect(changeFormatDate(null)).toBe('Enter date in format yyyy-mm-dd');
  expect(changeFormatDate(NaN)).toBe('Enter date in format yyyy-mm-dd');
  expect(changeFormatDate('')).toBe('Enter date in format yyyy-mm-dd');
  expect(changeFormatDate('asd')).toBe('Enter date in format yyyy-mm-dd');
  expect(changeFormatDate('2020-12')).toBe('Enter date in format yyyy-mm-dd');
  expect(changeFormatDate([])).toBe('Enter date in format yyyy-mm-dd');
  expect(changeFormatDate([1])).toBe('Enter date in format yyyy-mm-dd');
  expect(changeFormatDate([1,'asd'])).toBe('Enter date in format yyyy-mm-dd');
  expect(changeFormatDate({name: 'Stas'})).toBe('Enter date in format yyyy-mm-dd');
});