$(document).ready(function () {
  sd.collection('homework02').get().then((snapshot) => {
    var result = "";
    snapshot.forEach(item => {
      result += `
            <div class="card shadow-lg mt-4">
            <div class="card-header">
                <img src="${item.data().profile_img}" style="border-radius:50%" width="50" height="50">
                ${item.data().name}
                <button type="button" class="btn btn-info float-right" data-toggle="modal" data-target="#myModal${item.id}" width="50">
                Views
                </button>
            </div>
            <div class="card-body">
                <img src="${item.data().post_img}" class="img-fluid"> 
                <br>
                <br>
                ${item.data().text}
            </div>
                <div class="card-footer">
                <button class="btn btn-danger float-right" onclick="deletepicture('${item.id}')" type="button">delete</button>
                </div>              
            </div>
          <div class="modal" id="myModal${item.id}">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                <img src="${item.data().post_img}" class="img-fluid">            
                </div>
                </div>
            </div>
          </div>
        </div>
        `;
    });
    $('#result').append(result);
  });
});
$('#add').on('click', function () {
  var name = $('#name').val();
  var profile = $('#profile').val();
  var post = $('#post').val();
  var text = $('#text').val();
  sd.collection('homework02').add({
    name: name,
    profile_img: profile,
    post_img: post,
    text: text,
  });
});
function deletepicture(pId) {
  sd.collection('homework02').doc(pId).delete();
}
