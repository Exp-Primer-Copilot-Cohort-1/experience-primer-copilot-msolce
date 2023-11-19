function skillsMember() {
    var name = 'Ninja';
    var age = 30;
    function getName() {
        return name;
    }
    function getAge() {
        return age;
    }
    return {
        getName: getName,
        getAge: getAge
    };
}