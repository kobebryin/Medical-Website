angular.module('Medical Website').controller('read_endinfoController', function ($rootScope, $scope, read_endinfoService) {

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
        read_endinfoService.getEndinfoData(function (data) {
            $scope.endinfoDatas = data;    //insert get data into variable

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
                              messageTop: '結案資料查詢',
                              filename: '結案資料查詢',
                              exportOptions: {
                                modifier: {
                                  page: 'all'
                                }
                              }
                            }
                        ],
                        "order": [[0, "desc"]],         //用ＩＤ當排序，遞減
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