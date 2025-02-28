<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">用户管理系统</h1>
    
    <!-- 创建用户表单 -->
    <div class="mb-8">
      <h2 class="text-xl mb-2">添加用户</h2>
      <form @submit.prevent="createUser" class="space-y-2">
        <input v-model="newUser.name" type="text" placeholder="姓名" class="border p-2" />
        <input v-model="newUser.email" type="email" placeholder="邮箱" class="border p-2" />
        <button type="submit" class="bg-blue-500 text-white px-4 py-2">添加</button>
      </form>
    </div>

    <!-- 用户列表 -->
    <div>
      <h2 class="text-xl mb-2">用户列表</h2>
      <table class="w-full border">
        <thead>
          <tr>
            <th class="border p-2">ID</th>
            <th class="border p-2">姓名</th>
            <th class="border p-2">邮箱</th>
            <th class="border p-2">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td class="border p-2">{{ user.id }}</td>
            <td class="border p-2">{{ user.name }}</td>
            <td class="border p-2">{{ user.email }}</td>
            <td class="border p-2">
              <button @click="editUser(user)" class="bg-yellow-500 text-white px-2 py-1 mr-2">
                编辑
              </button>
              <button @click="deleteUser(user.id)" class="bg-red-500 text-white px-2 py-1">
                删除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { User } from './types/user'

const users = ref<User[]>([])
const newUser = ref({ name: '', email: '' })

// 获取所有用户
const fetchUsers = async () => {
  users.value = await $fetch('/api/users')
}

// 创建用户
const createUser = async () => {
  await $fetch('/api/users', {
    method: 'POST',
    body: newUser.value
  })
  newUser.value = { name: '', email: '' }
  await fetchUsers()
}

// 编辑用户
const editUser = async (user: User) => {
  const updatedName = prompt('请输入新的姓名', user.name)
  const updatedEmail = prompt('请输入新的邮箱', user.email)
  
  if (updatedName && updatedEmail) {
    await $fetch(`/api/users/${user.id}`, {
      method: 'PUT',
      body: {
        name: updatedName,
        email: updatedEmail
      }
    })
    await fetchUsers()
  }
}

// 删除用户
const deleteUser = async (id: number) => {
  if (confirm('确定要删除该用户吗？')) {
    await $fetch(`/api/users/${id}`, {
      method: 'DELETE'
    })
    await fetchUsers()
  }
}

onMounted(() => {
  fetchUsers()
})
</script>
