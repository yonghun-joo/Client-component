import { createBasicChart } from "./chart.js";

export default {
    title: "Example/Chart",
};

const Template = (args) => {
    const container = createBasicChart(args);
    return container;
};

export const DefaultChart = Template.bind({});
DefaultChart.args = {
    // 기본 옵션 사용 (따로 옵션 전달하지 않으면 기본 차트가 나타남)
};

export const CustomChart = Template.bind({});
CustomChart.args = {
    width: "800px",
    height: "500px",
    option: {
        title: {
            text: "커스텀 차트 제목",
        },
        xAxis: {
            type: "category",
            data: ["A", "B", "C", "D"],
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                type: "bar",
                data: [10, 20, 30, 40],
            },
        ],
    },
};
