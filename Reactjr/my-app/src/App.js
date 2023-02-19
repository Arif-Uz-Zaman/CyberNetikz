import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <form action="action_page.php">
      <div className="container">
        <h1 style={{textAlign:'center'}}>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label htmlFor="email"><b>Email</b></label><br></br>
        <input type="text" placeholder="Enter Email" name="email" id="email" required />
        <br></br>
        <label htmlFor="psw"><b>Password</b></label><br></br>
        <input type="password" placeholder="Enter Password" name="psw" id="psw" required /><br></br>
        <label htmlFor="psw-repeat"><b>Repeat Password</b></label><br></br>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
        <hr />
        <p>By creating an account you agree to our <a href="#">Terms &amp; Privacy</a>.</p>
        <button type="submit" className="registerbtn">Register</button>
      </div>
      <div className="container1 signin">
        <p>Already have an account? <a href="#">Sign in</a>.</p>
      </div>
    </form>

  );
}

export default App;
