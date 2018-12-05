
(function () {
    //待安装 
    //0-36期
    // 基于准备好的dom，初始化echarts实例
    var myChart0 = echarts.init(document.getElementById('waiting_install0'));
    var option0 = {
        title: {
            text: '0-36期 5000个'
        },
        tooltip: {},
        legend: {
            data: ['待安装']
        },
        xAxis: {
            data: ["0期", "1期", "2期", "3期", "4期", "5期", "6期", "7期", "8期", "9期", "10期", "11期", "12期", "13期", "14期", "15期", "16期", "17期", "18期", "19期", "20期", "21期", "22期", "23期", "24期", "25期", "26期", '27期', '28期', '29期', '30期', '31期', '32期', '33期', '34期', '35期', '36期'],
            // axisLabel: {
            //     show: true,
            //     interval: 0
            // }
        },

        yAxis: {},
        series: [{
            name: '待安装',
            type: 'bar',
            data: [500, 320, 136, 210, 410, 230, 500, 200, 360, 410, 150, 420, 350, 240, 36, 410, 170, 250, 159, 210, 536, 190, 190, 210, 50, 290, 360, 140, 180, 200, 350, 200, 360, 100, 160, 260, 600],
            itemStyle: {
                normal: {
                    color: '#3ba1ff'
                }
            }
        }]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart0.setOption(option0);

    //37-72期
    var myChart37 = echarts.init(document.getElementById('waiting_install37'));
    var option37 = {
        title: {
            text: '37-72期 3000个'
        },
        tooltip: {},
        legend: {
            data: ['待安装']
        },
        xAxis: {
            data: ["37期", "38期", "39期", "40期", "41期", "42期", "43期", "44期", "45期", "46期", "47期", "48期", "49期", "50期", "51期", "52期", "53期", "54期", "55期", "56期", "57期", "58期", "59期", "60期", "61期", "62期", "63期", '64期', '65期', '66期', '67期', '68期', '69期', '70期', '71期', '72期'],
            // axisLabel: {
            //     show: true,
            //     interval: 0
            // }
        },
        yAxis: {},
        series: [{
            name: '待安装',
            type: 'bar',
            data: [500, 320, 136, 210, 410, 230, 500, 200, 360, 410, 150, 420, 350, 240, 36, 410, 170, 250, 159, 210, 536, 190, 190, 210, 50, 290, 360, 140, 180, 200, 350, 200, 360, 100, 160, 260],
            itemStyle: {
                normal: {
                    color: '#3ba1ff'
                }
            }
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart37.setOption(option37);

    //72期以上
    var myChart72 = echarts.init(document.getElementById('waiting_install72'));
    var option72 = {
        title: {
            text: '72期以上 2000个'
        },
        tooltip: {},
        legend: {
            data: ['待安装']
        },
        xAxis: {
            data: ["73期", "74期", "75期", "76期", "77期", "78期", "79期", "80期", "81期", "82期", "83期", "84期", "85期", "86期", "87期", "88期", "89期", "90期"],
            // axisLabel: {
            //     show: true,
            //     interval: 0
            // }
        },
        yAxis: {},
        series: [{
            name: '待安装',
            type: 'bar',
            data: [500, 320, 420, 350, 240, 36, 410, 170, 250, 159, 210, 536, 190, 190, 210, 260, 536, 190],
            itemStyle: {
                normal: {
                    color: '#3ba1ff'
                }
            }
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart72.setOption(option72);









    //收费中
    //0-36期
    // 基于准备好的dom，初始化echarts实例
    var myChart01 = echarts.init(document.getElementById('charge_bottom0'));
    var option01 = {
        title: {
            text: '0-36期 5000个'
        },
        tooltip: {},
        legend: {
            data: ['收费中']
        },
        xAxis: {
            data: ["0期", "1期", "2期", "3期", "4期", "5期", "6期", "7期", "8期", "9期", "10期", "11期", "12期", "13期", "14期", "15期", "16期", "17期", "18期", "19期", "20期", "21期", "22期", "23期", "24期", "25期", "26期", '27期', '28期', '29期', '30期', '31期', '32期', '33期', '34期', '35期', '36期'],
            // axisLabel: {
            //     show: true,
            //     interval: 0
            // }
        },

        yAxis: {},
        series: [{
            name: '收费中',
            type: 'bar',
            data: [500, 320, 136, 210, 410, 230, 500, 200, 360, 410, 150, 420, 350, 240, 36, 410, 170, 250, 159, 210, 536, 190, 190, 210, 50, 290, 360, 140, 180, 200, 350, 200, 360, 100, 160, 260, 600],
            itemStyle: {
                normal: {
                    color: '#D47Dff'


                }
            }
        }]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart01.setOption(option01);

    //37-72期
    var myChart371 = echarts.init(document.getElementById('charge_bottom37'));
    var option371 = {
        title: {
            text: '37-72期 3000个'
        },
        tooltip: {},
        legend: {
            data: ['收费中']
        },
        xAxis: {
            data: ["37期", "38期", "39期", "40期", "41期", "42期", "43期", "44期", "45期", "46期", "47期", "48期", "49期", "50期", "51期", "52期", "53期", "54期", "55期", "56期", "57期", "58期", "59期", "60期", "61期", "62期", "63期", '64期', '65期', '66期', '67期', '68期', '69期', '70期', '71期', '72期'],
            // axisLabel: {
            //     show: true,
            //     interval: 0
            // }
        },
        yAxis: {},
        series: [{
            name: '收费中',
            type: 'bar',
            data: [500, 320, 136, 210, 410, 230, 500, 200, 360, 410, 150, 420, 350, 240, 36, 410, 170, 250, 159, 210, 536, 190, 190, 210, 50, 290, 360, 140, 180, 200, 350, 200, 360, 100, 160, 260],
            itemStyle: {
                normal: {
                    color: '#D47Dff'
                }
            }
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart371.setOption(option371);

    //72期以上
    var myChart72 = echarts.init(document.getElementById('charge_bottom72'));
    var option72 = {
        title: {
            text: '72期以上 2000个'
        },
        tooltip: {},
        legend: {
            data: ['收费中']
        },
        xAxis: {
            data: ["73期", "74期", "75期", "76期", "77期", "78期", "79期", "80期", "81期", "82期", "83期", "84期", "85期", "86期", "87期", "88期", "89期", "90期"],
            // axisLabel: {
            //     show: true,
            //     interval: 0
            // }
        },
        yAxis: {},
        series: [{
            name: '收费中',
            type: 'bar',
            data: [500, 320, 420, 350, 240, 36, 410, 170, 250, 159, 210, 536, 190, 190, 210, 260, 536, 190],
            itemStyle: {
                normal: {
                    color: '#D47dff'
                }
            }
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart72.setOption(option72);










    //待循环
    //0-36期
    // 基于准备好的dom，初始化echarts实例
    var myChart02 = echarts.init(document.getElementById('waiting_cycle_bottom0'));
    var option02 = {
        title: {
            text: '0-36期 5000个'
        },
        tooltip: {},
        legend: {
            data: ['待循环']
        },
        xAxis: {
            data: ["0期", "1期", "2期", "3期", "4期", "5期", "6期", "7期", "8期", "9期", "10期", "11期", "12期", "13期", "14期", "15期", "16期", "17期", "18期", "19期", "20期", "21期", "22期", "23期", "24期", "25期", "26期", '27期', '28期', '29期', '30期', '31期', '32期', '33期', '34期', '35期', '36期'],
            // axisLabel: {
            //     show: true,
            //     interval: 0
            // }
        },

        yAxis: {},
        series: [{
            name: '待循环',
            type: 'bar',
            data: [500, 320, 136, 210, 410, 230, 500, 200, 360, 410, 150, 420, 350, 240, 36, 410, 170, 250, 159, 210, 536, 190, 190, 210, 50, 290, 360, 140, 180, 200, 350, 200, 360, 100, 160, 260, 600],
            itemStyle: {
                normal: {
                    color: '#fc0'


                }
            }
        }]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart02.setOption(option02);

    //37-72期
    var myChart372 = echarts.init(document.getElementById('waiting_cycle_bottom37'));
    var option372 = {
        title: {
            text: '37-72期 3000个'
        },
        tooltip: {},
        legend: {
            data: ['待循环']
        },
        xAxis: {
            data: ["37期", "38期", "39期", "40期", "41期", "42期", "43期", "44期", "45期", "46期", "47期", "48期", "49期", "50期", "51期", "52期", "53期", "54期", "55期", "56期", "57期", "58期", "59期", "60期", "61期", "62期", "63期", '64期', '65期', '66期', '67期', '68期', '69期', '70期', '71期', '72期'],
            // axisLabel: {
            //     show: true,
            //     interval: 0
            // }
        },
        yAxis: {},
        series: [{
            name: '待循环',
            type: 'bar',
            data: [500, 320, 136, 210, 410, 230, 500, 200, 360, 410, 150, 420, 350, 240, 36, 410, 170, 250, 159, 210, 536, 190, 190, 210, 50, 290, 360, 140, 180, 200, 350, 200, 360, 100, 160, 260],
            itemStyle: {
                normal: {
                    color: '#fc0'
                }
            }
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart372.setOption(option372);

    //72期以上
    var myChart722 = echarts.init(document.getElementById('waiting_cycle_bottom72'));
    var option722 = {
        title: {
            text: '72期以上 2000个'
        },
        tooltip: {},
        legend: {
            data: ['待循环']
        },
        xAxis: {
            data: ["73期", "74期", "75期", "76期", "77期", "78期", "79期", "80期", "81期", "82期", "83期", "84期", "85期", "86期", "87期", "88期", "89期", "90期"],
            // axisLabel: {
            //     show: true,
            //     interval: 0
            // }
        },
        yAxis: {},
        series: [{
            name: '待循环',
            type: 'bar',
            data: [500, 320, 420, 350, 240, 36, 410, 170, 250, 159, 210, 536, 190, 190, 210, 260, 536, 190],
            itemStyle: {
                normal: {
                    color: '#fc0'
                }
            }
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart722.setOption(option722);





    //滑动
    var oSlider = document.querySelector('.slider'),//滑块
        aTitle = document.querySelectorAll('.contain .active'),//Tab
        oContent = document.querySelector('.waiting_install_bottom');//滑动的内容
    contentWidth = oContent.children[0].offsetWidth;//滑动的宽度


    var oSlider_charge = document.querySelector('.charge_slider'),
        aTitle_charge = document.querySelectorAll(".contain .charge_acitve"),
        oContent_charge = document.querySelector('.charge_bottom');


    var oSlider_waiting = document.querySelector('.waiting_cycle_slider'),
        aTitle_waiting = document.querySelectorAll(".contain .waiting_cycle_acitve"),
        oContent_waiting = document.querySelector('.waiting_cycle_bottom');



    for (let i = 0, length = aTitle.length; i < length; i++) {
        click(i)
    }


    //点击
    function click(x) {
        aTitle[x].onclick = function () {
            switching(aTitle, x, oSlider, oContent)
        }
        aTitle_charge[x].onclick = function () {
            switching(aTitle_charge, x, oSlider_charge, oContent_charge)
        }
        aTitle_waiting[x].onclick = function () {
            switching(aTitle_waiting, x, oSlider_waiting, oContent_waiting)
        }
    }




    //切换
    function switching(Title, index, slider, content) {
        allWidth([...Title], index)
        var _left = allWidth([...Title], index),
            _width = Title[index].offsetWidth;
        slider.style.width = _width + 'px'
        slider.style.left = _left + 'px'
        content.style.transform = "translateX(-" + index * contentWidth + "px)"
    }


    //长度
    function allWidth(arr, index) {
        var list = arr.slice(0, index);
        var cont = list.reduce(function (x, y) {
            return x + y.offsetWidth
        }, 0)
        return cont;
    }


})()
