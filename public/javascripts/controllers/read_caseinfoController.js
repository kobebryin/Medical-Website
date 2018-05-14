angular.module('Medical Website').controller('read_caseinfoController', function ($rootScope, $scope, read_caseinfoService) {

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
        read_caseinfoService.getCaseinfoData(function (data) {
            $scope.caseinfoDatas = data;    //insert get data into variable

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
                              className: 'exportExcel',
                              messageTop: '基本資料與病史資料查詢 - 基本資料',
                              filename: '基本資料與病史資料查詢 - 基本資料',
                              exportOptions: {
                                modifier: {
                                  page: 'all'
                                }
                              }
                            }
                        ],
                        "order": [[0, "asc"], [2, "asc"]],         //用ＩＤ和班級當排序，遞增
                        "fnRowCallback":
                            function (nRow, aData, iDisplayIndex) {
                                nRow.className = nRow.className + aData[4]; return nRow;
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
                              className: 'exportExcel',
                              messageTop: '基本資料與病史資料查詢 - 病史資料',
                              filename: '基本資料與病史資料查詢 - 病史資料',
                              exportOptions: {
                                modifier: {
                                  page: 'all'
                                }
                              }
                            }
                        ],
                        "order": [[0, "asc"], [2, "asc"]],         //用ＩＤ和班級當排序，遞增
                        "fnRowCallback":
                            function (nRow, aData, iDisplayIndex) {
                                nRow.className = nRow.className + aData[4]; return nRow;
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