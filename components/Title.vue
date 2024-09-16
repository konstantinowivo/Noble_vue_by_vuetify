<template>
    <h1 :style="titleStyle">{{ text }}</h1>
</template>

<script>

export default {
name: 'Title',

props: {
    text: {
    type: String,
    required: true
    },
    titleClass: {
    type: String,
    default: 'default-title-class'
    }
},

titleStyle() {
    return {
    fontFamily: '"Bebas Neue", cursive',
    fontWeight: 'bolder',
    fontStyle: 'italic',
    color: 'yellow'
    };
}
}
</script>