import './Main.css';

function Main() {

  return (
    <div id='home'>
    {/* About Start */}
    <div class="container-fluid py-5">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-12">
                <h1 class="text-primary font-weight-semi-bold text-uppercase mb-3">Home Page</h1>

                <h3 class="text-danger font-weight-semi-bold text mb-3">This is Task 1 & 2 which is to be Submitted... </h3>

                <h5 class="text-success font-weight-semi-bold text mb-3">* <b>Register Nav Link</b> : have functionality of register user details to the database along with the Profile Photo which is directly saved into public/assets/uploads/profilepic folder of this App and Name of the photo is saved into database</h5>
                <h5 class="text-warning font-weight-semi-bold text mb-3">(##first entry of register should be admin so on login both can be view as user logged in or admin logged in )</h5>
                <h5 class="text-warning font-weight-semi-bold text mb-3">(##each time new file need to be selected in profile otherwise it will give error on server side)</h5>
                <h5 class="text-warning font-weight-semi-bold text mb-3">(##only password & confirm password matching validation added if they matched then data sent to server otherwise gives you warning )</h5>
                <h5 class="text-warning font-weight-semi-bold text mb-3">(##required attribute is used as field validation of other fields  )</h5>

                <h5 class="text-success font-weight-semi-bold text mb-3">* <b>Login Nav Link</b> : have functionality of taking input of login details (Email & Password) from UI & checked it into the database. if credentials are correct then it shows whether it is user & admin (only show message above the fields on login page)</h5>

                <h5 class="text-success font-weight-semi-bold text mb-3">* <b>Login Nav Link</b> : but after register user details you need to change status from 0 to 1 and role (admin) for admin login because by default role is set as user</h5>
                <h5 class="text-warning font-weight-semi-bold text mb-3">(##required attribute is used as field validation of fields  )</h5>

                <h5 class="text-success font-weight-semi-bold text mb-3">* <b>Users Nav Link</b> : See list of Users in the App (only after register several entries & only entries with role as user)</h5>





                </div>
            </div>
        </div>
    </div>
    {/* About End */}
    </div>

  );
}

export default Main;