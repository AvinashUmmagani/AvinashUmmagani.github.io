(function () {
  // The resume gives month-level employment dates; count from July 2021.
  var parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata', year: 'numeric', month: 'numeric'
  }).formatToParts(new Date());
  var year = Number(parts.find(function (part) { return part.type === 'year'; }).value);
  var month = Number(parts.find(function (part) { return part.type === 'month'; }).value);
  var totalMonths = Math.max(0, (year - 2021) * 12 + month - 7);
  var years = Math.floor(totalMonths / 12);
  var months = totalMonths % 12;
  var duration = [];
  if (years) duration.push(years + (years === 1 ? ' year' : ' years'));
  if (months) duration.push(months + (months === 1 ? ' month' : ' months'));
  var element = document.getElementById('experience-duration');
  if (element) element.textContent = duration.length ? duration.join(' ') : 'Since July 2021';
}());
