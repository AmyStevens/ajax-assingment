$(document).ready(function () {
  $.ajax({
    url: 'http://json-server.devpointlabs.com/api/v1/users',
    method: 'GET',
    dataType: 'JSON'
  }).done(function (users) {
    users.forEach(function (user) {
      var list = $('.user-list')
      var li = '<li data-user-id="' + user.id + '"><strong>' + user.first_name + ' - ' + user.last_name + '</strong>: ' + user.phone_number + '</li>' + '<button class="btn blue edit-button">Edit</button>' + '<button class="btn red delete-button">Delete</button>'
      list.append(li)
    });
  });
  $('.delete-button').on('click', function () {
    var userId = $(this).data('user-id')
    console.log(userID)
    // Code
    $.ajax({
      url: 'http://json-server.devpointlabs.com/api/v1/users',
      method: 'POST',
      dataType: 'JSON'
    }).done( function(users) {
      var list = $('.user-list')
      var li = '<li data-user-id="' + user.id + '">' + ' - ' + user.last_name + ': ' + user.phone_number + '</li>'
      + '<button class="delete-button">Edit</button>' + '<button class="delete-button">Delete</button'
      list.append(li)
    })
  })
});
