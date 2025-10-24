<template>
  <v-card class="pa-4">
    <v-row class="py-3" align-center>
      <v-col cols="3">
        <v-text-field
          v-model="model.tags"
          placeholder="XXX; YYYYY; ..."
          dense
          hide-details
        />
      </v-col>

      <template v-for="(_, slot) in $slots" v-slot:[slot]="scope">
        <slot :name="slot" v-bind="{ ...scope }" />
      </template>

      <!-- <v-col cols="2">
        <v-select
          v-model="accounts.type"
          :items="typeOptions"
          dense
          hide-details
        />
      </v-col> -->

      <!-- <v-col cols="3">
        <v-text-field v-model="accounts.login" dense hide-details />
      </v-col> -->

      <!-- <v-col cols="3">
        <v-text-field
          v-model="accounts.password"
          :type="accounts.showPassword ? 'text' : 'password'"
          dense
          hide-details
          append-inner-icon="mdi-eye"
          :append-inner-icon="accounts.showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="togglePassword(idx)"
        />
      </v-col> -->

      <v-col cols="1">
        <v-btn icon variant="text">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts"></script>
