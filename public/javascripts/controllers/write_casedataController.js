angular.module('Medical Website').controller('write_casedataController', function ($rootScope, $scope, write_casedataService) {

    /**
     * Author : vivi chou
     * Correction : Jimmy Liang
     * Date : 2018/04/23
     */

    /* ---START---  Variables of dropdown list elements array setting --- */
    // eGFR Stage checkbox
    $scope.Stage = [
        { value: 'no', name: '無' },
        { value: 'Stage1', name: 'Stage1—GFR：≧90 ml/min/1.73 m²' },
        { value: 'Stage2', name: 'Stage2—GFR：60-89 ml/min/1.73 m²' },
        { value: 'Stage3', name: 'Stage3—GFR：30-59 ml/min/1.73 m²' },
        { value: 'Stage3a', name: 'Stage3a—GFR：45-59 ml/min/1.73 m²' },
        { value: 'Stage3b', name: 'Stage3b—GFR：30-44 ml/min/1.73 m²' },
        { value: 'Stage4', name: 'Stage4—GFR：15-29 ml/min/1.73 m²' },
        { value: 'Stage5', name: 'Stage5—GFR：＜15 ml/min/1.73 m²' }
    ];
    // Object of form elements
    $scope.form = {
        Clinic_No: null,
        Clinic_Name: null,
        Class_Name: null,
        Inspectionday: null,
        Height: null,
        Weight: null,
        Waist: null,
        SBP: null,
        DBP: null,
        ACSugar: null,
        HbA1C: null,
        BUN: null,
        Creatinine: null,
        eGFR: null,
        Stage: null,
        TCH: null,
        TG: null,
        LDL: null,
        UACR: null,
        UR: null,
        ModifiedDate: null,
        ModifiedBy: null
    };

    /* ---START--- Button's click events zone --- */
    //submit button's click listener
    $scope.submit = function () {
        //check Clinic_No is null or empty string
        if ($scope.form.Clinic_No == null || $scope.form.Clinic_No == '') {
            alert('病歷編號不可為空白!');
        } else if ($scope.form.Inspectionday == null || $scope.form.Inspectionday == '') {
            alert('檢驗日期不可為空白!');
        } else if ($scope.form.Clinic_Name == null || $scope.form.Clinic_Name == '') {
            alert('病患姓名不可為空白!');
        } else if ($scope.form.Class_Name == null || $scope.form.Class_Name == '') {
            alert('班級名不可為空白!');
        } else {
            $.LoadingOverlay('show');   //show the loadingoverlay...

            //insert system's datetime into scope.form.ModifiedDate
            var Today = new Date(); //initialize Date Object. 
            $scope.form.ModifiedDate = Today.getFullYear() + '-' + (Today.getMonth() + 1) + '-' + Today.getDate() + " " + Today.getHours() + ":" + Today.getMinutes() + ":" + Today.getSeconds();
            $scope.form.ModifiedBy = sessionStorage.LoginUser;

            //call the post CustomData & InspectionData data api
            write_casedataService.postCaseDataByInspectionData($scope.form, function (data) {
                console.log(data); //log the api post status
                $.LoadingOverlay('hide');   //when post finished then hide the loadingoverlay...
            });
        };
    };

    //clear button's click listener
    $scope.clear = function () {
        //make form object be initial
        $scope.form = {
            Clinic_No: null,
            Clinic_Name: null,
            Class_Name: null,
            Inspectionday: null,
            Height: null,
            Weight: null,
            Waist: null,
            SBP: null,
            DBP: null,
            ACSugar: null,
            HbA1C: null,
            BUN: null,
            Creatinine: null,
            eGFR: null,
            Stage: '無',
            TCH: null,
            TG: null,
            LDL: null,
            UACR: null,
            UR: null
        };
    };
});