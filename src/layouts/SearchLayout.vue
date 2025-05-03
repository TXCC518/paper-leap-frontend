<template>
  <div id="searchLayout">
    <HeaderComponent>
      <template #default>
        <van-search @search="onSearch" right-icon="filter-o" class="searchForm" v-model="searchData.searchValue" placeholder="搜索兴趣、技能或用户" />
      </template>
    </HeaderComponent>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "../components/HeaderComponent.vue";
import {onMounted, onUnmounted, ref} from "vue";
import emitter from "../utils/EventBus.ts";
import {useRouter} from "vue-router";

const router = useRouter()

const searchData = ref({
  searchValue: "",
  searchTarget: "user"
})

// 处理update-target事件传递过来的数据
const handleSelectTarget = (data: {target: string}) => {
  searchData.value.searchTarget = data.target
}

onMounted(() => {
  emitter.on("update-target", handleSelectTarget);
})

// 组件卸载时移除事件绑定
onUnmounted(() => {
  emitter.off("update-target", handleSelectTarget);
})

const onSearch = (val: string) => {
  router.push({
    path: "/search/result",
  }).then(() => {
    emitter.emit("search-users", {target: searchData.value.searchTarget, value: searchData.value.searchValue})
  })
}


</script>

<style scoped>
#searchLayout .searchForm {
  border-radius: 19px;
  overflow: hidden;
}

::v-deep .van-icon-filter-o {
  color: var(--color-primary); /* 换成你想要的颜色 */
}

</style>