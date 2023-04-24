$(document).ready(function () {
    $('#ListStudentTable').DataTable({
        columnDefs: [
            {
                targets: 3,
                render: DataTable.render.datetime('Do MMM YYYY'),
            },
        ],
    });
});

$(document).ready(function () {
    var table = $('#listStudentCheckAttend').DataTable({
        dom: 'Bfrtip',
        select: true,
        buttons: [
            {
                text: 'Select all',
                action: function () {
                    table.rows().select();
                },
            },
            {
                text: 'Select none',
                action: function () {
                    table.rows().deselect();
                },
            },
            {
                text: 'Save data',
                action: function () {
                    let count = table.rows({ selected: true }).data().toArray();
                    let data = table.$('input, select').serialize();
                    console.log(count);
                    // events.prepend( '<div>'+count+' row(s) selected</div>' );
                },
            },
        ],
        columnDefs: [
            {
                orderable: false,
                className: 'select-checkbox',
                targets: 0,
            },
        ],
        select: {
            style: 'os',
            selector: 'td:first-child',
        },
        order: [[1, 'asc']],
    });
});

// function fillDescription(id) {
//     document.getElementById(id).innerText = document.getElementById('desc' + id).value;
// }
