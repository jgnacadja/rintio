<template>
  <div
    id="home"
    class="mx-auto text-center w-40 hover:border-b-8 border-secondary"
  >
    {{$page.post}}
  </div>
</template>


<page-query>
query query($path:String) {
    post: blogPost(path:$path) {
    id
    title
    path
    }
}
</page-query>