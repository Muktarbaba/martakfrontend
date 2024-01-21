<template>
<div class="form-container">
    <div class="row">
        <div class="col-md-4">
        <img src="../assets/Register.svg" alt="">
        </div>
        <div class="col-md-8">
            <div class="form-right">
                <div class="form-right-container">
                    <div class="sign-up">Sign Up</div>
                    <div class="login">Already have an account? <a href="">Login</a></div>
                    <div class="row mt-3">
                        <div class="label mb-2">Full Name</div>
                        <div class="col">
                        <input type="text" placeholder="First Name" name="" id="">
                        </div>
                        <div class="col">
                        <input type="text" placeholder="Other Names" name="" id="">
                        </div>
                    </div>
                    <div class="row mt-3">  
                        <div class="col">
                        <div class="label mb-2">Email</div>
                        <input type="text" placeholder="youremail@gmail.com" name="" id="">
                        </div>
                        <div class="col">
                            <div class="label mb-2">Username</div>
                        <input type="text" placeholder="Username" name="" id="">
                        </div>
                    </div>
                    <div class="row mt-3">  
                        <div class="col">
                        <div class="label mb-2">Password</div>
                        <input type="text" placeholder="************" name="" id="">
                        </div>
                        <div class="col">
                            <div class="label mb-2">Confirm Password</div>
                        <input type="text" placeholder="************" name="" id="">
                        </div>
                    </div>
                    <div class="row mt-3">  
                        <div class="col">
                        <div class="label mb-2">Country</div>
                        <input type="text" placeholder="Country" name="" id="">
                        </div>
                        <div class="col">
                            <div class="label mb-2">Proffession</div>
                        <input type="text" placeholder="profession" name="" id="">
                        </div>
                    </div>

                    <div class="row mt-3">  
                        <div class="col">
                        <div class="label mb-2">Where did you hear about us?</div>
                        <input type="text" placeholder="Where did you hear about us?..." name="" id="">
                        </div>
                    </div>

                    <div class="row mt-3">  
                        <div class="d-flex gap-3">
                           <div> <input type="checkbox" class="check-box"></div>
                            <div class="accept">Accept the Terms and Privacy Policy</div>
                        </div>
                    </div>
                    <div class="mt-3">  
                       <button><a href="">Register</a></button>
                    </div>
                </div>
            </div>
        </div>

</div>
    </div>
</template>

<style>
@import './Register.css';
</style>