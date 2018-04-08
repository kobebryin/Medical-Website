angular.module('Medical Website').controller('write_casedataController', function ($rootScope, $scope, write_casedataService) {

    /**
     * Author : vivi chou
     * Date : 2018/04/07
     */

    /* ---START---  Variables of dropdown list elements array setting --- */
    // Object of form elements
    $scope.form = {
        Clinic_No: null,
        Clinic_Name: null,
        Class_Name: null,
        Height: null,
        Weight: null,
        Waist: null,
        tension: null,
        ACSugar: null,
        HbA1C: null,
        BUN: null,
        Creatinine: null,
        eGFR: null,
        TCH: null,
        TG: null,
        LDL: null,
        UACR: null,
        ModifiedDate: null,
        ModifiedBy: null
    };

    /* ---START--- Button's click events zone --- */
    //submit button's click listener
    $scope.submit = function () {
        $.LoadingOverlay('show');   //show the loadingoverlay...

        //insert system's datetime into scope.form.ModifiedDate
        var Today = new Date(); //initialize Date Object. 
        $scope.form.ModifiedDate = Today.getFullYear() + '-' + (Today.getMonth() + 1) + '-' + Today.getDate() + " " + Today.getHours() + ":" + Today.getMinutes() + ":" + Today.getSeconds();

        //call the post CustomData & InspectionData data api
        write_casedataService.postCaseDataByInspectionData($scope.form, function (data) {
            console.log(data); //log the api post status
            $.LoadingOverlay('hide');   //when post finished then hide the loadingoverlay...
        });
    };

    //clear button's click listener
    $scope.clear = function () {
        //make form object be initial
        $scope.form = {
            Clinic_No: null,
            Clinic_Name: null,
            Class_Name: null,
            Height: null,
            Weight: null,
            Waist: null,
            tension: null,
            ACSugar: null,
            HbA1C: null,
            BUN: null,
            Creatinine: null,
            eGFR: null,
            TCH: null,
            TG: null,
            LDL: null,
            UACR: null
        };
    };
});