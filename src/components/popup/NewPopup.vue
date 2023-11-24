<template>
    <v-btn variant="plain" @click="dialog = true">
        New
    </v-btn>

    <v-dialog v-model="dialog" width="auto">
        <v-card>
            <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>

export default {
    name: "Popup",

    data: () => ({
        dialog: false,
    }),
}
</script>