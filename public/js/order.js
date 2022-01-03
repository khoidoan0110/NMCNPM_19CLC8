function cancelOrder(e){
    const order_id = e.target.getAttribute("data-orderid");
    const url = window.location.origin + `/user/order/${order_id}`;

    fetch(url, {
      method: 'DELETE',
      body: JSON.stringify({
        order_id      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)),
      function(){
        location.reload();

      }
    )
    .catch(err => console.log(err))
}