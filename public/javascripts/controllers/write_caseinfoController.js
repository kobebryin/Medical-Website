angular.module('Medical Website').controller('write_caseinfoController', function ($rootScope, $scope) {

    /**
     * Author : Jimmy Liang
     * Date : 2018/03/28
     */

    /*   Variables of dropdown list elements array setting  */
    // MedicalHistory checkbox
    $scope.MedicalHistory = [
        { name: '高血壓〈130/80mmHg以上〉', value: 'HTN', selected: false},
        { name: '高血糖〈糖化血色素HbA1C>7%以上〉', value: 'HGA', selected: false },
        { name: '低密度脂蛋白過高〈LDL>130mg/dl〉', value: 'LDL', selected: false },
        { name: '高膽固醇〈總膽固醇CHOL>1820mg/dl〉', value: 'CHOL', selected: false },
        { name: '高三酸甘油脂〈TG>150mg/dl〉', value: 'TG', selected: false },
        { name: '高尿酸〈UA>8mg/dl〉', value: 'UA', selected: false },
        { name: '無', value: 'NONE', selected: false }
    ];

    // Watch MedicalHistory checkbox for changes
    $scope.$watch('MedicalHistory|filter:{selected:true}', function (nv) {
        $scope.form.MedicalHistory = nv.map(function (medicalHistory_selection) {
            return medicalHistory_selection.value;
        });
    }, true);

    $scope.genders = [
        { value: '1', name: '男' },
        { value: '2', name: '女' }
    ];

    $scope.religions = [
        { value: 'Buddhism', name: '佛教' },
        { value: 'Islam', name: '回教' },
        { value: 'Christian', name: '基督教' },
        { value: 'Catholicism', name: '天主教' },
        { value: 'FolkloreReligion', name: '民間信仰' },
        { value: 'other', name: '其他' }
    ];

    $scope.educations = [
        { value: '0', name: '不識字' },
        { value: '1', name: '小學' },
        { value: '2', name: '國中' },
        { value: '3', name: '高中職或專科' },
        { value: '4', name: '大學' },
        { value: '5', name: '研究所暨以上' }
    ];

    $scope.maritalStatus = [
        { value: 'Single', name: '未婚' },
        { value: 'Married', name: '已婚' },
        { value: 'Widowed', name: '喪偶' },
        { value: 'Divorced', name: '離婚' }
    ];

    $scope.jobStatus = [
        { value: 'Y', name: '是' },
        { value: 'N', name: '否' }
    ];

    $scope.residentSituations = [
        { value: 'A', name: '獨居' },
        { value: 'F', name: '與親友同住' },
        { value: 'M', name: '機構' },
        { value: 'O', name: '其他' }
    ];

    $scope.smokingHabits = [
        { value: 'Y', name: '有' },
        { value: 'N', name: '無' }
    ];

    $scope.drinkHabits = [
        { value: 'Y', name: '有' },
        { value: 'N', name: '無' }
    ];

    $scope.drinkHabits = [
        { value: 'Y', name: '有' },
        { value: 'N', name: '無' }
    ];

    $scope.sportsHabits = [
        { value: 'Y', name: '有' },
        { value: 'N', name: '無' }
    ];

    $scope.diabetesEducations = [
        { value: 'Y', name: '是' },
        { value: 'N', name: '否' }
    ];

    $scope.blood_GlucoseMachines = [
        { value: 'Y', name: '是' },
        { value: 'N', name: '否' }
    ];

    $scope.medicationHabits = [
        { value: 'W', name: '西醫〈診所或醫院〉處方用藥' },
        { value: 'C', name: '中醫〈診所或醫院〉' },
        { value: 'T', name: '傳統偏方草藥' },
        { value: 'M', name: '藥局買成藥〈例：止痛藥或感冒液〉' },
        { value: 'A', name: '第四台或電台廣告藥' },
        { value: 'O', name: '其它' }
    ];

    // Object of form elements
    $scope.form = {
        BeginTime: null,
        Class_Name: null,
        Clinic_Name: null,
        Clinic_No: null,
        Gender: null,
        Age: null,
        Religion: null,
        Education: null,
        MaritalStatus: null,
        JobStatus: null,
        ResidentSituation: null,
        SmokingHabits: null,
        DrinkHabits: null,
        SportsHabits: null,
        Remark: null,
        MedicalHistory: [],
        DiabetesEducation: null,
        Blood_GlucoseMachine: null,
        MedicationHabits: null,
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


});