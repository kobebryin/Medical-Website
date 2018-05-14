angular.module('Medical Website').controller('read_casedataController', function ($rootScope, $scope, read_casedataService) {

    /**
    * Author : Jimmy Liang
    * Date : 2018/04/23
    */

    var table;  //datatables variable

    //start initial function
    initial();

    //initial start get data from SQL and insert into datatables
    function initial() {

        $.LoadingOverlay('show');   //show the loadingoverlay...

        //call sql api
        read_casedataService.getCasenumData(function (data) {
            $scope.casenumDatas = data;    //insert get data into variable

            //set timeout to let data get first(cause javascripts is asynchronous).
            setTimeout(function () {
                //datatables jquery setup
                $(document).ready(function () {
                    table = $('#dataTables-example').DataTable({
                        dom: "<'row'<'col-md-6'B><'col-md-4'f>r>t<'row'<'col-md-4'i><'col-md-3'p><'col-md-3'l>>",
                        buttons: [
                            {
                              extend: 'excel',
                              text: 'Export excel',
                              className: 'button button1',
                              messageTop: '檢驗資料查詢 - 檢驗資料_肥胖',
                              filename: '檢驗資料查詢 - 檢驗資料_肥胖',
                              exportOptions: {
                                modifier: {
                                  page: 'all'
                                }
                              }
                            }
                        ],
                        "order": [[7, "desc"], [2, "asc"]],         //用檢驗日期和班級當排序，檢驗日期遞減，班級遞增
                        "fnRowCallback":
                            function (nRow, aData, iDisplayIndex) {
                                nRow.className = nRow.className + aData[4];
                                if (aData[6] >= 90 && aData[3] == '男') {
                                    $('td:eq(6)', nRow).css("color", "red");
                                    $('td:eq(6)', nRow).css("font-weight", "bold");
                                }
                                if (aData[6] >= 80 && aData[3] == '女') {
                                    $('td:eq(6)', nRow).css("color", "red");
                                    $('td:eq(6)', nRow).css("font-weight", "bold");
                                }
                                return nRow;
                            },
                        "aoData": [
                            null,
                            null,
                            { "bVisible": false, "bSearchable": false },
                            { "sClass": "center" },
                            { "sClass": "center" }
                        ]
                    });
                });
                $(document).ready(function () {
                    table = $('#dataTables-example1').DataTable({
                        dom: "<'row'<'col-md-6'B><'col-md-4'f>r>t<'row'<'col-md-4'i><'col-md-3'p><'col-md-3'l>>",
                        buttons: [
                            {
                              extend: 'excel',
                              text: 'Export excel',
                              className: 'button button1',
                              messageTop: '檢驗資料查詢 - 檢驗資料_高血脂',
                              filename: '檢驗資料查詢 - 檢驗資料_高血脂',
                              exportOptions: {
                                modifier: {
                                  page: 'all'
                                }
                              }
                            }
                        ],
                        "order": [[5, "desc"], [2, "asc"]],         //用檢驗日期和班級當排序，檢驗日期遞減，班級遞增
                        "fnRowCallback":
                            function (nRow, aData, iDisplayIndex) {
                                nRow.className = nRow.className + aData[4];
                                if (aData[3] < 110 || aData[3] > 200) {
                                    $('td:eq(3)', nRow).css("color", "red");
                                    $('td:eq(3)', nRow).css("font-weight", "bold");
                                }
                                if (aData[4] >= 150) {
                                    $('td:eq(4)', nRow).css("color", "red");
                                    $('td:eq(4)', nRow).css("font-weight", "bold");
                                }
                                return nRow;
                            },
                        "aoData": [
                            null,
                            null,
                            { "bVisible": false, "bSearchable": false },
                            { "sClass": "center" },
                            { "sClass": "center" }
                        ]
                    });
                });
                $(document).ready(function () {
                    table = $('#dataTables-example2').DataTable({
                        dom: "<'row'<'col-md-6'B><'col-md-4'f>r>t<'row'<'col-md-4'i><'col-md-3'p><'col-md-3'l>>",
                        buttons: [
                            {
                              extend: 'excel',
                              text: 'Export excel',
                              className: 'button button1',
                              messageTop: '檢驗資料查詢 - 檢驗資料_高血壓',
                              filename: '檢驗資料查詢 - 檢驗資料_高血壓',
                              exportOptions: {
                                modifier: {
                                  page: 'all'
                                }
                              }
                            }
                        ],
                        "order": [[6, "desc"], [2, "asc"]],         //用檢驗日期和班級當排序，檢驗日期遞減，班級遞增
                        "fnRowCallback":
                            function (nRow, aData, iDisplayIndex) {
                                nRow.className = nRow.className + aData[4];
                                if (aData[3] >= 130) {
                                    $('td:eq(3)', nRow).css("color", "red");
                                    $('td:eq(3)', nRow).css("font-weight", "bold");
                                }
                                if (aData[4] >= 85) {
                                    $('td:eq(4)', nRow).css("color", "red");
                                    $('td:eq(4)', nRow).css("font-weight", "bold");
                                }
                                if (aData[5] > 130) {
                                    $('td:eq(5)', nRow).css("color", "red");
                                    $('td:eq(5)', nRow).css("font-weight", "bold");
                                }
                                return nRow;
                            },
                        "aoData": [
                            null,
                            null,
                            { "bVisible": false, "bSearchable": false },
                            { "sClass": "center" },
                            { "sClass": "center" }
                        ]
                    });
                });
                $(document).ready(function () {
                    table = $('#dataTables-example3').DataTable({
                        dom: "<'row'<'col-md-6'B><'col-md-4'f>r>t<'row'<'col-md-4'i><'col-md-3'p><'col-md-3'l>>",
                        buttons: [
                            {
                              extend: 'excel',
                              text: 'Export excel',
                              className: 'button button1',
                              messageTop: '檢驗資料查詢 - 檢驗資料_糖尿病',
                              filename: '檢驗資料查詢 - 檢驗資料_糖尿病',
                              exportOptions: {
                                modifier: {
                                  page: 'all'
                                }
                              }
                            }
                        ],
                        "order": [[5, "desc"], [2, "asc"]],         //用檢驗日期和班級當排序，檢驗日期遞減，班級遞增
                        "fnRowCallback":
                            function (nRow, aData, iDisplayIndex) {
                                nRow.className = nRow.className + aData[4];
                                if (aData[3] < 70 || aData[3] > 110) {
                                    $('td:eq(3)', nRow).css("color", "red");
                                    $('td:eq(3)', nRow).css("font-weight", "bold");
                                }
                                if (aData[4] < 4.00 || aData[4] > 6.00) {
                                    $('td:eq(4)', nRow).css("color", "red");
                                    $('td:eq(4)', nRow).css("font-weight", "bold");
                                }
                                return nRow;
                            },
                        "aoData": [
                            null,
                            null,
                            { "bVisible": false, "bSearchable": false },
                            { "sClass": "center" },
                            { "sClass": "center" }
                        ]
                    });
                });
                $(document).ready(function () {
                    table = $('#dataTables-example4').DataTable({
                        dom: "<'row'<'col-md-6'B><'col-md-4'f>r>t<'row'<'col-md-4'i><'col-md-3'p><'col-md-3'l>>",
                        buttons: [
                            {
                              extend: 'excel',
                              text: 'Export excel',
                              className: 'button button1',
                              messageTop: '檢驗資料查詢 - 檢驗資料_腎臟病',
                              filename: '檢驗資料查詢 - 檢驗資料_腎臟病',
                              exportOptions: {
                                modifier: {
                                  page: 'all'
                                }
                              }
                            }
                        ],
                        "order": [[9, "desc"], [2, "asc"]],         //用檢驗日期和班級當排序，檢驗日期遞減，班級遞增
                        "fnRowCallback":
                            function (nRow, aData, iDisplayIndex) {
                                nRow.className = nRow.className + aData[4];
                                if (aData[3] < 7 || aData[3] > 25) {
                                    $('td:eq(3)', nRow).css("color", "red");
                                    $('td:eq(3)', nRow).css("font-weight", "bold");
                                }
                                if (aData[4] < 0.5 || aData[4] > 1.3) {
                                    $('td:eq(4)', nRow).css("color", "red");
                                    $('td:eq(4)', nRow).css("font-weight", "bold");
                                }
                                if (aData[5] < 100) {
                                    $('td:eq(5)', nRow).css("color", "red");
                                    $('td:eq(5)', nRow).css("font-weight", "bold");
                                }
                                if (aData[7] < 150) {
                                    $('td:eq(7)', nRow).css("color", "red");
                                    $('td:eq(7)', nRow).css("font-weight", "bold");
                                }
                                return nRow;
                            },
                        "aoData": [
                            null,
                            null,
                            { "bVisible": false, "bSearchable": false },
                            { "sClass": "center" },
                            { "sClass": "center" }
                        ]
                    });
                });
            }, 200);
            $.LoadingOverlay('hide');   //when post finished then hide the loadingoverlay...
        });

    };

});