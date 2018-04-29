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
                        "order": [[0, "asc"],[2, "asc"]],         //用ＩＤ和班級當排序，遞增
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
                        "order": [[0, "asc"],[2, "asc"]],         //用ＩＤ當排序，遞減
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
                    table = $('#dataTables-example2').DataTable({
                        "order": [[0, "asc"],[2, "asc"]],         //用ＩＤ當排序，遞減
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
                    table = $('#dataTables-example3').DataTable({
                        "order": [[0, "asc"],[2, "asc"]],         //用ＩＤ當排序，遞減
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
                    table = $('#dataTables-example4').DataTable({
                        "order": [[0, "asc"],[2, "asc"]],         //用ＩＤ當排序，遞減
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