/*
select * from customers
inner join orders on orders.customer = customers.id
inner join products on orders.product = product.id
where customer.id = 'xxxxxx-xxxx-xxxx'

select  product.id, product.name, count(*) from customers
inner join orders on orders.customer = customers.id
inner join products on orders.product = product.id
group by product.id
where customer.id = 'xxxxxx-xxxxxx-xxxxx';

select customers.id, sum(products.price) from customers
inner join orders. on orders.customer = customers.id
inner join  products on orders.product = products.id
group by customers.id;


 */
