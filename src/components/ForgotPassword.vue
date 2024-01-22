<template>
	<div class="form-container">
		<div class="row">
			<div class="col-md-4">
				<img src="../assets/Register.svg" alt="">
			</div>
			<div class="col-md-8 mt-5 pt-5">
				<div class="form-right">
					<div class="form-right-container">
						<div class="sign-up">Forgot Password</div>
						<div class="sign-up" style="text-align: left; margin-top: 1rem;">
							<small>Have you lost access to your account, <br/>enter your email below to request for a password reset</small>
						</div>
						<div class="row mt-3">
							<div class="label mb-2">Email</div>
							<div class="col">
								<input type="text" placeholder="johndoe@gmail.com" name="" id="">
							</div>
						</div>

						<div class="d-flex justify-content-between mt-3">
							<div class="forgot" >
								<div class="login">Remembered your password?<a href="/auth/login">Login</a></div>
							</div>
						</div>
						<div class="mt-3">
							<button><a href="">Send</a></button>
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