angular.module('Medical Website').controller('read_daycareinfoController', function ($rootScope, $scope, read_daycareinfoService) {

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
        read_daycareinfoService.getDaycareinfoData(function (data) {
            $scope.daycareinfoDatas = data;    //insert get data into variable

            //set timeout to let data get first(cause javascripts is asynchronous).
            setTimeout(function () {
                //datatables jquery setup
                $(document).ready(function () {
                    table = $('#dataTables-example').DataTable({
                        dom: '<"top"B>frt<"bottom"ilp><"clear">',
                        buttons: [
                            {
                              extend: 'excel',
                              text: 'Export excel',
                              className: 'exportExcel',
                              messageTop: '日常資料與運動紀錄查詢',
                              filename: '日常資料與運動紀錄查詢',
                              exportOptions: {
                                modifier: {
                                  page: 'all'
                                }
                              }
                            }
                        ],
                        "order": [[2, "desc"]],         //用ＩＤ當排序，遞減
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