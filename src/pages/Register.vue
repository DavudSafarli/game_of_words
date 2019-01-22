<template>
<v-container>
    <v-layout row class="text-xs-center">
        <v-flex class="grey lighten-4">
            <v-container style="position: relative;top: 13%;" class="text-xs-center">
                <v-card flat>
                    <v-card-title primary-title>
                        <h4>Register</h4>
                    </v-card-title>
                    <v-form>
                        <v-text-field v-model="email" prepend-icon="person" name="Username" label="Username"></v-text-field>
                        <v-text-field v-model="password" prepend-icon="lock" name="Password" label="Password" type="password"></v-text-field>
                        <v-card-actions>
                            <v-btn primary large block @click="register">Register</v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-container>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import {app} from '../firebase'
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        register() {
			console.log(app)
			app.auth()
			.createUserWithEmailAndPassword(this.email, this.password)
			.then(user => {
				console.log(user)
			})
        }
    }
}
</script>
