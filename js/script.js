const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            message: "Hello world!",
            srcImg: "https://screenshots.codesandbox.io/7pheu/5.png"
        }
    }
});

app.mount("#app");