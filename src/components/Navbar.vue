<template>
    <nav class="custom-design justify-space-between d-flex">
        <v-list>
            <v-flex>
                
            </v-flex>
            <v-list-item>
                <Popup />
                <Extend />
            </v-list-item>
        </v-list>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="custom-css">

        </v-app-bar-nav-icon>
        <v-navigation-drawer permanent dark app v-model="drawer" location="right" :max-width="280">
            <v-list class="pa-0">
                <v-list-item>Menu</v-list-item>
            </v-list>

            <v-divider></v-divider>
            <div class="flex min-h-screen">
                <div class="w-64 shrink-0 bg-gray-50 border-r border-gray-200">
                    <v-list v-for="item in navItem" :key="item.label" class="pa-0">
                        <Disclosure>
                            <DisclosureButton class="d-block text-truncate custome-ds-btn">
                                <v-list-item link class="text-subtitle-2">{{ item.label }}</v-list-item>
                            </DisclosureButton>
                            <DisclosurePanel class="text-gray-500 text-truncate">
                                <v-list-item class="pl-8" v-if="item.children.length" v-for="child in item.children" :key="child.label"
                                    link active-class="ggwp" router :to="child.href">
                                    <v-list-item-action class="text-body-2">{{
                                        child.label }}</v-list-item-action></v-list-item>
                            </DisclosurePanel>
                        </Disclosure>
                    </v-list>
                </div>
            </div>
        </v-navigation-drawer>
    </nav>
</template>
<script>
import { defineComponent } from 'vue';
import Popup from './popup/NewPopup.vue'
import Extend from './popup/ExtendLearning.vue'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/vue';

export default defineComponent({
    name: 'NavBar',
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Popup,
        Extend,        
    },
    data: () => ({
        drawer: true,
        navItem: [
            {
                href: "/", label: "Reducing and Eliminating Restrictive Practices visited", children: [
                    { href: "/", label: "Reducing and Eliminating", children: [], icon: null },
                    { href: "/welcome", label: "Welcome", children: [], icon: null },
                    { href: "/learnoutcome", label: "Learning Outcomes", children: [], icon: null },
                    { href: "/overview", label: "Overview", children: [], icon: null },
                ], icon: null
            },
            {
                href: "/", label: "Topci 1", children: [
                    { href: "/introduction", label: "Introduction", children: [], icon: null },
                    { href: "/restriction", label: "Reducing and Eliminating", children: [], icon: null },
                    { href: "/momentreflect", label: "A moment to reflect", children: [], icon: null },
                    { href: "/whatwemean", label: "What we need", children: [], icon: null },
                    { href: "/terminology", label: "New terminology", children: [], icon: null },
                    { href: "/genprinciples", label: "General Principles", children: [], icon: null },
                ], icon: null
            },
            {
                href: "/", label: "Topic 2", children: [
                    { href: "/processes", label: "Processing changes", children: [], icon: null },
                    { href: "/consider", label: "Consider Prior", children: [], icon: null },
                    { href: "/orla", label: "How did Orla do?", children: [], icon: null },
                    { href: "/instances", label: "Instances in Seclusion", children: [], icon: null },
                    { href: "/selcusion", label: "Ending of Selcusion", children: [], icon: null },
                    { href: "/mentalhealth", label: "Notify mental Health", children: [], icon: null },
                    { href: "/disciplinary", label: "Multi-disciplinary team", children: [], icon: null },
                ], icon: null
            },
            {
                href: "/", label: "Topic 3", children: [
                    { href: "/whathappen", label: "What else happen", children: [], icon: null },
                    { href: "/mindset", label: "A change in mindset", children: [], icon: null },
                    { href: "/reductionpolicy", label: "The reduction policy", children: [], icon: null },
                    { href: "/training", label: "Staff training", children: [], icon: null },
                    { href: "/review", label: "Multidisciplinary Review", children: [], icon: null },
                    { href: "/report", label: "The annual report", children: [], icon: null },
                    { href: "/knowledge", label: "Knowledge Check", children: [], icon: null },
                ], icon: null
            },
            {
                href: "/", label: "Summary", children: [
                    { href: "/extedsummary", label: "Summary and Extend", children: [], icon: null },
                    { href: "/summary", label: "Summary", children: [], icon: null },
                    { href: "/nextsteps", label: "Next steps", children: [], icon: null },
                    { href: "/extendlearning", label: "Extend my learning", children: [], icon: null },
                ], icon: null
            }
        ],
        links: [
            {
                icon: 'dashboard',
                text: 'Dashboard',
                route: '/'
            },
            {
                icon: 'folder',
                text: 'Project',
                route: '/'
            },
            {
                icon: 'person',
                text: 'Team',
                route: '/'
            }
        ],
        menu_links: [
            {
                id: 1,
                text: "New",
                route: '/'
            },
            {
                id: 2,
                text: "Extend My Learning",
                route: '/'
            },
        ]
    })
})
</script>

<style scoped>
.ggwp {
    border-left: 4px solid #0ba518;
}

.custome-ds-btn {
    min-width: -webkit-fill-available;
    text-align: left;
}
</style>

