<template>
    <Page enableSwipeBackNavigation="true" actionBarHidden="true">
		<FlexboxLayout class="page">
			<StackLayout class="form">
				<Label class="header" text="Checkpoint" />

				<StackLayout class="input-field" marginBottom="20">
					<TextField class="input" hint="Email" keyboardType="email" autocorrect="false" autocapitalizationType="none" v-model="user.email"
					 returnKeyType="next" fontSize="18" />
					<StackLayout class="hr-light" />
				</StackLayout>

				<StackLayout class="input-field" marginBottom="20">
					<TextField ref="password" class="input" hint="Password" secure="true" v-model="user.password" :returnKeyType="'next'"
					fontSize="18" />
					<StackLayout class="hr-light" />
				</StackLayout>

				<StackLayout class="input-field">
					<TextField ref="confirmPassword" class="input" hint="Confirm password" secure="true" v-model="user.confirmPassword" returnKeyType="done"
					 fontSize="18" />
					<StackLayout class="hr-light" />
				</StackLayout>

                 <Button :text="'Sign Up'" @tap="submit" class="btn btn-primary m-t-20" />
			</StackLayout>

			<Label class="login-label sign-up-label" @tap="$navigateBack" >
	          <FormattedString>
	            <Span :text="'Back to Login'" />
	          </FormattedString>
	        </Label>
		</FlexboxLayout>
	</Page>
    
</template>
<script>
import Login from "./login"
export default {
    components: {
        Login
    },
    data() {
        return {
            isLoggingIn: true,
            user: {
                email: "",
                password: "",
                confirmPassword: ""
            }
        };
    },
    methods: {
        toggleLogin() {
            this.$navigateTo(Login);
        },

        submit() {
            if (!this.user.email || !this.user.password) {
                this.alert(
                    "Please provide both an email address and password."
                );
                return;
            }
            if (this.isLoggingIn) {
                this.login();
            } else {
                this.register();
            }
        },

        login() {
            userService
                .login(this.user)
                .then(() => {
                    this.$navigateTo(Home);
                })
                .catch(() => {
                    this.alert("Unfortunately we could not find your account.");
                });
        },

        register() {
            if (this.user.password != this.user.confirmPassword) {
                this.alert("Your passwords do not match.");
                return;
            }
        },

        // focusPassword() {
        //     this.$refs.password.nativeView.focus();
        // },

        focusConfirmPassword() {
            if (!this.isLoggingIn) {
                this.$refs.confirmPassword.nativeView.focus();
            }
        },

        alert(message) {
            return alert({
                title: "Checkpoint",
                okButtonText: "OK",
                message: message
            });
        }
    }
}
</script>
<style scoped>
.page {
    align-items: center;
    flex-direction: column;
}

.form {
    margin-left: 30;
    margin-right: 30;
    flex-grow: 2;
    vertical-align: middle;
}

/* .logo {
    margin-bottom: 12;
    height: 90;
    font-weight: bold;
} */

.header {
    horizontal-align: center;
    font-size: 25;
    font-weight: 600;
    margin-bottom: 70;
    text-align: center;
    color: #7dadb8;
}

.input-field {
    margin-bottom: 25;
}

.input {
    font-size: 18;
    placeholder-color: #A8A8A8;
}

.input-field .input {
    font-size: 54;
}

.btn-primary {
    height: 50;
    margin: 30 5 15 5;
    background-color: #7dadb8;
    border-radius: 5;
    font-size: 20;
    font-weight: 600;
}

.login-label {
    horizontal-align: center;
    color: #A8A8A8;
    font-size: 16;
}

.sign-up-label {
    margin-bottom: 20;
}

.bold {
    color: #000000;
}
</style>


