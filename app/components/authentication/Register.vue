<template>
    <FlexboxLayout class="page">
        <StackLayout class="form">
            <Label class="header" text="Checkpoint" />
            <StackLayout class="input-field" marginBottom="20">
                <TextField class="input" hint="Name" keyboardType="name" autocorrect="false" autocapitalizationType="none" v-model="form.name"
                    returnKeyType="next" fontSize="18" />
                <StackLayout class="hr-light" />
            </StackLayout>

            <StackLayout class="input-field" marginBottom="20">
                <TextField class="input" hint="Email" keyboardType="email" autocorrect="false" autocapitalizationType="none" v-model="form.email"
                    returnKeyType="next" fontSize="18" />
                <StackLayout class="hr-light" />
            </StackLayout>

            <StackLayout class="input-field" marginBottom="20">
                <TextField ref="password" class="input" hint="Password" secure="true" v-model="form.password" :returnKeyType="'next'"
                fontSize="18" />
                <StackLayout class="hr-light" />
                <StackLayout class="hr-red" />

            </StackLayout>

            <StackLayout class="input-field" marginBottom="20">
                <TextField ref="confirmPassword" class="input" hint="Confirm password" secure="true" v-model="form.confirmPassword" returnKeyType="done"
                    fontSize="18" />
                <StackLayout class="hr-light" />
            </StackLayout>

            <StackLayout class="input-field">
                <TextField class="input" hint="Authentication Code" autocorrect="false" autocapitalizationType="none" v-model="form.inviteCode"
                    returnKeyType="next" fontSize="18" />
                <StackLayout class="hr-light" />
            </StackLayout>

                <Button :text="'Sign Up'" @tap="register" class="btn btn-primary m-t-20" />
        </StackLayout>

        <Label class="login-label sign-up-label" @tap="routeToAuthentication('Login')" >
            <FormattedString>
            <Span :text="'Back to Login'" />
            </FormattedString>
        </Label>
    </FlexboxLayout>
    
</template>
<script>
import { mapGetters, mapActions } from 'Vuex';
import { required, minLength, maxLength, email, alpha, numeric, sameAs} from 'vuelidate/lib/validators';

export default {
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                inviteCode: ""
            }
        };
    },
     validations: {
        form: {
            name:{
                required,
                alpha,
                minLength: minLength(1)
            },
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(6)
            },
            confirmPassword: {
                required,
                sameAsPassword: sameAs('password')

            },
            inviteCode: {
                required,
                numeric,
                maxLength: maxLength(6)
            }
        },
    },

    methods: {
        ...mapActions([
            'postUserRegisteration',
            'routeToAuthentication'
        ]),
        
        register() {
            this.$v.$touch();
            // if (this.form.password != this.form.confirmPassword) {
            //     this.alert("Your passwords do not match.");
            //     return;
            // }
            // if (!this.form.email || !this.form.password) {
            //     this.alert(
            //         "Please provide both an email address and password."
            //     );
            //     return;
            // }
            // if (this.form.password.length < 6){
            //     this.alert(
            //         "Password is under 6 characters.  Please enter a longer password."
            //     );
            //     return;
            // }
            // if (this.form.activationCode.length != 6){
            //     this.alert(
            //         "Not a valid Activation Code"
            //     );
            //     return;
            // }
            this.postUserRegisteration({
                name: this.form.name,
                email: this.form.email,
                password: this.form.password,
                password_confirmation: this.form.confirmPassword,
                invitation_code: this.form.inviteCode
            }).then(
                (response) => success(this.$navigateTo(App))
            );
        },

        focusConfirmPassword() {
            this.$refs.confirmPassword.nativeView.focus();
        },

        alert(message) {
            return alert({
                title: "Checkpoint",
                okButtonText: "OK",
                message: message
            });
        },

    }
}
</script>


