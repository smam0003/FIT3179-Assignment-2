var vg_1 = "./js/choropleth_map_attendance_tally.vg.json";
vegaEmbed("#choropleth_map", vg_1)
  .then(function (result) {})
  .catch(console.error);

var vg_2 = "./js/bump_chart_medal_rankings.vg.json";
vegaEmbed("#bump_chart", vg_2)
  .then(function (result) {})
  .catch(console.error);
