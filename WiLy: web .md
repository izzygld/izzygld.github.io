**WiLy: web application
**
===============================

Work in progress:
======

As a user, I should be able to sign in to the web application so that I get the login credentials to access the web applications.
As a user, I should be able to login to the web application so that I can access the app Dashboard.
As a user (teacher), I should be able to scan the QR code placed on the book and the QR code placed on the student ID card so that I can issue the book to a student if the student qualifies.
As a user (teacher), I should also be able to see to whom has a book been issued so that I can keep track of who has the book at any point of time.
As a user, I should be able to view which books are issued to a student so that I can keep track of the reading habits of any student.
As an admin, I should be able to view a list by
    Name of the book, Date of issue, Expected Date of Return, Date of return, Name of the student who issued the book
 So that I can analyze, filter and understand the reading habits of students in my library.

Question:
Are we implementing reminders and warnings when the book is due for return??
Like i mentioned in the comment, will the student be able to see who has that current book?
I am thinking of user as teacher/librarian here. Maybe we can think of a module where we allow the students to see the books they have and check who has a particular book as well.
We have to take into consideration that there might be multiple copies of one book! (So the bar code at the back of the book might not be good as a unique primary key)
We are not using the barcode at the back. We will be printing QR code stickers. I generated it last time through a barcode generator program and printed it in A4 sheets and stuck it in my books
Good. we will still have to store the info of the book together with the barcode somehow. For cases when the book gets damaged and the QR cant be read.
We should be able to search the book by name in the database?

Login credentials probably should be done using bootstraps email confirmation authorization.
This works.
Who is a classified as a student and how can they receive a login credential.
As I have mentioned above I have not thought of the student as our user - our users are schools and teachers. Since I am thinking this as an application, anyone can use - any login through a new email id will be considered a new user and will be given a fresh database table.
Will we have to manually insert all the books into the db?
Last time I inserted all the books manually. But I thought if we have a list of book names, we can use Google Books API or Amazon API to enter the info in the DB
So far good work mate.

P.s. concerning Databases i personally like SQL and iclouds..
They both have their own advantages and disadvantages SQL is very good for CRUD and queries and it has a bonus of being able to work even with slow or none at all internet connection (though not sure if that’s something to worry about).
Any ideas?
SQL is good. I personally used MySQL last time in the application. However, I haven’t used it for offline connections - It would be great if we can do that.
Also the application would require a lot of querying - so SQL makes sense to me.

Ok so there is work cut out for me!
Give me a day and i will make a wily library spec  that we would be able to work from.
Great !!

Are we implementing reminders and warnings when the book is due for return??
Will we allow reviews (written by students) on books?
Interesting point but I don’t think this is a great value for our product in question. There are already a lot of book reviews available online. Moreover, in the context of low-income schools - students don’t have a lot of access to smartphones or internet.
Need to add book category to type of book.
Yes thank you. We need to do that.

