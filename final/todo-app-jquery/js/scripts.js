function addTask() {
    //Previous Vanilla JS way:
    //let task = document.getElementById('task').value;
    //  ======================JQ=========================
    //  jQuery way:
    let task = $('#task').val();
    if (!task)
        return;

    const text = "<li class='task'>" + task + "</li>"
    //Previous Vanilla JS way:
    //document.getElementById('list').insertAdjacentHTML('beforeend', text)
    //  ======================JQ=========================
    //  jQuery way:
    $('#list').append(text);

    //Previous Vanilla JS way:
    //document.getElementById('task').value = '';
    //  ======================JQ=========================
    //  jQuery way:
    $('#task').val('');
}


$(function () {

    //Previous Vanilla JS way:
    //document.getElementById('add').addEventListener('click', addTask);
    $('#add').on('click', addTask);

    //Previous Vanilla JS way:
    // document.getElementById('list').addEventListener('click', function(event){
    //     const element = event.target;
    //     
    // });
    //  ======================JQ=========================
    //  jQuery way:
    $('#list').on('click', function (event) {
        var target = $(event.target);
        target.toggleClass('done');
    })

});