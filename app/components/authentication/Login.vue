<template>
		<FlexboxLayout class="page">
			<StackLayout class="form">
				<Label class="header" text="Checkpoint" />
				<StackLayout class="input-field" marginBottom="25">
					<TextField class="input" hint="Email" keyboardType="email" autocorrect="false" autocapitalizationType="none" v-model="form.email" :text="email"
					 returnKeyType="next" fontSize="18"/>
					<StackLayout class="hr-light" />
				</StackLayout>
				<StackLayout class="input-field" marginBottom="25">
					<TextField ref="password" class="input" hint="Password" secure="true" v-model="form.password" :returnKeyType="'done'"
					fontSize="18" />
					<StackLayout class="hr-light" />
				</StackLayout>
                 <Button text="Log In" @tap="submit" class="btn btn-primary m-t-20" />
			</StackLayout>

			<Label class="login-label sign-up-label" @tap="routeToAuthentication('Register')">
	          <FormattedString>
	            <Span text="Don’t have an account?" />
	            <Span text="Sign up" class="bold" />
	          </FormattedString>
	        </Label>
		</FlexboxLayout>
</template>
<script>
import App from '../App';
import { required, maxLength, email } from 'vuelidate/lib/validators';
import { mapGetters, mapActions } from 'Vuex';

export default {
    data() {
        return {
            form: {
                email: null,
                password: null
            }
        };      
    },
    computed: {
        ...mapGetters([
            'user_token',
            'user',
        ]),
        email() {
            return this.form.email = this.user.email;
        },
    },
    validations: {
        form: {
            email: {
                required,
                email
            },
            password: {
                required
            }
        },
    },
    watch: {
        user_token(token){
            if(token !==  null){
                this.$navigateTo(App,
                {
                    clearHistory: true
                }
                )
                
            }
        }
    },

    methods: {
        ...mapActions([
            'postUserLogin',
            'loginUser',
            'routeToAuthentication',

        ]),

        submit() {
            this.$v.$touch();
            if (this.$v.form.$error){
                this.alert(
                    "There is an error in your form and saving styling for error to a later task."
                );
                return;
            } else {
                this.postUserLogin({
                    username: this.form.email,
                    password: this.form.password
                });
            }
        },
        alert(message) {
            return alert({
                title: "Checkpoint",
                okButtonText: "OK",
                message: message
            });
        }
    },
    components: {
        App
    }
}
</script>


