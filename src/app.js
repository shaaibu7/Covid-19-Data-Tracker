const fetchData = () => {
  fetch('https://api.covidtracking.com/v1/us/daily.json').then((data) => data.json()).then((item) => {
    let data = `<tr>
<th>DATE</th>
    <th>STATES</th>
    <th>POSITIVE</th>
    <th>NEGATIVE</th>
    <th>PENDING</th>
    <th>HOSPITALIZED CURRENTLY</th>
</tr>`;
    item.forEach((element) => {
      data += `
<tr>
    <td>${element.date}</td>
    <td>${element.states}</td>
    <td>${element.positive}</td>
    <td>${element.negative}</td>
    <td>${element.pending}</td>
    <td>${element.hospitalizedCurrently}</td>
</tr>`;
    });
    document.getElementById('data').innerHTML = data;
  });
};
const btn = document.getElementById('btn');

btn.addEventListener('click', fetchData);