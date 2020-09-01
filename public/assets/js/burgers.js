$(() => {
  $('.delete-burger').on('click', function (event) {
    const id = $(this).data('id');

    const newDelete = {
      devoured: true,
    };

    // Send the PUT request.
    $.ajax(`/api/burgers/${id}`, {
      type: 'PUT',
      data: newDelete,
    }).then(
      () => {
        // Reload the page to get the updated list
        location.reload();
      },
    );
  });

  $('.create-form').on('submit', (event) => {
    event.preventDefault();

    const newBurger = {
      burger_name: $('#brg').val().trim(),
      devoured: 0,
    };

    // Send the POST request.
    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger,
    }).then(
      () => {
        console.log('Added new burger');
        // Reload the page to get the updated list
        location.reload();
      },
    );
  });

  $('.delete-burger').on('click', function (event) {
    const id = $(this).data('id');

    // Send the DELETE request.
    $.ajax(`/api/cats/${id}`, {
      type: 'DELETE',
    }).then(
      () => {
        console.log('deleted cat', id);
        // Reload the page to get the updated list
        location.reload();
      },
    );
  });
});
