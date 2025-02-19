import * as echarts from "../libs/echarts.min.js";

/**
 * 기본 ECharts 그래프를 생성하는 함수
 *
 * @param {Object} config - 차트 설정 옵션
 * @param {string} [config.width='600px'] - 차트 컨테이너의 너비
 * @param {string} [config.height='400px'] - 차트 컨테이너의 높이
 * @param {Object} [config.option] - ECharts에 전달할 옵션 객체
 * @returns {HTMLElement} - 차트가 렌더링된 컨테이너 div
 */
export const createBasicChart = ({ width = "600px", height = "400px", option = {} }) => {
    // 차트를 렌더링할 컨테이너 div 생성
    const chartDiv = document.createElement("div");
    chartDiv.style.width = width;
    chartDiv.style.height = height;

    // ECharts 인스턴스 초기화
    const chartInstance = window.echarts.init(chartDiv);

    // 기본 차트 옵션 (옵션이 제공되지 않은 경우 사용)
    const defaultOption = {
        title: {
            text: "ECharts 기본 그래프",
        },
        tooltip: {},
        xAxis: {
            type: "category",
            data: ["월", "화", "수", "목", "금", "토", "일"],
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                name: "판매량",
                type: "line",
                data: [150, 230, 224, 218, 135, 147, 260],
            },
        ],
    };

    // 전달된 옵션이 있으면 병합(여기서는 간단하게 defaultOption을 대체)
    chartInstance.setOption(Object.keys(option).length ? option : defaultOption);

    return chartDiv;
};
