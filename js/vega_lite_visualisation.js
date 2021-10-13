var vg_1 = "./js/choropleth_map_attendance_tally.vg.json";
vegaEmbed("#choropleth_map", vg_1, { actions: false })
  .then(function (result) {})
  .catch(console.error);

var vg_2 = "./js/bump_chart_medal_rankings.vg.json";
vegaEmbed("#bump_chart", vg_2, { actions: false })
  .then(function (result) {})
  .catch(console.error);

var vg_3 = "./js/scatterplot_medal_players.vg.json";
vegaEmbed("#scatter_plot", vg_3, { actions: false })
  .then(function (result) {})
  .catch(console.error);

var vg_4 = "./js/spine_chart_men_women.vg.json";
vegaEmbed("#spine_chart", vg_4, { actions: false })
  .then(function (result) {})
  .catch(console.error);
