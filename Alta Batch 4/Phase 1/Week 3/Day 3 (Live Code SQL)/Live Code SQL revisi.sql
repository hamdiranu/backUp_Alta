use db_live_code_4;

-- 1. Tampilkan data pada table “users” yang diinput 7 hari terakhir, 
-- di urutkan datanya berdasarkan kolom “id” dari yang terbesar ke terkecil.
SELECT * FROM users WHERE (created_at BETWEEN '2019-11-25' AND '2019-12-02') order by id desc ;

-- 2. Tampilkan field id dari tabel “transactions” sebagai transaction_id, 
-- field id dari tabel “products” sebagai product_id, 
-- field nama dari tabel “products” sebagai nama_product, field qty dari 
-- tabel “transaction_detail” sebagai qty_product dan juga field nama dari 
-- tabel “users” sebagai nama_user, yang data product_types tidak ada di 
-- dalam tabel “product_types”.
SELECT 
    t.id as transaction_id, p.id as product_id , p.nama_product as nama_product, td.qty as qty_product, u.nama
FROM
    users u
		LEFT JOIN
	transactions t ON u.id = t.user_id 
		LEFT JOIN
    transaction_detail td ON td.transaction_id = t.id 
        LEFT JOIN
     products p ON p.id = td.product_id 
        LEFT JOIN
	product_types on p.product_type_id = product_types.id
    
    where product_type_id not in (select id from product_types);

-- 3. 

SELECT 
    u.nama, t.user_id as total_transaksi, t.total_qty as total_qty
FROM
    transactions t
        LEFT JOIN
    users u ON t.user_id = u.id
        LEFT JOIN
    transaction_details td ON t.id = td.transaction_id
        LEFT JOIN
    product p ON td.product_id = p.id;
        
        
-- select count(user_id) from transactions where user_id=1;

-- 4. 
select 
	u.nama as nama_user, count(*) As , t.total_qty
FROM
    users u
        LEFT JOIN
    transactions t ON t.user_id = u.id group by id

having nama_product like "%p%" order by total_qty desc;

-- 5.

DELIMITER $$
CREATE TRIGGER update_transaction_details
AFTER INSERT ON transaction_details FOR EACH ROW
	BEGIN
    -- declare variable
    
    declare updated_qty INT;
    declare updated_price INT;
	-- trigger code
    set updated_qty=(select SUM(qty) from transaction_details 
    where transaction_id=NEW.transaction_id);
    set updated_price=(select SUM(price) from transaction_details 
    where transaction_id=NEW.transaction_id);
    
    update transactions set total_qty=updated_qty where id=NEW.transaction_id;
    update transactions set total_price=updated_price where id=NEW.transaction_id;
    update transactions set updated_at= current_timestamp();

END $$
DELIMITER ;

