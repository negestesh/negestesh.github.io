let user;
$(function () {
  $('#fetch').click(fetchInformation);
  $('#postList').click('comment', fetchComments);
  function fetchInformation() {
    user = $('#userId').val();
    $.get('https://jsonplaceholder.typicode.com/users', { id: user }).done(
      showInformation
    );
  }
  function showInformation(data) {
    $('#id').text(data[0].id);
    $('#name').text(data[0].name);
    $('#username').text(data[0].username);
    $('#email').text(data[0].email);
    $('#phone').text(data[0].phone);
    $('#website').text(data[0].website);
    $.get('https://jsonplaceholder.typicode.com/posts', { userId: user }).done(
      showPosts
    );
  }
  function showPosts(data) {
    const items = [];
    for (let index = 0; index < data.length; index++) {
      items.push('<li>' + data[index].title + '</li>');
      items.push(
        '<li>' +
          data[index].body
          +
          '</li><br><input type="button" value="Comments" class="comment" data-post-id="' +
          data[index].id +
          '"/>'
      );
    }
    $('#postList').append(items.join(''));
    $('.postId').hide();
  }
  function fetchComments() {
    alert('hellow');
    $(function () {
      const postId = $(this).attr('data-postId');
      console.log(postId);
    });
  }
});
