<template>
    <Disclosure>
        <DisclosureButton class="py-2 d-block">
            <a class="d-block" :href="item.href">{{ item.label }}</a>
        </DisclosureButton>
        <DisclosurePanel class="text-gray-500">
            <div class="ml-4" v-if="item.children.length">
                <a class="d-block" v-for="child in item.children" :key="child.label" :href="child.href">{{
                    child.label }}</a>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>
  
<script>
import { defineComponent } from 'vue';
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/vue';

export default {
    name: 'NavItem',
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
    },    

    data: () => ({
        props:{
            item: Object
        }
        //
    }),
}
</script>
  