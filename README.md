<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>Booking Management Application</h1>

<p>This application allows users to manage their bookings through a secure login system. Key features include user authentication, booking management, and administrative controls.</p>

<h2>Features</h2>

<ol>
    <li>
        <h3>User Authentication</h3>
        <ul>
            <li><strong>Login/Sign Up:</strong> Users can sign up or log in to generate a token.</li>
            <li><strong>Token-Based Authentication:</strong> The token is used to fetch the booking details specific to the logged-in user.</li>
        </ul>
    </li>
    <li>
        <h3>Booking Management</h3>
        <ul>
            <li><strong>View Bookings:</strong> Users can view their own booking details.</li>
            <li><strong>Create Booking:</strong> Users can create new bookings.</li>
            <li><strong>Delete Booking:</strong> Users can delete their own bookings.</li>
            <li><strong>Admin Update Booking:</strong> Only admins are authorized to update any booking.</li>
        </ul>
    </li>
    <li>
        <h3>User Account Management</h3>
        <ul>
            <li><strong>Update Account:</strong> Users can update their own account information.</li>
            <li><strong>Delete Account:</strong> Users can delete their own accounts.</li>
            <li><strong>Admin Get Users List:</strong> Only admins can retrieve the list of all users.</li>
        </ul>
    </li>
</ol>

<h2>Error Handling</h2>
<ul>
    <li><strong>Unauthorized Access:</strong> If a user attempts to access a booking ID that does not belong to them, an error is generated.</li>
    <li><strong>Forbidden Access:</strong> If anyone other than the admin tries to access features restricted only for admins, a forbidden error message is generated.</li>
</ul>

<h2>Roles and Permissions</h2>
<ul>
    <li><strong>Users:</strong> Can manage their own bookings and account.</li>
    <li><strong>Admins:</strong> Can update bookings and retrieve the list of all users.</li>
</ul>

<h2>Technologies Used</h2>
<ul>
    <li><strong>Backend:</strong> Express</li>
    <li><strong>Database:</strong> MongoDB (Mongoose for ODM)</li>
    <li><strong>Authentication:</strong> JWT</li>
</ul>

<h2>Installation and Setup</h2>

<ol>
    <li>
        <p><strong>Clone the repository:</strong></p>
        <pre><code>git clone [repository-url]
cd [repository-directory]</code></pre>
    </li>
    <li>
        <p><strong>Install dependencies:</strong></p>
        <pre><code>npm i</code></pre>
    </li>
    <li>
        <p><strong>Start the project:</strong></p>
        <pre><code>npm start</code></pre>
        <p>This will run the project using <code>nodemon server.js</code>.</p>
    </li>
    <li>
        <p><strong>Testing the API:</strong></p>
        <p>Open your browser or Postman and navigate to <a href="http://127.0.0.1:5000">http://127.0.0.1:3000/</a>.</p>
    </li>
</ol>


</body>
</html>
