angular.module('Medical Website').controller('write_caseinfoController', function ($rootScope, $scope) {
    
    /**
     * Author : Jimmy Liang
     * Date : 2018/03/28
     */

     /*   Variables of dropdown list elements array setting  */
    $scope.genders =[
        { value: '1', name: '男' },
        { value: '2', name: '女' }
    ];

    $scope.religions =[
        { value: 'Buddhism', name: '佛教' },
        { value: 'Islam', name: '回教' },
        { value: 'Christian', name: '基督教' },
        { value: 'Catholicism', name: '天主教' },
        { value: 'FolkloreReligion', name: '民間信仰' },
        { value: 'other', name: '其他' }
    ];

    $scope.educations =[
        { value: '0', name: '不識字' },
        { value: '1', name: '小學' },
        { value: '2', name: '國中' },
        { value: '3', name: '高中職或專科' },
        { value: '4', name: '大學' },
        { value: '5', name: '研究所暨以上' }
    ];

    $scope.maritalStatus =[
        { value: 'Single', name: '未婚' },
        { value: 'Married', name: '已婚' },
        { value: 'Widowed', name: '喪偶' },
        { value: 'Divorced', name: '離婚' }
    ];

    $scope.jobStatus = [
        { value: 'Y', name: '是' },
        { value: 'N', name: '否' }
    ];

    $scope.residentSituations =[
        { value: 'A', name: '獨居' },
        { value: 'F', name: '與親友同住' },
        { value: 'M', name: '機構' },
        { value: 'O', name: '其他' }
    ];

    $scope.smokingHabits =[
        { value: 'Y', name: '有' },
        { value: 'N', name: '無' }
    ];

    $scope.drinkHabits =[
        { value: 'Y', name: '有' },
        { value: 'N', name: '無' }
    ];
    
    $scope.drinkHabits =[
        { value: 'Y', name: '有' },
        { value: 'N', name: '無' }
    ];
    
    $scope.sportsHabits =[
        { value: 'Y', name: '有' },
        { value: 'N', name: '無' }
    ];

    // Object of form elements
    $scope.form = {
        BeginTime : null,
        Class_Name : null,
        Clinic_Name : null,
        Clinic_No : null,
        Gender : null,
        Age : null,
        Religion : null,
        Education : null,
        MaritalStatus : null,
        JobStatus : null,
        ResidentSituation : null,
        SmokingHabits : null,
        DrinkHabits : null,
        SportsHabits : null,
        Remark : null
    };
    
    
});