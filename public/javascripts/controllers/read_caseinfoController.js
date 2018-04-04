angular.module('Medical Website').controller('read_caseinfoController', function ($rootScope, $scope, read_caseinfoService) {

    var table;  //datatables variable

    //start initial function
    initial();

    //initial start get data from SQL and insert into datatables
    function initial() {

        //call sql api
        read_caseinfoService.getCaseinfoData(function (data) {
            $scope.caseinfoDatas = data;    //insert get data into variable

            //set timeout to let data get first(cause javascripts is asynchronous).
            setTimeout(function () {
                //datatables jquery setup
                $(document).ready(function () {
                    table = $('#dataTables-example').DataTable({
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
        });

    };

});