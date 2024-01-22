<template>
    <div class="form-container">
        <div class="row">
            <div class="col-md-4">
            <img src="../assets/Register.svg" alt="">
            </div>
            <div class="col-md-8 mt-5 pt-5">
                <div class="form-right">
                    <div class="form-right-container">
                        <div class="sign-up">Log In</div>
                        <div class="row mt-3">
                            <div class="label mb-2">Username</div>
                            <div class="col">
                            <input type="text" placeholder="Username" name="" id="">
                            </div>
                        </div>
                        <div class="row mt-3">  
                            <div class="col">
                            <div class="label mb-2">Password</div>
                            <input type="text" placeholder="************" name="" id="">
                            </div>
                        </div>

    
                        <div class="d-flex justify-content-between mt-3">  
                            <div class="d-flex gap-3">
                               <div> <input type="checkbox" class="check-box"></div>
                                <div class="accept">Remember me</div>
                            </div>
                            <div class="forgot">
                                <div class="login"><a href="/auth/forgot-password">Forgot Password?</a></div>
                            </div>
                        </div>
                        <div class="mt-3">  
                           <button><a href="">Login</a></button>
                        </div>

                        <div class="mt-4">
                            <div class="new-here"><a href="/auth/register">New here Sign up</a></div>
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