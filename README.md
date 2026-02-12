# Saucedemo_Cypress_Automation_Testing_Assignment_Ashwini_Hinge

##  Environment & Credentials
 **URL**: https://www.saucedemo.com/
 **Test User**: standard_user
 **Password**: secret_sauce


# MANUAL TEST CASES :

### 1. LOGIN TEST CASES : 

TC_LOGIN_01 – Valid Login
Steps:
       1.Open https://www.saucedemo.com
       2.Enter username: standard_user
       3.Enter password: secret_sauce
       4.Click Login
Test Data: 
       standard_user / secret_sauce
Expected Result:
       User should navigate to Products page.
Actual Result:
       User navigate to Products page. 
-----------------------------------------------------------------------------------------
TC_LOGIN_02 – Invalid Username and Invalid Password
Steps:
      1.Enter invalid username
      2.Enter invalid password
      3.Click Login
Test Data: 
      wrong_user / wrong_pass
Expected Result:
      Error message displayed.
Actual Result:
       Error message display.
------------------------------------------------------------------------------------------
TC_LOGIN_03 – Invalid Username
Steps:
      1.Enter invalid username
      2.Enter valid password
      3.Click Login
Test Data: 
      invalid_user / secret_sauce
Expected Result:
      Error message displayed.
Actual Result:
       Error message display.
 -------------------------------------------------------------------------------------------------------------------      
TC_LOGIN_04 – Invalid password
Steps:
      1. Enter valid username
      2. Enter invalid password
      3. Click Login
Test Data: 
      standard_user / wrong123
Expected Result:
      Error message displayed.
Actual Result:
       Error message display.
-------------------------------------------------------------------------------------------------------------------
TC_LOGIN_05 – Both username and password are empty
Steps:
     1. Without Enter username
     2. Without Enter password
     3. Click Login
Test Data: 
Expected Result:
      Username is required this Error message should displayed.
Actual Result:
       Username is required this Error message is display..
-----------------------------------------------------------------
### 2. CART TEST CASES : 

TC_CART_001 – Add Single Product to Cart
Steps :
       1. Open https://www.saucedemo.com
       2. Enter username: standard_user
       3. Enter password: secret_sauce
       4. Click Login
       5. Click "Add to cart" for one item
       6. Click cart icon
Test Data: 
       standard_user / secret_sauce
Expected Result:
        Item should be visible in cart .
Actual Result:
        Item visible in cart  
---------------------------------------------------------------------------------------------
TC_CART_002 – Add multiple Product to Cart
Steps :
       1. Open https://www.saucedemo.com
       2. Enter username: standard_user
       3. Enter password: secret_sauce
       4. Click Login
       5. Click "Add to cart" for three item
       6. Click cart icon
Test Data: 
       standard_user / secret_sauce
Expected Result:
        All selected items should be appear in cart 
Actual Result:
        All selected items appear in cart 
----------------------------------------------------------------------
TC_CART_003 – Remove Product from Cart
Steps :
       1. Open https://www.saucedemo.com
       2. Enter username: standard_user
       3. Enter password: secret_sauce
       4. Click Login
       5. Click "Add to cart" for one item
       6. Click cart icon
       7. Click on remove Option
Test Data: 
       standard_user / secret_sauce
Expected Result:
        Product should be removed successfully 
Actual Result:
       Product successfully removed from cart   
---------------------------------------------------------------------------------------------------
### 3. CHECKOUT TEST CASES : 

TC_CHECKOUT_001 – – Complete Checkout
Steps :
       1. Open https://www.saucedemo.com
       2. Enter username: standard_user
       3. Enter password: secret_sauce
       4. Click Login
       5. Click "Add to cart" for one item
       6. Click cart icon
       7. Click Checkout
       8.	Enter First Name, Last Name, Zip
       9.	Click Continue
       10.Click Finish
Test Data: 
       standard_user / secret_sauce
Expected Result:
        Thank you for your order message should be displayed.
Actual Result:
        Thank you for your order" message display.  
---------------------------------------------------------------------------------------------

# Saucedemo Cypress Automation

## Setup

1. Clone repo
2. Run npm install
3. Run npx cypress open
4. Run npx cypress run

## Test Coverage
- Login
- Cart
- Checkout
  
## Tools Used
- Cypress
- JavaScript
  

## Setup Steps
1. Clone repository
2. Run: npm install
3. Run: npx cypress open
4. Run: npx cypress run
Cart
- Checkout
