<script setup lang="ts">
import { watch } from 'vue';
import { ref } from 'vue';
import axios from 'axios'
interface User {
    name: string,
    age: string,
    mobNo: number,
    emailId: string,
    gender: string
}
const userObj = ref<User>({})
watch(userObj, () => {
    console.log(userObj.value)
}, { deep: true })

async function registerUser(event: Event) {
    const resp = await axios.post('/api/user/add', userObj.value)
    console.log(resp.data)
}
</script>

<template>
    <div class="text-center d-flex justify-center mt-4">
        <VCard width="500" height="550" elevation="10" class="pb-5 mb-5" color="#DBEBEB">
            <VCardText class="pb-3">
                <VRow class=" text-left">
                    <!-- <VCol cols="12" lg="5" md="4" sm="4">
                        <div class="border w-100 h-100"></div>
                    </VCol> -->
                    <VCol cols="12" lg="12" md="8" sm="8">
                        <p class="text-h5 text-center font-weight-bold">Register for Vaccination</p>

                        <VRow class="mt-5">
                            <VCol cols="12" lg="4" md="4" sm="6">
                                <p class="text-subtitle-1 font-weight-bold mt-2">Name<span
                                        class="ml-2 text-red">*</span></p>
                            </VCol>
                            <VCol cols="12" lg="8" md="8" sm="6">
                                <v-text-field variant="outlined" row="1" density="compact" color="#017E7E"
                                    placeholder="enter your  name" v-model="userObj.name"></v-text-field>
                            </VCol>
                        </VRow>
                        <VRow>
                            <VCol cols="12" lg="4" md="4" sm="6">
                                <p class="text-subtitle-1 font-weight-bold mt-2">Gender<span
                                        class="ml-2 text-red">*</span></p>
                            </VCol>
                            <VCol cols="12" lg="8" md="8" sm="6">
                                <!-- <v-text-field density="compact" variant="outlined"></v-text-field> -->
                                <v-select :items="[
                                        { 'title': 'Male', 'value': 'MALE' },
                                        { 'title': 'Female', 'value': 'FEMALE' }
                                    ]" density="compact" variant="outlined" color="#017E7E" v-model="userObj.gender" />
                            </VCol>
                        </VRow>
                        <VRow>
                            <VCol cols="12" lg="4" md="4" sm="6">
                                <p class="text-subtitle-1 font-weight-bold mt-2">Age<span class="ml-2 text-red">*</span>
                                </p>
                            </VCol>
                            <VCol cols="12" lg="8" md="8" sm="6">
                                <v-text-field variant="outlined" row="1" type="number" density="compact" color="#017E7E"
                                    v-model="userObj.age"></v-text-field>
                            </VCol>
                        </VRow>
                        <VRow class="">
                            <VCol cols="12" lg="4" md="4" sm="6">
                                <p class="text-subtitle-1 font-weight-bold mt-2">Mobile<span
                                        class="ml-2 text-red">*</span></p>
                            </VCol>
                            <VCol cols="12" lg="8" md="8" sm="6">
                                <v-text-field variant="outlined" row="1" density="compact" type="number"
                                    placeholder="enter 10 digit number" color="#017E7E"
                                    v-model="userObj.mobNo"></v-text-field>
                            </VCol>
                        </VRow>
                        <VRow class="">
                            <VCol cols="12" lg="4" md="4" sm="6">
                                <p class="text-subtitle-1 font-weight-bold mt-2">Email<span
                                        class="ml-2 text-red">*</span></p>
                            </VCol>
                            <VCol cols="12" lg="8" md="8" sm="6">
                                <v-text-field variant="outlined" row="1" density="compact" type="email" color="#017E7E"
                                    v-model="userObj.emailId"></v-text-field>
                            </VCol>
                        </VRow>
                        <VRow class="pb-1">
                            <VCol cols="12" lg="12" md="12" sm="12" class="text-center ">
                                <VBtn color="#017E7E" block @click="registerUser">Register</VBtn>
                            </VCol>
                        </VRow>
                    </VCol>
                </VRow>
            </VCardText>
        </VCard>
    </div>
</template>