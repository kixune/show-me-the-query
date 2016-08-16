console.log('linkd');
$(function() {

  // set the url of the api to request from
  var me_url = "https://overkilt.herokuapp.com/";

  // locate html tag to append response
  var $name = $('#name');
  var $age = $('#age');
  var $gender = $('#gender');

  // instantiate variables for response later
  var myName;
  var myAge;
  var myGender;

  function getMyInfo() {
    $.ajax({
      url: me_url,
      dataType: 'json',
    }).done(success)
      .fail(fail)
  }
  getMyInfo();

  function success(responseText, textStatus, request) {

      myName = responseText.name;
      myAge = responseText.age;
      myGender = responseText.gender;

      $name.text(myName);
      $age.text(myAge);
      $gender.text(myGender);

  };

  function fail(request, textStatus, errThrown) {
    $name.text('Oops' + request.status + ' ' + textStatus + ' ' + errThrown);

    $age.text('Not' + request.status + ' ' + textStatus + ' ' + errThrown);

    $gender.text('Found' + request.status + ' ' + textStatus + ' ' + errThrown);
  };



});
