<template>
    <div class="hello" ref="chartdiv">
    </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
    'getPaymentsList'
    ])
  },
  mounted() {
    let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);

    let data = this.getPaymentsList

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.title.text = "Category";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Costs";

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "category";
    series.dataFields.valueY = "price";

    chart.data = data
    
    this.chart = chart;
  },
  
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
}
</script>



<style>
.hello {
  width: 600px;
  height: 100%;
}
</style>
