angular.module('Medical Website').controller('write_endinfoController', function ($rootScope, $scope, write_endinfoService) {
    
        /**
         * Author : vivi chou
         * Correction : Jimmy Liang
         * Date : 2018/04/23
         */
    
        /* ---START---  Variables of dropdown list elements array setting --- */
        // Object of form elements
        $scope.form = {
            Clinic_No: null,
            Clinic_Name: null,
            BeginTime: null,
            endDate: null,
            endReason: null,
            ModifiedDate: null,
            ModifiedBy: null
        };
    
        /* ---START--- Button's click events zone --- */
        //submit button's click listener
        $scope.submit = function () {
            //check Clinic_No is null or empty string
            if ($scope.form.Clinic_No == null || $scope.form.Clinic_No == '') {
                alert('病歷編號不可為空白!');
            } else {
                $.LoadingOverlay('show');   //show the loadingoverlay...
    
                //insert system's datetime into scope.form.ModifiedDate
                var Today = new Date(); //initialize Date Object. 
                $scope.form.ModifiedDate = Today.getFullYear() + '-' + (Today.getMonth() + 1) + '-' + Today.getDate() + " " + Today.getHours() + ":" + Today.getMinutes() + ":" + Today.getSeconds();
    
                //call the post CustomData & InspectionData data api
                write_endinfoService.postEndinfo($scope.form, function (data) {
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
                BeginTime: null,
                endDate: null,
                endReason: null,
                ModifiedDate: null,
                ModifiedBy: null
            };
        };
    });