angular.module('Medical Website').controller('write_careinfoController', function ($rootScope, $scope, write_careinfoService) {
    
        /**
         * Author : vivi chou
         * Correction : Jimmy Liang
         * Date : 2018/04/23
         */
    
        /* ---START---  Variables of dropdown list elements array setting --- */
        // EducationTarget checkbox
        $scope.EducationTarget = [
            { value: 'P', name: '本人' },
            { value: 'F', name: '家屬' },
            { value: 'O', name: '其他' }
        ];
    
        // Method checkbox
        $scope.Method = [
            { value: '0', name: '個別衛教' },
            { value: '1', name: '電訪' },
            { value: '2', name: '團體衛教' },
            { value: '3', name: '其他' }
        ];
        // Object of form elements
        $scope.form = {
            Clinic_No: null,
            Clinic_Name: null,
            Doc_Name: null,
            Doc_Name_2: null,
            EducationDate: null,
            EducationTarget: null,
            Method: null,
            MedicineUse: null,
            Reason: null,
            AdmissionDate: null,
            DischargeDate: null,
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
                write_careinfoService.postCareinfo($scope.form, function (data) {
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
                Doc_Name: null,
                Doc_Name_2: null,
                EducationDate: null,
                EducationTarget: '本人',
                Method: '個別衛教',
                MedicineUse: null,
                Reason: null,
                AdmissionDate: null,
                DischargeDate: null,
                ModifiedDate: null,
                ModifiedBy: null
            };
        };
    });