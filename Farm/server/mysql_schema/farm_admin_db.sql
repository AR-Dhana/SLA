use farm_admin_db;

select * from admin_login_table;
select * from admin_details_table;
select * from add_new_breids_table;
select * from product_list_table;
select * from customer_signup_table;
select * from customer_cart_table;
select * from place_orders_table;
select * from payment_table;
select * from order_status_table;

-- 01. admin_login_table


-- 02.admin_details_table
CREATE TABLE admin_details_table (
    id INT AUTO_INCREMENT KEY,
    admin_created_id VARCHAR(150) NOT NULL UNIQUE,
    admin_created_password VARCHAR(150) NOT NULL UNIQUE,
    admin_name VARCHAR(150) NOT NULL,
    admin_phone_number VARCHAR(150) NOT NULL,
    admin_email VARCHAR(150) NOT NULL,
    admin_aadhar_number VARCHAR(150) NOT NULL UNIQUE,
    admin_gender ENUM('male', 'female', 'other'),
    admin_address TEXT NOT NULL
);


-- 03. add_new_breids_table
CREATE TABLE add_new_breids_table (
    id INT AUTO_INCREMENT KEY,
    breid_id VARCHAR(150) NOT NULL UNIQUE,
    breid_weight DECIMAL(5 , 2 ) NOT NULL,
    breid_colour VARCHAR(150) NOT NULL,
    breid_category ENUM('goat', 'hen', 'fish'),
    breid_health_status ENUM('healthy', 'sick', 'under-treatment'),
    breid_sales_status ENUM('available', 'sold', 'reserved'),
    breid_quantity INT NOT NULL,
    breid_image VARCHAR(255) NOT NULL
);


-- 04. product_list_table
CREATE TABLE product_list_table (
    id INT AUTO_INCREMENT KEY,
    product_id VARCHAR(150) NOT NULL UNIQUE,
    breid_id VARCHAR(150),
    product_name VARCHAR(150) NOT NULL,
    product_category ENUM('goat', 'hen', 'fish'),
    product_description TEXT NOT NULL,
    product_weight DECIMAL(5 , 2 ) NOT NULL,
    product_price DECIMAL(10 , 2 ) NOT NULL,
    product_discount_price DECIMAL(10 , 2 ) NOT NULL,
    product_image VARCHAR(255),
    available_quantity INT NOT NULL,
    added_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('active', 'inactive'),
    FOREIGN KEY (breid_id)
        REFERENCES add_new_breids_table (breid_id)
);


-- 05. customer_signup_table
CREATE TABLE customer_signup_table (
    customer_id INT KEY AUTO_INCREMENT UNIQUE,
    customer_name VARCHAR(100),
    customer_phone_number VARCHAR(15),
    customer_email VARCHAR(100),
    customer_password VARCHAR(255),
    customer_gender ENUM('Male', 'Female', 'Other'),
    customer_door_number VARCHAR(20),
    customer_street_name VARCHAR(100),
    customer_near_landmark VARCHAR(100),
    customer_city VARCHAR(50),
    customer_pin_code VARCHAR(10),
    customer_state VARCHAR(50)
);


-- 06. customer_cart_table
CREATE TABLE customer_cart_table (
  cart_id INT KEY AUTO_INCREMENT,
  customer_id INT,
  product_id INT,
  quantity INT,
  is_favorite BOOLEAN DEFAULT FALSE,
  is_in_cart BOOLEAN DEFAULT TRUE,
  added_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (customer_id) REFERENCES customer_signup_table(customer_id)
);


-- 07. place_orders_table
CREATE TABLE place_orders_table (
  order_id INT PRIMARY KEY AUTO_INCREMENT,
  customer_id INT,
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  order_total_amount DECIMAL(10, 2),
  order_items JSON,
  address_door_no VARCHAR(20),
  address_street VARCHAR(100),
  address_landmark VARCHAR(100),
  address_city VARCHAR(50),
  address_pincode VARCHAR(10),
  address_state VARCHAR(50),
  delivery_instructions TEXT,
  FOREIGN KEY (customer_id) REFERENCES customer_signup_table(customer_id)
);


-- 08. payment_table
CREATE TABLE payment_table (
  payment_id INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,
  customer_id INT,
  payment_method ENUM('cash_on_delivery', 'online_gateway'),
  payment_status ENUM('pending', 'success', 'failed'),
  payment_gateway_txn_id VARCHAR(255),
  payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (order_id) REFERENCES place_orders_table(order_id),
  FOREIGN KEY (customer_id) REFERENCES customer_signup_table(customer_id)
);


-- 09. order_status_table
CREATE TABLE order_status_table (
  status_id INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,
  customer_id INT,
  status ENUM('placed', 'processing', 'shipped', 'out_for_delivery', 'delivered', 'cancelled'),
  status_updated_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_by VARCHAR(100),
  FOREIGN KEY (order_id) REFERENCES place_orders_table(order_id),
  FOREIGN KEY (customer_id) REFERENCES customer_signup_table(customer_id)
);
